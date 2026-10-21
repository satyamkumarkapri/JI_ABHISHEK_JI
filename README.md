# JI ABHISHEK JI — Official Creator Website

> **"From Bihar, With Love."**  
> *Comedy, kahaniyan aur zindagi ke asli pal.*

The complete, production-ready official creator portfolio and business hub for **JI ABHISHEK JI** (Abhishek Singh), an Indian comedian, entertainer, and digital content creator.

---

## 🌟 Key Features

- **Cinematic Visual Identity:** Deep obsidian & charcoal backgrounds (`#09090b`), champagne gold & warm ivory accents (`#d4af37`), refined glassmorphism, and responsive typography supporting both Latin and Devanagari scripts (`Cinzel`, `Plus Jakarta Sans`, `Noto Sans Devanagari`).
- **Complete Page Ecosystem:**
  - `Home` (`/`): Immersive hero, creator bio, verified social presence, video spotlight, editorial category tiles, and collaboration CTAs.
  - `About` (`/about`): Biography, artistic philosophy, creative milestones, and photo preview.
  - `Videos` (`/videos`): Searchable and filterable video library with accessible YouTube embed modal.
  - `Gallery` (`/gallery`): Editorial masonry photography gallery with keyboard-navigable Lightbox.
  - `Connect` (`/connect`): Fan interaction form for messages, question submissions, and video ideas.
  - `Brand Collaborations` (`/collaborations`): Business-facing portal with structured brief submission and media kit request.
  - `Events` (`/events`): Event booking inquiry form for college cultural fests, corporate events, and live comedy shows.
  - `Contact Hub` (`/contact`): Centralized routing hub for all communication channels.
  - `Legal & Compliance`: Full GDPR/CCPA-aligned Privacy Policy (`/privacy`), Terms of Use (`/terms`), and Cookie Policy (`/cookies`).
  - `Custom 404`: Cinematic "Scene Not Found" page (`*`).
- **Zero Backend / Zero Database Dependency:** 100% static frontend deployable to Vercel with zero infrastructure cost or database maintenance.
- **Formspree Integration:** Public forms submit securely to Formspree endpoints with rate-limiting, spam protection, and real-time email routing.
- **Strict Data Integrity:** No invented statistics, fake testimonials, unverified awards, or arbitrary phone numbers.

---

## 🛠️ Technology Stack

- **Framework:** React 19 + Vite 8
- **Language:** TypeScript (Strict Mode)
- **Styling:** Tailwind CSS v4 (Theme tokens in `@theme`)
- **Routing:** React Router v7 (SPA with `vercel.json` rewrites)
- **Animations:** Framer Motion (respects `prefers-reduced-motion`)
- **Icons:** Lucide React + custom pixel-perfect brand SVG icons
- **Form Management:** React Hook Form
- **Schema Validation:** Zod
- **Testing:** Vitest
- **Code Quality:** Oxlint + Prettier

---

## 🚀 Quick Start

### 1. Clone & Install
```bash
git clone https://github.com/your-username/ji-abhishek-ji.git
cd ji-abhishek-ji
npm install
```

### 2. Configure Environment Variables
Copy `.env.example` to `.env`:
```bash
cp .env.example .env
```
Populate your Formspree Form IDs from [formspree.io](https://formspree.io):
```env
VITE_FORMSPREE_FAN_ID=
VITE_FORMSPREE_BRAND_ID=
VITE_FORMSPREE_EVENT_ID=
VITE_FORMSPREE_MEDIA_KIT_ID=
VITE_FORMSPREE_SHARED_ID=
VITE_SITE_URL=https://ji-abhishek-ji.vercel.app
```

### 3. Run Locally
```bash
npm run dev
```
Open `http://localhost:5173` in your browser.

### 4. Run Automated Tests
```bash
npm test
```

### 5. Production Build
```bash
npm run build
```

---

## 📚 Documentation

- [Formspree Setup Guide](docs/FORMSPREE_SETUP.md) — How to obtain Form IDs, set up notifications, and configure endpoints.
- [Content Setup Guide](docs/CONTENT_SETUP.md) — How to update portraits, add YouTube videos, and update milestones.
- [Vercel Deployment Guide](docs/DEPLOYMENT.md) — Step-by-step instructions to deploy to Vercel and connect custom domains.

---

## 📄 License & Attribution
© 2025 JI ABHISHEK JI (Abhishek Singh). All rights reserved.
