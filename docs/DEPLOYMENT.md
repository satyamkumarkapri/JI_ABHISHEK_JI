# Vercel Deployment & Production Guide

This guide details how to build, test, and deploy the official website for **JI ABHISHEK JI** to [Vercel](https://vercel.com/) with zero-cost serverless hosting and automated SSL.

---

## 1. Prerequisites
- A GitHub, GitLab, or Bitbucket account.
- A free Vercel account ([vercel.com](https://vercel.com/)).
- A verified Formspree account ([formspree.io](https://formspree.io/)).

---

## 2. Local Verification Checklist
Before pushing code to production, run:

```bash
# 1. Install dependencies
npm install

# 2. Run automated test suite (must pass 100%)
npm test

# 3. Lint the codebase (must have zero errors)
npm run lint

# 4. Verify the production build locally
npm run build
```

---

## 3. Step-by-Step Vercel Deployment

### Step 1: Push Code to GitHub
```bash
git init
git add .
git commit -m "feat: complete Ji Abhishek Ji official creator website"
git branch -M main
git remote add origin https://github.com/your-username/ji-abhishek-ji.git
git push -u origin main
```

### Step 2: Import into Vercel
1. Log in to [Vercel](https://vercel.com/) and click **"Add New..."** → **"Project"**.
2. Select your `ji-abhishek-ji` GitHub repository.
3. Vercel will automatically detect the **Vite** framework.
4. Keep the default build settings:
   - **Build Command:** `npm run build`
   - **Output Directory:** `dist`
   - **Install Command:** `npm install`

### Step 3: Add Environment Variables
In the **Environment Variables** panel in Vercel before clicking Deploy, add:

| Variable Name | Example / Purpose |
|---|---|
| `VITE_FORMSPREE_FAN_ID` | `xpwzqabk` (Formspree ID for `/connect`) |
| `VITE_FORMSPREE_BRAND_ID` | `mrbzqxyz` (Formspree ID for `/collaborations`) |
| `VITE_FORMSPREE_EVENT_ID` | `kdpezywa` (Formspree ID for `/events`) |
| `VITE_FORMSPREE_MEDIA_KIT_ID` | `tyqzlepm` (Formspree ID for media kit requests) |
| `VITE_SITE_URL` | `https://your-custom-domain.com` |
| `VITE_PUBLIC_CONTACT_EMAIL` | *(Optional)* |

*(If using a single unified form inbox, configure `VITE_FORMSPREE_SHARED_ID` instead.)*

### Step 4: Click Deploy
Vercel will build the bundle, generate optimized chunks, and provide a live URL (`https://ji-abhishek-ji.vercel.app`).

---

## 4. Single-Page Application (SPA) Deep Link Configuration
Direct page visits and browser refreshes on subroutes (such as `/videos`, `/collaborations`, `/connect`) work seamlessly because `vercel.json` contains the rewrite rule:

```json
{
  "framework": "vite",
  "rewrites": [
    {
      "source": "/(.*)",
      "destination": "/index.html"
    }
  ]
}
```

---

## 5. Connecting a Custom Domain (e.g. `jiabhishekji.com`)
1. In your Vercel Project Dashboard, navigate to **Settings** → **Domains**.
2. Enter your custom domain name (e.g., `jiabhishekji.com` or `www.jiabhishekji.com`).
3. Add the DNS records provided by Vercel to your domain registrar (GoDaddy, Namecheap, Cloudflare, etc.):
   - **CNAME:** `cname.vercel-dns.com` for `www`
   - **A Record:** `76.76.21.21` for apex domain
4. Vercel automatically provisions a free, auto-renewing SSL certificate.

---

## 6. Post-Deployment Verification Checklist
1. Visit `https://your-domain.com/` and ensure all sections, video modals, and navigation links load.
2. Directly open `https://your-domain.com/videos` and refresh the page to confirm SPA rewrite.
3. Directly open `https://your-domain.com/connect` and submit a test inquiry. Confirm receipt in your Formspree dashboard and email inbox.
4. Directly open `https://your-domain.com/collaborations` and test the brand form.
5. Click on the Instagram and YouTube links in header and footer to confirm they route to official profiles.
