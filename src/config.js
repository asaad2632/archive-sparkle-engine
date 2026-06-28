// AI model configuration. The app proxies all calls through /api/ai-chat,
// which uses the Lovable AI Gateway server-side. No client keys are needed.

export const AI_MODELS = [
  { id: "google/gemini-3-flash-preview", label: "Gemini 3 Flash (Lovable AI)" },
  { id: "google/gemini-2.5-flash", label: "Gemini 2.5 Flash (Lovable AI)" },
  { id: "google/gemini-2.5-pro", label: "Gemini 2.5 Pro (Lovable AI)" },
  { id: "openai/gpt-5-mini", label: "GPT-5 Mini (Lovable AI)" },
  { id: "openai/gpt-5", label: "GPT-5 (Lovable AI)" },
];

export const MODEL_STORAGE_KEY = "acadarchiv_ai_model";

export function getSelectedModel() {
  try {
    const v = localStorage.getItem(MODEL_STORAGE_KEY);
    if (v && AI_MODELS.some(m => m.id === v)) return v;
  } catch {}
  return "google/gemini-3-flash-preview";
}

export function setSelectedModel(id) {
  try { localStorage.setItem(MODEL_STORAGE_KEY, id); } catch {}
}
