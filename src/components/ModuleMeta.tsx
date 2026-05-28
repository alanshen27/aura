interface ModuleMetaProps {
  level: string;
  minutes: number;
}

export default function ModuleMeta({ level, minutes }: ModuleMetaProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-3">
      <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-accent/10 px-4 py-1.5 text-xs font-bold shadow-hard-sm">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--accent)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
        {level}
      </span>

      <span className="inline-flex items-center gap-1.5 rounded-full border-2 border-foreground bg-tertiary/10 px-4 py-1.5 text-xs font-bold shadow-hard-sm">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="var(--tertiary)"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <polyline points="12 6 12 12 16 14" />
        </svg>
        {minutes} min read
      </span>
    </div>
  );
}
