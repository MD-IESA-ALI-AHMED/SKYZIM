# Skyzim Realtors

Premium single-page real-estate landing website for Skyzim Realtors in Kolkata.

## Local development

```bash
npm install
npm run dev
```

## Production build

```bash
npm run build
```

## Preview production build

```bash
npm run preview
```

## Project structure

- `src/components` — landing-page sections and reusable blocks
- `src/data/site.ts` — copy, services, and contact metadata
- `src/App.tsx` — section composition and reveal logic
- `src/index.css` — Tailwind import, brand tokens, typography, and custom styling
- `public/favicon.svg` — brand icon
- `public/robots.txt` — crawler instruction file

## Content replacement

To update the founder photo placeholder, replace the file at `public/images/founder-muzaffar-ali-ahmed-rai.svg` with the final approved portrait.

To change the hero image or editorial photography, update the `src/components/Hero.tsx` and `src/components/About.tsx` image URLs.

## Deployment

This is a static Vite app and can be deployed to Vercel, Netlify, Cloudflare Pages, or any static host. After connecting the project to the production domain, add a sitemap and point the canonical metadata to the live URL as needed.

## Notes

- The WhatsApp link is configured for `+91 90071 00522`.
- The call link uses `tel:+919007100522`.
- The project placeholder section is intentionally designed so future property listings can be added cleanly without rewriting the layout.
