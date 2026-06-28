import { getSelectedModel } from "./config";

// Unified AI call. Proxied through /api/ai-chat (Lovable AI Gateway server-side).
// Returns Anthropic-shaped: { content: [{ type: "text", text: "..." }] }
export async function callLLM({ system, messages = [], max_tokens = 1024 } = {}) {
  const model = getSelectedModel();
  try {
    const resp = await fetch("/api/ai-chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ system, messages, max_tokens, model }),
    });
    const data = await resp.json().catch(() => ({}));
    if (!resp.ok || data?.error) {
      throw new Error(data?.error || `HTTP ${resp.status}`);
    }
    const text = data?.content?.[0]?.text || "";
    return { content: [{ type: "text", text }] };
  } catch (err) {
    console.error("[callLLM]", model, err);
    return { content: [{ type: "text", text: `حدث خطأ في الاتصال بالذكاء الاصطناعي: ${err.message || err}` }] };
  }
}
