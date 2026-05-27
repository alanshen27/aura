import Link from "next/link";
import type { Module } from "@/content/modules";
import ModuleIllustration from "@/components/illustrations/ModuleIllustration";

interface ModuleCardProps {
  module: Module;
  index: number;
}

const NUMBER_COLORS = [
  "bg-gradient-to-br from-accent to-pop-purple",
  "bg-gradient-to-br from-pop-blue to-pop-purple",
  "bg-gradient-to-br from-pop-green to-pop-blue",
  "bg-gradient-to-br from-pop-yellow to-pop-orange",
  "bg-gradient-to-br from-pop-orange to-accent",
  "bg-gradient-to-br from-pop-purple to-pop-blue",
  "bg-gradient-to-br from-pop-green to-pop-yellow",
  "bg-gradient-to-br from-accent to-pop-orange",
  "bg-gradient-to-br from-pop-blue to-pop-green",
  "bg-gradient-to-br from-pop-purple to-accent",
];

export default function ModuleCard({ module, index }: ModuleCardProps) {
  const numColor = NUMBER_COLORS[index % NUMBER_COLORS.length];

  if (module.comingSoon) {
    return (
      <div className="rounded-2xl border border-border bg-surface/50 p-5 opacity-40">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-surface-alt text-sm text-muted">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm text-muted">{module.title}</h3>
            <p className="text-xs text-muted/60">{module.description}</p>
          </div>
        </div>
        <div className="mt-3 ml-14">
          <span className="rounded-full bg-surface-alt px-3 py-1 text-xs text-muted">
            coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/beginner/${module.slug}`}
      className="group block rounded-2xl border border-border bg-surface p-5 transition-all duration-300 hover:border-accent/40 hover:-translate-y-1 hover:shadow-lg hover:shadow-accent/5"
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-lg ${numColor} text-sm text-white transition-transform group-hover:scale-110 group-hover:rotate-3`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="mb-1 text-sm text-foreground transition-colors group-hover:text-accent-dark">
              {module.title}
            </h3>
            <p className="mb-3 text-xs text-foreground/50 leading-relaxed">
              {module.description}
            </p>
            <div className="flex items-center gap-3">
              <span className="rounded-full bg-accent-light px-2.5 py-0.5 text-xs text-accent-dark">
                {module.level}
              </span>
              <span className="text-xs text-muted">{module.minutes} min</span>
            </div>
          </div>
        </div>

        <div className="flex shrink-0 flex-col items-end gap-2">
          <ModuleIllustration slug={module.slug} size={48} className="hidden opacity-25 transition-opacity group-hover:opacity-50 sm:block" />
          <span className="rounded-full bg-gradient-to-r from-charcoal to-charcoal-light px-4 py-1.5 text-xs font-medium text-white shadow-sm transition-all group-hover:from-accent group-hover:to-pop-purple group-hover:shadow-md group-hover:shadow-accent/20">
            start →
          </span>
        </div>
      </div>
    </Link>
  );
}
