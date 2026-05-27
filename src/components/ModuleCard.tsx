import Link from "next/link";
import type { Module } from "@/content/modules";

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
      className="group block rounded-xl border border-border bg-surface p-5 transition-all duration-200 hover:border-accent/40 hover:shadow-sm"
    >
      <div className="mb-3 flex items-center gap-3">
        <span className="flex h-7 w-7 items-center justify-center rounded bg-charcoal text-xs text-white">
          {index + 1}
        </span>
        <h3 className="text-sm text-foreground transition-colors group-hover:text-accent-dark">
          {module.title}
        </h3>
      </div>

      <p className="mb-4 text-xs leading-relaxed text-foreground/65">
        {module.description}
      </p>

      <div className="flex items-center gap-3 text-xs text-muted">
        <span className="rounded bg-accent-light px-2 py-0.5 text-accent-dark">
          {module.level}
        </span>
        <span>{module.minutes} min</span>
      </div>
    </Link>
  );
}
