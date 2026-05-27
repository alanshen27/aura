import type { Metadata } from "next";
import { getModulesByTrack } from "@/content/modules";
import ModuleCard from "@/components/ModuleCard";

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

      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        Beginner Track
      </h1>
      <p className="mb-10 text-base text-foreground/70">
        10 modules covering the foundations of synthetic biology. No background
        needed — just curiosity and a few minutes.
      </p>

      <div className="space-y-4">
        {trackModules.map((mod, i) => (
          <ModuleCard key={mod.slug} module={mod} index={i} />
        ))}
      </div>
    </div>
  );
}
