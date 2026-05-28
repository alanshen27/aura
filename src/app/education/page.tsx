import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Education & Communication",
  description: "Our educational outreach and the IDKAASynBio learning platform.",
};

export default function EducationPage() {
  const page = getWikiPage("education");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Education & Communication"
      section="human practices"
      breadcrumbs={[
        { href: "/human-practices", label: "human practices" },
        { href: "/education", label: "education" },
      ]}
      markdown={page.markdown}
      prevPage={{ href: "/human-practices", label: "Human Practices" }}
      nextPage={{ href: "/team", label: "Team" }}
    />
  );
}
