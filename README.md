# Sakshi Traders website

Next.js 15 (App Router) + TypeScript + Tailwind CSS 4.

## Run

```bash
npm install
npm run dev        # http://localhost:3000
npm run typecheck
npm run build && npm start
```

Deploy on Vercel: import the folder, no settings needed.

## Edit content

Everything the client may change is in `src/lib/site.ts`:
phone number, the five ranges, the catalogue (product names, specs, photos) and the quote-form options.
Photos live in `public/img`. After adding a photo, add its size to `src/lib/image-sizes.ts` (and `pos` in the product entry if the square crop cuts it badly).

## Structure

- `src/app/layout.tsx`  fonts, SEO metadata, LocalBusiness structured data
- `src/app/page.tsx`  page order
- `src/components/*`  one file per section (hero with product tags, marquee, scrolling ranges, catalogue with Ask-rate buttons, process, contact)
- `src/components/ui/scroll-01.tsx`  21st.dev component (felipemenezes098): sticky photo that swaps while the ranges scroll past
- `src/components/ui/vertical-cut-reveal.tsx`  21st.dev component (cnippet-dev): hero headline cuts in word by word
- `src/components/ui/footer-with-suite.tsx`  21st.dev component (scrollxui), adapted for this brand

## Motion

Opening sequence (headline, photo wipe, tags) then motion only answers scroll or pointer: scroll reveals (`RevealObserver`), count-up, catalogue spotlight, marquee, scroll progress line. Everything stops for visitors who set reduced motion. The two 21st.dev components need the `motion` package (already in package.json).

## Notes

- The quote form has no backend. It builds a WhatsApp message and opens it.
- Delivery is stated as Gujarat only, in the hero, workshop, why-us and contact sections.
