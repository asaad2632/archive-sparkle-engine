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
          const key = process.env.LOVABLE_API_KEY;
          if (!key) {
            return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
              status: 500,
              headers: { "Content-Type": "application/json" },
            });
          }
          const model = body.model || "google/gemini-3-flash-preview";
          const resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              "Lovable-API-Key": key,
            },
            body: JSON.stringify({
              model,
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
