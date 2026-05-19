import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json().catch(() => ({}));
    const { email } = body;

    // Server-side validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;

    if (!apiKey || !audienceId) {
      console.error("Missing Resend API Configuration.");
      return NextResponse.json(
        { error: "Service configuration error. Please try again later." },
        { status: 500 }
      );
    }

    // Call the Resend Contacts API endpoint for the specific audience
    const res = await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${apiKey}`,
      },
      body: JSON.stringify({
        email: email.trim().toLowerCase(),
        unsubscribed: false,
      }),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      // Resend API returns specific errors for existing contacts, typically 409 Conflict
      const isDuplicate = 
        res.status === 409 || 
        data.statusCode === 409 || 
        data.name === "conflict" || 
        (data.message && data.message.toLowerCase().includes("already exists"));

      if (isDuplicate) {
        return NextResponse.json(
          { error: "This email is already subscribed!" },
          { status: 409 }
        );
      }

      console.error("Resend API failed:", data);
      return NextResponse.json(
        { error: data.message || "Failed to register subscription. Please try again." },
        { status: res.status }
      );
    }

    return NextResponse.json({ success: true, message: "Authorized successfully!" });
  } catch (error) {
    console.error("Newsletter API Route error:", error);
    return NextResponse.json(
      { error: "Internal server error. Please try again later." },
      { status: 500 }
    );
  }
}
