export interface Product {
  id: string;
  name: string;
  brand: string;
  brandUrl: string;
  category: 'skincare' | 'makeup' | 'device';
  image: string;
  price: string;
  rating: number;
  reviews: string;
  tags: string[];
  description: string;
  tiktokViews?: string;
  instagramPosts?: string;
  shopUrl: string;
  youtubeSearch: string;
  instagramTag: string;
  source: {
    name: string;
    rank?: number;
    url: string;
    date: string;
  };
  trendingReason: string;
  details: {
    volume: string;
    keyIngredients: string[];
    skinType: string;
    howToUse: string;
    highlights: string[];
    amazonRating: string;
    amazonReviews: string;
  };
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Advanced Snail 96 Mucin Power Essence',
    brand: 'COSRX',
    brandUrl: 'https://www.cosrx.com',
    category: 'skincare',
    image: '/images/products/cosrx-snail-mucin.jpg', // Local image
    price: '$21.00',
    rating: 4.8,
    reviews: '55K+',
    tags: ['Skin Barrier', 'Hydration', 'Repair'],
    description: 'The global icon evolves. Still #1 for hydration, now recognized for its barrier-strengthening peptide complex naturally found in mucin.',
    tiktokViews: '650M+',
    instagramPosts: '2.3M',
    shopUrl: 'https://www.amazon.com/dp/B00PBX3L7K',
    youtubeSearch: 'https://www.youtube.com/results?search_query=cosrx+snail+mucin+review+late+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/cosrxsnailmucin/',
    source: {
      name: 'Olive Young',
      rank: 1,
      url: 'https://global.oliveyoung.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Global #1 Barrier Repair Essence',
    details: {
      volume: '100ml / 3.38 fl.oz',
      keyIngredients: ['96% Snail Secretion Filtrate', 'Peptides', 'Panthenol', 'Sodium Hyaluronate'],
      skinType: 'All Skin Types, Dehydrated Skin',
      howToUse: 'After cleansing and toning, apply 2-3 pumps onto face. Gently pat until fully absorbed. Perfect for "Skin Flooding".',
      highlights: [
        'Repairs damaged skin barrier',
        'Natural peptides for elasticity',
        'Deep hydration without stickiness',
        'Soothes redness and irritation',
        'Cruelty-free sourcing'
      ],
      amazonRating: '4.6/5',
      amazonReviews: '60,000+'
    }
  },
  {
    id: '2',
    name: 'Relief Sun: Rice + Probiotics SPF50+',
    brand: 'Beauty of Joseon',
    brandUrl: 'https://www.beautyofjoseon.com',
    category: 'skincare',
    image: '/images/products/boj-relief-sun.png', // Local image
    price: '$12.20',
    rating: 4.9,
    reviews: '120K+',
    tags: ['Sunscreen', 'Glass Skin', 'Moisturizing'],
    description: 'The sunscreen that feels like a serum. Voted "Best SPF for Cloud Skin" in late 2025. No white cast, just glow.',
    tiktokViews: '150M+ videos',
    instagramPosts: '1.2M',
    shopUrl: 'https://www.amazon.com/dp/B0B6Q5KXHP',
    youtubeSearch: 'https://www.youtube.com/results?search_query=beauty+of+joseon+sunscreen+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/beautyofjoseon/',
    source: {
      name: 'Hwahae',
      rank: 1,
      url: 'https://www.hwahae.co.kr',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Moisturizing Sunscreen 2025',
    details: {
      volume: '50ml / 1.69 fl.oz',
      keyIngredients: ['30% Rice Extract', 'Probiotics', 'Niacinamide', 'Adenosine'],
      skinType: 'All Skin Types, Dry & Sensitive',
      howToUse: 'Apply as the last step of your morning routine. Reapply every 2-3 hours. Can skip moisturizer in humid weather.',
      highlights: [
        'SPF50+ PA++++ certified protection',
        'Lightweight creamy texture',
        'Probiotics strengthen skin barrier',
        'Creates perfect canvas for makeup',
        'Reef safe formula'
      ],
      amazonRating: '4.7/5',
      amazonReviews: '35,000+'
    }
  },
  {
    id: '3',
    name: 'PDRN Pink Peptide Serum',
    brand: 'Medicube',
    brandUrl: 'https://www.medicube.com',
    category: 'skincare',
    image: '/images/products/medicube-pdrn.png', // Local image
    price: '$39.00',
    rating: 4.8,
    reviews: '15K+',
    tags: ['PDRN', 'Anti-Aging', 'Elasticity'],
    description: 'The viral "Salmon DNA" serum of 2025. PDRN + Peptides deliver clinic-grade elasticity and barrier care at home.',
    tiktokViews: '80M+',
    instagramPosts: '500K',
    shopUrl: 'https://www.amazon.com/MEDICUBE-PDRN-Pink-Peptide-Serum/dp/B0D1G2X6X4',
    youtubeSearch: 'https://www.youtube.com/results?search_query=medicube+pdrn+serum+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/medicubepdrn/',
    source: {
      name: 'Olive Young',
      rank: 2,
      url: 'https://global.oliveyoung.com',
      date: 'Dec 2025'
    },
    trendingReason: '#1 Breakout Star: PDRN Trend',
    details: {
      volume: '30ml / 1.01 fl.oz',
      keyIngredients: ['Salmon PDRN', '5-Peptide Complex', 'Centella Asiatica', 'Niacinamide'],
      skinType: 'Aging Skin, Acne Scars, Dullness',
      howToUse: 'Apply after toner. Gently massage until the pink capsules dissolve into the skin. Use night and day.',
      highlights: [
        'Clinic-grade Salmon DNA (PDRN)',
        'Visibly improves skin elasticity',
        'Fades acne scars and pigmentation',
        'Pink capsules for fresh activation',
        'Non-comedogenic'
      ],
      amazonRating: '4.5/5',
      amazonReviews: '5,000+'
    }
  },
  {
    id: '4',
    name: 'Glasting Color Gloss',
    brand: "rom&nd",
    brandUrl: 'https://romandbeauty.com',
    category: 'makeup',
    image: '/images/products/romand-glasting-gloss.jpg', // Local image
    price: '$9.90',
    rating: 4.7,
    reviews: '12K+',
    tags: ['Tanghulu Lips', 'High Shine', 'Volumizing'],
    description: 'The secret to the "Tanghulu" (sugar-coated) lip trend. Angelic Ring glow with improved color payoff for late 2025.',
    tiktokViews: '200M+',
    instagramPosts: '2.5M',
    shopUrl: 'https://www.amazon.com/dp/B0CRH7C6LG',
    youtubeSearch: 'https://www.youtube.com/results?search_query=romand+glasting+color+gloss+swatch+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/romandglastingcolorgloss/',
    source: {
      name: 'GlowPick',
      rank: 1,
      url: 'https://www.glowpick.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Gloss Award 2025',
    details: {
      volume: '4g / 0.14 oz',
      keyIngredients: ['Jojoba Seed Oil', 'Sweet Almond Oil', 'High-Refractive Oils'],
      skinType: 'All Skin Types',
      howToUse: 'Apply a thin layer for a natural sheen, or layer for the "Tanghulu" sugar-coated effect.',
      highlights: [
        'Creates "Angel Ring" halo effect',
        'Non-sticky, cushiony texture',
        'Plumps lips visually',
        'Vibrant, translucent colors',
        'Comfortable all-day wear'
      ],
      amazonRating: '4.6/5',
      amazonReviews: '4,500+'
    }
  },
  {
    id: '5',
    name: 'Mask Fit Red Cushion (Deep Coverage)',
    brand: 'TIRTIR',
    brandUrl: 'https://tfrbeauty.com',
    category: 'makeup',
    image: '/images/products/tirtir-red-cushion.png', // Local image
    price: '$20.00',
    rating: 4.8,
    reviews: '30K+',
    tags: ['Glass Skin', '49 Shades', '72H Coverage'],
    description: 'The cushion that broke the internet now offers even more shades. 72-hour coverage that withstands humidity and masks.',
    tiktokViews: '150M+',
    instagramPosts: '3.8M',
    shopUrl: 'https://www.amazon.com/dp/B09XDPNQJK',
    youtubeSearch: 'https://www.youtube.com/results?search_query=tirtir+cushion+review+late+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/tirtirredcushion/',
    source: {
      name: 'Olive Young',
      rank: 1,
      url: 'https://global.oliveyoung.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Global Best-Selling Cushion',
    details: {
      volume: '18g / 0.63 oz',
      keyIngredients: ['Astaxanthin', 'Propolis Extract', 'Hibiscus Extract'],
      skinType: 'All Skin Types, Oily/Combo',
      howToUse: 'Tap lightly for medium coverage or layer for full coverage. The egg-shaped puff helps reach corners of the nose.',
      highlights: [
        'Extended 49-shade range',
        '72-hour long-lasting formula',
        'Transfer-proof & Mask-proof',
        'Semi-matte radiant finish',
        'Minimizes appearance of pores'
      ],
      amazonRating: '4.4/5',
      amazonReviews: '15,000+'
    }
  },
  {
    id: '6',
    name: 'Heartleaf 77% Soothing Toner',
    brand: 'Anua',
    brandUrl: 'https://anua.us',
    category: 'skincare',
    image: '/images/products/anua-heartleaf-toner.png', // Local image
    price: '$26.49',
    rating: 4.7,
    reviews: '40K+',
    tags: ['Acne Prone', 'Soothing', 'Viral'],
    description: 'The holy grail for acne-prone skin. 77% Heartleaf extract calms breakouts instantly. A 2025 routine staple.',
    tiktokViews: '50M+',
    instagramPosts: '1.5M',
    shopUrl: 'https://www.amazon.com/dp/B08SHWGFKM',
    youtubeSearch: 'https://www.youtube.com/results?search_query=anua+heartleaf+toner+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/anuaheartleaf/',
    source: {
      name: 'Coupang',
      rank: 1,
      url: 'https://www.coupang.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Toner for Acne Prone Skin',
    details: {
      volume: '250ml / 8.45 fl.oz',
      keyIngredients: ['77% Houttuynia Cordata Extract', 'Centella Asiatica', 'Chamomile'],
      skinType: 'Sensitive, Acne-Prone, Redness',
      howToUse: 'Use as a daily toner or soak cotton pads for a 5-minute sheet mask effect (Toner Masking).',
      highlights: [
        'Reduces inflammatory acne',
        'Non-comedogenic',
        'Slightly viscous, hydrating texture',
        'Optimizes skin pH balance',
        'Viral "Toner Masking" Product'
      ],
      amazonRating: '4.5/5',
      amazonReviews: '18,000+'
    }
  },
  {
    id: '7',
    name: 'Lip Sleeping Mask (Pink Lemonade)',
    brand: 'Laneige',
    brandUrl: 'https://www.laneige.com',
    category: 'skincare',
    image: '/images/products/laneige-lip-mask.png', // Local image
    price: '$24.00',
    rating: 4.9,
    reviews: '50K+',
    tags: ['Lip Care', 'Overnight', 'New Flavor'],
    description: 'The icon adds a zest. 2025\'s favorite flavor "Pink Lemonade" offers the same intense hydration with a refreshing twist.',
    tiktokViews: '250M+',
    instagramPosts: '4.5M',
    shopUrl: 'https://www.amazon.com/Laneige-Lip-Sleeping-Mask-Berry/dp/B09SGQGD9D',
    youtubeSearch: 'https://www.youtube.com/results?search_query=laneige+lip+sleeping+mask+pink+lemonade+review',
    instagramTag: 'https://www.instagram.com/explore/tags/laneigelipmask/',
    source: {
      name: 'Sephora',
      rank: 3,
      url: 'https://www.sephora.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Selling Lip Treatment',
    details: {
      volume: '20g / 0.7 oz',
      keyIngredients: ['Berry Fruit Complex', 'Vitamin C', 'Coconut Oil', 'Shea Butter'],
      skinType: 'Dry Lips',
      howToUse: 'Apply a thick layer before going to sleep. Wipe off dead skin cells in the morning for baby-soft lips.',
      highlights: [
        'Melts away dead skin cells overnight',
        'Vitamin C for antioxidants',
        'Limited Edition Pink Lemonade scent',
        'Moisture Wrap™ technology',
        'Includes spatula'
      ],
      amazonRating: '4.7/5',
      amazonReviews: '50,000+'
    }
  },
  {
    id: '8',
    name: 'Retinol 0.1 Cream',
    brand: 'COSRX',
    brandUrl: 'https://www.cosrx.com',
    category: 'skincare',
    image: '/images/products/cosrx-retinol.webp', // Local image
    price: '$25.00',
    rating: 4.5,
    reviews: '8K+',
    tags: ['Retinol', 'Beginner Friendly', 'Anti-Aging'],
    description: 'The perfect entry into "Slow Aging". Gentle 0.1% pure retinol combined with panthenol to prevent irritation. 2025\'s best beginner retinol.',
    tiktokViews: '20M+',
    instagramPosts: '150K',
    shopUrl: 'https://www.amazon.com/dp/B09V7XJQJ5',
    youtubeSearch: 'https://www.youtube.com/results?search_query=cosrx+retinol+cream+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/cosrxretinol/',
    source: {
      name: 'GlowPick',
      rank: 4,
      url: 'https://www.glowpick.com',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Gentle Retinol',
    details: {
      volume: '20ml / 0.67 fl.oz',
      keyIngredients: ['0.1% Pure Retinol', 'Panthenol', 'Adenosine', 'Vitamin E'],
      skinType: 'Early Aging, Texture Issues',
      howToUse: 'Start 2-3 times a week at night. Use a pea-sized amount. ALWAYS use sunscreen the next morning.',
      highlights: [
        'Low irritation formula for beginners',
        'Improves skin texture and fine lines',
        'Prevents future breakouts',
        'Aluminum tube preserves stability',
        'Moisturizing finish'
      ],
      amazonRating: '4.4/5',
      amazonReviews: '4,000+'
    }
  }
];

export const sources = [
  {
    name: 'Olive Young',
    description: 'Korea\'s #1 Health & Beauty Retailer',
    url: 'https://global.oliveyoung.com',
    logo: '🏪'
  },
  {
    name: 'Hwahae',
    description: 'Korea\'s Largest Beauty Review Platform (4M+ Reviews)',
    url: 'https://www.hwahae.co.kr',
    logo: '⭐'
  },
  {
    name: 'GlowPick',
    description: 'Consumer-Ranked Beauty Awards',
    url: 'https://www.glowpick.com',
    logo: '🏆'
  },
  {
    name: 'Sephora',
    description: 'Global Beauty Authority',
    url: 'https://www.sephora.com',
    logo: '💄'
  }
];

export const trendingTags = [
  { name: 'PDRN', count: '900M views', url: 'https://www.tiktok.com/tag/pdrn' },
  { name: 'Skin Cycling', count: '10B views', url: 'https://www.tiktok.com/tag/skincycling' },
  { name: 'Glass Skin 2.0', count: '5.5M posts', url: 'https://www.instagram.com/explore/tags/glassskin/' },
  { name: 'Tanghulu Lips', count: '2.1M posts', url: 'https://www.instagram.com/explore/tags/tanghululips/' },
];
