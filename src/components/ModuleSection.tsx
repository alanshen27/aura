interface ModuleSectionProps {
  heading: string;
  body: string;
}

export default function ModuleSection({ heading, body }: ModuleSectionProps) {
  const paragraphs = body.split("\n\n").filter(Boolean);

  return (
    <section className="mb-14">
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
