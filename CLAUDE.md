# Jigeum - K-Beauty Magazine

## Project Overview
Jigeum (지금) is a K-Beauty magazine website that curates trending Korean skincare products. The site targets English-speaking audiences interested in K-Beauty trends.

**Live URL**: https://jigeum.today

## Tech Stack
- **Framework**: Next.js 16 (App Router)
- **React**: 19.x
- **Styling**: Tailwind CSS 4
- **Animation**: Framer Motion
- **Icons**: lucide-react
- **Language**: TypeScript
- **Deployment**: Vercel

## Project Structure
```
app/
├── components/     # React components
├── data/          # Product and routine data
├── layout.tsx     # Root layout with metadata
├── page.tsx       # Main page (client component)
├── globals.css    # Global styles
└── sitemap.ts     # Dynamic sitemap generation
```

## Development Commands
```bash
npm run dev      # Start development server
npm run build    # Production build
npm run lint     # Run ESLint
npm run start    # Start production server
```

## Coding Conventions

### Components
- Use functional components with TypeScript
- Client components must have `'use client'` directive at top
- Component files use PascalCase (e.g., `ProductCard.tsx`)
- Use Framer Motion for animations

### Styling
- Use Tailwind CSS utility classes
- Dark theme by default (bg-black, text-white)
- Use `text-pink-400` for accent colors
- Mobile-first responsive design with `lg:` breakpoints

### Data
- Product data is stored in `app/data/products.ts`
- Routine data is stored in `app/data/routines.ts`
- Product images use Amazon CDN URLs

### SEO
- Metadata is defined in `layout.tsx`
- JSON-LD structured data via `JsonLd.tsx`
- Dynamic sitemap generation in `sitemap.ts`

## Important Notes

### Affiliate Links
- All product links are Amazon affiliate links
- Do not modify affiliate tag parameters without confirmation

### Content Language
- UI text is primarily in English
- Brand name "지금" (Jigeum) is in Korean
- Target audience is international K-Beauty enthusiasts

### Documentation
- **Walkthrough documents** (`walkthrough.md`) should always be written in **Korean** as per user preference.
- Technical documentation within the code (comments, JSDoc) remains in English.

### Environment Variables
- `NEXT_PUBLIC_GA_ID` - Google Analytics ID
- `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION` - Google Search Console verification

## When Making Changes

1. **Adding Products**: Edit `app/data/products.ts`
2. **Adding Routines**: Edit `app/data/routines.ts`
3. **Styling Changes**: Use existing Tailwind classes, maintain dark theme
4. **New Components**: Add to `app/components/` directory
5. **SEO Updates**: Update metadata in `layout.tsx`

## Build Verification
Always run `npm run build` before committing to ensure no TypeScript or build errors.
