export interface TrendArticle {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  image: string;
  category: string;
  readTime: string;
  date: string;
  featured: boolean;
  source: {
    name: string;
    url: string;
  };
  relatedProductIds: string[];
  highlights: string[];
  tags: string[];
}

export const trendArticles: TrendArticle[] = [
  {
    id: 'pdrn-skincare',
    title: 'PDRN: The Salmon DNA Ingredient Taking Over K-Beauty',
    subtitle: 'Why Kim Kardashian & Jennifer Aniston Love This Korean Skincare Secret',
    description: 'PDRN (Polydeoxyribonucleotide), derived from salmon DNA, is the hottest ingredient in Korean skincare right now. This DNA-derived molecule improves skin healing, boosts collagen production, and reduces inflammation. Originally popular in Korean dermatology clinics, PDRN is now available in at-home products.',
    image: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=800',
    category: 'Ingredient Spotlight',
    readTime: '4 min read',
    date: 'December 2025',
    featured: true,
    source: {
      name: 'Who What Wear',
      url: 'https://www.whowhatwear.com/beauty/top-2025-beauty-trends'
    },
    relatedProductIds: ['1', '8'],
    highlights: [
      'Boosts fibroblast activity & collagen stimulation',
      'Reduces inflammation and accelerates healing',
      'Celebrity-approved regenerative treatment',
      'Now available in sustainable probiotic-derived formulas'
    ],
    tags: ['PDRN', 'Anti-Aging', 'Regenerative', 'Collagen']
  },
  {
    id: 'spicule-serums',
    title: 'Spicule Serums: Liquid Microneedling in a Bottle',
    subtitle: 'The Korean Skincare Trend That Delivers Professional Results at Home',
    description: 'Spicule serums are revolutionizing K-Beauty. Using microscopic needles derived from sea sponges, these formulas create microchannels in your skin to deliver active ingredients deeper into the dermis. Think of it as painless microneedling—without the price tag, pain, or downtime.',
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
    category: 'Innovation',
    readTime: '3 min read',
    date: 'December 2025',
    featured: false,
    source: {
      name: 'Cosmopolitan',
      url: 'https://www.cosmopolitan.com/style-beauty/beauty/a69249367/korean-skincare-trends/'
    },
    relatedProductIds: ['1', '3'],
    highlights: [
      'Boosts collagen production naturally',
      'Enhances absorption of other products',
      'Improves skin texture without irritation',
      'Professional results at a fraction of the cost'
    ],
    tags: ['Spicules', 'Microneedling', 'Collagen', 'Innovation']
  },
  {
    id: 'glass-skin-winter',
    title: 'Glass Skin to Cloud Skin: Winter 2025 Evolution',
    subtitle: 'The Korean Beauty Look That\'s Perfect for Cold Weather',
    description: 'While glass skin remains iconic, Korean beauty is evolving toward "cloud skin"—a luminous glow with a softer, slightly matte finish. Perfect for winter when achieving high-shine can be challenging. The secret? Milky toners, layered hydration, and snail mucin for that dewy-but-not-greasy look.',
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=800',
    category: 'Trend Report',
    readTime: '5 min read',
    date: 'December 2025',
    featured: true,
    source: {
      name: 'E! Online',
      url: 'https://www.eonline.com/news/1425998/how-to-get-glass-skin-winter-2025-best-korean-products-toners-and-masks'
    },
    relatedProductIds: ['1', '2', '3'],
    highlights: [
      'Evolved from glass skin to softer "cloud skin"',
      'Focus on hydration without greasiness',
      'Milky toners are the new must-have',
      'Layering technique is key for winter'
    ],
    tags: ['Glass Skin', 'Cloud Skin', 'Winter Skincare', 'Hydration']
  },
  {
    id: 'led-devices',
    title: 'LED Masks & At-Home Devices: K-Beauty Goes High-Tech',
    subtitle: 'Why Search for LED Masks Increased 96.7% in 2025',
    description: 'Korean beauty devices are having a major moment. LED masks were LookFantastic\'s fastest-growing product with searches up nearly 97% compared to 2024. From microcurrent to EMS technology, at-home devices are bringing professional Korean dermatology treatments to your bathroom.',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    category: 'Tech & Devices',
    readTime: '4 min read',
    date: 'December 2025',
    featured: false,
    source: {
      name: 'Marie Claire UK',
      url: 'https://www.marieclaire.co.uk/beauty/best-beauty-launches-of-2025'
    },
    relatedProductIds: ['5'],
    highlights: [
      'LED mask searches up 96.7% YoY',
      '4-in-1 technology: EMS, LED, Microcurrent, Electroporation',
      'Professional-grade treatments at home',
      'Visible results in as little as 2 weeks'
    ],
    tags: ['LED Mask', 'Beauty Device', 'Anti-Aging', 'High-Tech']
  },
  {
    id: 'toner-pads',
    title: 'Toner Pads: Korea\'s Best-Kept Secret Goes Global',
    subtitle: 'The Convenient K-Beauty Staple Finally Getting Western Attention',
    description: 'Toner pads have been a Korean beauty staple for years, but they\'re finally having their global moment in 2025. These pre-soaked pads combine the benefits of toner, essence, and exfoliation in one convenient step. Use them as a quick wipe or as mini sheet masks for targeted treatment.',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800',
    category: 'K-Beauty Basics',
    readTime: '3 min read',
    date: 'December 2025',
    featured: false,
    source: {
      name: 'Cosmetics Business',
      url: 'https://cosmeticsbusiness.com/cosmetics-business-reveals-the-top-5-k-beauty'
    },
    relatedProductIds: ['3', '8'],
    highlights: [
      'Quick and convenient application',
      'Can double as mini sheet masks',
      'Wide variety: exfoliating, hydrating, calming',
      'Perfect for travel and on-the-go skincare'
    ],
    tags: ['Toner Pads', 'Convenience', 'Exfoliation', 'Hydration']
  },
  {
    id: 'beauty-of-joseon-dominance',
    title: 'Beauty of Joseon: The Brand Boots Sells Every 15 Seconds',
    subtitle: 'How This Hanbang Brand Became the #1 K-Beauty Export',
    description: 'In 2025, Boots reported selling one K-Beauty product every 15 seconds, with Beauty of Joseon Relief Sun emerging as the absolute best-seller. The brand\'s combination of traditional Korean Hanbang ingredients with modern formulations has captured the global market, with LookFantastic reporting a 174% increase in K-Beauty skincare revenue.',
    image: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800',
    category: 'Brand Spotlight',
    readTime: '4 min read',
    date: 'December 2025',
    featured: true,
    source: {
      name: 'Cosmetics Business',
      url: 'https://cosmeticsbusiness.com/cosmetics-business-reveals-the-top-5-k-beauty'
    },
    relatedProductIds: ['2', '8'],
    highlights: [
      'One K-Beauty product sold every 15 seconds at Boots',
      '174% increase in K-Beauty skincare revenue',
      'Relief Sun SPF is the global best-seller',
      'Traditional Hanbang meets modern science'
    ],
    tags: ['Beauty of Joseon', 'Hanbang', 'Sunscreen', 'Best-Seller']
  }
];

export const getFeaturedArticles = () => trendArticles.filter(article => article.featured);
export const getArticleById = (id: string) => trendArticles.find(article => article.id === id);
