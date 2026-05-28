import Link from "next/link";
import type { Module } from "@/content/modules";

interface ModuleCardProps {
  module: Module;
  index: number;
}

const COLORS = ["accent", "secondary", "tertiary", "quaternary"];

export default function ModuleCard({ module, index }: ModuleCardProps) {
  const color = COLORS[index % COLORS.length];

  if (module.comingSoon) {
    return (
      <div className="rounded-2xl border-2 border-dashed border-border bg-muted/50 p-5 opacity-60">
        <div className="flex items-center gap-4">
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-border bg-muted text-sm font-bold text-muted-foreground">
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="text-sm font-bold text-muted-foreground">{module.title}</h3>
            <p className="text-xs text-muted-foreground/60">{module.description}</p>
          </div>
        </div>
        <div className="mt-3 ml-14">
          <span className="rounded-full border-2 border-border bg-muted px-3 py-1 text-xs font-bold text-muted-foreground">
            coming soon
          </span>
        </div>
      </div>
    );
  }

  return (
    <Link
      href={`/learn/beginner/${module.slug}`}
      className={`group block rounded-2xl border-2 border-foreground bg-card p-5 shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-0.5 hover:-translate-y-0.5 hover:shadow-hard`}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-start gap-4">
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border-2 border-foreground bg-${color}/20 text-sm font-extrabold text-foreground shadow-hard-sm transition-transform group-hover:scale-110 group-hover:rotate-6`}>
            {String(index + 1).padStart(2, "0")}
          </span>
          <div>
            <h3 className="mb-1 text-sm font-bold text-foreground transition-colors group-hover:text-accent">
              {module.title}
            </h3>
            <p className="mb-3 text-xs text-muted-foreground leading-relaxed">
              {module.description}
            </p>
            <div className="flex items-center gap-3">
              <span className={`rounded-full border-2 border-foreground/30 bg-${color}/10 px-2.5 py-0.5 text-xs font-bold`}>
                {module.level}
              </span>
              <span className="text-xs font-medium text-muted-foreground">{module.minutes} min</span>
            </div>
          </div>
        </div>

        <span className="shrink-0 rounded-full border-2 border-foreground bg-accent px-4 py-1.5 text-xs font-bold text-white shadow-hard-sm transition-all group-hover:shadow-hard group-hover:-translate-y-0.5 group-hover:-translate-x-0.5">
          start →
        </span>
      </div>
    </Link>
  );
}
