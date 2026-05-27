interface ModuleMetaProps {
  level: string;
  minutes: number;
}

export default function ModuleMeta({ level, minutes }: ModuleMetaProps) {
  return (
    <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-muted">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-3 py-1 text-accent-dark">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
        </svg>
        {level}
      </span>

      <span className="inline-flex items-center gap-1.5 rounded-full bg-surface-alt px-3 py-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
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
