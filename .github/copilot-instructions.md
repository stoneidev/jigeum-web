# Jigeum K-Beauty Magazine - AI Coding Guidelines

## Project Overview
Jigeum is a Next.js 16 magazine-style website showcasing trending Korean beauty products. Built with App Router, TypeScript, and Tailwind CSS 4. Focuses on K-Beauty trends, product curation, and affiliate marketing.

## Architecture & Data Flow
- **Data Layer**: Static data in `app/data/` (products.ts, ingredients.ts, routines.ts, tips.ts, trends.ts)
- **Component Layer**: Client components in `app/components/` with Framer Motion animations
- **Routing**: App Router with dynamic routes (`ingredients/[slug]`, `tips/[slug]`)
- **State Management**: Local React state + custom events (e.g., `window.dispatchEvent(new CustomEvent('categoryChange', { detail: category }))`)
- **SEO**: Metadata API, JSON-LD structured data, dynamic sitemaps

## Key Patterns & Conventions

### Components
- All components are client-side: Start with `'use client'` directive
- Functional components with TypeScript interfaces
- PascalCase filenames (e.g., `ProductCard.tsx`)
- Props interfaces defined inline or imported from data files
- Example: `interface ProductCardProps { product: Product; index: number; onShowDetails: (product: Product) => void; }`

### Styling
- **Tailwind CSS 4** with utility-first approach
- **Dark theme default**: `bg-black`, `text-white`
- **Accent color**: `text-pink-400` for links/brands, `hover:text-pink-300`
- **Typography**: `font-serif` for headings, `font-medium` for emphasis
- **Responsive**: Mobile-first with `lg:` breakpoints (e.g., `lg:grid-cols-12`)
- **Animations**: Framer Motion with staggered delays (`transition={{ delay: index * 0.05 }}`)

### Data Structures
- **Products**: Rich objects with affiliate links, social stats, trending reasons
- **Ingredients**: Detailed content with Korean names, benefits, warnings
- **Key fields**: Always include `shopUrl` (Amazon affiliate), `brandUrl`, social media links
- **Images**: Amazon CDN URLs or Unsplash placeholders

### SEO & Metadata
- Comprehensive metadata in `layout.tsx` and dynamic route `generateMetadata()`
- JSON-LD via `JsonLd.tsx` component
- Dynamic sitemaps in `sitemap.ts`
- Google Analytics and Search Console verification

### Development Workflow
- **Build verification**: Run `npm run build` before commits to catch TypeScript/build errors
- **Linting**: `npm run lint` with ESLint config
- **Environment**: `NEXT_PUBLIC_GA_ID`, `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`
- **Deployment**: Vercel with toolbar in development

### Content Guidelines
- **Affiliate links**: Amazon affiliate tags must be preserved - never modify `shopUrl` parameters
- **Language**: English UI text, Korean brand name "지금" (Jigeum)
- **Target audience**: International K-Beauty enthusiasts
- **Product curation**: Focus on trending, viral K-Beauty items with social proof

### Common Patterns
- **Image fallbacks**: Use error state with `onError={() => setImageError(true)}` and fallback UI
- **External links**: `target="_blank" rel="noopener noreferrer"` with `onClick={(e) => e.stopPropagation()}`
- **Modal patterns**: Product details via `ProductModal` component with overlay
- **Grid layouts**: `grid grid-cols-1 md:grid-cols-2 gap-8` for product cards
- **Icon usage**: Lucide React icons (e.g., `ShoppingBag`, `Youtube`, `Instagram`)

### File Organization
- `app/components/`: All UI components
- `app/data/`: Static content and type definitions
- `app/[dynamic]/`: Dynamic routes with `generateStaticParams()` and `generateMetadata()`
- `public/`: Static assets (robots.txt, og images)

### Adding New Features
1. **Products**: Edit `app/data/products.ts`, add to products array
2. **Ingredients**: Edit `app/data/ingredients.ts`, create `ingredients/[slug]/` route
3. **Components**: Add to `app/components/`, import in `page.tsx` or relevant component
4. **Styling**: Use existing Tailwind patterns, maintain dark theme
5. **SEO**: Update metadata in `layout.tsx` or route `generateMetadata()`

## Critical Reminders
- Preserve affiliate link integrity
- Maintain dark theme aesthetic
- Use Framer Motion for smooth interactions
- Include proper TypeScript interfaces
- Test builds with `npm run build`
- Follow mobile-first responsive design