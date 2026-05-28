import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";
import AnimatedClipart from "@/components/illustrations/AnimatedClipart";

interface WikiLayoutProps {
  title: string;
  section: string;
  breadcrumbs: { href: string; label: string }[];
  markdown: string;
  prevPage?: { href: string; label: string } | null;
  nextPage?: { href: string; label: string } | null;
}

export default function WikiLayout({
  title,
  section,
  breadcrumbs,
  markdown,
  prevPage,
  nextPage,
}: WikiLayoutProps) {
  return (
    <>
      {/* Header */}
      <section className="relative overflow-hidden border-b-2 border-foreground bg-accent py-14 sm:py-20">
        <AnimatedClipart variant="dark" density="sparse" />
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Breadcrumbs */}
          <div className="mb-3 flex items-center gap-2 text-sm text-white/60">
            <Link href="/" className="transition-colors hover:text-white">
              home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-white"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </div>

          <span className="mb-2 inline-block rounded-full border-2 border-white/30 bg-white/10 px-3 py-0.5 text-xs font-bold uppercase tracking-wide text-white">
            {section}
          </span>
          <h1 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl animate-bounce-in">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-6 py-14">
        <MarkdownRenderer content={markdown} />

        {/* Navigation */}
        {(prevPage || nextPage) && (
          <nav className="mt-16 flex items-center justify-between border-t-2 border-dashed border-border pt-8">
            {prevPage ? (
              <Link
                href={prevPage.href}
                className="group flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2 text-sm font-bold text-foreground shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-1 hover:bg-tertiary hover:shadow-hard"
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform group-hover:-translate-x-0.5" aria-hidden="true"
                >
                  <polyline points="15 18 9 12 15 6" />
                </svg>
                {prevPage.label}
              </Link>
            ) : (
              <span />
            )}
            {nextPage ? (
              <Link
                href={nextPage.href}
                className="group flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2 text-sm font-bold text-foreground shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-x-1 hover:bg-tertiary hover:shadow-hard"
              >
                {nextPage.label}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                  className="transition-transform group-hover:translate-x-0.5" aria-hidden="true"
                >
                  <polyline points="9 18 15 12 9 6" />
                </svg>
              </Link>
            ) : (
              <span />
            )}
          </nav>
        )}
      </article>
    </>
  );
}
