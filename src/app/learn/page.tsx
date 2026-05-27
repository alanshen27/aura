import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { getModulesByTrack, modules } from "@/content/modules";
import { DNAHelix, Flask, PetriDish, Cell, Plasmid } from "@/components/illustrations";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Explore learning tracks in synthetic biology. Start from beginner and build up.",
};

const FEATURED_SLUGS = ["intro-to-synbio", "what-are-proteins", "ethics-and-safety"];

export default function LearnPage() {
  const featuredModules = FEATURED_SLUGS.map((s) =>
    modules.find((m) => m.slug === s)
  ).filter(Boolean);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden banner-overlay bg-charcoal py-18 sm:py-24">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <p className="mb-2 text-sm text-accent animate-fade-in">the learning hub</p>
              <h1 className="mb-3 text-3xl tracking-tight text-white sm:text-4xl animate-fade-in-up">
                pick a track.
                <br />
                start learning.
              </h1>
              <p className="max-w-md text-sm text-white/50 animate-fade-in-up stagger-2">
                each module is short, clear, and stands on its own.
                no exams. no pressure. just cool science.
              </p>
            </div>
            <div className="hidden items-end gap-2 opacity-50 sm:flex">
              <DNAHelix size={56} className="animate-fade-in stagger-2" />
              <Flask size={56} className="animate-fade-in stagger-3" />
              <PetriDish size={56} className="animate-fade-in stagger-4" />
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* ─── Section 1: Pick your track ─── */}
        <ScrollReveal>
          <section className="mb-16">
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              pick your track
            </p>

            <div className="space-y-4">
              {tracks.map((track) => {
                const trackModules = getModulesByTrack(track.slug);
                const available = trackModules.filter((m) => !m.comingSoon).length;
                const isComingSoon = track.comingSoon;

                if (isComingSoon) {
                  return (
                    <div
                      key={track.slug}
                      className="rounded-2xl border border-border bg-surface/50 p-6 opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-surface-alt text-lg">
                          {track.icon}
                        </span>
                        <div>
                          <h3 className="text-base text-foreground">{track.title}</h3>
                          <span className="text-xs text-muted">coming soon</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-foreground/40">
                        {track.description}
                      </p>
                    </div>
                  );
                }

                return (
                  <Link
                    key={track.slug}
                    href={`/learn/${track.slug}`}
                    className="group block rounded-2xl border-2 border-accent/30 bg-surface p-6 transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-charcoal text-xl transition-transform group-hover:scale-110 group-hover:rotate-3">
                          {track.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg text-foreground transition-colors group-hover:text-accent-dark">
                              {track.title}
                            </h3>
                            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-white">
                              featured
                            </span>
                          </div>
                          <p className="text-sm text-foreground/55">
                            {track.description}
                          </p>
                        </div>
                      </div>

                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="mt-2 shrink-0 text-muted transition-all group-hover:translate-x-1 group-hover:text-accent"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-surface-alt">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-pop-green transition-all duration-500"
                          style={{
                            width: `${(available / track.moduleCount) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-muted">
                        {available} of {track.moduleCount} modules ready — let&apos;s go
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Section 2: How this site works ─── */}
        <ScrollReveal>
          <section className="mb-16">
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              how this works
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Cell size={32} />,
                  title: "short modules",
                  desc: "5–10 minutes each. read one while you wait for your boba.",
                  bg: "bg-charcoal",
                },
                {
                  icon: <DNAHelix size={32} />,
                  title: "clear sections",
                  desc: "every module follows the same structure. you always know where you are.",
                  bg: "bg-pop-blue",
                },
                {
                  icon: <Plasmid size={32} />,
                  title: "easy on the eyes",
                  desc: "calm colors, simple diagrams, lots of spacing. no headache-inducing walls of text.",
                  bg: "bg-accent",
                },
                {
                  icon: <Flask size={32} />,
                  title: "multiple formats",
                  desc: "prefer reading? quizzes? 3-minute email bursts? we got you.",
                  bg: "bg-charcoal",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="rounded-2xl border border-border bg-surface p-5 transition-all hover:border-accent/30 hover:-translate-y-0.5">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg}`}>
                      {item.icon}
                    </div>
                    <h3 className="mb-1 text-sm text-foreground">{item.title}</h3>
                    <p className="text-xs text-foreground/50 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Section 3: Featured modules ─── */}
        <ScrollReveal>
          <section className="mb-16">
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              start here
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {featuredModules.map((mod, i) => {
                if (!mod) return null;
                const colors = ["border-accent/40", "border-pop-green/40", "border-pop-blue/40"];
                const bgs = ["bg-accent", "bg-pop-green", "bg-pop-blue"];
                return (
                  <ScrollReveal key={mod.slug} delay={i * 100}>
                    <Link
                      href={`/learn/beginner/${mod.slug}`}
                      className={`group block rounded-2xl border-2 ${colors[i]} bg-surface p-5 transition-all hover:-translate-y-1 hover:shadow-md`}
                    >
                      <span className={`mb-3 inline-block rounded-full ${bgs[i]} px-2.5 py-0.5 text-xs text-white`}>
                        {mod.level}
                      </span>
                      <h3 className="mb-1.5 text-sm text-foreground transition-colors group-hover:text-accent-dark">
                        {mod.title}
                      </h3>
                      <p className="mb-3 text-xs text-foreground/50 leading-relaxed">
                        {mod.description}
                      </p>
                      <p className="text-xs text-muted">{mod.minutes} min read</p>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Section 4: Newsletter ─── */}
        <ScrollReveal>
          <section>
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              busy mode
            </p>
            <Newsletter source="learn" />
            <p className="mt-4 text-center text-xs text-muted">
              <Link
                href="/newsletter"
                className="transition-colors hover:text-accent"
              >
                browse past issues →
              </Link>
            </p>
          </section>
        </ScrollReveal>
      </div>
    </div>
  );
}
