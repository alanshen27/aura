import type { Metadata } from "next";
import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { newsletterIssues } from "@/content/newsletter";

export const metadata: Metadata = {
  title: "Newsletter",
  description:
    "Get synbio in 3 minutes — one idea per issue, explained simply.",
};

export default function NewsletterPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        3-Minute SynBio Newsletter
      </h1>
      <p className="mb-10 max-w-lg text-base text-foreground/70">
        One synthetic biology idea per issue, explained simply. Short enough
        for a coffee break. Links to the full module if you want to go deeper.
      </p>

      <div className="mb-14">
        <Newsletter source="newsletter-page" />
      </div>

      <section>
        <h2 className="mb-6 text-sm uppercase tracking-wider text-muted">
          Issue Archive
        </h2>

        <div className="space-y-4">
          {newsletterIssues.map((issue) => (
            <article
              key={issue.number}
              className="rounded-xl border border-border bg-surface p-6"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="flex h-7 w-7 items-center justify-center rounded bg-charcoal text-xs text-white">
                  {issue.number}
                </span>
                <h3 className="text-sm text-foreground">{issue.title}</h3>
              </div>

              <p className="mb-4 text-sm text-foreground/70">
                {issue.summary}
              </p>

              <div className="mb-4 space-y-2">
                {issue.keyIdeas.map((idea, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm text-foreground/60">
                    <span className="mt-1 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{idea}</span>
                  </div>
                ))}
              </div>

              <div className="mb-4 rounded-lg bg-background p-3">
                <h4 className="mb-2 text-xs uppercase tracking-wider text-muted">
                  Quick glossary
                </h4>
                <div className="space-y-1">
                  {issue.glossary.map((g, i) => (
                    <p key={i} className="text-xs text-foreground/60">
                      <span className="text-accent">{g.term}</span>
                      {" — "}
                      {g.definition}
                    </p>
                  ))}
                </div>
              </div>

              <div className="mb-3 rounded-lg border border-accent/20 bg-accent-light/30 p-3">
                <p className="text-xs text-foreground/60">
                  <span className="text-accent-dark">Try this: </span>
                  {issue.tryThis}
                </p>
              </div>

              <div className="flex items-center gap-2">
                <span className="text-xs text-muted">Go deeper:</span>
                {issue.linkedModules.map((mod) => (
                  <Link
                    key={mod.slug}
                    href={`/learn/beginner/${mod.slug}`}
                    className="text-xs text-accent transition-colors hover:text-accent-dark"
                  >
                    {mod.title}
                  </Link>
                ))}
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}
