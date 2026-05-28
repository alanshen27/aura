import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { getModulesByTrack, modules } from "@/content/modules";
import { DNAHelix, Flask, PetriDish, Cell, Plasmid } from "@/components/illustrations";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";
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
      <section className="relative overflow-hidden animated-gradient-bg py-18 sm:py-24">
        <AnimatedClipart variant="dark" density="sparse" />
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

      {/* ─── Section 1: Pick your track (dark bg) ─── */}
      <section className="relative overflow-hidden bg-charcoal py-16">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
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
                      className="rounded-2xl border border-white/10 bg-white/5 p-6 opacity-50"
                    >
                      <div className="flex items-center gap-3">
                        <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-lg">
                          {track.icon}
                        </span>
                        <div>
                          <h3 className="text-base text-white/70">{track.title}</h3>
                          <span className="text-xs text-white/30">coming soon</span>
                        </div>
                      </div>
                      <p className="mt-3 text-sm text-white/30">
                        {track.description}
                      </p>
                    </div>
                  );
                }

                return (
                  <Link
                    key={track.slug}
                    href={`/learn/${track.slug}`}
                    className="group block rounded-2xl border-2 border-accent/30 bg-white/5 p-6 backdrop-blur-sm transition-all duration-300 hover:border-accent hover:-translate-y-1 hover:bg-white/10 hover:shadow-lg hover:shadow-accent/10"
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-accent to-pop-purple text-xl transition-transform group-hover:scale-110 group-hover:rotate-3">
                          {track.icon}
                        </span>
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-lg text-white transition-colors group-hover:text-accent">
                              {track.title}
                            </h3>
                            <span className="rounded-full bg-accent px-2.5 py-0.5 text-xs text-white">
                              featured
                            </span>
                          </div>
                          <p className="text-sm text-white/50">
                            {track.description}
                          </p>
                        </div>
                      </div>

                      <svg
                        width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                        strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
                        className="mt-2 shrink-0 text-white/30 transition-all group-hover:translate-x-1 group-hover:text-accent"
                        aria-hidden="true"
                      >
                        <polyline points="9 18 15 12 9 6" />
                      </svg>
                    </div>

                    <div className="mt-4">
                      <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent to-pop-green transition-all duration-500"
                          style={{
                            width: `${(available / track.moduleCount) * 100}%`,
                          }}
                        />
                      </div>
                      <p className="mt-2 text-xs text-white/40">
                        {available} of {track.moduleCount} modules ready — let&apos;s go
                      </p>
                    </div>
                  </Link>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 2: How this site works (dark gradient) ─── */}
      <section className="relative overflow-hidden section-dark py-16">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              how this works
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              {[
                {
                  icon: <Cell size={32} />,
                  title: "short modules",
                  desc: "5–10 minutes each. read one while you wait for your boba.",
                  gradient: "from-accent to-pop-purple",
                },
                {
                  icon: <DNAHelix size={32} />,
                  title: "clear sections",
                  desc: "every module follows the same structure. you always know where you are.",
                  gradient: "from-pop-blue to-pop-purple",
                },
                {
                  icon: <Plasmid size={32} />,
                  title: "easy on the eyes",
                  desc: "calm colors, simple diagrams, lots of spacing. no headache-inducing walls of text.",
                  gradient: "from-pop-green to-pop-blue",
                },
                {
                  icon: <Flask size={32} />,
                  title: "multiple formats",
                  desc: "prefer reading? quizzes? 3-minute email bursts? we got you.",
                  gradient: "from-pop-orange to-accent",
                },
              ].map((item, i) => (
                <ScrollReveal key={i} delay={i * 80}>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur-sm transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:bg-white/10">
                    <div className={`mb-3 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.gradient}`}>
                      {item.icon}
                    </div>
                    <h3 className="mb-1 text-sm text-white">{item.title}</h3>
                    <p className="text-xs text-white/45 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 3: Featured modules (charcoal) ─── */}
      <section className="relative overflow-hidden bg-charcoal py-16">
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-widest text-accent">
              start here
            </p>

            <div className="grid gap-4 sm:grid-cols-3">
              {featuredModules.map((mod, i) => {
                if (!mod) return null;
                const colors = ["border-accent/30", "border-pop-green/30", "border-pop-blue/30"];
                const bgs = ["bg-accent", "bg-pop-green", "bg-pop-blue"];
                return (
                  <ScrollReveal key={mod.slug} delay={i * 100}>
                    <Link
                      href={`/learn/beginner/${mod.slug}`}
                      className={`group block rounded-2xl border-2 ${colors[i]} bg-white/5 p-5 backdrop-blur-sm transition-all hover:-translate-y-1 hover:bg-white/10 hover:shadow-md`}
                    >
                      <span className={`mb-3 inline-block rounded-full ${bgs[i]} px-2.5 py-0.5 text-xs text-white`}>
                        {mod.level}
                      </span>
                      <h3 className="mb-1.5 text-sm text-white transition-colors group-hover:text-accent">
                        {mod.title}
                      </h3>
                      <p className="mb-3 text-xs text-white/45 leading-relaxed">
                        {mod.description}
                      </p>
                      <p className="text-xs text-white/30">{mod.minutes} min read</p>
                    </Link>
                  </ScrollReveal>
                );
              })}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Section 4: Newsletter (gradient accent) ─── */}
      <section className="relative overflow-hidden section-accent py-16">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <ScrollReveal>
            <p className="mb-6 text-sm uppercase tracking-widest text-white/60">
              busy mode
            </p>
            <Newsletter source="learn" />
            <p className="mt-4 text-center text-xs text-white/40">
              <Link
                href="/newsletter"
                className="transition-colors hover:text-white"
              >
                browse past issues →
              </Link>
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
