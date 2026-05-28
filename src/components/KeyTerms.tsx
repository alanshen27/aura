import type { KeyTerm } from "@/content/modules";

interface KeyTermsProps {
  terms: KeyTerm[];
}

export default function KeyTerms({ terms }: KeyTermsProps) {
  if (terms.length === 0) return null;

  return (
    <section className="mb-14 rounded-xl border border-border bg-charcoal p-6">
      <h2 className="mb-6 text-sm uppercase tracking-wider text-white/70">
        Key Terms
      </h2>

      <dl className="space-y-5">
        {terms.map((term) => (
          <div key={term.term}>
            <dt className="text-sm text-accent">{term.term}</dt>
            <dd className="mt-1 text-sm leading-relaxed text-white/70">
              {term.definition}
            </dd>
            {term.analogy && (
              <dd className="mt-1 text-xs italic text-white/40">
                Think of it as: {term.analogy}
              </dd>
            )}
          </div>
        ))}
      </dl>
    </section>
  );
}
