import { NextResponse } from "next/server";
import { getAvailableSlots } from "@/lib/google-calendar";

export async function GET() {
  try {
    // Check if Google Calendar is configured
    if (!process.env.GOOGLE_SERVICE_ACCOUNT_KEY || !process.env.GOOGLE_CALENDAR_ID) {
      return NextResponse.json(
        { error: "Scheduling is not configured." },
        { status: 503 }
      );
    }

    const slots = await getAvailableSlots();

    return NextResponse.json({ slots });
  } catch (error) {
    console.error("Error fetching slots:", error);
    return NextResponse.json(
      { error: "Failed to fetch available times. Please try again later." },
      { status: 500 }
    );
  }
}

// Revalidate every 5 minutes
export const revalidate = 300;
