import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getModuleBySlug, getModulesByTrack } from "@/content/modules";
import ModuleMeta from "@/components/ModuleMeta";
import ModuleSection from "@/components/ModuleSection";
import KeyTerms from "@/components/KeyTerms";
import Quiz from "@/components/Quiz";
import TableOfContents from "@/components/TableOfContents";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const mods = getModulesByTrack("beginner");
  return mods
    .filter((m) => !m.comingSoon)
    .map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);
  if (!mod) return {};

  return {
    title: mod.title,
    description: mod.description,
    openGraph: {
      title: `${mod.title} | IDKAASynBio`,
      description: mod.description,
    },
  };
}

export default async function ModulePage({ params }: PageProps) {
  const { slug } = await params;
  const mod = getModuleBySlug(slug);

  if (!mod || mod.comingSoon) {
    notFound();
  }

  const allModules = getModulesByTrack("beginner").filter(
    (m) => !m.comingSoon
  );
  const currentIndex = allModules.findIndex((m) => m.slug === slug);
  const prev = currentIndex > 0 ? allModules[currentIndex - 1] : null;
  const next =
    currentIndex < allModules.length - 1 ? allModules[currentIndex + 1] : null;

  return (
    <>
      <article className="mx-auto max-w-4xl px-6 pb-20 pt-12">
        {/* Breadcrumb */}
        <div className="mb-2 flex items-center gap-2 text-sm text-muted-foreground">
          <Link href="/learn" className="font-medium transition-colors hover:text-accent">
            Learn
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/learn/beginner"
            className="font-medium transition-colors hover:text-accent"
          >
            Beginner
          </Link>
          <span aria-hidden="true">/</span>
        </div>

        {/* Module header */}
        <h1 className="mb-3 text-2xl font-extrabold tracking-tight text-foreground sm:text-3xl animate-bounce-in">
          {mod.title}
        </h1>

        {/* Promise line */}
        <p className="mb-4 text-sm text-accent italic">
          {mod.promise}
        </p>

        <ModuleMeta level={mod.level} minutes={mod.minutes} />

        {/* Table of Contents */}
        <TableOfContents sections={mod.sections} />

        {/* Decorative divider */}
        <div className="mb-10 flex items-center gap-3">
          <div className="h-0.5 flex-1 border-t-2 border-dashed border-border" />
          <div className="flex gap-1">
            <div className="h-3 w-3 rounded-full border-2 border-foreground/20 bg-accent/20" />
            <div className="h-3 w-3 rounded-sm border-2 border-foreground/20 bg-secondary/20" />
            <div className="h-3 w-3 rounded-full border-2 border-foreground/20 bg-tertiary/20" />
          </div>
          <div className="h-0.5 flex-1 border-t-2 border-dashed border-border" />
        </div>

        {/* Sections */}
        {mod.sections.map((section, i) => (
          <ModuleSection key={i} heading={section.heading} body={section.body} />
        ))}

        {/* Key Terms */}
        <KeyTerms terms={mod.keyTerms} />

        {/* Quiz */}
        {mod.quiz && mod.quiz.length > 0 && <Quiz questions={mod.quiz} />}

        {/* Navigation */}
        <nav className="mt-16 flex items-center justify-between border-t-2 border-dashed border-border pt-8">
          {prev ? (
            <Link
              href={`/learn/beginner/${prev.slug}`}
              className="group flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2 text-sm font-bold text-foreground shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:-translate-x-1 hover:bg-tertiary hover:shadow-hard"
            >
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" className="transition-transform group-hover:-translate-x-0.5"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
              {prev.title}
            </Link>
          ) : (
            <span />
          )}
          {next ? (
            <Link
              href={`/learn/beginner/${next.slug}`}
              className="group flex items-center gap-2 rounded-full border-2 border-foreground px-5 py-2 text-sm font-bold text-foreground shadow-hard-sm transition-all duration-300 ease-[cubic-bezier(0.34,1.56,0.64,1)] hover:translate-x-1 hover:bg-tertiary hover:shadow-hard"
            >
              {next.title}
              <svg
                width="16" height="16" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
                aria-hidden="true" className="transition-transform group-hover:translate-x-0.5"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/learn/beginner"
              className="btn-secondary"
            >
              Back to Beginner Track
            </Link>
          )}
        </nav>
      </article>
    </>
  );
}
