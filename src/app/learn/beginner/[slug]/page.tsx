import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { getModuleBySlug, getModulesByTrack } from "@/content/modules";
import ScrollProgress from "@/components/ScrollProgress";
import ModuleMeta from "@/components/ModuleMeta";
import ModuleSection from "@/components/ModuleSection";
import KeyTerms from "@/components/KeyTerms";
import Quiz from "@/components/Quiz";

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
      <ScrollProgress />

      <article className="mx-auto max-w-2xl px-6 pb-20 pt-12">
        <div className="mb-2 flex items-center gap-2 text-sm text-muted">
          <Link href="/learn" className="transition-colors hover:text-accent">
            Learn
          </Link>
          <span aria-hidden="true">/</span>
          <Link
            href="/learn/beginner"
            className="transition-colors hover:text-accent"
          >
            Beginner
          </Link>
          <span aria-hidden="true">/</span>
        </div>

        <h1 className="mb-4 text-2xl tracking-tight text-foreground sm:text-3xl">
          {mod.title}
        </h1>

        <ModuleMeta level={mod.level} minutes={mod.minutes} />

        {mod.sections.map((section, i) => (
          <ModuleSection key={i} heading={section.heading} body={section.body} />
        ))}

        <KeyTerms terms={mod.keyTerms} />

        {mod.quiz && mod.quiz.length > 0 && <Quiz questions={mod.quiz} />}

        <nav className="mt-16 flex items-center justify-between border-t border-border pt-8">
          {prev ? (
            <Link
              href={`/learn/beginner/${prev.slug}`}
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
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
              className="group flex items-center gap-2 text-sm text-muted transition-colors hover:text-accent"
            >
              {next.title}
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
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </Link>
          ) : (
            <Link
              href="/learn/beginner"
              className="text-sm text-muted transition-colors hover:text-accent"
            >
              Back to Beginner Track
            </Link>
          )}
        </nav>
      </article>
    </>
  );
}
