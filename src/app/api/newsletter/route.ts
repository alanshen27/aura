import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, interest, consent, source, createdAt } = body;

    if (!email || typeof email !== "string") {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    const lead = {
      email,
      interest: interest || null,
      consent: consent ?? false,
      source: source || "unknown",
      createdAt: createdAt || new Date().toISOString(),
    };

    // MVP: log to console. Replace with email provider (Resend, Mailchimp, etc.) for production.
    console.log("[newsletter] New subscriber:", JSON.stringify(lead, null, 2));

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json(
      { error: "Invalid request" },
      { status: 400 }
    );
  }
}
