import { createFileRoute } from "@tanstack/react-router";

type ChatMsg = { role: "user" | "assistant" | "system"; content: unknown };

function toOpenAIMessages(messages: ChatMsg[], system?: string) {
  const msgs: { role: string; content: string }[] = [];
  if (system) msgs.push({ role: "system", content: system });
  for (const m of messages || []) {
    msgs.push({
      role: m.role === "assistant" ? "assistant" : m.role === "system" ? "system" : "user",
      content: typeof m.content === "string" ? m.content : JSON.stringify(m.content),
    });
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
          };
          const model = body.model || "google/gemini-3-flash-preview";
          const isDeepSeek = model.startsWith("deepseek/");

          let endpoint: string;
          let headers: Record<string, string>;
          let sendModel: string;

          if (isDeepSeek) {
            const dsKey = (process.env.DEEPSEEK_API_KEY || "").trim().replace(/^["']|["']$/g, "");
            if (!dsKey) {
              return new Response(JSON.stringify({ error: "Missing DEEPSEEK_API_KEY" }), {
                status: 500,
                headers: { "Content-Type": "application/json" },
              });
            }
            endpoint = "https://api.deepseek.com/v1/chat/completions";
            headers = {
              "Content-Type": "application/json",
              Authorization: `Bearer ${dsKey}`,
              Accept: "application/json",
            };
            sendModel = model.replace(/^deepseek\//, "");
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
              messages: toOpenAIMessages(body.messages || [], body.system),
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
