import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Engineering",
  description: "Our engineering cycle: design, build, test, learn.",
};

export default function EngineeringPage() {
  const page = getWikiPage("engineering");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Engineering"
      section="project"
      breadcrumbs={[
        { href: "/project", label: "project" },
        { href: "/project/engineering", label: "engineering" },
      ]}
      markdown={page.markdown}
      prevPage={{ href: "/project", label: "Description" }}
      nextPage={{ href: "/project/safety", label: "Safety" }}
    />
  );
}
