import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState } from "react";
import App from "../App.jsx";

function ClientApp() {
  // localStorage-driven state in App.jsx would mismatch SSR HTML.
  // Render after mount only so SSR emits a stable shell.
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return <div style={{ minHeight: "100vh", background: "#f8fafc" }} />;
  return <App />;
}

export const Route = createFileRoute("/")({
  component: ClientApp,
});

