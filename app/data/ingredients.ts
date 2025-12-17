export interface Ingredient {
  slug: string;
  name: string;
  koreanName: string;
  subtitle: string;
  description: string;
  heroImage: string;
  trendGrowth: string;
  category: string;
  origin: string;
  introduction: string;
  howItWorks: string;
  benefits: string[];
  bestFor: string[];
  howToUse: string[];
  warnings: string[];
  types?: {
    name: string;
    description: string;
  }[];
  recommendedProducts: string[];
  sources: {
    name: string;
    url: string;
  }[];
}

export const ingredients: Ingredient[] = [
  {
    slug: 'pdrn',
    name: 'PDRN',
    koreanName: '피디알엔',
    subtitle: 'Salmon DNA for Cellular Regeneration',
    description: 'PDRN (Polydeoxyribonucleotide) is a groundbreaking K-Beauty ingredient derived from salmon DNA, offering unprecedented regenerative and healing properties for skin rejuvenation.',
    heroImage: 'https://images.unsplash.com/photo-1576426863848-c21f53c60b19?w=1200',
    trendGrowth: '+340%',
    category: 'Regenerative',
    origin: 'Salmon DNA / Plant-derived alternatives',
    introduction: `PDRN (Polydeoxyribonucleotide) is the hottest skincare ingredient to emerge from Korea in 2025. These DNA fragments derived from salmon sperm cells are prized for their remarkable regenerative properties.

Once an exclusive Hollywood injectable treatment, PDRN is now available in many Korean skincare products including serums, ampoules, moisturizers, and face masks. The ingredient went viral on social media with celebrity fans like Kim Kardashian and Jennifer Aniston, who reportedly love in-office PDRN skin treatments.

What makes PDRN remarkable is its ability to interact directly with your skin cells, promoting natural healing processes at a cellular level—not just on the surface.`,
    howItWorks: `PDRN works by activating the A2A adenosine receptors, which play a crucial role in tissue repair and anti-inflammatory responses. Unlike traditional ingredients that work primarily on the skin's surface, PDRN penetrates deeper, working at a cellular level to promote genuine skin regeneration and repair.

The compound stimulates fibroblast proliferation (the cells that produce collagen), accelerates wound healing, and reduces inflammation. This medical-grade approach to skincare is why PDRN was originally used in hospitals for burn victims and post-surgical recovery before entering the beauty world.

Korean brand Rejuran pioneered PDRN in skin boosters (dermal injections) that dermatologists use to improve skin elasticity, repair damage, and reduce fine lines. These treatments remain incredibly popular in Korea today.`,
    benefits: [
      'Stimulates skin cell growth and natural repair',
      'Boosts collagen production for firmer skin',
      'Reduces fine lines and wrinkles over time',
      'Strengthens skin barrier against environmental stress',
      'Provides anti-inflammatory benefits',
      'Improves skin texture and brightness',
      'Accelerates wound healing',
      'Plumps skin for youthful appearance',
    ],
    bestFor: [
      'Aging skin with fine lines',
      'Dull, tired-looking skin',
      'Post-procedure recovery',
      'Damaged skin barrier',
      'Loss of elasticity',
      'Uneven skin texture',
    ],
    howToUse: [
      'Apply PDRN serum after cleansing and toning',
      'Use 2-3 drops and pat gently into skin',
      'Follow with moisturizer to seal in benefits',
      'Best used in evening routine',
      'Can be layered with other hydrating ingredients',
      'Consistent use for 4-8 weeks shows best results',
    ],
    warnings: [
      'Patch test if you have seafood allergies (salmon-derived)',
      'Choose plant-based PDRN if vegan or allergic',
      'May cause mild tingling initially',
      'Avoid if pregnant or breastfeeding (limited research)',
      'Store in cool, dark place to maintain efficacy',
    ],
    types: [
      {
        name: '1st Gen: Salmon PDRN',
        description: 'Original formula derived from salmon DNA, considered most potent',
      },
      {
        name: '2nd Gen: Plant PDRN',
        description: 'Vegan alternative from centella, ginseng, or rice—similar but not identical benefits',
      },
      {
        name: '3rd Gen: Microbial PDRN',
        description: 'Lab-cultured PDRN, sustainable and consistent quality',
      },
    ],
    recommendedProducts: ['1', '8'],
    sources: [
      { name: 'Innisfree', url: 'https://us.innisfree.com/blogs/korean-skincare-edit/meet-korea-s-latest-skincare-trend-the-pdrn-treatment' },
      { name: 'UMMA', url: 'https://umma.io/blog/rise-of-pdrn-in-korean-skincare-2025/' },
      { name: 'Who What Wear', url: 'https://www.whowhatwear.com/beauty/skin/korean-skincare-ingredients' },
      { name: 'The Skinimalist', url: 'https://www.theskinimalist.blog/blog/what-is-pdrn-the-salmon-skincare-trend-explained' },
    ],
  },
  {
    slug: 'spicules',
    name: 'Spicules',
    koreanName: '스피큘',
    subtitle: 'Natural Microneedling in a Bottle',
    description: 'Spicules are microscopic needles from marine sponges that create microchannels in skin, boosting collagen and enhancing product absorption—like painless microneedling at home.',
    heroImage: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=1200',
    trendGrowth: '+280%',
    category: 'Exfoliation & Delivery',
    origin: 'Marine sponges (Haliclona spp)',
    introduction: `Spicules are the buzzy new skincare MVPs taking K-Beauty by storm. These microscopic needle-like structures derived from marine sponges are being called "liquid microneedling" for their ability to deliver professional-level results at home.

Popularized in high-tech Korean skin clinics, spicules create microchannels in the skin that boost collagen, gently exfoliate, and allow active ingredients to penetrate deeper into the dermis. Think of them as nature's version of microneedling—minus the price tag, pain, and downtime.

Once processed and refined, these tiny structures act as a transdermal delivery system, penetrating the skin's surface to stimulate cell regeneration and enhance ingredient absorption like never before.`,
    howItWorks: `Spicules work through their unique needle-like structure. When applied to skin, they create temporary microchannels that serve two purposes:

1. **Stimulation**: The micro-punctures trigger your skin's natural healing response, boosting collagen production and cell turnover.

2. **Delivery**: These channels allow active ingredients to penetrate much deeper than they normally would, maximizing the effectiveness of your skincare.

Some advanced Korean brands now combine spicules with powerhouse actives like peptides and PDRN. This means they don't just enhance formula effectiveness by creating pathways—they deliver potent ingredients deep into the skin where they work best.

You'll feel a noticeable tingling or prickling sensation that can last several hours after application—this is normal and indicates the spicules are working.`,
    benefits: [
      'Stimulates natural collagen production',
      'Enhances absorption of other skincare products',
      'Gently exfoliates for smoother texture',
      'Reduces appearance of fine lines over time',
      'Minimizes pore appearance',
      'Improves skin elasticity',
      'Helps with hyperpigmentation',
      'No downtime unlike professional treatments',
    ],
    bestFor: [
      'Dull skin needing exfoliation',
      'Fine lines and wrinkles',
      'Enlarged pores',
      'Uneven skin texture',
      'Those who want microneedling benefits at home',
      'Hyperpigmentation concerns',
    ],
    howToUse: [
      'Apply spicule serum at night only',
      'Use on clean, dry skin',
      'Expect tingling—this is normal',
      'Avoid other actives (AHAs, BHAs, retinol) same night',
      'Follow with gentle moisturizer',
      'Use 1-2 times per week initially',
      'Wear SPF next day as skin is sensitized',
    ],
    warnings: [
      'Not suitable for highly sensitive skin',
      'Avoid if you have active acne or breakouts',
      'Don\'t use with strong acids or retinol same night',
      'May cause temporary redness or tingling',
      'Those prone to hyperpigmentation should patch test',
      'Skip if skin barrier is compromised',
    ],
    recommendedProducts: ['1', '3'],
    sources: [
      { name: 'Cosmopolitan', url: 'https://www.cosmopolitan.com/style-beauty/beauty/a69249367/korean-skincare-trends/' },
      { name: 'ELLE', url: 'https://www.elle.com/beauty/makeup-skin-care/g64897223/spicules-skincare/' },
      { name: 'Editor\'s Beauty', url: 'https://www.editorsbeauty.com/home-2/spicule-skin-care-the-tiny-powerhouse-transforming-beauty' },
    ],
  },
  {
    slug: 'mugwort',
    name: 'Mugwort',
    koreanName: '쑥 (Ssuk)',
    subtitle: 'Traditional Korean Herb for Soothing Skin',
    description: 'Mugwort (Artemisia) is a time-honored Korean medicinal herb now starring in K-Beauty for its powerful anti-inflammatory and soothing properties for sensitive, irritated skin.',
    heroImage: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=1200',
    trendGrowth: '+156%',
    category: 'Soothing & Calming',
    origin: 'Artemisia plant (Korean mugwort)',
    introduction: `Mugwort, known as "ssuk" (쑥) in Korean, is a traditional medicinal herb that has been used in Korea for centuries—not just in skincare, but in food, tea, and traditional medicine. This sacred plant is now a K-Beauty superstar for sensitive and irritated skin.

Rich in vitamins A, C, and E, mugwort is celebrated for its powerful anti-inflammatory and antioxidant properties. In Korean culture, mugwort has long been associated with healing and purification, and modern skincare has embraced these traditional benefits.

The I'm From Mugwort Essence became a cult favorite and introduced global audiences to this powerful ingredient. Now, numerous K-Beauty brands feature mugwort as a hero ingredient for calming reactive, stressed skin.`,
    howItWorks: `Mugwort works through multiple mechanisms to soothe and protect skin:

**Anti-inflammatory Action**: Mugwort contains compounds that calm inflammation at the source, reducing redness, swelling, and irritation. This makes it ideal for conditions like rosacea, eczema, and general sensitivity.

**Antioxidant Protection**: The high vitamin content (A, C, E) neutralizes free radicals that cause premature aging and damage from environmental stressors like pollution and UV exposure.

**Barrier Support**: Mugwort helps strengthen the skin's natural moisture barrier, preventing water loss and protecting against irritants.

**Antibacterial Properties**: Natural antibacterial compounds help keep acne-causing bacteria in check, making mugwort suitable for blemish-prone skin that's also sensitive.`,
    benefits: [
      'Calms inflammation and redness',
      'Soothes sensitive and reactive skin',
      'Rich in vitamins A, C, and E',
      'Protects against environmental damage',
      'Strengthens skin barrier',
      'Provides antibacterial benefits for acne',
      'Hydrates without heaviness',
      'Safe for most sensitive skin types',
    ],
    bestFor: [
      'Sensitive or reactive skin',
      'Redness and rosacea',
      'Eczema-prone skin',
      'Acne with sensitivity',
      'Stressed, irritated skin',
      'Those seeking gentle, natural ingredients',
    ],
    howToUse: [
      'Apply mugwort essence after cleansing',
      'Can be used morning and night',
      'Layer before heavier serums and moisturizers',
      'Safe to use with most other ingredients',
      'Great as a soothing layer after actives',
      'Can be used on irritated spots throughout day',
    ],
    warnings: [
      'Rare, but possible plant allergies—patch test first',
      'Those with ragweed allergies may react',
      'Avoid if allergic to Artemisia family plants',
      'Generally very safe for most skin types',
    ],
    recommendedProducts: ['3', '6'],
    sources: [
      { name: 'Healthline', url: 'https://www.healthline.com/health/beauty-skin-care/korean-skincare-routine' },
      { name: 'Who What Wear', url: 'https://www.whowhatwear.com/beauty/skin/korean-skincare-ingredients' },
      { name: 'Cosmopolitan', url: 'https://www.cosmopolitan.com/style-beauty/beauty/a69249367/korean-skincare-trends/' },
    ],
  },
];

export const getIngredientBySlug = (slug: string): Ingredient | undefined => {
  return ingredients.find((ing) => ing.slug === slug);
};

export const getAllIngredientSlugs = (): string[] => {
  return ingredients.map((ing) => ing.slug);
};
