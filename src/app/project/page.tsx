import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Project Description",
  description: "Our iGEM project: tackling mastitis detection in dairy cattle with synthetic biology.",
};

export default function ProjectPage() {
  const page = getWikiPage("description");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Project Description"
      section="project"
      breadcrumbs={[{ href: "/project", label: "project" }]}
      markdown={page.markdown}
      nextPage={{ href: "/project/engineering", label: "Engineering" }}
    />
  );
}
