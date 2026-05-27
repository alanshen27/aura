import Link from "next/link";
import MarkdownRenderer from "@/components/MarkdownRenderer";

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
      <section className="banner-overlay bg-charcoal py-14 sm:py-20">
        <div className="relative z-10 mx-auto max-w-5xl px-6">
          {/* Breadcrumbs */}
          <div className="mb-3 flex items-center gap-2 text-sm text-white/40">
            <Link href="/" className="transition-colors hover:text-accent">
              home
            </Link>
            {breadcrumbs.map((crumb) => (
              <span key={crumb.href} className="flex items-center gap-2">
                <span aria-hidden="true">/</span>
                <Link
                  href={crumb.href}
                  className="transition-colors hover:text-accent"
                >
                  {crumb.label}
                </Link>
              </span>
            ))}
          </div>

          <p className="mb-2 text-xs uppercase tracking-widest text-accent">
            {section}
          </p>
          <h1 className="text-3xl tracking-tight text-white sm:text-4xl animate-fade-in-up">
            {title}
          </h1>
        </div>
      </section>

      {/* Content */}
      <article className="mx-auto max-w-5xl px-6 py-14">
        <MarkdownRenderer content={markdown} />

        {/* Navigation */}
        {(prevPage || nextPage) && (
          <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
            {prevPage ? (
              <Link
                href={prevPage.href}
                className="group flex items-center gap-2 text-sm text-muted transition-all hover:text-accent hover:gap-3"
              >
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
                className="group flex items-center gap-2 text-sm text-muted transition-all hover:text-accent hover:gap-3"
              >
                {nextPage.label}
                <svg
                  width="16" height="16" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
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
