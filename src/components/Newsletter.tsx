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
      <div className="rounded-2xl border-2 border-foreground bg-card p-6 text-center shadow-hard">
        <h2 className="mb-1.5 text-sm font-bold uppercase tracking-wider text-foreground">
          Get synbio in 3 minutes
        </h2>
        <p className="mb-4 text-xs text-muted-foreground">
          One idea, explained simply. Delivered to your inbox.
        </p>

        {status === "success" ? (
          <p className="text-sm font-bold text-accent">You are on the list!</p>
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
              className="flex-1 rounded-xl border-2 border-foreground bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-hard-accent"
            />
            <button
              type="submit"
              className="btn-candy whitespace-nowrap"
            >
              Subscribe
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="mt-2 text-xs font-medium text-secondary">Something went wrong.</p>
        )}
      </div>
    );
  }

  return (
    <div className="rounded-2xl border-2 border-foreground bg-card p-8 text-center shadow-hard-lg">
      <h2 className="mb-2 text-sm font-bold uppercase tracking-wider text-foreground">
        Get synbio in 3 minutes
      </h2>
      <p className="mb-6 text-xs text-muted-foreground">
        One idea per issue, explained simply. Short enough for a coffee break. No spam, ever.
      </p>

      {status === "success" ? (
        <div>
          <p className="mb-2 text-sm font-bold text-accent">
            You are on the list. Welcome aboard!
          </p>
          <p className="text-xs text-muted-foreground">
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
              className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-2.5 text-sm text-foreground placeholder:text-muted-foreground focus:border-accent focus:outline-none focus:shadow-hard-accent"
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
              className="w-full rounded-xl border-2 border-foreground bg-background px-4 py-2.5 text-sm text-foreground focus:border-accent focus:outline-none focus:shadow-hard-accent"
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
              className="mt-1 h-4 w-4 shrink-0 rounded border-2 border-foreground accent-accent"
            />
            <span className="text-xs text-muted-foreground leading-relaxed">
              I agree to receive emails about synbio learning content. You can
              unsubscribe anytime.
            </span>
          </label>

          <button
            type="submit"
            className="btn-candy w-full justify-center"
          >
            Subscribe
          </button>
        </form>
      )}

      {status === "error" && (
        <p className="mt-3 text-xs font-medium text-secondary">
          Something went wrong. Please try again.
        </p>
      )}
    </div>
  );
}
