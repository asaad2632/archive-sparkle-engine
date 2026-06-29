// Phase 3a cloud sync layer (chapters + user-added sources + deleted base docs).
// Keeps localStorage as a fast cache during this phase; Supabase is source of truth.
import { supabase } from "@/integrations/supabase/client";

// ---------- helpers ----------
async function uid() {
  const { data } = await supabase.auth.getUser();
  return data?.user?.id || null;
}

// Map a user-added doc (local shape) into a sources-table row.
function docToRow(doc, userId) {
  return {
    user_id: userId,
    client_id: String(doc.id),
    title: doc.title ?? null,
    author: doc.author ?? null,
    year: doc.year != null ? String(doc.year) : null,
    source_type: doc.sourceType ?? doc.category ?? null,
    category: doc.category ?? null,
    chapter_id: doc.chapterId ?? null,
    section_id: doc.sectionId ?? doc.subSectionId ?? null,
    archive_ref: doc.archiveRef ?? null,
    priority: doc.priority ?? null,
    notes: doc.notes ?? null,
    status: doc.status ?? null,
    is_new: !!doc.isNew,
    publisher: doc.publisher ?? null,
    place: doc.place ?? null,
    university: doc.university ?? null,
    college: doc.college ?? null,
    journal: doc.journal ?? null,
    volume: doc.volume ?? null,
    issue: doc.issue ?? null,
    pages: doc.pages ?? null,
    url: doc.url ?? null,
    access_date: doc.visitDate ?? doc.accessDate ?? null,
    edition: doc.edition ?? null,
    degree: doc.degree ?? null,
    newspaper: doc.newspaper ?? null,
    institution: doc.institution ?? doc.agency ?? null,
  };
}

// Map a sources row back to local doc shape.
function rowToDoc(row) {
  const clientId = row.client_id;
  const idNum = clientId != null && /^-?\d+$/.test(clientId) ? Number(clientId) : clientId;
  return {
    id: idNum,
    title: row.title || "",
    author: row.author || "",
    year: row.year || "",
    sourceType: row.source_type || row.category || "",
    category: row.category || "",
    chapterId: row.chapter_id ?? "",
    sectionId: row.section_id || "",
    archiveRef: row.archive_ref || "",
    priority: row.priority || "",
    notes: row.notes || "",
    status: row.status || "",
    isNew: !!row.is_new,
    publisher: row.publisher || "",
    place: row.place || "",
    university: row.university || "",
    college: row.college || "",
    journal: row.journal || "",
    volume: row.volume || "",
    issue: row.issue || "",
    pages: row.pages || "",
    url: row.url || "",
    visitDate: row.access_date || "",
    edition: row.edition || "",
    degree: row.degree || "",
    newspaper: row.newspaper || "",
    institution: row.institution || "",
  };
}

// ---------- LOAD (call once on app mount, after auth) ----------
export async function loadPhase3a(defaultChapters) {
  const userId = await uid();
  if (!userId) return null;

  const [chaptersRes, sourcesRes, delRes] = await Promise.all([
    supabase.from("chapters").select("*").eq("user_id", userId).order("chapter_id"),
    supabase.from("sources").select("*").eq("user_id", userId).not("client_id", "is", null),
    supabase.from("deleted_base_docs").select("base_doc_id").eq("user_id", userId),
  ]);

  // Chapters: merge DB rows over defaults (by chapter_id). If none, return defaults.
  let chapters = defaultChapters.map(ch => ({ ...ch, sections: ch.sections.map(s => ({ ...s })) }));
  if (chaptersRes.data && chaptersRes.data.length) {
    const byId = new Map(chaptersRes.data.map(r => [r.chapter_id, r]));
    chapters = chapters.map(ch => {
      const r = byId.get(ch.id);
      if (!r) return ch;
      return {
        ...ch,
        titleAr: r.title_ar ?? ch.titleAr,
        color:   r.color   ?? ch.color,
        sections: Array.isArray(r.sections) ? r.sections : ch.sections,
      };
    });
  }

  const userDocs = (sourcesRes.data || []).map(rowToDoc);
  const deletedBaseDocs = new Set((delRes.data || []).map(r => r.base_doc_id));

  return { chapters, userDocs, deletedBaseDocs };
}

// ---------- WRITE: chapters (full upsert; cheap — small number of rows) ----------
export async function syncChapters(chapters) {
  const userId = await uid();
  if (!userId) return;
  const rows = chapters.map(ch => ({
    user_id: userId,
    chapter_id: ch.id,
    title_ar: ch.titleAr || null,
    color: ch.color || null,
    sections: ch.sections || [],
  }));
  await supabase.from("chapters").upsert(rows, { onConflict: "user_id,chapter_id" });
}

// ---------- WRITE: user-added sources (full sync vs current set) ----------
export async function syncUserDocs(userDocs) {
  const userId = await uid();
  if (!userId) return;
  const rows = userDocs.map(d => docToRow(d, userId));

  // Upsert current set
  if (rows.length) {
    await supabase.from("sources").upsert(rows, { onConflict: "user_id,client_id" });
  }

  // Delete DB rows whose client_id is no longer present locally
  const keepIds = rows.map(r => r.client_id);
  let del = supabase.from("sources").delete().eq("user_id", userId).not("client_id", "is", null);
  if (keepIds.length) del = del.not("client_id", "in", `(${keepIds.map(id => `"${id}"`).join(",")})`);
  await del;
}

// ---------- WRITE: deleted base docs (full sync) ----------
export async function syncDeletedBaseDocs(deletedSet) {
  const userId = await uid();
  if (!userId) return;
  const ids = [...deletedSet].map(Number).filter(Number.isFinite);
  // Wipe then insert (small set — fine)
  await supabase.from("deleted_base_docs").delete().eq("user_id", userId);
  if (ids.length) {
    await supabase.from("deleted_base_docs").insert(
      ids.map(base_doc_id => ({ user_id: userId, base_doc_id }))
    );
  }
}

// ---------- debounce helper ----------
export function debounce(fn, ms = 600) {
  let t;
  return (...args) => {
    clearTimeout(t);
    t = setTimeout(() => fn(...args), ms);
  };
}
