import type { Metadata } from "next";
import Link from "next/link";
import { newsletterIssues } from "@/content/newsletter";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";

export const metadata: Metadata = {
  title: "Newsletter",
  description: "Get synbio in 3 minutes — subscribe to our newsletter and browse past issues.",
};

const ISSUE_COLORS = ["accent", "secondary", "tertiary", "quaternary"] as const;

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-tertiary py-16 sm:py-20">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <span className="mb-3 inline-block rounded-full border-2 border-foreground/30 bg-white/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-foreground animate-pop-in">
            newsletter
          </span>
          <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl animate-bounce-in">
            synbio in 3 minutes
          </h1>
          <p className="max-w-md text-sm text-foreground/70 animate-bounce-in stagger-2">
            too busy to read a full module? we send one idea, explained simply,
            straight to your inbox. takes less time than making coffee.
          </p>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* Signup */}
        <ScrollReveal>
          <section className="mb-16">
            <Newsletter source="newsletter" />
          </section>
        </ScrollReveal>

        {/* Archive */}
        <ScrollReveal>
          <section>
            <span className="mb-6 inline-block rounded-full border-2 border-foreground bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-accent shadow-hard-sm">
              past issues
            </span>

            <div className="space-y-4">
              {newsletterIssues.map((issue, i) => {
                const color = ISSUE_COLORS[i % ISSUE_COLORS.length];
                return (
                  <ScrollReveal key={issue.number} delay={i * 60}>
                    <div className="card-sticker p-6">
                      <div className="mb-3 flex items-center gap-3">
                        <span className={`flex h-9 w-9 items-center justify-center rounded-xl border-2 border-foreground bg-${color}/20 text-xs font-extrabold shadow-hard-sm`}>
                          #{issue.number}
                        </span>
                        <h3 className="text-sm font-bold text-foreground">{issue.title}</h3>
                      </div>

                      <p className="mb-4 text-xs text-muted-foreground leading-relaxed">
                        {issue.summary}
                      </p>

                      {/* Key ideas */}
                      <div className="mb-4 space-y-1.5">
                        {issue.keyIdeas.map((idea, j) => (
                          <div key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                            <span className={`mt-0.5 h-2 w-2 shrink-0 rounded-full bg-${color}`} />
                            {idea}
                          </div>
                        ))}
                      </div>

                      {/* Glossary */}
                      <div className="mb-4 rounded-xl border-2 border-dashed border-border bg-muted p-3">
                        <p className="mb-2 text-xs font-bold uppercase tracking-wider text-muted-foreground">tiny glossary</p>
                        {issue.glossary.map((g, j) => (
                          <p key={j} className="text-xs text-muted-foreground">
                            <span className="font-bold text-accent">{g.term}</span> — {g.definition}
                          </p>
                        ))}
                      </div>

                      {/* Try this */}
                      <div className={`mb-4 rounded-xl border-2 border-foreground/20 bg-${color}/10 p-3`}>
                        <p className={`mb-1 text-xs font-bold uppercase tracking-wider text-${color}`}>try this</p>
                        <p className="text-xs text-muted-foreground">{issue.tryThis}</p>
                      </div>

                      {/* Linked modules */}
                      <div className="flex flex-wrap gap-2">
                        {issue.linkedModules.map((mod) => (
                          <Link
                            key={mod.slug}
                            href={`/learn/beginner/${mod.slug}`}
                            className="rounded-full border-2 border-foreground bg-card px-3 py-1 text-xs font-bold text-foreground shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:bg-tertiary hover:-translate-y-0.5 hover:shadow-hard"
                          >
                            {mod.title} →
                          </Link>
                        ))}
                      </div>
                    </div>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
