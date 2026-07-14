# Lateral — SaaS Landing Page

A fully responsive SaaS landing page built with **Next.js (App Router)**, **JavaScript**, and **Tailwind CSS v4**, inspired by the Lateral SaaS template.

## Run locally

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Build for production

```bash
npm run build
npm run start
```

## Structure

- `app/layout.js` — root layout, global fonts/metadata
- `app/page.js` — assembles all sections
- `app/globals.css` — Tailwind + theme tokens (purple/orange brand palette)
- `components/` — Header, Hero, BuildSection, Features, Pricing, Testimonials, Brands, HelpSupport, CTA, Footer, DashboardMockup

## Notes

- Pricing toggle (Monthly/Yearly) is interactive.
- Mobile menu is interactive (hamburger).
- All dashboard mockup graphics are hand-built with inline SVG (no external images/licensing).

## Authentication (fully working)

- `/register` — create an account (name, email, password). Data is stored in the browser's `localStorage`, no backend required.
- `/login` — log in with the email/password you registered.
- `/dashboard` — protected page; redirects to `/login` if not signed in. Shows your name, email, and plan, with a working Sign Out.
- Header automatically switches between Login/Get Started and Dashboard/Sign out depending on session state.
- Pricing "Sign up" buttons pass the selected plan to the register page.

Note: since this is client-side-only storage, accounts are per-browser (clearing site data/localStorage removes them). For real production use, connect this to a backend/auth provider (e.g. NextAuth, Supabase, Clerk).
