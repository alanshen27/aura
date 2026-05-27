"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 items-center justify-center rounded-xl border border-border bg-surface text-sm text-muted">
      loading editor...
    </div>
  ),
});

export default function ComposePage() {
  const [number, setNumber] = useState("");
  const [title, setTitle] = useState("");
  const [summary, setSummary] = useState("");
  const [contentHtml, setContentHtml] = useState("");
  const [linkedModules, setLinkedModules] = useState("");
  const [status, setStatus] = useState<"idle" | "saving" | "saved" | "error">("idle");

  async function handleSave(publish: boolean) {
    setStatus("saving");
    try {
      const res = await fetch("/api/newsletter/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          number: parseInt(number, 10),
          title,
          summary,
          contentHtml,
          linkedModules: linkedModules
            .split(",")
            .map((s) => s.trim())
            .filter(Boolean),
          published: publish,
        }),
      });

      if (res.ok) {
        setStatus("saved");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <div>
      <section className="bg-charcoal py-12">
        <div className="mx-auto max-w-3xl px-6">
          <p className="mb-2 text-sm text-accent">newsletter</p>
          <h1 className="text-2xl tracking-tight text-white">
            compose issue
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="space-y-6">
          {/* Metadata */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs text-muted">issue number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
                placeholder="7"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs text-muted">linked modules (slugs, comma-separated)</label>
              <input
                type="text"
                value={linkedModules}
                onChange={(e) => setLinkedModules(e.target.value)}
                className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
                placeholder="intro-to-synbio, what-are-proteins"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
              placeholder="3-minute SynBio: Gene Expression"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs text-muted">one-line summary</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full rounded-lg border border-border bg-surface px-3 py-2 text-sm text-foreground outline-none focus:border-accent"
              placeholder="Gene expression is how your cells read DNA to build proteins."
            />
          </div>

          {/* RTE */}
          <div>
            <label className="mb-1 block text-xs text-muted">content</label>
            <RichTextEditor
              onChange={setContentHtml}
              placeholder="write your newsletter issue here..."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSave(false)}
              className="rounded-full border border-border px-6 py-2.5 text-sm text-foreground transition-all hover:border-accent hover:text-accent"
            >
              save draft
            </button>
            <button
              onClick={() => handleSave(true)}
              className="rounded-full bg-accent px-6 py-2.5 text-sm text-white transition-all hover:bg-accent-dark"
            >
              publish
            </button>

            {status === "saving" && (
              <span className="text-xs text-muted">saving...</span>
            )}
            {status === "saved" && (
              <span className="text-xs text-pop-green">saved!</span>
            )}
            {status === "error" && (
              <span className="text-xs text-accent">error — try again</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
