import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { getModulesByTrack, modules } from "@/content/modules";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";
import Newsletter from "@/components/Newsletter";
import ScrollReveal from "@/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Explore learning tracks in synthetic biology. Start from beginner and build up.",
};

const FEATURED_SLUGS = ["intro-to-synbio", "what-are-proteins", "ethics-and-safety"];
const FEATURE_COLORS = ["accent", "secondary", "quaternary"] as const;

export default function LearnPage() {
  const featuredModules = FEATURED_SLUGS.map((s) =>
    modules.find((m) => m.slug === s)
  ).filter(Boolean);

  return (
    <div>
      {/* ─── Hero ─── */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-secondary py-18 sm:py-24">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="flex items-center justify-between">
            <div>
              <span className="mb-3 inline-block rounded-full border-2 border-white/30 bg-white/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white animate-pop-in">
                the learning hub
              </span>
              <h1 className="mb-3 text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-bounce-in">
                pick a track.
                <br />
                start learning.
              </h1>
              <p className="max-w-md text-sm text-white/70 animate-bounce-in stagger-2">
                each module is short, clear, and stands on its own.
                no exams. no pressure. just cool science.
              </p>
            </div>
            <div className="hidden sm:flex items-end gap-3">
              {["accent", "tertiary", "quaternary"].map((c, i) => (
                <div key={i} className={`h-${12 + i * 4} w-${8 + i * 2} rounded-2xl border-2 border-white/20 bg-white/10 animate-pop-in stagger-${i + 2}`} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-6 py-14">
        {/* ─── Section 1: Pick your track ─── */}
        <ScrollReveal>
          <section className="mb-16">
            <span className="mb-6 inline-block rounded-full border-2 border-foreground bg-accent/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-accent shadow-hard-sm">
              pick your track
            </span>

            <div className="space-y-4">
              {tracks.map((track) => {
                const trackModules = getModulesByTrack(track.slug);
                const available = trackModules.filter((m) => !m.comingSoon).length;
                const isComingSoon = track.comingSoon;

                if (isComingSoon) {
                  return (
                    <div
                      key={track.slug}
                      className="rounded-2xl border-2 border-dashed border-border bg-muted/50 p-6 opacity-60"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-xl border-2 border-border bg-muted text-lg">
                          {track.icon}
                        </span>
                        <div>
                          <h3 className="text-base font-bold text-muted-foreground">{track.title}</h3>
                          <span className="text-xs font-medium text-muted-foreground">coming soon</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-muted-foreground">
                        {track.description}
                      </p>
                    </div>
                  );
                }

                return (
                  <Link
                    key={track.slug}
                    href={`/learn/${track.slug}`}
                    className="group block rounded-2xl border-2 border-foreground bg-card p-6 shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-accent/10 text-xl transition-transform group-hover:scale-110 group-hover:rotate-6">
                          {track.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg font-bold text-foreground transition-colors group-hover:text-accent">
                              {track.title}
                            </h3>
                            <span className="rounded-full border-2 border-foreground bg-accent px-2.5 py-0.5 text-xs font-bold text-white shadow-hard-sm">
                              featured
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">
                            {track.description}
                          </p>
                        </div>
                      </div>

                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                        className="mt-2 shrink-0 text-muted-foreground transition-all group-hover:translate-x-1 group-hover:text-accent"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>

                    <div className="mt-4">
                      <div className="h-2.5 w-full overflow-hidden rounded-full border-2 border-foreground bg-muted">
                        <div
                          className="h-full rounded-full bg-accent transition-all duration-500"
                          style={{
                            width: `${(available / track.moduleCount) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-xs font-medium text-muted-foreground">
                        {available} of {track.moduleCount} modules ready
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
            <span className="mb-6 inline-block rounded-full border-2 border-foreground bg-tertiary/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-foreground shadow-hard-sm">
              how this works
            </span>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { title: "short modules", desc: "5-10 minutes each. read one while you wait for your boba.", color: "accent" },
                { title: "clear sections", desc: "every module follows the same structure. you always know where you are.", color: "secondary" },
                { title: "easy on the eyes", desc: "calm colors, simple diagrams, lots of spacing. no headache-inducing walls of text.", color: "tertiary" },
                { title: "multiple formats", desc: "prefer reading? quizzes? 3-minute email bursts? we got you.", color: "quaternary" },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="card-sticker p-6 h-full">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl border-2 border-foreground bg-${item.color}/10 shadow-hard-sm`}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke={`var(--${item.color})`} strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        {i === 0 && <><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18"/><path d="M9 21V9"/></>}
                        {i === 1 && <><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></>}
                        {i === 2 && <><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></>}
                        {i === 3 && <><path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/></>}
                      </svg>
                    </div>
                    <h3 className="mb-1 text-sm font-bold">{item.title}</h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </section>
        </ScrollReveal>

        {/* ─── Section 3: Featured modules ─── */}
        <ScrollReveal>
          <section className="mb-16">
            <span className="mb-6 inline-block rounded-full border-2 border-foreground bg-quaternary/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-quaternary shadow-hard-sm">
              start here
            </span>

            <div className="grid gap-4 sm:grid-cols-3">
              {featuredModules.map((mod, i) => {
                if (!mod) return null;
                const color = FEATURE_COLORS[i];
                return (
                  <ScrollReveal key={mod.slug} delay={i * 100}>
                    <Link
                      href={`/learn/beginner/${mod.slug}`}
                      className={`group block card-sticker p-6 h-full`}
                    >
                      <span className={`mb-3 inline-block rounded-full border-2 border-foreground bg-${color}/20 px-2.5 py-0.5 text-xs font-bold shadow-hard-sm`}>
                        {mod.level}
                      </span>
                      <h3 className="mb-1.5 text-sm font-bold text-foreground transition-colors group-hover:text-accent">
                        {mod.title}
                      </h3>
                      <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
                        {mod.description}
                      </p>
                      <p className="text-xs font-medium text-muted-foreground">{mod.minutes} min read</p>
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
            <span className="mb-6 inline-block rounded-full border-2 border-foreground bg-secondary/10 px-4 py-1 text-xs font-bold uppercase tracking-wide text-secondary shadow-hard-sm">
              busy mode
            </span>
            <Newsletter source="learn" />
            <p className="mt-4 text-center text-xs text-muted-foreground">
              <Link
                href="/newsletter"
                className="font-bold transition-colors hover:text-accent"
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
