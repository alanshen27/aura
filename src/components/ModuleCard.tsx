import Link from "next/link";
import type { Module } from "@/content/modules";

interface ModuleCardProps {
  module: Module;
  index: number;
}

export default function ModuleCard({ module, index }: ModuleCardProps) {
  if (module.comingSoon) {
    return (
      <div className="group rounded-2xl border border-border bg-surface p-6 opacity-60">
        <div className="mb-3 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-coming-soon text-xs text-muted">
            {index + 1}
          </span>
          <h3 className="text-base text-muted">{module.title}</h3>
        </div>

        <p className="mb-4 text-sm leading-relaxed text-muted">
          {module.description}
        </p>

        <span className="inline-block rounded-full bg-surface-alt px-3 py-1 text-xs text-muted">
          Coming soon
        </span>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/beginner/${module.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-6 transition-all duration-200 hover:border-accent/30 hover:shadow-sm"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-accent-light text-xs text-accent-dark">
          {index + 1}
        </span>
        <h3 className="text-base text-foreground transition-colors group-hover:text-accent-dark">
          {module.title}
        </h3>
      </div>

      <p className="mb-4 text-sm leading-relaxed text-foreground/70">
        {module.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-muted">
        <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-accent-dark">
          {module.level}
        </span>
        <span>{module.minutes} min</span>
      </div>
    </Link>
  );
}
