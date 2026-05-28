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

export default function NewsletterPage() {
  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg py-16 sm:py-20">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <p className="mb-2 text-sm text-accent animate-fade-in">newsletter</p>
          <h1 className="mb-3 text-3xl tracking-tight text-white sm:text-4xl animate-fade-in-up">
            synbio in 3 minutes
          </h1>
          <p className="max-w-md text-sm text-white/50 animate-fade-in-up stagger-2">
            too busy to read a full module? we send one idea, explained simply,
            straight to your inbox. takes less time than making coffee.
          </p>
        </div>
      </section>

      {/* Signup */}
      <section className="relative overflow-hidden bg-charcoal py-14">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <Newsletter source="newsletter" />
          </ScrollReveal>
        </div>
      </section>

      {/* Archive — dark gradient */}
      <section className="relative overflow-hidden section-dark py-14">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              past issues
            </p>

            <div className="space-y-4">
              {newsletterIssues.map((issue, i) => (
                <ScrollReveal key={issue.number} delay={i * 60}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:bg-white/10">
                    <div className="mb-3 flex items-center gap-3">
                      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent text-xs text-white">
                        #{issue.number}
                      </span>
                      <h3 className="text-sm text-white">{issue.title}</h3>
                    </div>

                    <p className="mb-4 text-xs text-white/50 leading-relaxed">
                      {issue.summary}
                    </p>

                    {/* Key ideas */}
                    <div className="mb-4 space-y-1.5">
                      {issue.keyIdeas.map((idea, j) => (
                        <div key={j} className="flex items-start gap-2 text-xs text-white/55">
                          <span className="mt-0.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                          {idea}
                        </div>
                      ))}
                    </div>

                    {/* Glossary */}
                    <div className="mb-4 rounded-lg bg-white/5 p-3">
                      <p className="mb-2 text-xs uppercase tracking-wider text-white/40">tiny glossary</p>
                      {issue.glossary.map((g, j) => (
                        <p key={j} className="text-xs text-white/50">
                          <span className="text-accent">{g.term}</span> — {g.definition}
                        </p>
                      ))}
                    </div>

                    {/* Try this */}
                    <div className="mb-4 rounded-lg border border-accent/20 bg-accent/10 p-3">
                      <p className="mb-1 text-xs uppercase tracking-wider text-accent">try this</p>
                      <p className="text-xs text-white/55">{issue.tryThis}</p>
                    </div>

                    {/* Linked modules */}
                    <div className="flex flex-wrap gap-2">
                      {issue.linkedModules.map((mod) => (
                        <Link
                          key={mod.slug}
                          href={`/learn/beginner/${mod.slug}`}
                          className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs text-accent transition-colors hover:border-accent hover:bg-accent/10"
                        >
                          {mod.title} →
                        </Link>
                      ))}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
