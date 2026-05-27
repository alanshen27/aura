import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Human Practices",
  description: "How we engaged with stakeholders and the real-world context of our project.",
};

export default function HumanPracticesPage() {
  const page = getWikiPage("human-practices");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Human Practices"
      section="human practices"
      breadcrumbs={[{ href: "/human-practices", label: "human practices" }]}
      markdown={page.markdown}
      prevPage={{ href: "/project/safety", label: "Safety" }}
      nextPage={{ href: "/education", label: "Education" }}
    />
  );
}
