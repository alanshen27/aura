import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Attributions",
  description: "Credits and acknowledgments for our iGEM project.",
};

export default function AttributionsPage() {
  const page = getWikiPage("attributions");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Attributions"
      section="team"
      breadcrumbs={[
        { href: "/team", label: "team" },
        { href: "/attributions", label: "attributions" },
      ]}
      markdown={page.markdown}
      prevPage={{ href: "/team", label: "Team" }}
      nextPage={{ href: "/notebook", label: "Notebook" }}
    />
  );
}
