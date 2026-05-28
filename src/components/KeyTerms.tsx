import type { KeyTerm } from "@/content/modules";

interface KeyTermsProps {
  terms: KeyTerm[];
}

export default function KeyTerms({ terms }: KeyTermsProps) {
  if (terms.length === 0) return null;

  return (
    <section className="mb-14 rounded-2xl border-2 border-foreground bg-card p-6 shadow-hard">
      <h2 className="mb-6 text-xs font-bold uppercase tracking-wider text-foreground">
        Key Terms
      </h2>

      <dl className="space-y-5">
        {terms.map((term) => (
          <div key={term.term} className="rounded-xl border-2 border-dashed border-border bg-muted/50 p-4">
            <dt className="text-sm font-bold text-accent">{term.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-muted-foreground">
              {term.definition}
            </dd>
            {term.analogy && (
              <dd className="mt-2 rounded-lg bg-tertiary/10 px-3 py-1.5 text-xs text-foreground/70">
                Think of it as: {term.analogy}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
