"use client";

import { useState } from "react";

const INTEREST_OPTIONS = [
  "Beginner basics",
  "CRISPR & gene editing",
  "Ethics & safety",
  "Everyday applications",
];

interface NewsletterProps {
  source?: string;
  compact?: boolean;
}

export default function Newsletter({ source = "home", compact = false }: NewsletterProps) {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [consent, setConsent] = useState(false);
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!email) return;

    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          interest: interest || undefined,
          consent,
          source,
          createdAt: new Date().toISOString(),
        }),
      });

      if (res.ok) {
        setStatus("success");
        setEmail("");
        setInterest("");
        setConsent(false);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  if (compact) {
    return (
      <section className="rounded-xl border border-border bg-charcoal p-6 text-center">
        <h2 className="mb-1.5 text-sm uppercase tracking-wider text-white/80">
          Get synbio in 3 minutes
        </h2>
        <p className="mb-4 text-xs text-white/50">
          One idea, explained simply. Delivered to your inbox.
        </p>

        {status === "success" ? (
          <p className="text-sm text-accent">You are on the list.</p>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="mx-auto flex max-w-sm flex-col gap-2 sm:flex-row"
          >
            <label htmlFor="newsletter-email-compact" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-compact"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 rounded-lg border border-white/10 bg-charcoal-light px-4 py-2 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
            <button
              type="submit"
              className="rounded-lg bg-accent px-5 py-2 text-sm text-white transition-colors hover:bg-accent-dark"
            >
              Subscribe
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-xs text-red-400">Something went wrong.</p>
        )}
      </section>
    );
  }

  return (
    <section className="rounded-xl border border-border bg-charcoal p-8 text-center">
      <h2 className="mb-2 text-sm uppercase tracking-wider text-white/80">
        Get synbio in 3 minutes
      </h2>
      <p className="mb-6 text-xs text-white/50">
        One idea per issue, explained simply. Short enough for a coffee break. No spam, ever.
      </p>

      {status === "success" ? (
        <div>
          <p className="mb-2 text-sm text-accent">
            You are on the list. Welcome aboard.
          </p>
          <p className="text-xs text-white/40">
            Your first issue will arrive soon.
          </p>
        </div>
      ) : (
        <form
          onSubmit={handleSubmit}
          className="mx-auto max-w-sm space-y-3"
        >
          <div>
            <label htmlFor="newsletter-email-full" className="sr-only">
              Email address
            </label>
            <input
              id="newsletter-email-full"
              type="email"
              required
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal-light px-4 py-2.5 text-sm text-white placeholder:text-white/30 focus:border-accent focus:outline-none"
            />
          </div>

          <div>
            <label htmlFor="newsletter-interest" className="sr-only">
              I am most interested in
            </label>
            <select
              id="newsletter-interest"
              value={interest}
              onChange={(e) => setInterest(e.target.value)}
              className="w-full rounded-lg border border-white/10 bg-charcoal-light px-4 py-2.5 text-sm text-white/70 focus:border-accent focus:outline-none"
            >
              <option value="">I am most interested in... (optional)</option>
              {INTEREST_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>
                  {opt}
                </option>
              ))}
            </select>
          </div>

          <label className="flex items-start gap-2 text-left">
            <input
              type="checkbox"
              checked={consent}
              onChange={(e) => setConsent(e.target.checked)}
              className="mt-1 h-3.5 w-3.5 shrink-0 rounded border-white/20 accent-accent"
            />
            <span className="text-xs text-white/40 leading-relaxed">
              I agree to receive emails about synbio learning content. You can
              unsubscribe anytime.
            </span>
          </label>

          <button
            type="submit"
            className="w-full rounded-lg bg-accent px-6 py-2.5 text-sm text-white transition-colors hover:bg-accent-dark"
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
