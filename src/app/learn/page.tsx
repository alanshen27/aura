import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { getModulesByTrack, modules } from "@/content/modules";
import { DNAHelix, Flask, PetriDish } from "@/components/illustrations";
import Newsletter from "@/components/Newsletter";

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
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      {/* Header with illustrations */}
      <div className="mb-12 flex items-start justify-between">
        <div>
          <h1 className="mb-3 text-2xl tracking-tight text-foreground">Learn</h1>
          <p className="max-w-md text-sm text-foreground/70">
            Pick a track and start learning. Each module is short, clear, and
            designed to stand on its own.
          </p>
        </div>
        <div className="hidden items-center gap-2 opacity-50 sm:flex">
          <DNAHelix size={56} />
          <Flask size={56} />
          <PetriDish size={56} />
        </div>
      </div>

      {/* Section 1: Pick your track */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs uppercase tracking-wider text-muted">
          Pick your track
        </h2>

        <div className="space-y-4">
          {tracks.map((track) => {
            const trackModules = getModulesByTrack(track.slug);
            const available = trackModules.filter((m) => !m.comingSoon).length;
            const isComingSoon = track.comingSoon;

            if (isComingSoon) {
              return (
                <div
                  key={track.slug}
                  className="rounded-xl border border-border bg-surface p-6 opacity-50"
                >
                  <div className="flex items-center gap-3">
                    <div className="grid h-8 w-8 grid-cols-2 gap-0.5 rounded">
                      <div className="rounded-sm bg-surface-alt" />
                      <div className="rounded-sm bg-surface-alt" />
                      <div className="rounded-sm bg-surface-alt" />
                      <div className="rounded-sm bg-surface-alt" />
                    </div>
                    <h3 className="text-base text-foreground">{track.title}</h3>
                    <span className="rounded bg-surface-alt px-2 py-0.5 text-xs text-muted">
                      Coming soon
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-foreground/50">
                    {track.description}
                  </p>
                </div>
              );
            }

            return (
              <Link
                key={track.slug}
                href={`/learn/${track.slug}`}
                className="group block rounded-xl border-2 border-accent/30 bg-surface p-6 transition-all duration-200 hover:border-accent/60 hover:-translate-y-0.5 hover:shadow-sm"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <div className="mb-2 flex items-center gap-3">
                      <div className="grid h-8 w-8 grid-cols-2 gap-0.5 rounded transition-transform group-hover:scale-110">
                        <div className="rounded-sm bg-charcoal" />
                        <div className="rounded-sm bg-charcoal" />
                        <div className="rounded-sm bg-charcoal" />
                        <div className="rounded-sm bg-accent" />
                      </div>
                      <h3 className="text-base text-foreground transition-colors group-hover:text-accent-dark">
                        {track.title}
                      </h3>
                      <span className="rounded bg-accent px-2 py-0.5 text-xs text-white">
                        Featured
                      </span>
                      <span className="rounded bg-charcoal px-2 py-0.5 text-xs text-white/80">
                        {track.moduleCount} modules
                      </span>
                    </div>
                    <p className="text-sm text-foreground/65">
                      {track.description}
                    </p>
                  </div>

                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mt-1 shrink-0 text-muted transition-all group-hover:translate-x-0.5 group-hover:text-accent"
                    aria-hidden="true"
                  >
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                </div>

                <div className="mt-4">
                  <div className="h-1.5 w-full overflow-hidden rounded-full bg-surface-alt">
                    <div
                      className="h-full rounded-full bg-accent transition-all duration-300"
                      style={{
                        width: `${(available / track.moduleCount) * 100}%`,
                      }}
                    />
                  </div>
                  <p className="mt-2 text-xs text-muted">
                    {available} of {track.moduleCount} modules available
                  </p>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Section 2: How this site works */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs uppercase tracking-wider text-muted">
          How this site works
        </h2>

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded bg-charcoal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="mb-1 text-sm text-foreground">Short modules</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Each module takes 5–10 minutes. Read one on a coffee break.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded bg-charcoal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="mb-1 text-sm text-foreground">Clear section titles</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Every module follows the same structure so you always know where you are.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded bg-accent">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" y1="9" x2="9.01" y2="9" /><line x1="15" y1="9" x2="15.01" y2="9" />
              </svg>
            </div>
            <h3 className="mb-1 text-sm text-foreground">Low-overstimulation visuals</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Calm colors, simple diagrams, generous spacing. Designed to be easy on the eyes.
            </p>
          </div>

          <div className="rounded-xl border border-border bg-surface p-5">
            <div className="mb-2 flex h-8 w-8 items-center justify-center rounded bg-charcoal">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="mb-1 text-sm text-foreground">Inclusive formats</h3>
            <p className="text-xs text-foreground/60 leading-relaxed">
              Interactive quizzes, readable articles, quick newsletter bursts. Something for everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Section 3: Featured modules */}
      <section className="mb-14">
        <h2 className="mb-5 text-xs uppercase tracking-wider text-muted">
          Featured modules
        </h2>

        <div className="grid gap-3 sm:grid-cols-3">
          {featuredModules.map((mod) => {
            if (!mod) return null;
            return (
              <Link
                key={mod.slug}
                href={`/learn/beginner/${mod.slug}`}
                className="group rounded-xl border border-border bg-surface p-5 transition-all hover:border-accent/40 hover:-translate-y-0.5"
              >
                <span className="mb-2 inline-block rounded bg-accent-light px-2 py-0.5 text-xs text-accent-dark">
                  {mod.level}
                </span>
                <h3 className="mb-1 text-sm text-foreground transition-colors group-hover:text-accent-dark">
                  {mod.title}
                </h3>
                <p className="text-xs text-foreground/55 leading-relaxed">
                  {mod.description}
                </p>
                <p className="mt-3 text-xs text-muted">{mod.minutes} min</p>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Section 4: Newsletter */}
      <section>
        <h2 className="mb-5 text-xs uppercase tracking-wider text-muted">
          Newsletter / quick bursts
        </h2>
        <Newsletter source="learn" />
        <p className="mt-3 text-center text-xs text-muted">
          <Link
            href="/newsletter"
            className="transition-colors hover:text-accent"
          >
            Browse the newsletter archive →
          </Link>
        </p>
      </section>
    </div>
  );
}
