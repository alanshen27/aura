import type { KeyTerm } from "@/content/modules";

interface KeyTermsProps {
  terms: KeyTerm[];
}

export default function KeyTerms({ terms }: KeyTermsProps) {
  if (terms.length === 0) return null;

  return (
    <section className="mb-14 rounded-2xl border border-border bg-surface p-6">
      <h2 className="mb-6 text-lg text-foreground">Key Terms</h2>

      <dl className="space-y-5">
        {terms.map((term) => (
          <div key={term.term}>
            <dt className="text-sm text-accent-dark">{term.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-foreground/80">
              {term.definition}
            </dd>
            {term.analogy && (
              <dd className="mt-1 text-xs italic text-muted">
                Think of it as: {term.analogy}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
