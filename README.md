# EuroModel Hub — Landing Page

A custom, production-ready marketing site for **EuroModel Hub**, the EU-hosted
platform to deploy, serve, manage, and scale AI models with GDPR-compliant
data residency. Built to replace the generic Odoo placeholder on
`euromodelhub.ai`.

Tagline: **Trust AI. Together.**

## Stack

- [Next.js 14](https://nextjs.org/) (App Router)
- [React 18](https://react.dev/)
- [Tailwind CSS 3](https://tailwindcss.com/)
- [TypeScript 5](https://www.typescriptlang.org/)

No runtime dependencies beyond React/Next. All graphics are CSS/SVG — no stock
photos, no image assets to manage.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build & lint

```bash
npm run build        # production build
npm run start        # serve the production build
npm run lint         # eslint
npm run typecheck    # tsc --noEmit
```

`npm install` and `npm run build` both complete cleanly with no lint or type
errors.

## Deploying

### Vercel (recommended)
1. Push the repo to GitHub/GitLab/Bitbucket.
2. Import it at [vercel.com/new](https://vercel.com/new). Framework is
   auto-detected as Next.js — no config needed.
3. Deploy. No environment variables are required.

### Netlify
1. New site from Git.
2. Build command: `npm run build`
3. Publish directory: `.next` (Netlify auto-detects Next.js via the Next
   Runtime plugin; install the Next plugin if prompted).

### Static export (any CDN / S3 / Nginx)
The site is fully static. To export a `out/` folder:

1. In `next.config.js`, add `output: "export"`.
2. Run `npm run build` — the `out/` directory is your deployable bundle.
3. Serve `out/` from any static host (Cloudflare Pages, S3 + CloudFront,
   GitHub Pages, an Nginx box, etc.).

> Note: the contact form on the page is a front-end demo (`onSubmit` prevents
> default). Wire it to your CRM / email / form backend before going live.

## Where to customize content

All copy and structure live in self-contained components under `components/`
and `app/`:

| What you want to change | File |
| --- | --- |
| Page metadata, `<title>`, SEO, OG tags | `app/layout.tsx` |
| Page section order | `app/page.tsx` |
| Hero headline, subhead, CTAs, console visual | `components/Hero.tsx` |
| Feature cards (value props) | `components/Features.tsx` |
| How-it-works steps | `components/HowItWorks.tsx` |
| EU / GDPR trust section & compliance checklist | `components/TrustEU.tsx` |
| Framework grid | `components/Frameworks.tsx` |
| Plans / pricing | `components/Pricing.tsx` |
| Contact / request-access CTA & form | `components/CTA.tsx` |
| Footer links, legal, "Made in Europe" | `components/Footer.tsx` |
| Top nav + logo | `components/Nav.tsx` |
| Brand color system, fonts, buttons, motion | `tailwind.config.ts`, `app/globals.css` |
| EU flag / stars SVG marks | `components/eu-flag.tsx` |

### Brand tokens
The color system is defined in `tailwind.config.ts`:

- `ink` / `brand` — the deep European navy used for dark sections and text.
- `eu.blue` (`#003399`) — the EU flag blue, used in accents.
- `accent` (`#FFB200`) — a warm gold (EU-stars-inspired) for CTAs and highlights.
- `cloud` — the light page background.

Change those four values and the whole site re-skins.

## Accessibility

- Semantic HTML (`<header>`, `<main>`, `<nav>`, `<section>`, `<footer>`,
  `<ol>` for steps).
- Visible focus rings (`:focus-visible`).
- Color contrast meets WCAG AA on both light and dark sections.
- `prefers-reduced-motion` disables animations.
- All decorative SVGs are `aria-hidden`; the logo link has an accessible label.

## Project structure

```
euro-model-hub/
├── app/
│   ├── globals.css      # Tailwind + base styles + component classes
│   ├── layout.tsx       # Root layout + metadata
│   └── page.tsx         # Homepage (assembles sections)
├── components/
│   ├── Nav.tsx
│   ├── Hero.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── TrustEU.tsx
│   ├── Frameworks.tsx
│   ├── Pricing.tsx
│   ├── CTA.tsx
│   ├── Footer.tsx
│   ├── eu-flag.tsx      # EU flag / stars SVG marks
│   └── icons.tsx        # Inline SVG icon set
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

---

© EuroModel Hub. Trust AI. Together.
