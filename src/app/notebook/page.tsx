import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Lab Notebook",
  description: "Our lab notebook documenting daily experiments and observations.",
};

export default function NotebookPage() {
  const page = getWikiPage("notebook");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Lab Notebook"
      section="notebook"
      breadcrumbs={[{ href: "/notebook", label: "notebook" }]}
      markdown={page.markdown}
      prevPage={{ href: "/attributions", label: "Attributions" }}
    />
  );
}
