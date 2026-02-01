import { google } from "googleapis";

// Initialize Google Calendar API with service account
function getCalendarClient() {
  const credentials = JSON.parse(process.env.GOOGLE_SERVICE_ACCOUNT_KEY || "{}");

  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ["https://www.googleapis.com/auth/calendar"],
  });

  return google.calendar({ version: "v3", auth });
}

// Configuration
const PRIMARY_CALENDAR_ID = process.env.GOOGLE_CALENDAR_ID || "primary";
const CALENDAR_IDS = process.env.GOOGLE_CALENDAR_IDS
  ? process.env.GOOGLE_CALENDAR_IDS.split(",").map((id) => id.trim())
  : [PRIMARY_CALENDAR_ID];
const TIMEZONE = process.env.TIMEZONE || "America/Los_Angeles";
const MEETING_DURATION_MINUTES = 30;

// Business hours (Pacific Time)
const BUSINESS_HOURS = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};

// Days to look ahead for availability
const DAYS_AHEAD = 14;

export interface TimeSlot {
  start: string; // ISO string
  end: string; // ISO string
  display: string; // Human-readable
}

export interface BookingData {
  name: string;
  email: string;
  company?: string;
  notes?: string;
  slot: TimeSlot;
}

/**
 * Get available time slots for the next N days
 */
export async function getAvailableSlots(): Promise<Record<string, TimeSlot[]>> {
  const calendar = getCalendarClient();

  const now = new Date();
  const startOfToday = new Date(now);
  startOfToday.setHours(0, 0, 0, 0);

  // Start from tomorrow to give buffer
  const startDate = new Date(startOfToday);
  startDate.setDate(startDate.getDate() + 1);

  const endDate = new Date(startOfToday);
  endDate.setDate(endDate.getDate() + DAYS_AHEAD);

  // Get busy times from all configured calendars
  const busyResponse = await calendar.freebusy.query({
    requestBody: {
      timeMin: startDate.toISOString(),
      timeMax: endDate.toISOString(),
      timeZone: TIMEZONE,
      items: CALENDAR_IDS.map((id) => ({ id })),
    },
  });

  // Aggregate busy times from all calendars
  const busyTimes: { start?: string | null; end?: string | null }[] = [];
  for (const calendarId of CALENDAR_IDS) {
    const calendarBusy = busyResponse.data.calendars?.[calendarId]?.busy || [];
    busyTimes.push(...calendarBusy);
  }

  // Generate all possible slots and filter out busy ones
  const slotsByDay: Record<string, TimeSlot[]> = {};

  for (let d = 0; d < DAYS_AHEAD; d++) {
    const date = new Date(startDate);
    date.setDate(startDate.getDate() + d);

    // Skip weekends
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) continue;

    const dateKey = date.toISOString().split("T")[0];
    const slots: TimeSlot[] = [];

    // Generate slots for business hours
    for (let hour = BUSINESS_HOURS.start; hour < BUSINESS_HOURS.end; hour++) {
      for (let minute = 0; minute < 60; minute += MEETING_DURATION_MINUTES) {
        const slotStart = new Date(date);
        slotStart.setHours(hour, minute, 0, 0);

        const slotEnd = new Date(slotStart);
        slotEnd.setMinutes(slotEnd.getMinutes() + MEETING_DURATION_MINUTES);

        // Skip if slot is in the past
        if (slotStart <= now) continue;

        // Check if slot conflicts with any busy time
        const isConflict = busyTimes.some((busy) => {
          const busyStart = new Date(busy.start!);
          const busyEnd = new Date(busy.end!);
          return slotStart < busyEnd && slotEnd > busyStart;
        });

        if (!isConflict) {
          // Format time manually to avoid timezone issues in serverless
          const hours = slotStart.getHours();
          const minutes = slotStart.getMinutes();
          const period = hours >= 12 ? "PM" : "AM";
          const displayHour = hours % 12 || 12;
          const displayMinutes = minutes.toString().padStart(2, "0");
          const display = `${displayHour}:${displayMinutes} ${period}`;

          slots.push({
            start: slotStart.toISOString(),
            end: slotEnd.toISOString(),
            display,
          });
        }
      }
    }

    if (slots.length > 0) {
      slotsByDay[dateKey] = slots;
    }
  }

  return slotsByDay;
}

/**
 * Book a time slot by creating a calendar event
 */
export async function bookSlot(booking: BookingData): Promise<{ success: boolean; eventId?: string; error?: string }> {
  const calendar = getCalendarClient();

  try {
    // Verify the slot is still available across all calendars
    const busyResponse = await calendar.freebusy.query({
      requestBody: {
        timeMin: booking.slot.start,
        timeMax: booking.slot.end,
        timeZone: TIMEZONE,
        items: CALENDAR_IDS.map((id) => ({ id })),
      },
    });

    // Check if any calendar has a conflict
    for (const calendarId of CALENDAR_IDS) {
      const busyTimes = busyResponse.data.calendars?.[calendarId]?.busy || [];
      if (busyTimes.length > 0) {
        return { success: false, error: "This time slot is no longer available." };
      }
    }

    // Create the calendar event
    const event = await calendar.events.insert({
      calendarId: PRIMARY_CALENDAR_ID,
      requestBody: {
        summary: `Consultation: ${booking.name}${booking.company ? ` (${booking.company})` : ""}`,
        description: `
Consultation call with ${booking.name}
Email: ${booking.email}
${booking.company ? `Company: ${booking.company}\n` : ""}
${booking.notes ? `Notes: ${booking.notes}` : ""}

Booked via SageMind AI website
        `.trim(),
        start: {
          dateTime: booking.slot.start,
          timeZone: TIMEZONE,
        },
        end: {
          dateTime: booking.slot.end,
          timeZone: TIMEZONE,
        },
        attendees: [{ email: booking.email }],
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // 1 day before
            { method: "email", minutes: 60 }, // 1 hour before
          ],
        },
      },
      sendUpdates: "all", // Send invite to attendee
    });

    return { success: true, eventId: event.data.id || undefined };
  } catch (error: unknown) {
    const err = error as { code?: number; message?: string; errors?: Array<{ message: string }> };
    console.error("Error booking slot:", JSON.stringify({
      code: err.code,
      message: err.message,
      errors: err.errors,
      calendarId: PRIMARY_CALENDAR_ID,
    }));
    return { success: false, error: "Failed to create booking. Please try again." };
  }
}
