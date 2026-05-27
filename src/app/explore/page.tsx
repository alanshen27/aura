import type { Metadata } from "next";
import { PetriDish, Flask, Cell } from "@/components/illustrations";

export const metadata: Metadata = {
  title: "Explore",
  description: "Explore the world of synthetic biology beyond the modules.",
};

export default function ExplorePage() {
  return (
    <div className="mx-auto max-w-3xl px-6 pb-20 pt-12 text-center">
      <div className="mb-8 flex items-center justify-center gap-4 opacity-60">
        <PetriDish size={72} />
        <Flask size={72} />
        <Cell size={72} />
      </div>

      <h1 className="mb-3 text-2xl tracking-tight text-foreground">
        Explore the World
      </h1>

      <p className="mx-auto mb-6 max-w-md text-base text-foreground/70">
        Discover how synthetic biology is being applied around the globe — from
        labs to communities to real-world products.
      </p>

      <div className="rounded-xl border border-border bg-surface p-8">
        <p className="text-sm text-muted">
          This section is coming soon. We are building interactive stories,
          profiles, and explorations of synbio in action.
        </p>
      </div>
    </div>
  );
}
