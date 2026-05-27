import Link from "next/link";
import type { Module } from "@/content/modules";
import ModuleIllustration from "@/components/illustrations/ModuleIllustration";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export default function ModuleCard({ module, index }: ModuleCardProps) {
  if (module.comingSoon) {
    return (
      <div className="group rounded-xl border border-border bg-surface p-5 opacity-50">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-7 w-7 items-center justify-center rounded bg-coming-soon text-xs text-white">
            {index + 1}
          </span>
          <h3 className="text-sm text-muted">{module.title}</h3>
        </div>

        <p className="mb-4 text-xs leading-relaxed text-muted">
          {module.description}
        </p>

        <span className="inline-block rounded bg-surface-alt px-2.5 py-0.5 text-xs text-muted">
          Coming soon
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/beginner/${module.slug}`}
      className="group block rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent/40 hover:-translate-y-0.5 hover:shadow-sm"
    >
      <div className="flex items-start justify-between gap-3">
        <div className="flex-1">
          <div className="mb-2 flex items-center gap-3">
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded bg-charcoal text-xs text-white">
              {index + 1}
            </span>
            <h3 className="text-sm text-foreground transition-colors group-hover:text-accent-dark">
              {module.title}
            </h3>
          </div>

          <p className="mb-4 text-xs leading-relaxed text-foreground/65">
            {module.description}
          </p>

          <div className="flex items-center gap-3">
            <span className="rounded bg-accent-light px-2 py-0.5 text-xs text-accent-dark">
              {module.level}
            </span>
            <span className="text-xs text-muted">{module.minutes} min</span>
            <span className="ml-auto rounded-lg bg-charcoal px-3 py-1 text-xs text-white transition-colors group-hover:bg-accent">
              Start
            </span>
          </div>
        </div>

        <ModuleIllustration slug={module.slug} size={56} className="hidden shrink-0 opacity-30 sm:block" />
      </div>
    </Link>
  );
}
