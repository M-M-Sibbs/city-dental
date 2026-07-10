<<<<<<< HEAD
# City Dental — Next.js website

Modern, SEO-optimised website for City Dental (Harare, Zimbabwe), rebuilt from the
original static HTML site into a Next.js 15 (App Router) + TypeScript + Tailwind app.
Booking and contact form submissions are emailed to the clinic.

## What's inside

- **Pages**: Home, About, Services (+ full price list), 6 individual service pages
  (Teeth Whitening, Veneers, Dental Implants, Invisalign, General Dentistry, Emergency
  Dentistry), Gallery, Testimonials, Contact, Booking, Privacy Policy, Terms of Service,
  and a custom 404.
- **Working forms**: the Booking and Contact forms POST to API routes that email the
  clinic inbox (`butetemunyaradzi@gmail.com`) with spam honeypot + validation.
- **SEO**: per-page titles/descriptions/canonicals, Open Graph + Twitter cards,
  `Dentist` / `MedicalProcedure` / `FAQPage` / `Review` / `BreadcrumbList` JSON-LD,
  auto-generated `sitemap.xml`, `robots.txt`, and a PWA manifest.
- **Performance**: self-hosted fonts (no Google Fonts round-trip), inline SVG icons
  (no icon-font), static generation for every content page.

## Run locally

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
```

## Deploy to Vercel

1. Push this folder to a GitHub repository.
2. In Vercel, **Add New → Project** and import the repo. Framework preset: **Next.js**
   (auto-detected). Click **Deploy**.
3. Add environment variables (see below) under **Settings → Environment Variables**,
   then redeploy so the forms can send email.
4. (Optional) add your custom domain under **Settings → Domains** and update
   `NEXT_PUBLIC_SITE_URL` to match.

Alternatively, from this folder:

```bash
npm i -g vercel
vercel            # follow the prompts
vercel --prod     # deploy to production
```

## Email setup (required for the forms)

The forms send to `BOOKING_INBOX` (defaults to `butetemunyaradzi@gmail.com`).
Pick **one** provider and set its variables in Vercel — see `.env.example`:

- **Resend** (recommended): set `RESEND_API_KEY`. Free tier is plenty for a clinic.
- **Gmail SMTP**: set `GMAIL_USER` + `GMAIL_APP_PASSWORD` (a Google *App Password*,
  not the normal password; requires 2-Step Verification).

Until a provider is configured, the forms return a friendly "email is not configured"
message and patients are prompted to call or WhatsApp instead — nothing breaks.

## Editing content

Almost all copy lives in plain data files under `src/lib/`:

- `site.ts` — clinic name, phone, WhatsApp, email, address, hours, stats, insurers, team, FAQs.
- `services.ts` — the price list and the six service detail pages.
- `testimonials.ts` — patient reviews.

Change a value there and it updates everywhere it appears.
=======
# city-dental
dental project
>>>>>>> 61c19146d79641557cbce83d107049c85bf74a02
