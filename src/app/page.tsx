import Link from "next/link";
import Newsletter from "@/components/Newsletter";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-20 text-center">
        <div className="mb-8">
          <svg
            className="mx-auto mb-6 text-accent"
            width="64"
            height="64"
            viewBox="0 0 64 64"
            fill="none"
            aria-hidden="true"
          >
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="2"
            />
            <ellipse
              cx="32"
              cy="32"
              rx="12"
              ry="28"
              stroke="currentColor"
              strokeWidth="2"
            />
            <line
              x1="4"
              y1="32"
              x2="60"
              y2="32"
              stroke="currentColor"
              strokeWidth="2"
            />
            <circle cx="32" cy="32" r="4" fill="currentColor" />
          </svg>
        </div>

        <h1 className="mb-6 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl">
          Learn synthetic biology
          <br />
          in small, clear modules.
        </h1>

        <p className="mx-auto mb-4 max-w-lg text-base leading-relaxed text-foreground/70">
          No science background needed. Just curiosity.
        </p>

        <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-muted">
          We break complex topics into short, friendly lessons. Each module
          stands on its own, so you can learn at your own pace — whether you
          have five minutes or an hour.
        </p>

        <Link
          href="/learn"
          className="inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5 text-sm text-white transition-colors hover:bg-accent-dark"
        >
          Start Learning
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </section>

      <section className="pb-16">
        <div className="grid gap-6 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-dark"
                aria-hidden="true"
              >
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm text-foreground">Simple language</h3>
            <p className="text-xs leading-relaxed text-muted">
              Every concept explained with everyday words and helpful analogies.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-dark"
                aria-hidden="true"
              >
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm text-foreground">Bite-sized modules</h3>
            <p className="text-xs leading-relaxed text-muted">
              Short lessons that fit into your schedule. Read one in a coffee
              break.
            </p>
          </div>

          <div className="rounded-2xl border border-border bg-surface p-6 text-center">
            <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-accent-light">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                className="text-accent-dark"
                aria-hidden="true"
              >
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="mb-2 text-sm text-foreground">For everyone</h3>
            <p className="text-xs leading-relaxed text-muted">
              Designed for different ages and backgrounds. Inclusive by default.
            </p>
          </div>
        </div>
      </section>

      <section className="pb-20">
        <Newsletter />
      </section>
    </div>
  );
}
