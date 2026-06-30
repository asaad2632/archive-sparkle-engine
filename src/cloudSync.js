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
    supabase.from("chapters").select("*").order("chapter_id"),
    supabase.from("sources").select("*").not("client_id", "is", null),
    supabase.from("deleted_base_docs").select("base_doc_id"),
  ]);

  // Chapters: merge DB rows over defaults (by chapter_id). Shared workspace —
  // if multiple users edited the same chapter, take the most recently updated row.
  let chapters = defaultChapters.map(ch => ({ ...ch, sections: ch.sections.map(s => ({ ...s })) }));
  if (chaptersRes.data && chaptersRes.data.length) {
    const byId = new Map();
    for (const r of chaptersRes.data) {
      const prev = byId.get(r.chapter_id);
      if (!prev || new Date(r.updated_at || 0) > new Date(prev.updated_at || 0)) byId.set(r.chapter_id, r);
    }
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

  // User-added sources: dedupe across users by client_id (latest update wins).
  const docMap = new Map();
  for (const r of (sourcesRes.data || [])) {
    const prev = docMap.get(r.client_id);
    if (!prev || new Date(r.updated_at || 0) > new Date(prev.updated_at || 0)) docMap.set(r.client_id, r);
  }
  const userDocs = [...docMap.values()].map(rowToDoc);

  // Deleted base docs: union across the workspace.
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

// ==================== Phase 3b: library_sources + Storage ====================

const BUCKET = "thesis-files";

function libToRow(s, userId) {
  return {
    user_id: userId,
    client_id: String(s.id),
    file_name: s.fileName ?? null,
    file_type: s.fileType ?? null,
    file_size: s.fileSize ?? null,
    upload_date: s.uploadDate ?? null,
    status: s.status ?? null,
    analyzed: !!s.analyzed,
    title: s.title ?? null,
    author: s.author ?? null,
    year: s.year != null ? String(s.year) : null,
    language: s.language ?? null,
    source_type: s.sourceType ?? null,
    chapter_id: s.chapterId ?? null,
    section_id: s.sectionId ?? null,
    sub_section_id: s.subSectionId ?? null,
    priority: s.priority ?? null,
    important_pages: s.importantPages ?? null,
    summary: s.summary ?? null,
    keywords: Array.isArray(s.keywords) ? s.keywords : [],
    why_important: s.whyImportant ?? null,
    how_to_use: s.howToUse ?? null,
    key_points: Array.isArray(s.keyPoints) ? s.keyPoints : [],
    storage_path: s.storagePath ?? null,
    notes: s.notes ?? null,
  };
}

function rowToLib(r) {
  const cid = r.client_id;
  const idNum = cid != null && /^-?\d+(\.\d+)?$/.test(cid) ? Number(cid) : cid;
  return {
    id: idNum,
    fileName: r.file_name || "",
    fileType: r.file_type || "",
    fileSize: r.file_size || 0,
    uploadDate: r.upload_date || "",
    status: r.status || "",
    analyzed: !!r.analyzed,
    title: r.title || "",
    author: r.author || "",
    year: r.year || "",
    language: r.language || "",
    sourceType: r.source_type || "",
    chapterId: r.chapter_id ?? null,
    sectionId: r.section_id || "",
    subSectionId: r.sub_section_id || "",
    priority: r.priority || "★★",
    importantPages: r.important_pages || "",
    summary: r.summary || "",
    keywords: r.keywords || [],
    whyImportant: r.why_important || "",
    howToUse: r.how_to_use || "",
    keyPoints: r.key_points || [],
    storagePath: r.storage_path || "",
    notes: r.notes || "",
    sections: [],
  };
}

// Upload a File to thesis-files bucket. Returns storage_path or null.
export async function uploadLibraryFile(file) {
  const userId = await uid();
  if (!userId || !file) return null;
  const ext = (file.name.split(".").pop() || "bin").toLowerCase();
  const path = `${userId}/${Date.now()}-${Math.random().toString(36).slice(2, 8)}.${ext}`;
  const { error } = await supabase.storage.from(BUCKET).upload(path, file, {
    contentType: file.type || undefined,
    upsert: false,
  });
  if (error) { console.warn("[uploadLibraryFile]", error); return null; }
  return path;
}

export async function getLibraryFileUrl(path) {
  if (!path) return null;
  const { data, error } = await supabase.storage.from(BUCKET).createSignedUrl(path, 3600);
  if (error) { console.warn("[getLibraryFileUrl]", error); return null; }
  return data?.signedUrl || null;
}

export async function deleteLibraryFile(path) {
  if (!path) return;
  await supabase.storage.from(BUCKET).remove([path]);
}

export async function loadLibrary() {
  const userId = await uid();
  if (!userId) return [];
  const { data, error } = await supabase
    .from("library_sources")
    .select("*")
    .not("client_id", "is", null);
  if (error) { console.warn("[loadLibrary]", error); return []; }
  // Shared workspace dedupe by client_id, latest updated_at wins
  const map = new Map();
  for (const r of data || []) {
    const prev = map.get(r.client_id);
    if (!prev || new Date(r.updated_at || 0) > new Date(prev.updated_at || 0)) map.set(r.client_id, r);
  }
  return [...map.values()].map(rowToLib);
}

export async function syncLibrary(libraryArr) {
  const userId = await uid();
  if (!userId) return;
  const rows = libraryArr.map(s => libToRow(s, userId));
  if (rows.length) {
    await supabase.from("library_sources").upsert(rows, { onConflict: "user_id,client_id" });
  }
  const keepIds = rows.map(r => r.client_id);
  let del = supabase.from("library_sources").delete().eq("user_id", userId).not("client_id", "is", null);
  if (keepIds.length) del = del.not("client_id", "in", `(${keepIds.map(id => `"${id}"`).join(",")})`);
  await del;
}
