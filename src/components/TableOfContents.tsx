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
      className="mb-10 rounded-2xl border-2 border-foreground bg-card p-5 shadow-hard-sm"
      aria-label="Table of contents"
    >
      <h2 className="mb-3 text-xs font-bold uppercase tracking-wider text-foreground">
        In this module
      </h2>
      <ol className="space-y-1.5">
        {sections.map((section, i) => (
          <li key={i}>
            <a
              href={`#${slugify(section.heading)}`}
              className="group flex items-center gap-2 text-sm font-medium text-muted-foreground transition-all hover:text-accent hover:translate-x-1"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border-2 border-foreground/30 bg-muted text-xs font-bold transition-all group-hover:border-accent group-hover:bg-accent/10 group-hover:text-accent">
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
