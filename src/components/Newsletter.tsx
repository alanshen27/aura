"use client";

import { useState } from "react";

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <section className="rounded-xl border border-border bg-charcoal p-8 text-center">
      <h2 className="mb-2 text-sm uppercase tracking-wider text-white/80">
        Stay in the loop
      </h2>
      <p className="mb-6 text-xs text-white/50">
        Short updates on new modules and synbio news. No spam, ever.
      </p>

      {status === "success" ? (
        <p className="text-sm text-accent">
          You are on the list. Welcome aboard.
        </p>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto flex max-w-sm flex-col gap-3 sm:flex-row"
        >
          <label htmlFor="newsletter-email" className="sr-only">
            Email address
          </label>
          <input
            id="newsletter-email"
            type="email"
            required
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="flex-1 rounded-lg border border-white/10 bg-charcoal-light px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
          />
          <button
            type="submit"
            className="rounded-lg bg-accent px-6 py-2.5 text-sm text-white transition-colors hover:bg-accent-dark"
          >
            Subscribe
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-xs text-red-400">
          Something went wrong. Please try again.
        </p>
      )}
    </section>
  );
}
