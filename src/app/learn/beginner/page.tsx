import type { Metadata } from "next";
import Link from "next/link";
import { getModulesByTrack } from "@/content/modules";
import ModuleCard from "@/components/ModuleCard";
import ScrollReveal from "@/components/ScrollReveal";
import { Cell, Plasmid, Protein, DNAHelix } from "@/components/illustrations";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";

export const metadata: Metadata = {
  title: "Beginner Track",
  description:
    "Start from scratch. Learn the fundamentals of synthetic biology with no science background required.",
};

export default function BeginnerPage() {
  const trackModules = getModulesByTrack("beginner");

  return (
    <div>
      {/* Hero */}
      <section className="relative overflow-hidden animated-gradient-bg py-16 sm:py-20">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-6xl px-6">
          <div className="mb-2 flex items-center gap-2 text-sm text-white/40">
            <Link href="/learn" className="transition-colors hover:text-accent">
              learn
            </Link>
            <span aria-hidden="true">/</span>
          </div>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="mb-3 text-3xl tracking-tight text-white sm:text-4xl animate-fade-in-up">
                beginner track
              </h1>
              <p className="max-w-md text-sm text-white/50 animate-fade-in-up stagger-2">
                10 modules. zero prerequisites. start with &ldquo;what is
                synbio&rdquo; and end knowing enough to start your own
                iGEM project.
              </p>
            </div>
            <div className="hidden items-end gap-2 opacity-40 sm:flex">
              <DNAHelix size={48} className="animate-fade-in stagger-2" />
              <Cell size={48} className="animate-fade-in stagger-3" />
              <Plasmid size={48} className="animate-fade-in stagger-4" />
              <Protein size={48} className="animate-fade-in stagger-5" />
            </div>
          </div>

          {/* Progress bar */}
          <div className="mt-6 animate-fade-in-up stagger-3">
            <div className="h-2 w-full overflow-hidden rounded-full bg-white/10">
              <div
                className="h-full rounded-full bg-gradient-to-r from-accent to-pop-green"
                style={{ width: `${(trackModules.filter(m => !m.comingSoon).length / trackModules.length) * 100}%` }}
              />
            </div>
            <p className="mt-2 text-xs text-white/30">
              {trackModules.filter(m => !m.comingSoon).length} of {trackModules.length} modules ready
            </p>
          </div>
        </div>
      </section>

      {/* Module list */}
      <div className="mx-auto max-w-6xl px-6 py-12">
        <div className="space-y-4">
          {trackModules.map((mod, i) => (
            <ScrollReveal key={mod.slug} delay={i * 50}>
              <ModuleCard module={mod} index={i} />
            </ScrollReveal>
          ))}
        </div>
      </div>
    </div>
  );
}
