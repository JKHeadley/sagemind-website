import { NextRequest, NextResponse } from "next/server";
import { bookSlot, BookingData } from "@/lib/google-calendar";
import nodemailer from "nodemailer";

// Rate limiting
const rateLimit = new Map<string, { count: number; resetTime: number }>();
const RATE_LIMIT_MAX = 20;
const RATE_LIMIT_WINDOW = 60 * 60 * 1000; // 1 hour

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const record = rateLimit.get(ip);

  if (!record || now > record.resetTime) {
    rateLimit.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW });
    return false;
  }

  if (record.count >= RATE_LIMIT_MAX) {
    return true;
  }

  record.count++;
  return false;
}

export async function POST(request: NextRequest) {
  try {
    // Check configuration
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.GOOGLE_CALENDAR_ID) {
      return NextResponse.json(
        { error: "Scheduling is not configured." },
        { status: 503 }
      );
    }

    // Rate limiting
    const ip = request.headers.get("x-forwarded-for") || "unknown";
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many booking attempts. Please try again later." },
        { status: 429 }
      );
    }

    const body = await request.json();
    const { name, email, company, notes, slot } = body;

    // Validate required fields
    if (!name || !email || !slot?.start || !slot?.end) {
      return NextResponse.json(
        { error: "Name, email, and time slot are required." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // Book the slot
    const booking: BookingData = { name, email, company, notes, slot };
    const result = await bookSlot(booking);

    if (!result.success) {
      return NextResponse.json(
        { error: result.error },
        { status: 400 }
      );
    }

    // Send confirmation email to the business
    if (process.env.GMAIL_USER && process.env.GMAIL_APP_PASSWORD) {
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: process.env.GMAIL_USER,
          pass: process.env.GMAIL_APP_PASSWORD,
        },
      });

      const meetingDate = new Date(slot.start);
      const dateStr = meetingDate.toLocaleDateString("en-US", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        timeZone: process.env.TIMEZONE || "America/Los_Angeles",
      });
      const timeStr = meetingDate.toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
        timeZone: process.env.TIMEZONE || "America/Los_Angeles",
      });

      await transporter.sendMail({
        from: process.env.GMAIL_USER,
        to: process.env.CONTACT_EMAIL || process.env.GMAIL_USER,
        subject: `New Consultation Booked: ${name} - ${dateStr}`,
        html: `
<!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background: linear-gradient(135deg, #0ff4c6 0%, #00d4aa 100%); color: #0a0a0f; padding: 20px; border-radius: 8px 8px 0 0; }
    .content { background: #f9fafb; padding: 24px; border-radius: 0 0 8px 8px; }
    .field { margin-bottom: 16px; }
    .label { font-weight: 600; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 0.05em; }
    .value { margin-top: 4px; color: #111827; }
    .highlight { background: white; padding: 16px; border-radius: 8px; border-left: 4px solid #0ff4c6; margin: 16px 0; }
    .footer { margin-top: 24px; padding-top: 16px; border-top: 1px solid #e5e7eb; font-size: 12px; color: #9ca3af; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h1 style="margin: 0; font-size: 20px;">New Consultation Booked</h1>
      <p style="margin: 8px 0 0 0; opacity: 0.9;">A new call has been scheduled</p>
    </div>
    <div class="content">
      <div class="highlight">
        <strong style="font-size: 18px;">${dateStr}</strong><br>
        <span style="color: #6b7280;">${timeStr} Pacific</span>
      </div>
      <div class="field">
        <div class="label">Name</div>
        <div class="value">${name}</div>
      </div>
      <div class="field">
        <div class="label">Email</div>
        <div class="value"><a href="mailto:${email}">${email}</a></div>
      </div>
      ${company ? `
      <div class="field">
        <div class="label">Company</div>
        <div class="value">${company}</div>
      </div>
      ` : ""}
      ${notes ? `
      <div class="field">
        <div class="label">Notes</div>
        <div class="value">${notes}</div>
      </div>
      ` : ""}
      <div class="footer">
        The calendar invite has been sent to both parties automatically.
      </div>
    </div>
  </div>
</body>
</html>
        `.trim(),
      });
    }

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully! Check your email for the calendar invite.",
    });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json(
      { error: "Failed to book consultation. Please try again later." },
      { status: 500 }
    );
  }
}
