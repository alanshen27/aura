import fs from "fs";
import path from "path";

export interface WikiPageData {
  slug: string;
  title: string;
  section: string;
  markdown: string;
}

const WIKI_DIR = path.join(process.cwd(), "src/content/wiki");

export function getWikiPage(slug: string): WikiPageData | null {
  const filePath = path.join(WIKI_DIR, `${slug}.md`);
  if (!fs.existsSync(filePath)) return null;

  const markdown = fs.readFileSync(filePath, "utf-8");
  const firstLine = markdown.split("\n").find((l) => l.startsWith("# "));
  const title = firstLine ? firstLine.replace(/^#\s+/, "") : slug;

  return { slug, title, section: "project", markdown };
}

export function getAllWikiSlugs(): string[] {
  return fs
    .readdirSync(WIKI_DIR)
    .filter((f) => f.endsWith(".md"))
    .map((f) => f.replace(/\.md$/, ""));
}
