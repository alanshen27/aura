export interface Track {
  slug: string;
  title: string;
  description: string;
  level: "Beginner" | "Intermediate" | "Advanced";
  moduleCount: number;
  icon: string;
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
];
