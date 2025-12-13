# Jigeum (지금) - K-Beauty Magazine

A modern K-Beauty magazine web application showcasing trending Korean beauty products with curated editorial content.

**Live Site:** [jigeum.today](https://jigeum.today)

## Features

- **Magazine-style Layout**: Editorial design with hero sections and product grids
- **Product Catalog**: Curated K-Beauty products with categories (Skincare, Makeup, Body)
- **Trending Tags**: Real-time trending beauty topics and hashtags
- **Product Details Modal**: Detailed product information with purchase links
- **Responsive Design**: Optimized for mobile and desktop
- **Feedback Widget**: Built-in user feedback collection

## Tech Stack

- **Framework**: Next.js 16
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Deployment**: Vercel

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/stoneidev/jigeum-web.git
cd jigeum-web

# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### Available Scripts

```bash
npm run dev    # Start development server
npm run build  # Build for production
npm run start  # Start production server
npm run lint   # Run ESLint
```

## Project Structure

```
app/
├── components/
│   ├── CategoryTabs.tsx    # Product category filter
│   ├── FeedbackWidget.tsx  # User feedback modal
│   ├── Header.tsx          # Navigation header
│   ├── HeroSection.tsx     # Featured product hero
│   ├── ProductCard.tsx     # Product grid item
│   ├── ProductModal.tsx    # Product detail modal
│   ├── Sidebar.tsx         # Desktop sidebar
│   └── TrendingTags.tsx    # Trending topics
├── data/
│   └── products.ts         # Product data
├── layout.tsx              # Root layout
└── page.tsx                # Home page
```

## License

This project is private.

---

© 2025 Jigeum. Issue 01.
