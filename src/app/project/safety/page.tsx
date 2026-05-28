import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Safety",
  description: "Safety considerations for our iGEM project.",
};

export default function SafetyPage() {
  const page = getWikiPage("safety");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Safety"
      section="project"
      breadcrumbs={[
        { href: "/project", label: "project" },
        { href: "/project/safety", label: "safety" },
      ]}
      markdown={page.markdown}
      prevPage={{ href: "/project/engineering", label: "Engineering" }}
      nextPage={{ href: "/human-practices", label: "Human Practices" }}
    />
  );
}
