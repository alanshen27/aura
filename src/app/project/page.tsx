import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Our Project",
  description:
    "Learn about IDKAASynBio — our mission to make synthetic biology accessible to everyone.",
};

export default function ProjectPage() {
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
          <path d="M12 2L2 7l10 5 10-5-10-5z" />
          <path d="M2 17l10 5 10-5" />
          <path d="M2 12l10 5 10-5" />
        </svg>
      </div>

      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        Our Project
      </h1>

      <p className="mx-auto mb-6 max-w-md text-base text-foreground/70">
        IDKAASynBio is a learn-first platform for synthetic biology. We believe
        that understanding science should not require a PhD or a textbook that
        weighs three pounds.
      </p>

      <div className="rounded-2xl border border-border bg-surface p-8">
        <p className="text-sm text-muted">
          More details about our team, goals, and roadmap are coming soon.
        </p>
      </div>
    </div>
  );
}
