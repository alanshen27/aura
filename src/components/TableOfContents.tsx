"use client";

interface TableOfContentsProps {
  sections: { heading: string }[];
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function TableOfContents({ sections }: TableOfContentsProps) {
  return (
    <nav
      className="mb-10 rounded-xl border border-border bg-surface p-5"
      aria-label="Table of contents"
    >
      <h2 className="mb-3 text-xs uppercase tracking-wider text-muted">
        In this module
      </h2>
      <ol className="space-y-1.5">
        {sections.map((section, i) => (
          <li key={i}>
            <a
              href={`#${slugify(section.heading)}`}
              className="group flex items-center gap-2 text-sm text-foreground/70 transition-colors hover:text-accent"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded bg-background text-xs text-muted transition-colors group-hover:bg-accent-light group-hover:text-accent-dark">
                {i + 1}
              </span>
              {section.heading}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
