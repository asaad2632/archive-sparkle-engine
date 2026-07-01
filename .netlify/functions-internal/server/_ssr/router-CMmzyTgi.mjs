import { r as __toESM } from "../_runtime.mjs";
import { n as require_jsx_runtime, r as require_react, t as QueryClientProvider } from "../_libs/react+tanstack__react-query.mjs";
import { c as HeadContent, d as Outlet, f as lazyRouteComponent, g as useRouter, h as Link, m as createRootRouteWithContext, p as createFileRoute, s as Scripts, u as createRouter } from "../_libs/@tanstack/react-router+[...].mjs";
import { t as QueryClient } from "../_libs/tanstack__query-core.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/router-CMmzyTgi.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var styles_default = "/assets/styles-zQCNZVSS.css";
function reportLovableError(error, context = {}) {
	if (typeof window === "undefined") return;
	window.__lovableEvents?.captureException?.(error, {
		source: "react_error_boundary",
		route: window.location.pathname,
		...context
	}, {
		mechanism: "react_error_boundary",
		handled: false,
		severity: "error"
	});
}
function NotFoundComponent() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-7xl font-bold text-foreground",
					children: "404"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "mt-4 text-xl font-semibold text-foreground",
					children: "Page not found"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "The page you're looking for doesn't exist or has been moved."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-6",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Link, {
						to: "/",
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Go home"
					})
				})
			]
		})
	});
}
function ErrorComponent({ error, reset }) {
	console.error(error);
	const router = useRouter();
	(0, import_react.useEffect)(() => {
		reportLovableError(error, { boundary: "tanstack_root_error_component" });
	}, [error]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "flex min-h-screen items-center justify-center bg-background px-4",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "max-w-md text-center",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "text-xl font-semibold tracking-tight text-foreground",
					children: "This page didn't load"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mt-2 text-sm text-muted-foreground",
					children: "Something went wrong on our end. You can try refreshing or head back home."
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-6 flex flex-wrap justify-center gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => {
							router.invalidate();
							reset();
						},
						className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
						children: "Try again"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
						href: "/",
						className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
						children: "Go home"
					})]
				})
			]
		})
	});
}
var Route$2 = createRootRouteWithContext()({
	head: () => ({
		meta: [
			{ charSet: "utf-8" },
			{
				name: "viewport",
				content: "width=device-width, initial-scale=1"
			},
			{ title: "AcadArchiv — نظام أرشفة أكاديمي" },
			{
				name: "description",
				content: "نظام أرشفة أكاديمي لأطروحة دكتوراه — الخليج العربي في الحرب العالمية الثانية 1939-1945"
			},
			{
				property: "og:title",
				content: "AcadArchiv — نظام أرشفة أكاديمي"
			},
			{
				property: "og:description",
				content: "نظام أرشفة أكاديمي لأطروحة دكتوراه — الخليج العربي في الحرب العالمية الثانية 1939-1945"
			},
			{
				property: "og:type",
				content: "website"
			},
			{
				name: "twitter:card",
				content: "summary"
			},
			{
				name: "twitter:title",
				content: "AcadArchiv — نظام أرشفة أكاديمي"
			},
			{
				name: "twitter:description",
				content: "نظام أرشفة أكاديمي لأطروحة دكتوراه — الخليج العربي في الحرب العالمية الثانية 1939-1945"
			},
			{
				property: "og:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/618d91e9-f982-4e6d-bbf4-503acf73f96b/id-preview-ede342db--1796ca6d-9c52-4377-9c2e-f817bfe2d0cd.lovable.app-1782696642466.png"
			},
			{
				name: "twitter:image",
				content: "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/618d91e9-f982-4e6d-bbf4-503acf73f96b/id-preview-ede342db--1796ca6d-9c52-4377-9c2e-f817bfe2d0cd.lovable.app-1782696642466.png"
			}
		],
		links: [
			{
				rel: "stylesheet",
				href: styles_default
			},
			{
				rel: "preconnect",
				href: "https://fonts.googleapis.com"
			},
			{
				rel: "preconnect",
				href: "https://fonts.gstatic.com",
				crossOrigin: "anonymous"
			},
			{
				rel: "stylesheet",
				href: "https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=IBM+Plex+Mono:wght@400;500&display=swap"
			}
		]
	}),
	shellComponent: RootShell,
	component: RootComponent,
	notFoundComponent: NotFoundComponent,
	errorComponent: ErrorComponent
});
function RootShell({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("html", {
		lang: "ar",
		dir: "rtl",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("head", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HeadContent, {}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("body", { children: [children, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Scripts, {})] })]
	});
}
function RootComponent() {
	const { queryClient } = Route$2.useRouteContext();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(QueryClientProvider, {
		client: queryClient,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Outlet, {})
	});
}
var $$splitComponentImporter = () => import("./routes-DNDEiuL5.mjs");
var Route$1 = createFileRoute("/")({ component: lazyRouteComponent($$splitComponentImporter, "component") });
function toOpenAIMessages(messages, system, allowMultimodal = false) {
	const msgs = [];
	if (system) msgs.push({
		role: "system",
		content: system
	});
	for (const m of messages || []) {
		const role = m.role === "assistant" ? "assistant" : m.role === "system" ? "system" : "user";
		let content;
		if (typeof m.content === "string") content = m.content;
		else if (allowMultimodal && Array.isArray(m.content)) content = m.content;
		else content = JSON.stringify(m.content);
		msgs.push({
			role,
			content
		});
	}
	return msgs;
}
var Route = createFileRoute("/api/ai-chat")({ server: { handlers: { POST: async ({ request }) => {
	try {
		const body = await request.json();
		const requestedModel = body.model || "groq/llama-3.3-70b-versatile";
		const isGroq = body.forceProvider === "lovable" ? false : body.forceProvider === "groq" ? true : requestedModel.startsWith("groq/");
		const model = body.forceProvider === "lovable" && requestedModel.startsWith("groq/") ? "google/gemini-2.5-flash" : requestedModel;
		let endpoint;
		let headers;
		let sendModel;
		if (isGroq) {
			const gKey = (process.env.GROQ_API_KEY || "").trim().replace(/^["']|["']$/g, "");
			if (!gKey) return new Response(JSON.stringify({ error: "Missing GROQ_API_KEY" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
			endpoint = "https://api.groq.com/openai/v1/chat/completions";
			headers = {
				"Content-Type": "application/json",
				Authorization: `Bearer ${gKey}`,
				Accept: "application/json"
			};
			sendModel = model.replace(/^groq\//, "");
		} else {
			const key = process.env.LOVABLE_API_KEY;
			if (!key) return new Response(JSON.stringify({ error: "Missing LOVABLE_API_KEY" }), {
				status: 500,
				headers: { "Content-Type": "application/json" }
			});
			endpoint = "https://ai.gateway.lovable.dev/v1/chat/completions";
			headers = {
				"Content-Type": "application/json",
				"Lovable-API-Key": key
			};
			sendModel = model;
		}
		const payload = JSON.stringify({
			model: sendModel,
			messages: toOpenAIMessages(body.messages || [], body.system, !isGroq),
			max_tokens: body.max_tokens ?? 1024
		});
		let resp = null;
		let lastErrText = "";
		for (let attempt = 0; attempt < 3; attempt++) {
			resp = await fetch(endpoint, {
				method: "POST",
				headers,
				body: payload
			});
			if (resp.ok) break;
			if (resp.status !== 429 && resp.status < 500) break;
			lastErrText = await resp.text().catch(() => "");
			await new Promise((r) => setTimeout(r, 500 * (attempt + 1)));
		}
		if (resp && !resp.ok && isGroq && (resp.status === 429 || resp.status >= 500)) {
			const key = process.env.LOVABLE_API_KEY;
			if (key) {
				const fbPayload = JSON.stringify({
					model: "google/gemini-2.5-flash",
					messages: toOpenAIMessages(body.messages || [], body.system, true),
					max_tokens: body.max_tokens ?? 1024
				});
				resp = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						"Lovable-API-Key": key
					},
					body: fbPayload
				});
			}
		}
		if (!resp || !resp.ok) {
			const txt = resp ? await resp.text().catch(() => lastErrText) : lastErrText;
			const status = resp?.status ?? 502;
			return new Response(JSON.stringify({ error: `AI Gateway ${status}: ${txt}` }), {
				status,
				headers: { "Content-Type": "application/json" }
			});
		}
		const text = (await resp.json())?.choices?.[0]?.message?.content || "";
		return new Response(JSON.stringify({ content: [{
			type: "text",
			text
		}] }), { headers: { "Content-Type": "application/json" } });
	} catch (e) {
		return new Response(JSON.stringify({ error: String(e?.message || e) }), {
			status: 500,
			headers: { "Content-Type": "application/json" }
		});
	}
} } } });
var rootRouteChildren = {
	IndexRoute: Route$1.update({
		id: "/",
		path: "/",
		getParentRoute: () => Route$2
	}),
	ApiAiChatRoute: Route.update({
		id: "/api/ai-chat",
		path: "/api/ai-chat",
		getParentRoute: () => Route$2
	})
};
var routeTree = Route$2._addFileChildren(rootRouteChildren)._addFileTypes();
var getRouter = () => {
	return createRouter({
		routeTree,
		context: { queryClient: new QueryClient() },
		scrollRestoration: true,
		defaultPreloadStaleTime: 0
	});
};
//#endregion
export { getRouter };
