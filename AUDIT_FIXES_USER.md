# Website Audit Fixes - User Action Required

These issues require decisions, external services, or content that only you can provide.

---

## High Priority

- [ ] **Stats section needs real metrics or removal**
  - File: `site/src/app/page.tsx:5-10`
  - Current stats ("Fast", "Bespoke", "100% Custom Built") aren't real numbers
  - **Options:**
    - [ ] Provide real metrics (e.g., "50+ Projects", "20+ Clients", etc.)
    - [ ] Remove the stats section entirely
    - [ ] Keep as-is (not recommended)
  - **Action needed:** Provide actual numbers or decide to remove

- [ ] **Only one featured project (Bot-Me.ai)**
  - File: `site/src/app/page.tsx:166-237`
  - **Options:**
    - [ ] Provide 1-2 additional project examples with descriptions
    - [ ] Provide a real screenshot of Bot-Me.ai
    - [ ] Keep as-is
  - **Action needed:** Provide additional projects or screenshot

## Medium Priority

- [ ] **Verify LinkedIn company page exists**
  - URL: `linkedin.com/company/sagemind-ai`
  - **Action needed:**
    - [ ] Verify page exists and has content
    - [ ] If not, create it OR provide alternative (Justin's personal LinkedIn?)

- [ ] **No testimonials or client logos**
  - **Options:**
    - [ ] Provide 2-3 client testimonials (name, company, quote)
    - [ ] Provide client logos (with permission)
    - [ ] Skip for now (can add later)
  - **Action needed:** Provide testimonials/logos if available

- [ ] **No pricing or engagement model info**
  - **Options:**
    - [ ] Provide starting prices or price ranges
    - [ ] Provide typical project timelines
    - [ ] Describe engagement model (hourly, fixed, retainer)
    - [ ] Keep pricing off-site intentionally
  - **Action needed:** Decide on pricing transparency

## Low Priority

- [ ] **Consider adding FAQ section**
  - **Action needed:** Provide 5-8 common questions and answers if desired

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
