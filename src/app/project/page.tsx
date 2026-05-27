import type { Metadata } from "next";
import { DNAHelix, GeneCircuit, Plasmid } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Our Project",
  description:
    "Learn about IDKAASynBio — our mission to make synthetic biology accessible to everyone.",
};

export default function ProjectPage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 text-center">
      <div className="mb-8 flex items-center justify-center gap-4 opacity-60">
        <DNAHelix size={72} />
        <GeneCircuit size={72} />
        <Plasmid size={72} />
      </div>

      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        Our Project
      </h1>

      <p className="mx-auto mb-6 max-w-md text-base text-foreground/70">
        IDKAASynBio is a learn-first platform for synthetic biology. We believe
        that understanding science should not require a PhD or a textbook that
        weighs three pounds.
      </p>

      <div className="rounded-xl border border-border bg-surface p-8">
        <p className="text-sm text-muted">
          More details about our team, goals, and roadmap are coming soon.
        </p>
      </div>
    </div>
  );
}
