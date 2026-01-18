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
    description: 'The 2025 "Skin Flooding" morning routine. Focuses on layering lightweight hydration to create a glass-like barrier that lasts all day.',
    totalTime: '5-7 min',
    steps: [
      {
        order: 1,
        name: 'Water Cleanse',
        nameKo: '물 세안',
        description: 'Skip the cleanser. Just lukewarm water to refresh the skin without stripping your overnight barrier.',
        duration: '30 sec',
        tips: [
          'Maintains healthy skin microbiome',
          'Prevents morning dehydration',
          'Use cleanser only if you have oily skin'
        ],
        optional: true
      },
      {
        order: 2,
        name: 'First Essence / Toner',
        nameKo: '퍼스트 에센스',
        description: 'The first layer of "flooding". Apply on damp skin to trap moisture instantly.',
        duration: '30 sec',
        tips: [
          'Apply within 3 seconds of drying',
          'Press deeply into pores',
          'Look for fermented ingredients (Galactomyces)'
        ],
        recommendedProducts: ['Anua Heartleaf 77% Soothing Toner'],
        optional: true
      },
      {
        order: 3,
        name: 'Vitamin C / PDRN',
        nameKo: '비타민 C / PDRN',
        description: '2025\'s power couple. Vitamin C for protection, or PDRN for elasticity and healing.',
        duration: '1 min',
        tips: [
          'Vitamin C boosts sunscreen efficacy',
          'PDRN is great for sensitive mornings',
          'Wait 1 min before next step'
        ],
        recommendedProducts: ['Medicube PDRN Pink Peptide Serum']
      },
      {
        order: 4,
        name: 'Barrier Cream',
        nameKo: '장벽 크림',
        description: 'Seal the hydration. New-gen barrier creams are light enough for day use but lock moisture like a mask.',
        duration: '1 min',
        tips: [
          'Look for Ceramides + Phytosterol',
          'Gel-cream texture is best for makeup prep',
          'Don\'t forget the neck'
        ],
        recommendedProducts: ['COSRX Snail Mucin Essence']
      },
      {
        order: 5,
        name: 'Sunscreen (SPF 50+)',
        nameKo: '선크림',
        description: 'The final shield. 2025 sunscreens are essentially moisturizers with top-tier UV filters.',
        duration: '1 min',
        tips: [
          'Choose "Reef Safe" formulas',
          'No white cast is the new standard',
          'Skip moisturizer if SPF is hydrating enough'
        ],
        recommendedProducts: ['Beauty of Joseon Relief Sun']
      }
    ],
    proTips: [
      'Trend Alert: "Skin Flooding" – applying products on damp skin for max absorption',
      'PDRN is the new morning staple for "Glass Skin 2.0"',
      'If you look like a glazed donut, you\'re doing it right'
    ]
  },
  {
    id: 'night-2025',
    title: '2025 Night Routine',
    titleKo: '2025 나이트 루틴',
    type: 'night',
    description: 'The "Skin Cycling" approach. Alternating between recovery, exfoliation, and treatment nights for optimal results without irritation.',
    totalTime: '7-10 min',
    steps: [
      {
        order: 1,
        name: 'Double Cleanse',
        nameKo: '이중 세안',
        description: 'Oil cleanser first for SPF/makeup, foam cleanser second for pores. Non-negotiable.',
        duration: '2 min',
        tips: [
          'Massage oil for full 60 seconds',
          'Emulsify with water thoroughly',
          'Cleansing balms are trending over oils'
        ]
      },
      {
        order: 2,
        name: 'Toner Pad',
        nameKo: '토너 패드',
        description: 'The "Lazy Girl" hack that took over 2025. Quick gentle exfoliation and hydration in one swipe.',
        duration: '30 sec',
        tips: [
          'Use embossed side for exfoliation',
          'Smooth side for hydration packing',
          'Leave on cheeks as mini-mask'
        ],
        recommendedProducts: ['Anua Heartleaf 77% Soothing Toner']
      },
      {
        order: 3,
        name: 'Active Treatment',
        nameKo: '집중 관리',
        description: 'Choose your fighter: Retinol (Anti-aging) OR PDRN (Repair). Do not mix strong actives.',
        duration: '1 min',
        tips: [
          'Retinol Sandwich: Moisturizer -> Retinol -> Moisturizer',
          'PDRN is safe to use every night',
          'Avoid eyes if using high % Retinol'
        ],
        recommendedProducts: ['COSRX Retinol 0.1 Cream', 'Medicube PDRN Pink Peptide Serum']
      },
      {
        order: 4,
        name: 'Recovery Layer',
        nameKo: '진정 레이어',
        description: 'Calm the skin after actives. Snail Mucin or Cica are the best buffers.',
        duration: '1 min',
        tips: [
          'Essential if using Retinol',
          'Snail Mucin repairs barrier overnight',
          'Pat in multiple thin layers'
        ],
        recommendedProducts: ['COSRX Snail Mucin Essence']
      },
      {
        order: 5,
        name: 'Sleeping Mask',
        nameKo: '슬리핑 마스크',
        description: 'Overnight occlusion. "Slugging" with modern sleeping masks instead of heavy vaseline.',
        duration: '1 min',
        tips: [
          'Don\'t forget your lips',
          'Apply 30 mins before pillow contact',
          'Wash off in morning'
        ],
        recommendedProducts: ['Laneige Lip Sleeping Mask']
      }
    ],
    proTips: [
      '2025 Rule: "Skin Cycling" – Exfoliate(Day 1) → Retinol(Day 2) → Recover(Day 3&4)',
      'The "Retinol Sandwich" method stops irritation before it starts',
      'Sleeping masks > Heavy creams for acne-prone skin'
    ]
  }
];

export const skinCareDietTips = [
  {
    title: 'Skin Flooding',
    description: 'Layering hydration on damp skin. The secret to 2025\'s glow.',
    icon: '💦'
  },
  {
    title: 'Skin Cycling',
    description: '4-day cycle: Exfoliate → Retinol → Recover → Recover.',
    icon: '🔄'
  },
  {
    title: 'PDRN Era',
    description: 'Salmon DNA is replacing basic Hyaluronic Acid for repair.',
    icon: '🧬'
  },
  {
    title: 'Barrier First',
    description: 'Protect your barrier at all costs. No stinging allowed.',
    icon: '🛡️'
  }
];
