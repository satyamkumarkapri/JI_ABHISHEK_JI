# Formspree Integration & Setup Guide

This guide walks through configuring the form processing system for the official **JI ABHISHEK JI** creator website using [Formspree](https://formspree.io/).

---

## 1. Why Formspree?
The website is architected as a pure, lightning-fast static frontend deployable on Vercel without requiring a database, backend server, or credentials exposed in client code. Formspree processes inbound inquiries, filters spam, and delivers them directly to Abhishek's authorized email inbox.

---

## 2. Step-by-Step Setup Instructions

### Step 1: Create a Formspree Account
1. Visit [https://formspree.io/](https://formspree.io/) and register for a free account.
2. Verify your email address (this will be the destination email for inquiries).

### Step 2: Create Your Forms
In your Formspree dashboard, create four dedicated forms (or one unified form if preferred):

1. **Fan Connect Form**
   - Name: `Ji Abhishek Ji — Fan Messages`
   - Target notification email: Your authorized management or creator inbox.
   - Copy the 8-character Form ID (e.g., `xpwzqabk` from `https://formspree.io/f/xpwzqabk`).

2. **Brand Collaborations Form**
   - Name: `Ji Abhishek Ji — Brand Collabs`
   - Target notification email: Brands & business inbox.
   - Copy the Form ID.

3. **Event Booking Form**
   - Name: `Ji Abhishek Ji — Event Bookings`
   - Target notification email: Events & live bookings inbox.
   - Copy the Form ID.

4. **Media Kit Requests Form**
   - Name: `Ji Abhishek Ji — Media Kit Requests`
   - Copy the Form ID.

*(Optional Alternative: If you prefer a single inbox, create one form named `Ji Abhishek Ji — Official Inquiries` and use its ID for `VITE_FORMSPREE_SHARED_ID`.)*

### Step 3: Configure Environment Variables
Open the `.env` file in the root of the project (or create one by duplicating `.env.example`):

```bash
# Formspree Form Identifiers
VITE_FORMSPREE_FAN_ID=your_fan_form_id
VITE_FORMSPREE_BRAND_ID=your_brand_form_id
VITE_FORMSPREE_EVENT_ID=your_event_form_id
VITE_FORMSPREE_MEDIA_KIT_ID=your_media_kit_form_id

# Optional fallback single endpoint
VITE_FORMSPREE_SHARED_ID=

# Website Production URL
VITE_SITE_URL=https://ji-abhishek-ji.vercel.app

# Optional verified public business email (leave blank to route all through forms)
VITE_PUBLIC_CONTACT_EMAIL=
```

### Step 4: Test Form Submissions
1. Start the local server:
   ```bash
   npm run dev
   ```
2. Open `http://localhost:5173/connect` and submit a test message.
3. Open `http://localhost:5173/collaborations` and submit a test brief.
4. Verify that:
   - The form displays a loading indicator during submission.
   - A success state appears with a unique tracking reference code (`JA-FAN-...`).
   - A notification email arrives in your configured inbox with all submitted fields.

---

## 3. Production Deployment on Vercel
When deploying to Vercel:
1. Go to your Vercel Project Dashboard → **Settings** → **Environment Variables**.
2. Add each `VITE_FORMSPREE_*` variable defined above.
3. Trigger a redeploy.

---

## 4. Privacy & Anti-Spam Protections
- **Zero Fake Submissions:** When an endpoint ID is missing, the site presents a helpful development warning and safely disables form submission. It will never pretend an inquiry was delivered.
- **Client-Side Reference Codes:** Reference codes are clearly marked as client-side tracking helpers for user convenience.
- **Spam Filtering:** Formspree automatically applies machine-learning spam filtering, rate limiting, and origin restrictions.
- **Client-Side Validation:** All fields are checked client-side using Zod before transmission. (Note: Client-side validation is a UX convenience and not a security boundary.)

---

## 5. Optional Google Sheets & CRM Integration
Formspree natively supports exporting submissions as CSV or connecting directly to Google Sheets, Notion, or Slack through third-party webhooks (available on supported Formspree plans) without requiring backend code or storing service-account secrets in frontend repositories.
