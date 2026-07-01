# archive-sparkle-engine — Public Deployment Refactor

## Original Problem Statement
> Act as a Senior Full-Stack Engineer and Architect. Take full control of the archive-sparkle-engine repository:
> 1. Repository Injection: Initialize and load the codebase.
> 2. Structural Purge: Remove `_authenticated` route group, `auth.tsx` middleware, and any ProtectedRoute wrappers.
> 3. Dependency Rectification: Fix the failing build (exit code 2) by re-mapping the routing table so every page is promoted to the public root scope.
> 4. Cloud-Ready Optimization: Ensure `bun run build` is optimized for Netlify deployment, independent of local session storage or restricted auth environments.
> 5. Final Integrity: Verify assets, data structures, and views are correctly linked.

## Architecture
- **Framework**: TanStack Start 1.168 + TanStack Router 1.170 (file-based) + React 19 + Vite 8 + Tailwind 4
- **Runtime**: Nitro server (SSR) → Netlify Functions
- **Data / Auth SDK**: Supabase JS (cloud sync only, gracefully degrades to `localStorage` when no session)
- **AI Gateway**: `/api/ai-chat` server route (Groq + Lovable Cloud fallback)
- **Package manager**: `bun` (build command: `bun run build`)

## Changes Applied (2026-01)
1. **Deleted** `src/routes/auth.tsx` — the sign-in / sign-up gate.
2. **Deleted** `src/routes/route.tsx` — the `_authenticated` layout route that ran `supabase.auth.getUser()` in `beforeLoad` and redirected to `/auth`.
3. **Promoted** `src/routes/index.tsx` from `/_authenticated/` to `/`:
   - Re-declared with `createFileRoute("/")`.
   - Fixed the broken import path `../../App.jsx` → `../App.jsx` (this was the actual cause of exit code 2 alongside the empty-path collision).
4. **Regenerated** `src/routeTree.gen.ts` to drop every `_authenticated*` symbol/type; only `IndexRoute` (`/`) and `ApiAiChatRoute` (`/api/ai-chat`) remain.
5. **Netlify preset** wired in `vite.config.ts` via `nitro: { preset: "netlify" }`.
6. **`netlify.toml`** added:
   - `command = "bun run build"`
   - `publish = "dist"` (Nitro's Netlify preset output directory)
   - `NODE_VERSION = "20"`
7. Confirmed: no residual references to `_authenticated`, `/auth`, `ProtectedRoute`, `signIn`, or `signOut` anywhere in `src/`.

## Verification
- `bun install` — 509 packages, clean install.
- `bun run build` — succeeds with `preset: netlify` (previous failure "Invalid route path '' — Conflicting files: src/routes/route.tsx" is gone).
- Dev server (`bun run dev`) — renders the Arabic academic-archive dashboard at `/` publicly. No auth wall.
- Static output: `dist/` (with `_headers`, `_redirects`, and assets). SSR handler: `.netlify/functions-internal/server/main.mjs`.

## What's Implemented
- Public root route (`/`) rendering the full `App.jsx` (thesis progress tracker, chapters, docs, library, supervisor room, translator, cards, bibliography, AI assistant).
- Public API route `/api/ai-chat` (Groq / Lovable Cloud AI gateway).
- Supabase-backed cloud sync remains **optional**: when no user session exists, every call short-circuits and the app runs entirely off `localStorage`.

## Deployment (Netlify)
- Connect the repo to Netlify.
- Build command: `bun run build`
- Publish directory: `dist`
- Node version: `20` (set via `netlify.toml`)
- Optional env vars if cloud sync is desired: `SUPABASE_URL`, `SUPABASE_PUBLISHABLE_KEY`, `VITE_SUPABASE_URL`, `VITE_SUPABASE_PUBLISHABLE_KEY`, `GROQ_API_KEY`, `LOVABLE_API_KEY`.

## Backlog / Next Actions
- P1: Wipe unused `src/integrations/supabase/auth-middleware.ts` if no server function ever requires it.
- P2: Add a Netlify preview badge / build-status shield to the README.
- P2: Prune the `supabase/` folder migrations that only apply to authenticated schemas.
- P3: Bundle-split the huge `routes-*.mjs` (365 kB) — the whole app currently lives inside `App.jsx`.
