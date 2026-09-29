# עורקבי — דף נחיתה למורה נהיגה פרטי

Hebrew/RTL marketing landing page for a private driving instructor business ("עורקבי" / Orkabi) in Israel.

## Stack

- [Next.js](https://nextjs.org) (App Router, TypeScript)
- [Tailwind CSS v4](https://tailwindcss.com)
- [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) — Rubik (headings) + Heebo (body), both with Hebrew glyph support
- [lucide-react](https://lucide.dev) for icons

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view it.

```bash
npm run build   # production build
npm run lint    # eslint
```

## Content

All business-specific data (name, phone/WhatsApp numbers, pricing, service-area cities, testimonials, license/insurance text, etc.) lives in one place: `content/site-content.ts`. It currently holds realistic-looking **placeholder** data — see the comment at the top of that file for the full list of fields the client needs to replace with real business details before launch.

## Structure

- `app/layout.tsx` — root layout, fonts, `<html lang="he" dir="rtl">`, global Nav/Footer/sticky CTA
- `app/page.tsx` — assembles all landing page sections in order
- `components/` — `Nav`, `Hero`, `StickyCTA` (persistent mobile call/WhatsApp bar)
- `components/sections/` — page sections (About, Services, Process, WhyUs, Pricing, ServiceArea, Testimonials, Faq, Contact, Footer)
- `components/ui/` — shared design-system primitives (Button, Card, Badge, SectionHeading, StarRating, etc.)
- `content/` — `types.ts` (content schema) and `site-content.ts` (the actual placeholder content)
