import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, interest, consent, source } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json({ error: "Email is required" }, { status: 400 });
    }

    const lead = await prisma.newsletterLead.upsert({
      where: { email },
      update: {
        interest: interest || null,
        consent: consent ?? false,
        source: source || "unknown",
      },
      create: {
        email,
        interest: interest || null,
        consent: consent ?? false,
        source: source || "unknown",
      },
    });

    console.log("[newsletter] Subscriber:", lead.id, lead.email);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[newsletter] Error:", err);
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }
}
