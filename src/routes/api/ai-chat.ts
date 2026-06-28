import { createFileRoute } from "@tanstack/react-router";

type ChatMsg = { role: "user" | "assistant" | "system"; content: unknown };

function toOpenAIMessages(messages: ChatMsg[], system?: string, allowMultimodal = false) {
  const msgs: { role: string; content: unknown }[] = [];
  if (system) msgs.push({ role: "system", content: system });
  for (const m of messages || []) {
    const role = m.role === "assistant" ? "assistant" : m.role === "system" ? "system" : "user";
    let content: unknown;
    if (typeof m.content === "string") content = m.content;
    else if (allowMultimodal && Array.isArray(m.content)) content = m.content;
    else content = JSON.stringify(m.content);
    msgs.push({ role, content });
  }
  return msgs;
}

export const Route = createFileRoute("/api/ai-chat")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        try {
          const body = (await request.json()) as {
            system?: string;
            messages?: ChatMsg[];
            max_tokens?: number;
            model?: string;
            forceProvider?: "lovable" | "groq";
          };
          const requestedModel = body.model || "groq/llama-3.3-70b-versatile";
          const isGroq = body.forceProvider === "lovable"
            ? false
            : body.forceProvider === "groq"
              ? true
              : requestedModel.startsWith("groq/");
          const model = body.forceProvider === "lovable" && requestedModel.startsWith("groq/")
            ? "google/gemini-2.5-flash"
            : requestedModel;

          let endpoint: string;
          let headers: Record<string, string>;
          let sendModel: string;

          if (isGroq) {
            const gKey = (process.env.GROQ_API_KEY || "").trim().replace(/^["']|["']$/g, "");
            if (!gKey) {
              return new Response(JSON.stringify({ error: "Missing GROQ_API_KEY" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
              });
            }
            endpoint = "https://api.groq.com/openai/v1/chat/completions";
            headers = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${gKey}`,
              Accept: "application/json",
            };
            sendModel = model.replace(/^groq\//, "");
          } else {
            const key = process.env.LOVABLE_API_KEY;
            if (!key) {
              return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
              });
            }
            endpoint = "https://ai.gateway.lovable.dev/v1/chat/completions";
            headers = {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
            };
            sendModel = model;
          }

          const resp = await fetch(endpoint, {
            method: "POST",
            headers,
            body: JSON.stringify({
              model: sendModel,
              messages: toOpenAIMessages(body.messages || [], body.system, !isGroq),
              max_tokens: body.max_tokens ?? 1024,
            }),
          });
          if (!resp.ok) {
            const txt = await resp.text();
            return new Response(JSON.stringify({ error: `AI Gateway ${resp.status}: ${txt}` }), {
              status: resp.status,
              headers: { "Content-Type": "application/json" },
            });
          }
          const data = await resp.json();
          const text = data?.choices?.[0]?.message?.content || "";
          return new Response(JSON.stringify({ content: [{ type: "text", text }] }), {
            headers: { "Content-Type": "application/json" },
          });
        } catch (e) {
          return new Response(JSON.stringify({ error: String((e as Error)?.message || e) }), {
            status: 500,
            headers: { "Content-Type": "application/json" },
          });
        }
      },
    },
  },
});
