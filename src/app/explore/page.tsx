import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore the world of synthetic biology beyond the modules.",
};

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 text-center">
      <div className="mb-6">
        <svg
          className="mx-auto text-accent"
          width="48"
          height="48"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          aria-hidden="true"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="2" y1="12" x2="22" y2="12" />
          <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      </div>

      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        Explore the World
      </h1>

      <p className="mx-auto mb-6 max-w-md text-base text-foreground/70">
        Discover how synthetic biology is being applied around the globe — from
        labs to communities to real-world products.
      </p>

      <div className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-sm text-muted">
          This section is coming soon. We are building interactive stories,
          profiles, and explorations of synbio in action.
        </p>
      </div>
    </div>
  );
}
