import Link from "next/link";
import Newsletter from "@/components/Newsletter";
import { DNAHelix, Flask, Cell, Plasmid } from "@/components/illustrations";

export default function Home() {
  return (
    <div className="mx-auto max-w-3xl px-6">
      <section className="pb-16 pt-16 text-center">
        {/* iGEM-inspired hero illustration strip */}
        <div className="mx-auto mb-10 flex items-center justify-center gap-4 opacity-80">
          <DNAHelix size={80} className="hidden sm:block" />
          <div className="grid w-28 grid-cols-2 gap-1.5">
            <div className="flex aspect-square items-center justify-center rounded-md bg-charcoal">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M4 24 L24 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 18 L18 4" stroke="white" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-md bg-charcoal">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M6 22 L22 6" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M10 22 L22 10" stroke="white" strokeWidth="0.75" strokeLinecap="round" opacity="0.5" />
              </svg>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-md bg-charcoal">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M4 24 L24 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex aspect-square items-center justify-center rounded-md bg-accent">
              <svg width="24" height="24" viewBox="0 0 28 28" fill="none" aria-hidden="true">
                <path d="M4 24 L24 4" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                <path d="M4 18 L18 4" stroke="white" strokeWidth="0.75" strokeLinecap="round" opacity="0.6" />
              </svg>
            </div>
          </div>
          <Flask size={80} className="hidden sm:block" />
        </div>

        <h1 className="mb-6 text-3xl leading-tight tracking-tight text-foreground sm:text-4xl animate-fade-in">
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
          className="group inline-flex items-center gap-2 rounded-lg bg-charcoal px-8 py-3 text-sm tracking-wide text-white transition-all hover:bg-charcoal-light hover:gap-3"
        >
          Start Learning
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
            className="transition-transform group-hover:translate-x-0.5"
          >
            <line x1="5" y1="12" x2="19" y2="12" />
            <polyline points="12 5 19 12 12 19" />
          </svg>
        </Link>
      </section>

      {/* Floating illustrations divider */}
      <div className="flex items-center justify-center gap-8 py-6 opacity-40">
        <div className="h-px flex-1 bg-border" />
        <Cell size={48} />
        <Plasmid size={48} />
        <DNAHelix size={48} />
        <div className="h-px flex-1 bg-border" />
      </div>

      <section className="pb-16 pt-8">
        <div className="grid gap-4 sm:grid-cols-3">
          <div className="group rounded-xl border border-border bg-surface p-5 text-center transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded bg-charcoal transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
              </svg>
            </div>
            <h3 className="mb-1.5 text-sm text-foreground">Simple language</h3>
            <p className="text-xs leading-relaxed text-muted">
              Every concept explained with everyday words and helpful analogies.
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-surface p-5 text-center transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded bg-accent transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <rect x="3" y="3" width="7" height="7" />
                <rect x="14" y="3" width="7" height="7" />
                <rect x="3" y="14" width="7" height="7" />
                <rect x="14" y="14" width="7" height="7" />
              </svg>
            </div>
            <h3 className="mb-1.5 text-sm text-foreground">Bite-sized modules</h3>
            <p className="text-xs leading-relaxed text-muted">
              Short lessons that fit into your schedule. Read one in a coffee break.
            </p>
          </div>

          <div className="group rounded-xl border border-border bg-surface p-5 text-center transition-all hover:border-accent/30 hover:-translate-y-0.5 hover:shadow-sm">
            <div className="mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded bg-charcoal transition-transform group-hover:scale-105">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" aria-hidden="true">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
            </div>
            <h3 className="mb-1.5 text-sm text-foreground">For everyone</h3>
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
