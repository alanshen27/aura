import type { Metadata } from "next";
import { getWikiPage } from "@/content/wiki";
import WikiLayout from "@/components/WikiLayout";

export const metadata: Metadata = {
  title: "Team Members",
  description: "Meet our iGEM team.",
};

export default function TeamPage() {
  const page = getWikiPage("team");
  if (!page) return <p>Page not found.</p>;

  return (
    <WikiLayout
      title="Team Members"
      section="team"
      breadcrumbs={[{ href: "/team", label: "team" }]}
      markdown={page.markdown}
      prevPage={{ href: "/education", label: "Education" }}
      nextPage={{ href: "/attributions", label: "Attributions" }}
    />
  );
}
