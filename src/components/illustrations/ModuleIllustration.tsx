"use client";

import DNAHelix from "./DNAHelix";
import Plasmid from "./Plasmid";
import Cell from "./Cell";
import Protein from "./Protein";
import Flask from "./Flask";
import GeneCircuit from "./GeneCircuit";

const illustrationMap: Record<string, React.ComponentType<{ className?: string; size?: number }>> = {
  "intro-to-synbio": Flask,
  "what-are-proteins": Protein,
  "what-are-plasmids": Plasmid,
  "dna-basics": DNAHelix,
  "gene-expression": GeneCircuit,
  "genetic-circuits": GeneCircuit,
  "crispr-intro": DNAHelix,
  "biobricks": Plasmid,
  "biosafety": Cell,
  "real-world-synbio": Flask,
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
