import type { Metadata } from "next";
import Link from "next/link";
import { tracks } from "@/content/tracks";
import { getModulesByTrack } from "@/content/modules";

export const metadata: Metadata = {
  title: "Learn",
  description:
    "Explore learning tracks in synthetic biology. Start from beginner and build up.",
};

export default function LearnPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <h1 className="mb-3 text-2xl tracking-tight text-foreground">Learn</h1>
      <p className="mb-10 text-base text-foreground/70">
        Pick a track and start learning. Each module is short, clear, and
        designed to stand on its own.
      </p>

      <div className="space-y-4">
        {tracks.map((track) => {
          const trackModules = getModulesByTrack(track.slug);
          const available = trackModules.filter((m) => !m.comingSoon).length;

          return (
            <Link
              key={track.slug}
              href={`/learn/${track.slug}`}
              className="group block rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm"
            >
              <div className="flex items-start justify-between">
                <div>
                  <div className="mb-2 flex items-center gap-3">
                    <span className="text-2xl" aria-hidden="true">
                      {track.icon}
                    </span>
                    <h2 className="text-lg text-foreground transition-colors group-hover:text-accent-dark">
                      {track.title}
                    </h2>
                    <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs text-accent-dark">
                      {track.moduleCount} modules
                    </span>
                  </div>
                  <p className="text-sm text-foreground/70">
                    {track.description}
                  </p>
                </div>

                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-1 shrink-0 text-muted transition-colors group-hover:text-accent"
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
    </div>
  );
}
