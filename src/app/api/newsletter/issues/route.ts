import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const issues = await prisma.newsletterIssue.findMany({
      where: { published: true },
      orderBy: { number: "desc" },
    });
    return NextResponse.json(issues);
  } catch (err) {
    console.error("[newsletter/issues] Error:", err);
    return NextResponse.json({ error: "Failed to fetch issues" }, { status: 500 });
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { number, title, summary, contentHtml, linkedModules, published } = body;

    if (!title || !number) {
      return NextResponse.json({ error: "Title and number are required" }, { status: 400 });
    }

    const issue = await prisma.newsletterIssue.upsert({
      where: { number },
      update: {
        title,
        summary: summary || "",
        contentHtml: contentHtml || "",
        linkedModules: linkedModules || [],
        published: published ?? false,
      },
      create: {
        number,
        title,
        summary: summary || "",
        contentHtml: contentHtml || "",
        linkedModules: linkedModules || [],
        published: published ?? false,
      },
    });

    return NextResponse.json(issue);
  } catch (err) {
    console.error("[newsletter/issues] Error:", err);
    return NextResponse.json({ error: "Failed to save issue" }, { status: 500 });
  }
}
