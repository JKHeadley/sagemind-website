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

// Business hours (in TIMEZONE above)
const BUSINESS_HOURS = {
  start: 9, // 9 AM
  end: 17, // 5 PM
};

// Days to look ahead for availability
const DAYS_AHEAD = 14;

// PST/PDT offset from UTC (hours) - simplified, doesn't handle DST transitions perfectly
const PST_OFFSET = -8;

export interface TimeSlot {
  start: string; // ISO string in UTC
  end: string; // ISO string in UTC
  display: string; // Human-readable (PST)
}

export interface BookingData {
  name: string;
  email: string;
  company?: string;
  notes?: string;
  slot: TimeSlot;
}

/**
 * Convert a date to PST/PDT timezone offset
 * Returns the offset in hours (negative for west of UTC)
 */
function getPSTOffset(date: Date): number {
  // Simple DST check for US Pacific Time
  // DST starts second Sunday of March, ends first Sunday of November
  const year = date.getUTCFullYear();
  const month = date.getUTCMonth();
  const day = date.getUTCDate();

  // March - check if after second Sunday
  if (month === 2) {
    const firstDay = new Date(Date.UTC(year, 2, 1)).getUTCDay();
    const secondSunday = firstDay === 0 ? 8 : 15 - firstDay;
    if (day >= secondSunday) return -7; // PDT
  }
  // November - check if before first Sunday
  else if (month === 10) {
    const firstDay = new Date(Date.UTC(year, 10, 1)).getUTCDay();
    const firstSunday = firstDay === 0 ? 1 : 8 - firstDay;
    if (day < firstSunday) return -7; // PDT
  }
  // April through October = PDT
  else if (month > 2 && month < 10) {
    return -7; // PDT
  }

  return -8; // PST
}

/**
 * Create a date in Pacific time for a specific hour/minute
 */
function createPacificDate(baseDate: Date, hour: number, minute: number): Date {
  const year = baseDate.getUTCFullYear();
  const month = baseDate.getUTCMonth();
  const day = baseDate.getUTCDate();

  // Create date at the specified local time, then adjust to UTC
  const offset = getPSTOffset(baseDate);
  const utcHour = hour - offset; // Convert PST/PDT hour to UTC

  return new Date(Date.UTC(year, month, day, utcHour, minute, 0, 0));
}

/**
 * Get available time slots for the next N days
 */
export async function getAvailableSlots(): Promise<Record<string, TimeSlot[]>> {
  const calendar = getCalendarClient();

  const now = new Date();

  // Start from tomorrow (in Pacific time)
  const tomorrowUTC = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + 1
  ));

  const endDateUTC = new Date(Date.UTC(
    now.getUTCFullYear(),
    now.getUTCMonth(),
    now.getUTCDate() + DAYS_AHEAD
  ));

  // Get busy times from all configured calendars
  const busyResponse = await calendar.freebusy.query({
    requestBody: {
      timeMin: tomorrowUTC.toISOString(),
      timeMax: endDateUTC.toISOString(),
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
    const dayDate = new Date(Date.UTC(
      tomorrowUTC.getUTCFullYear(),
      tomorrowUTC.getUTCMonth(),
      tomorrowUTC.getUTCDate() + d
    ));

    // Skip weekends (check in Pacific time)
    const offset = getPSTOffset(dayDate);
    const pacificDay = new Date(dayDate.getTime() + offset * 60 * 60 * 1000).getUTCDay();
    if (pacificDay === 0 || pacificDay === 6) continue;

    const dateKey = dayDate.toISOString().split("T")[0];
    const slots: TimeSlot[] = [];

    // Generate slots for business hours (in Pacific time)
    for (let hour = BUSINESS_HOURS.start; hour < BUSINESS_HOURS.end; hour++) {
      for (let minute = 0; minute < 60; minute += MEETING_DURATION_MINUTES) {
        const slotStart = createPacificDate(dayDate, hour, minute);
        const slotEnd = new Date(slotStart.getTime() + MEETING_DURATION_MINUTES * 60 * 1000);

        // Skip if slot is in the past
        if (slotStart <= now) continue;

        // Check if slot conflicts with any busy time
        const isConflict = busyTimes.some((busy) => {
          const busyStart = new Date(busy.start!);
          const busyEnd = new Date(busy.end!);
          return slotStart < busyEnd && slotEnd > busyStart;
        });

        if (!isConflict) {
          // Format display time in Pacific
          const period = hour >= 12 ? "PM" : "AM";
          const displayHour = hour % 12 || 12;
          const displayMinutes = minute.toString().padStart(2, "0");
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

    // Create the calendar event using local time with timezone
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
        // Note: Service accounts can't add attendees without Domain-Wide Delegation
        // The confirmation email serves as the notification to the customer
        reminders: {
          useDefault: false,
          overrides: [
            { method: "email", minutes: 24 * 60 }, // 1 day before
            { method: "email", minutes: 60 }, // 1 hour before
          ],
        },
      },
      // sendUpdates not needed without attendees
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
