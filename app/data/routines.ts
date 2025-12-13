export interface RoutineStep {
  order: number;
  name: string;
  nameKo: string;
  description: string;
  duration: string;
  tips: string[];
  recommendedProducts?: string[];
  optional?: boolean;
}

export interface Routine {
  id: string;
  title: string;
  titleKo: string;
  type: 'morning' | 'night';
  description: string;
  totalTime: string;
  steps: RoutineStep[];
  proTips: string[];
}

export const routines: Routine[] = [
  {
    id: 'morning-2025',
    title: '2025 Morning Routine',
    titleKo: '2025 모닝 루틴',
    type: 'morning',
    description: 'The modern Korean morning routine focuses on protection and lightweight hydration. In 2025, the trend is "Skip-Care" – using fewer, smarter products.',
    totalTime: '5-7 min',
    steps: [
      {
        order: 1,
        name: 'Gentle Cleanse',
        nameKo: '세안',
        description: 'Use lukewarm water only, or a gentle low-pH cleanser if needed. Over-cleansing strips natural oils.',
        duration: '30 sec',
        tips: [
          'Water-only cleanse is trending in Korea',
          'If using cleanser, choose sulfate-free',
          'Pat dry, don\'t rub'
        ],
        optional: true
      },
      {
        order: 2,
        name: 'Hydrating Toner',
        nameKo: '토너',
        description: 'Prep skin with a hydrating toner. The 7-skin method is out – one layer is enough with modern formulas.',
        duration: '30 sec',
        tips: [
          'Pat into skin, don\'t wipe',
          'Look for hyaluronic acid or centella',
          'Can skip if using essence'
        ],
        recommendedProducts: ['Anua Heartleaf 77% Soothing Toner'],
        optional: true
      },
      {
        order: 3,
        name: 'Serum / Essence',
        nameKo: '세럼 / 에센스',
        description: 'One targeted treatment is all you need. Choose based on your main concern: brightening, hydration, or anti-aging.',
        duration: '1 min',
        tips: [
          'Vitamin C in the morning for brightening',
          'Niacinamide for pore control',
          '2-3 drops is enough'
        ],
        recommendedProducts: ['Beauty of Joseon Glow Serum', 'COSRX Snail Mucin']
      },
      {
        order: 4,
        name: 'Moisturizer',
        nameKo: '수분크림',
        description: 'Lock in hydration with a lightweight moisturizer. Gel types are popular for humid weather.',
        duration: '1 min',
        tips: [
          'Gel for oily/combo skin',
          'Cream for dry skin',
          'Skip if sunscreen is moisturizing enough'
        ],
        optional: true
      },
      {
        order: 5,
        name: 'Sunscreen',
        nameKo: '선크림',
        description: 'Non-negotiable! Korean sunscreens are lightweight and double as primers. SPF 50+ PA++++ is standard.',
        duration: '1 min',
        tips: [
          'Apply generously – 2 finger lengths',
          'Reapply every 2-3 hours outdoors',
          'Look for "no white cast" formulas'
        ],
        recommendedProducts: ['Beauty of Joseon Relief Sun']
      }
    ],
    proTips: [
      '2025 트렌드: 3-step routine (Cleanser → Serum → Sunscreen) is the new standard',
      'Listen to your skin – skip steps if it feels overloaded',
      'Humid days? Go even lighter with just sunscreen'
    ]
  },
  {
    id: 'night-2025',
    title: '2025 Night Routine',
    titleKo: '2025 나이트 루틴',
    type: 'night',
    description: 'Nighttime is for repair and recovery. Double cleansing remains essential, but the rest is simplified for skin health.',
    totalTime: '7-10 min',
    steps: [
      {
        order: 1,
        name: 'Oil Cleanse',
        nameKo: '오일 클렌징',
        description: 'Dissolve sunscreen, makeup, and sebum with an oil or balm cleanser. Massage for 30-60 seconds.',
        duration: '1 min',
        tips: [
          'Use on DRY skin first',
          'Massage in circular motions',
          'Emulsify with water, then rinse'
        ]
      },
      {
        order: 2,
        name: 'Water Cleanse',
        nameKo: '폼 클렌징',
        description: 'Follow with a gentle water-based cleanser to remove remaining residue.',
        duration: '30 sec',
        tips: [
          'Low pH (5.5) is ideal',
          'Foam lightly, don\'t scrub',
          'Lukewarm water only'
        ]
      },
      {
        order: 3,
        name: 'Exfoliate',
        nameKo: '각질 케어',
        description: 'Chemical exfoliation 2-3x per week. BHA for pores, AHA for texture, PHA for sensitive skin.',
        duration: '1 min',
        tips: [
          'Don\'t mix with retinol',
          'Start with low concentrations',
          'Always follow with hydration'
        ],
        optional: true
      },
      {
        order: 4,
        name: 'Toner / Essence',
        nameKo: '토너 / 에센스',
        description: 'Hydrate and prep skin for treatments. Fermented essences are trending for their skin-strengthening benefits.',
        duration: '30 sec',
        tips: [
          'Layer if skin is very dry',
          'Fermented ingredients boost absorption',
          'Can combine toner + essence step'
        ],
        recommendedProducts: ['Anua Heartleaf 77% Soothing Toner']
      },
      {
        order: 5,
        name: 'Treatment Serum',
        nameKo: '기능성 세럼',
        description: 'Night is the time for active ingredients. Retinol, peptides, or PDRN (salmon DNA) for anti-aging.',
        duration: '1 min',
        tips: [
          'Retinol: start 2x/week',
          'PDRN is the 2025 hero ingredient',
          'Peptides are gentle yet effective'
        ],
        recommendedProducts: ['Medicube Age-R Booster Pro']
      },
      {
        order: 6,
        name: 'Eye Cream',
        nameKo: '아이크림',
        description: 'Targeted care for the delicate eye area. Tap gently with ring finger.',
        duration: '30 sec',
        tips: [
          'Less is more',
          'Tap, don\'t rub',
          'Can use face serum if no specific concerns'
        ],
        optional: true
      },
      {
        order: 7,
        name: 'Moisturizer / Sleeping Mask',
        nameKo: '수분크림 / 슬리핑 마스크',
        description: 'Seal everything in. Sleeping masks 2-3x per week for extra hydration boost.',
        duration: '1 min',
        tips: [
          'Richer creams at night are OK',
          'Sleeping masks replace moisturizer',
          'Lip mask for overnight lip care'
        ],
        recommendedProducts: ['Laneige Lip Sleeping Mask']
      }
    ],
    proTips: [
      '2025 트렌드: "Skin-Care Diet" – use only what your skin truly needs',
      'Double cleansing is still essential for removing sunscreen',
      'Invest in one good treatment serum rather than many mediocre ones',
      'Sheet masks are now occasional treats, not daily essentials'
    ]
  }
];

export const skinCareDietTips = [
  {
    title: 'The 3-Step Morning',
    description: 'Cleanser (or water) → Serum → Sunscreen. That\'s it.',
    icon: '☀️'
  },
  {
    title: 'The 4-Step Night',
    description: 'Double Cleanse → Toner → Treatment → Moisturizer.',
    icon: '🌙'
  },
  {
    title: 'Listen to Your Skin',
    description: 'Redness or irritation? Cut back. Healthy glow? You\'re doing great.',
    icon: '👂'
  },
  {
    title: 'Quality Over Quantity',
    description: 'One excellent serum beats five mediocre ones.',
    icon: '✨'
  }
];
