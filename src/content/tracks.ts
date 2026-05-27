export interface Track {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  moduleCount: number;
  icon: string;
  comingSoon?: boolean;
}

export const tracks: Track[] = [
  {
    slug: "beginner",
    title: "Beginner",
    description:
      "Start from scratch. No science background needed — just curiosity.",
    level: "Beginner",
    moduleCount: 10,
    icon: "🧬",
  },
  {
    slug: "intermediate",
    title: "Intermediate",
    description:
      "Go deeper into genetic engineering, lab techniques, and real research.",
    level: "Intermediate",
    moduleCount: 8,
    icon: "🔬",
    comingSoon: true,
  },
  {
    slug: "advanced",
    title: "Advanced",
    description:
      "Systems-level thinking, computational design, and cutting-edge synbio.",
    level: "Advanced",
    moduleCount: 6,
    icon: "⚙️",
    comingSoon: true,
  },
];
