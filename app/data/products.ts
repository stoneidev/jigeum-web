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
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800',
    price: '$12.99',
    rating: 4.8,
    reviews: '50K+',
    tags: ['Glass Skin', 'Hydration', 'Anti-Aging'],
    description: 'The #1 viral essence with 96% snail mucin. Intense hydration and skin repair that transformed the global skincare conversation.',
    tiktokViews: '580M+',
    instagramPosts: '2.1M',
    shopUrl: 'https://www.amazon.com/dp/B00PBX3L7K',
    youtubeSearch: 'https://www.youtube.com/results?search_query=cosrx+snail+mucin+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/cosrxsnailmucin/',
    source: {
      name: 'Olive Young',
      rank: 1,
      url: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240326-00139',
      date: 'Dec 2025'
    },
    trendingReason: 'Global #1 K-Beauty Essence',
    details: {
      volume: '100ml / 3.38 fl.oz',
      keyIngredients: ['96% Snail Secretion Filtrate', 'Betaine', 'Panthenol', 'Sodium Hyaluronate', 'Arginine'],
      skinType: 'All Skin Types, especially Dry & Damaged Skin',
      howToUse: 'After cleansing and toning, apply 2-3 pumps onto face. Gently pat until fully absorbed. Use morning and night.',
      highlights: [
        'Repairs damaged skin and improves elasticity',
        'Provides deep hydration without stickiness',
        'Reduces appearance of fine lines',
        'Soothes and calms irritated skin',
        'Lightweight, fast-absorbing formula'
      ],
      amazonRating: '4.6/5',
      amazonReviews: '54,000+'
    }
  },
  {
    id: '2',
    name: 'Relief Sun: Rice + Probiotics SPF50+',
    brand: 'Beauty of Joseon',
    brandUrl: 'https://www.beautyofjoseon.com',
    category: 'skincare',
    image: 'https://m.media-amazon.com/images/I/61IW-Y5O1YL._SL1500_.jpg',
    price: '$15.00',
    rating: 4.9,
    reviews: '100K+',
    tags: ['Sunscreen', 'No White Cast', 'Dewy Finish'],
    description: 'The sunscreen that redefined SPF. Lightweight, invisible on all skin tones, with traditional Korean rice extract.',
    tiktokViews: '100K+ videos',
    instagramPosts: '890K',
    shopUrl: 'https://www.amazon.com/dp/B0B6Q5KXHP',
    youtubeSearch: 'https://www.youtube.com/results?search_query=beauty+of+joseon+sunscreen+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/beautyofjoseon/',
    source: {
      name: 'Hwahae',
      rank: 1,
      url: 'https://www.hwahae.co.kr/products/2042504',
      date: 'Dec 2025'
    },
    trendingReason: 'Best Sunscreen of 2025',
    details: {
      volume: '50ml / 1.69 fl.oz',
      keyIngredients: ['30% Rice Extract', 'Grain Ferment Filtrate', 'Probiotics', 'Squalane', 'Niacinamide'],
      skinType: 'All Skin Types, Sensitive Skin Friendly',
      howToUse: 'Apply generously as the last step of skincare routine. Reapply every 2-3 hours when exposed to sun.',
      highlights: [
        'SPF50+ PA++++ broad spectrum protection',
        'No white cast on all skin tones',
        'Dewy, natural finish',
        'Contains traditional Korean rice extract',
        'Doubles as a makeup primer'
      ],
      amazonRating: '4.5/5',
      amazonReviews: '28,000+'
    }
  },
  {
    id: '3',
    name: 'Heartleaf 77% Soothing Toner',
    brand: 'Anua',
    brandUrl: 'https://anua.us',
    category: 'skincare',
    image: 'https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=800',
    price: '$18.00',
    rating: 4.7,
    reviews: '35K+',
    tags: ['Calming', 'Redness Relief', 'Sensitive Skin'],
    description: 'Minimalist Korean skincare at its finest. 77% Heartleaf extract delivers instant calm to reactive skin.',
    tiktokViews: '45M+',
    instagramPosts: '1.2M',
    shopUrl: 'https://www.amazon.com/dp/B08SHWGFKM',
    youtubeSearch: 'https://www.youtube.com/results?search_query=anua+heartleaf+toner+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/anuaheartleaf/',
    source: {
      name: 'Olive Young',
      rank: 3,
      url: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240925800',
      date: 'Dec 2025'
    },
    trendingReason: 'Editor\'s Choice for Sensitive Skin',
    details: {
      volume: '250ml / 8.45 fl.oz',
      keyIngredients: ['77% Heartleaf (Houttuynia Cordata) Extract', 'Panthenol', 'Hyaluronic Acid', 'Centella Asiatica'],
      skinType: 'Sensitive, Acne-Prone, Combination Skin',
      howToUse: 'After cleansing, dispense onto cotton pad or palms. Gently pat onto face. Can be layered (7-skin method).',
      highlights: [
        'Instantly calms redness and irritation',
        'pH-balanced formula (5.5)',
        'Alcohol-free, fragrance-free',
        'Ideal for 7-skin layering method',
        'Strengthens skin barrier'
      ],
      amazonRating: '4.5/5',
      amazonReviews: '15,000+'
    }
  },
  {
    id: '4',
    name: 'Mask Fit Red Cushion (49 Colors)',
    brand: 'TIRTIR',
    brandUrl: 'https://tfrbeauty.com',
    category: 'makeup',
    image: 'https://cdn-image.oliveyoung.com/prdtImg/1175/2ddedf8e-80ba-489a-b459-39747402db83.jpg?RS=1500x1500&AR=0&SF=webp&QT=80',
    price: '$24.00',
    rating: 4.8,
    reviews: '28K+',
    tags: ['Full Coverage', '49 Shades', 'Long-lasting'],
    description: 'The "Red Egg" phenomenon. First Korean brand to offer 49 shades, championed by BTS V.',
    tiktokViews: '120M+',
    instagramPosts: '3.5M',
    shopUrl: 'https://www.amazon.com/dp/B09XDPNQJK',
    youtubeSearch: 'https://www.youtube.com/results?search_query=tirtir+red+cushion+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/tirtircushion/',
    source: {
      name: 'Olive Young',
      rank: 1,
      url: 'https://global.oliveyoung.com/product/detail?prdtNo=GA240724688',
      date: 'Dec 2025'
    },
    trendingReason: 'Most Inclusive K-Beauty Foundation',
    details: {
      volume: '18g / 0.63 oz',
      keyIngredients: ['Niacinamide', 'Hyaluronic Acid', 'Centella Asiatica', 'Vitamin E'],
      skinType: 'All Skin Types',
      howToUse: 'Press puff onto cushion and apply evenly across face. Build coverage as desired. Set with powder for oily skin.',
      highlights: [
        '49 shades for all skin tones',
        'SPF40 PA++ sun protection',
        'Full coverage, natural finish',
        'Long-lasting up to 12 hours',
        'Mask-proof formula'
      ],
      amazonRating: '4.4/5',
      amazonReviews: '12,000+'
    }
  },
  {
    id: '5',
    name: 'Age-R Booster Pro',
    brand: 'Medicube',
    brandUrl: 'https://www.medicube.com',
    category: 'device',
    image: 'https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800',
    price: '$159.00',
    rating: 4.6,
    reviews: '15K+',
    tags: ['Anti-Aging', 'Firming', 'Professional Grade'],
    description: 'The device that brought Korean dermatology home. Loved by Kendall Jenner and Hailey Bieber.',
    tiktokViews: '85M+',
    instagramPosts: '2.8M',
    shopUrl: 'https://www.amazon.com/dp/B0BXNXQJ8K',
    youtubeSearch: 'https://www.youtube.com/results?search_query=medicube+age+r+booster+pro+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/medicubebooster/',
    source: {
      name: 'Coupang',
      rank: 1,
      url: 'https://www.coupang.com/np/search?q=medicube+booster',
      date: 'Dec 2025'
    },
    trendingReason: 'Celebrity Beauty Device of the Year',
    details: {
      volume: '1 Device + Charging Cable',
      keyIngredients: ['Electroporation Technology', 'EMS (Electrical Muscle Stimulation)', 'LED Light Therapy', 'Microcurrent'],
      skinType: 'All Skin Types, Anti-Aging Concerns',
      howToUse: 'Apply serum to face. Use device in upward motions for 5-10 minutes. Use 2-3 times per week.',
      highlights: [
        'Boosts product absorption by 490%',
        '4-in-1 technology (EMS, LED, Microcurrent, Electroporation)',
        'Visible results in 2 weeks',
        'Professional-grade at-home treatment',
        'Rechargeable, cordless design'
      ],
      amazonRating: '4.3/5',
      amazonReviews: '8,500+'
    }
  },
  {
    id: '6',
    name: 'Lip Sleeping Mask Berry',
    brand: 'Laneige',
    brandUrl: 'https://www.laneige.com',
    category: 'skincare',
    image: 'https://m.media-amazon.com/images/I/51H5SkeGANL._SL1500_.jpg',
    price: '$24.00',
    rating: 4.9,
    reviews: '45K+',
    tags: ['Lip Care', 'Overnight Treatment', 'Cult Classic'],
    description: 'The original viral lip mask that started it all. A decade of overnight lip transformation.',
    tiktokViews: '200M+',
    instagramPosts: '4.2M',
    shopUrl: 'https://www.amazon.com/Laneige-Sleeping-Berry/dp/B07XXPHQZK?th=1',
    youtubeSearch: 'https://www.youtube.com/results?search_query=laneige+lip+sleeping+mask+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/laneigesleepmask/',
    source: {
      name: 'Olive Young',
      rank: 2,
      url: 'https://global.oliveyoung.com/product/detail?prdtNo=GA220429-00456',
      date: 'Dec 2025'
    },
    trendingReason: 'Timeless K-Beauty Icon',
    details: {
      volume: '20g / 0.7 oz',
      keyIngredients: ['Berry Mix Complex', 'Vitamin C', 'Hyaluronic Acid', 'Shea Butter', 'Murumuru Butter'],
      skinType: 'All Skin Types, Dry/Chapped Lips',
      howToUse: 'Apply generously to lips before bed. Leave overnight. Gently wipe off in the morning.',
      highlights: [
        'Intensive overnight lip treatment',
        'Berry antioxidant complex',
        'Softens and smooths lip texture',
        'Long-lasting hydration',
        'Sweet berry scent'
      ],
      amazonRating: '4.6/5',
      amazonReviews: '45,000+'
    }
  },
  {
    id: '7',
    name: 'Juicy Lasting Tint',
    brand: "rom&nd",
    brandUrl: 'https://romandbeauty.com',
    category: 'makeup',
    image: 'https://cafe24.poxo.com/ec01/romand/6aDrbsrpgztyixM+aENnH1D89vbvN874SJZ0smDxiaa/k9zGF5hClK+Cdcc6Crl70h/a8RobAiR24eeOO4zRMg==/_/web/product/big/202502/ae7dbebf2d61b56e3815a0101f49bf1c.jpg',
    price: '$12.00',
    rating: 4.7,
    reviews: '22K+',
    tags: ['Lip Tint', 'Glossy', 'K-Pop Favorite'],
    description: '2025 K-Beauty Icon Award Winner. The lip tint that defined the "juicy lip" trend.',
    tiktokViews: '65M+',
    instagramPosts: '1.8M',
    shopUrl: 'https://www.amazon.com/dp/B07WGPJ5VK',
    youtubeSearch: 'https://www.youtube.com/results?search_query=romand+juicy+lasting+tint+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/romandtint/',
    source: {
      name: 'Hwahae',
      rank: 1,
      url: 'https://www.hwahae.co.kr/search?q=Juicy%20Lasting%20Tint',
      date: 'Dec 2025'
    },
    trendingReason: '2025 K-Beauty Icon Award Winner',
    details: {
      volume: '5.5g / 0.19 oz',
      keyIngredients: ['Fruit Extracts', 'Vitamin E', 'Jojoba Oil', 'Hyaluronic Acid'],
      skinType: 'All Skin Types',
      howToUse: 'Apply to center of lips and blend outward. Build color intensity as desired. Can be worn alone or over lip liner.',
      highlights: [
        'Juicy, glossy finish',
        'Long-lasting color payoff',
        'Non-sticky formula',
        'Hydrating fruit extracts',
        '20+ color options'
      ],
      amazonRating: '4.4/5',
      amazonReviews: '9,000+'
    }
  },
  {
    id: '8',
    name: 'Glow Serum: Propolis + Niacinamide',
    brand: 'Beauty of Joseon',
    brandUrl: 'https://www.beautyofjoseon.com',
    category: 'skincare',
    image: 'https://beautyofjoseon.co.kr/web/product/small/202504/7bc9abdc871325e5ac2bd647816d319a.jpg',
    price: '$24.00',
    rating: 4.6,
    reviews: '18K+',
    tags: ['Brightening', 'Glow', 'Hanbang'],
    description: 'Where traditional Hanbang meets modern science. 60% Propolis and 2% Niacinamide for luminous, acne-fighting skin.',
    tiktokViews: '32M+',
    instagramPosts: '950K',
    shopUrl: 'https://www.amazon.com/dp/B08P54MDWL',
    youtubeSearch: 'https://www.youtube.com/results?search_query=beauty+of+joseon+glow+serum+review+2025',
    instagramTag: 'https://www.instagram.com/explore/tags/beautyofjoseonserum/',
    source: {
      name: 'StyleKorean',
      rank: 5,
      url: 'https://www.stylekorean.com/shop/1741316669',
      date: 'Dec 2025'
    },
    trendingReason: 'Best of Hanbang Skincare',
    details: {
      volume: '60ml / 2.02 fl.oz',
      keyIngredients: ['60% Propolis Extract', '2% Niacinamide', '0.5% BHA', 'Lotus Corniculatus'],
      skinType: 'All Skin Types, Enlarged Pores, Inflammatory Skin',
      howToUse: 'Apply 2-3 drops of serum onto the face and pat gently to aid absorption.',
      highlights: [
        'Controls sebum secretion',
        'Fights acne and reduces pores',
        'Traditional Korean Hanbang ingredients',
        'Brightening effect with niacinamide',
        'Honey-like texture, non-sticky'
      ],
      amazonRating: '4.5/5',
      amazonReviews: '11,000+'
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
    description: 'Korea\'s Largest Beauty Review Platform (3M+ Reviews)',
    url: 'https://www.hwahae.co.kr',
    logo: '⭐'
  },
  {
    name: 'Coupang',
    description: 'Korea\'s #1 E-commerce Platform',
    url: 'https://www.coupang.com',
    logo: '🛒'
  },
  {
    name: 'StyleKorean',
    description: 'Global K-Beauty Destination',
    url: 'https://www.stylekorean.com',
    logo: '✨'
  }
];

export const trendingTags = [
  { name: 'Glass Skin', count: '7.7M posts', url: 'https://www.instagram.com/explore/tags/glassskin/' },
  { name: 'K-Beauty', count: '7.7M posts', url: 'https://www.instagram.com/explore/tags/kbeauty/' },
  { name: 'Snail Mucin', count: '580M views', url: 'https://www.tiktok.com/tag/snailmucin' },
  { name: 'Korean Skincare', count: '5.2M posts', url: 'https://www.instagram.com/explore/tags/koreanskincare/' },
];
