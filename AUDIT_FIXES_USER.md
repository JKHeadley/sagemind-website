# Website Audit Fixes - User Action Required

These issues require decisions, external services, or content that only you can provide.

---

## High Priority

- [x] **Stats section needs real metrics or removal**
  - File: `site/src/app/page.tsx:5-10`
  - **Completed:** Updated to real metrics (18+ Years Experience, 10+ Projects Delivered, 5+ Happy Clients, 100% Custom Built)

- [x] **Only one featured project (Bot-Me.ai)**
  - **Completed:** Added real Bot-Me.ai screenshots (hero + bot marketplace). Reframed section as "From Our Lab" / "Built In-House" to clearly position as SageMind's own product.
  - **Date:** 2026-02-13

## Medium Priority

- [x] **Verify LinkedIn company page exists**
  - **Completed:** Verified correct URL is `linkedin.com/company/sagemindai` (no hyphen)
  - Website already uses the correct URL in Footer and Contact page

- [x] **No testimonials or client logos**
  - **Decision:** Skip for now — no client testimonials available yet. Can add later.
  - **Date:** 2026-02-13

- [x] **No pricing or engagement model info**
  - **Completed:** Added "Pricing & Engagement" section to Services page with small business starting price ($2,500), custom scoping for AI projects, and three engagement models (fixed, hourly, retainer). Updated FAQ with detailed pricing Q&A.
  - **Date:** 2026-02-13

## Low Priority

- [x] **Consider adding FAQ section**
  - **Completed:** Created `/faq` page with 16 questions across 6 categories (Pricing, Timeline, Process, AI & Technical, Client Requirements, Revisions)
  - Added FAQ link to navigation

---

## Decisions Made

| Issue | Decision | Date |
|-------|----------|------|
| Contact Form Backend | Use Gmail via Nodemailer | 2026-01-30 |
| Scheduling System | Custom build with Google Calendar | 2026-01-30 |

---

## Completed

- [x] **Contact form backend integration**
  - Implemented with Gmail/Nodemailer
  - API route: `/api/contact`

- [x] **Schedule a Call functionality**
  - Built custom scheduling page: `/schedule`
  - Integrates with Google Calendar API
  - Shows available slots, handles booking, sends confirmations
  - Contact page now links to `/schedule`

---

## Setup Required for Deployment

### 1. Gmail (Contact Form)
1. Enable 2FA on Gmail account
2. Generate App Password: https://myaccount.google.com/apppasswords
3. Add to Vercel environment variables:
   - `GMAIL_USER` = your Gmail address
   - `GMAIL_APP_PASSWORD` = the generated app password
   - `CONTACT_EMAIL` = info@sagemindai.io

### 2. Google Calendar (Scheduling)
1. Go to [Google Cloud Console](https://console.cloud.google.com)
2. Create a new project (or use existing)
3. Enable **Google Calendar API**:
   - Go to APIs & Services > Library
   - Search "Google Calendar API" and enable it
4. Create a **Service Account**:
   - Go to APIs & Services > Credentials
   - Click "Create Credentials" > "Service Account"
   - Give it a name, create it
   - Click on the service account > Keys > Add Key > Create new key > JSON
   - Download the JSON file
5. **Share your calendar** with the service account:
   - Open Google Calendar
   - Go to Settings > your calendar > Share with specific people
   - Add the service account email (found in the JSON as `client_email`)
   - Give it "Make changes to events" permission
6. Add to Vercel environment variables:
   - `GOOGLE_CALENDAR_ID` = your calendar email (usually your Gmail)
   - `GOOGLE_SERVICE_ACCOUNT_KEY` = paste entire JSON content as single line
   - `TIMEZONE` = America/Los_Angeles
