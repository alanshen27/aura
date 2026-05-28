"use client";

import { useState } from "react";
import dynamic from "next/dynamic";

const RichTextEditor = dynamic(() => import("@/components/RichTextEditor"), {
  ssr: false,
  loading: () => (
    <div className="flex h-48 items-center justify-center rounded-2xl border-2 border-foreground bg-card text-sm text-muted-foreground shadow-hard">
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
      <section className="border-b-2 border-foreground bg-accent py-12">
        <div className="mx-auto max-w-3xl px-6">
          <span className="mb-2 inline-block rounded-full border-2 border-white/30 bg-white/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
            newsletter
          </span>
          <h1 className="text-2xl font-extrabold tracking-tight text-white">
            compose issue
          </h1>
        </div>
      </section>

      <div className="mx-auto max-w-3xl px-6 py-10">
        <div className="space-y-6">
          {/* Metadata */}
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground">issue number</label>
              <input
                type="number"
                value={number}
                onChange={(e) => setNumber(e.target.value)}
                className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all focus:shadow-hard-accent"
                placeholder="7"
              />
            </div>
            <div>
              <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground">linked modules (slugs, comma-separated)</label>
              <input
                type="text"
                value={linkedModules}
                onChange={(e) => setLinkedModules(e.target.value)}
                className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all focus:shadow-hard-accent"
                placeholder="intro-to-synbio, what-are-proteins"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground">title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all focus:shadow-hard-accent"
              placeholder="3-minute SynBio: Gene Expression"
            />
          </div>

          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground">one-line summary</label>
            <input
              type="text"
              value={summary}
              onChange={(e) => setSummary(e.target.value)}
              className="w-full rounded-xl border-2 border-foreground bg-background px-3 py-2.5 text-sm text-foreground outline-none transition-all focus:shadow-hard-accent"
              placeholder="Gene expression is how your cells read DNA to build proteins."
            />
          </div>

          {/* RTE */}
          <div>
            <label className="mb-1 block text-xs font-bold uppercase tracking-wide text-foreground">content</label>
            <RichTextEditor
              onChange={setContentHtml}
              placeholder="write your newsletter issue here..."
            />
          </div>

          {/* Actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleSave(false)}
              className="btn-secondary"
            >
              save draft
            </button>
            <button
              onClick={() => handleSave(true)}
              className="btn-candy"
            >
              publish
            </button>

            {status === "saving" && (
              <span className="text-xs font-bold text-muted-foreground">saving...</span>
            )}
            {status === "saved" && (
              <span className="text-xs font-bold text-quaternary">saved!</span>
            )}
            {status === "error" && (
              <span className="text-xs font-bold text-secondary">error — try again</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
