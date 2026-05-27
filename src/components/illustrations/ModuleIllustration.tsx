"use client";

import DNAHelix from "./DNAHelix";
import Plasmid from "./Plasmid";
import Cell from "./Cell";
import Protein from "./Protein";
import Flask from "./Flask";
import GeneCircuit from "./GeneCircuit";
import PetriDish from "./PetriDish";

const illustrationMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "intro-to-synbio": Flask,
  "how-does-dna-store-information": DNAHelix,
  "what-are-proteins": Protein,
  "what-is-gene-expression": GeneCircuit,
  "what-are-bacteria": Cell,
  "what-are-plasmids": Plasmid,
  "how-do-scientists-modify-organisms": PetriDish,
  "what-is-crispr": DNAHelix,
  "synbio-in-everyday-life": Flask,
  "ethics-and-safety": Cell,
};

interface ModuleIllustrationProps {
  slug: string;
  size?: number;
  className?: string;
}

export default function ModuleIllustration({
  slug,
  size = 100,
  className = "",
}: ModuleIllustrationProps) {
  const Component = illustrationMap[slug] || DNAHelix;
  return <Component size={size} className={className} />;
}
