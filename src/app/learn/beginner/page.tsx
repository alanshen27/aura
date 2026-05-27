import type { Metadata } from "next";
import { getModulesByTrack } from "@/content/modules";
import ModuleCard from "@/components/ModuleCard";
import { Cell, Plasmid, Protein } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Beginner Track",
  description:
    "Start from scratch. Learn the fundamentals of synthetic biology with no science background required.",
};

export default function BeginnerPage() {
  const trackModules = getModulesByTrack("beginner");

  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12">
      <div className="mb-2 flex items-center gap-2 text-sm text-muted">
        <a href="/learn" className="transition-colors hover:text-accent">
          Learn
        </a>
        <span aria-hidden="true">/</span>
      </div>

      <div className="mb-10 flex items-start justify-between">
        <div>
          <h1 className="mb-3 text-2xl tracking-tight text-foreground">
            Beginner Track
          </h1>
          <p className="max-w-md text-base text-foreground/70">
            10 modules covering the foundations of synthetic biology. No
            background needed — just curiosity and a few minutes.
          </p>
        </div>
        <div className="hidden items-center gap-1 opacity-40 sm:flex">
          <Cell size={52} />
          <Plasmid size={52} />
          <Protein size={52} />
        </div>
      </div>

      <div className="space-y-4">
        {trackModules.map((mod, i) => (
          <ModuleCard key={mod.slug} module={mod} index={i} />
        ))}
      </div>
    </div>
  );
}
