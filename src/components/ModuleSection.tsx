interface ModuleSectionProps {
  heading: string;
  body: string;
}

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export default function ModuleSection({ heading, body }: ModuleSectionProps) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <section id={slugify(heading)} className="mb-14 scroll-mt-20">
      <h2 className="mb-6 text-xl text-foreground">{heading}</h2>

      <div className="space-y-5">
        {paragraphs.map((p, i) => (
          <p key={i} className="text-base leading-relaxed text-foreground/85">
            {p}
          </p>
        ))}
      </div>
    </section>
  );
}
