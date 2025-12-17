export interface BeautyTip {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  heroImage: string;
  icon: string;
  readTime: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  skinTypes: string[];
  introduction: string;
  benefits: string[];
  steps: {
    step: number;
    title: string;
    description: string;
  }[];
  tips: string[];
  warnings: string[];
  recommendedProducts: string[]; // product IDs
  sources: {
    name: string;
    url: string;
  }[];
}

export const beautyTips: BeautyTip[] = [
  {
    slug: '7-skin-method',
    title: 'The 7-Skin Method',
    subtitle: 'Korean Hydration Technique for Glass Skin',
    description: 'Master the Korean 7-Skin Method to achieve deeply hydrated, plump, and glowing glass skin. Layer your toner 7 times for maximum moisture absorption.',
    heroImage: 'https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=1200',
    icon: '💧',
    readTime: '5 min read',
    difficulty: 'Beginner',
    skinTypes: ['Dry', 'Dehydrated', 'Aging', 'Normal'],
    introduction: `The 7-Skin Method is a revolutionary Korean skincare technique designed to maximize hydration by layering toner or essence onto the skin. In Korea, toners are often called "skins" — making this the "7 Toner Method."

This technique involves applying up to seven thin layers of hydrating toner or essence immediately after cleansing. Each layer builds upon the last, allowing the skin to gradually absorb lightweight hydration without feeling heavy or greasy.

The method is particularly effective for aging skin, which tends to dehydrate more easily. Dehydrated skin makes every fine line look deeper than it actually is. The 7-Skin Method fixes this by saturating your skin with moisture—layer by layer.`,
    benefits: [
      'Deeply hydrates without heaviness or greasiness',
      'Plumps skin and reduces appearance of fine lines',
      'Prepares skin to better absorb subsequent products',
      'Creates the coveted "glass skin" glow',
      'Customizable to your skin\'s needs (3-7 layers)',
      'Works for most skin types when done correctly',
    ],
    steps: [
      {
        step: 1,
        title: 'Cleanse Your Skin',
        description: 'Start with a gentle, sulfate-free cleanser suited to your skin type. Remove all makeup, dirt, and oil without disrupting your natural barrier. Pat your face until slightly damp—not completely dry.',
      },
      {
        step: 2,
        title: 'Apply the First Layer',
        description: 'Pour a small amount of hydrating toner into your palms. Gently press it into the skin, starting from the center of your face and moving outward. Use your hands instead of cotton pads for better absorption and less product waste.',
      },
      {
        step: 3,
        title: 'Wait for Absorption',
        description: 'Allow the first layer to fully absorb into your skin. This usually takes 30-60 seconds. Your skin should feel slightly tacky but not wet before moving to the next layer.',
      },
      {
        step: 4,
        title: 'Repeat 6 More Times',
        description: 'Continue applying thin layers of toner, waiting for each to absorb before the next. By the final layers, your skin should feel plump and hydrated, with a subtle dewy glow.',
      },
      {
        step: 5,
        title: 'Continue Your Routine',
        description: 'After all layers are absorbed, continue with your regular routine—serums, moisturizer, and SPF (daytime). The 7-Skin Method creates a hydrated canvas that helps your other products work better.',
      },
    ],
    tips: [
      'Start with 3 layers if you have oily skin, and increase as needed',
      'Use a hydrating toner without alcohol, fragrance, or harsh acids',
      'Look for ingredients like hyaluronic acid, glycerin, or centella',
      'Apply on damp skin for better absorption',
      'Pat gently—don\'t rub or drag the skin',
      'Best done in the evening when you have more time',
    ],
    warnings: [
      'Avoid toners with alcohol, AHAs, or BHAs for this method',
      'Skip if you have active acne or fungal infections',
      'Don\'t use with strong actives like retinol in the same routine',
      'If skin feels irritated, reduce the number of layers',
    ],
    recommendedProducts: ['3'], // Anua Heartleaf Toner
    sources: [
      { name: 'Korean Skincare NL', url: 'https://koreanskincare.nl/blogs/skintalks/the-7-skin-method-your-ultimate-guide-to-hydrated-skin' },
      { name: 'Care to Beauty', url: 'https://blog.caretobeauty.com/korean-7-skin-method-how-to/' },
      { name: 'IPSY', url: 'https://www.ipsy.com/blog/seven-skin-method' },
    ],
  },
  {
    slug: 'sandwich-technique',
    title: 'The Retinol Sandwich Method',
    subtitle: 'Gentle Way to Use Retinol Without Irritation',
    description: 'Learn the dermatologist-approved sandwich technique to use retinol effectively while minimizing irritation, dryness, and flaking.',
    heroImage: 'https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=1200',
    icon: '🥪',
    readTime: '4 min read',
    difficulty: 'Intermediate',
    skinTypes: ['Sensitive', 'Dry', 'Normal', 'Combination'],
    introduction: `The Retinol Sandwich Method involves "sandwiching" your retinol between two layers of moisturizer. This technique was created to minimize the common side effects of retinol—dryness, redness, and flaking—while still allowing the active ingredient to work.

According to research presented at the 2025 American Academy of Dermatology (AAD) Annual Meeting, this approach buffers the retinoid between layers of moisturizer to minimize direct skin contact while retaining its bioactivity.

The method creates a "sustained release" barrier that slows down retinol absorption, making it gentler on the skin. This is especially beneficial for those with sensitive skin, darker skin tones (which tend to be more reactive to retinol), or anyone new to retinoids.`,
    benefits: [
      'Reduces retinol irritation significantly',
      'Minimizes dryness, redness, and flaking',
      'Allows sensitive skin to tolerate retinol',
      'Creates sustained-release effect for gentler delivery',
      'Maintains retinol effectiveness (per 2025 AAD research)',
      'Great for retinol beginners or those with reactive skin',
    ],
    steps: [
      {
        step: 1,
        title: 'Cleanse and Prep',
        description: 'Start with clean, dry skin. Use a gentle cleanser and pat your face dry. Wait 5-10 minutes after cleansing to ensure skin is completely dry—applying retinol to damp skin increases penetration and potential irritation.',
      },
      {
        step: 2,
        title: 'Apply First Moisturizer Layer',
        description: 'Apply a thin layer of lightweight, hydrating moisturizer to your entire face. This creates a protective buffer between your skin and the retinol. Wait 1-2 minutes for it to absorb.',
      },
      {
        step: 3,
        title: 'Apply Retinol',
        description: 'Apply a pea-sized amount of retinol evenly across your face, avoiding the eye area and corners of the nose and mouth. These areas are more sensitive and prone to irritation.',
      },
      {
        step: 4,
        title: 'Apply Second Moisturizer Layer',
        description: 'After the retinol has absorbed (wait 5-10 minutes), apply another layer of moisturizer on top. This seals in the retinol and provides additional hydration to combat potential dryness.',
      },
      {
        step: 5,
        title: 'Morning After Care',
        description: 'In the morning, cleanse gently and apply a rich moisturizer. Always use SPF 30+ during the day—retinol makes skin more sensitive to UV damage.',
      },
    ],
    tips: [
      'Start with retinol 2-3 nights per week, gradually increasing',
      'Use a gentle, fragrance-free moisturizer for sandwiching',
      'Apply SPF religiously—retinol increases sun sensitivity',
      'Start with lower concentration retinol (0.25-0.5%)',
      'Be patient—results take 8-12 weeks to show',
      'Keep the rest of your routine simple while adjusting',
    ],
    warnings: [
      'Don\'t use with other actives (AHAs, BHAs, vitamin C) on the same night',
      'Avoid if pregnant or breastfeeding',
      'Stop use if severe irritation, peeling, or burning occurs',
      'Full sandwiching may reduce potency by ~3x (per AAD research)',
      'Skip retinol before waxing or laser treatments',
    ],
    recommendedProducts: ['1', '8'], // COSRX Snail Mucin, Beauty of Joseon Serum
    sources: [
      { name: 'Dermatology Times (2025 AAD)', url: 'https://www.dermatologytimes.com/view/-open-sandwich-moisturization-regimen-does-not-affect-bioactivity-of-retinols-and-retinoids' },
      { name: 'Origins', url: 'https://www.origins.com/stories/how-to/retinol-sandwich-method' },
      { name: 'NBC News', url: 'https://www.nbcnews.com/select/shopping/retinol-sandwiching-asked-derms-viral-trend-rcna202424' },
    ],
  },
  {
    slug: 'slugging',
    title: 'Slugging',
    subtitle: 'Overnight Occlusive Treatment for Maximum Hydration',
    description: 'Discover the Korean-inspired slugging technique that seals in moisture overnight for intensely hydrated, plump skin by morning.',
    heroImage: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200',
    icon: '✨',
    readTime: '4 min read',
    difficulty: 'Beginner',
    skinTypes: ['Dry', 'Very Dry', 'Dehydrated', 'Normal'],
    introduction: `Slugging is a skincare technique that involves applying a thick occlusive product—like petroleum jelly or a specialized sleeping mask—as the final step in your nighttime routine. The name comes from the "slug-like" shiny, glossy appearance it gives your skin.

While the term gained viral popularity on social media, the technique has roots in Korean skincare, where overnight hydration treatments have long been a staple. Korean beauty brands have refined this practice with dedicated "sleeping packs" and occlusive balms.

The science is simple: occlusive products create a physical barrier that prevents transepidermal water loss (TEWL), locking in all the hydrating products you applied underneath. You wake up with intensely moisturized, plump, and glowing skin.`,
    benefits: [
      'Locks in moisture and prevents overnight water loss',
      'Repairs and strengthens skin barrier',
      'Wakes up with plump, glowing skin',
      'Helps heal dry, cracked, or irritated skin',
      'Maximizes effectiveness of products applied underneath',
      'Affordable and easy to incorporate',
    ],
    steps: [
      {
        step: 1,
        title: 'Complete Your Evening Routine',
        description: 'Cleanse, tone, apply serums, and finish with your regular moisturizer. Make sure all products are fully absorbed before slugging. This is important—you\'re sealing everything in.',
      },
      {
        step: 2,
        title: 'Prep Your Occlusive',
        description: 'Take a small amount of your occlusive product—petroleum jelly (like Vaseline), Aquaphor, CeraVe Healing Ointment, or a Korean sleeping pack. A little goes a long way.',
      },
      {
        step: 3,
        title: 'Apply Thin Layer',
        description: 'Gently pat a thin, even layer over your entire face. Focus on dry areas like cheeks, forehead, and around the nose. Avoid applying too thick—you don\'t need to look like a glazed donut.',
      },
      {
        step: 4,
        title: 'Sleep On It',
        description: 'Go to sleep and let the occlusive work overnight. Consider using a silk or satin pillowcase to protect your bedding and reduce friction on your skin.',
      },
      {
        step: 5,
        title: 'Morning Cleanse',
        description: 'In the morning, wash your face with a gentle cleanser to remove the occlusive layer. Your skin should feel soft, supple, and deeply hydrated. Continue with your morning routine.',
      },
    ],
    tips: [
      'Start with 1-2 nights per week to see how your skin reacts',
      'Use a silk pillowcase to protect your bedding',
      'Apply a thinner layer if you find it too greasy',
      'Korean sleeping masks are a less greasy alternative',
      'Best for dry winter months or after treatments',
      'Layer over hydrating products for maximum benefit',
    ],
    warnings: [
      'Avoid if you have acne-prone or oily skin—can trap bacteria',
      'Skip if you have fungal acne (malassezia)',
      'Don\'t slug over active ingredients like retinol or acids',
      'May cause breakouts in some people—patch test first',
      'Not recommended for hot, humid climates',
    ],
    recommendedProducts: ['6'], // Laneige Lip Sleeping Mask (as example of sleeping treatment)
    sources: [
      { name: 'UpCircle Beauty', url: 'https://upcirclebeauty.com/blogs/upcircle/moisture-sandwiching' },
      { name: 'Rovectin', url: 'https://rovectin.com/blogs/learn/layer-up-master-the-sandwich-method-for-a-glowing-complexion-%E2%9C%A8' },
      { name: 'Healthline', url: 'https://www.healthline.com/health/beauty-skin-care/korean-skincare-routine' },
    ],
  },
];

export const getTipBySlug = (slug: string): BeautyTip | undefined => {
  return beautyTips.find((tip) => tip.slug === slug);
};

export const getAllTipSlugs = (): string[] => {
  return beautyTips.map((tip) => tip.slug);
};
