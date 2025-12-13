'use client';

import { motion } from 'framer-motion';

const categories = [
  { id: 'all', label: 'All', icon: '✨' },
  { id: 'skincare', label: 'Skincare', icon: '💧' },
  { id: 'makeup', label: 'Makeup', icon: '💄' },
  { id: 'device', label: 'Devices', icon: '⚡' },
];

interface CategoryTabsProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-2 py-4 mb-8 overflow-x-auto scrollbar-hide -mx-4 px-4">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`relative flex items-center gap-2 px-5 py-2.5 rounded-full text-sm whitespace-nowrap transition-all ${
            active === cat.id
              ? 'text-black'
              : 'text-gray-400 hover:text-white hover:bg-white/5'
          }`}
        >
          {active === cat.id && (
            <motion.div
              layoutId="activeTab"
              className="absolute inset-0 bg-white rounded-full"
              transition={{ type: 'spring', bounce: 0.2, duration: 0.4 }}
            />
          )}
          <span className="relative z-10">{cat.icon}</span>
          <span className="relative z-10 font-medium">{cat.label}</span>
        </button>
      ))}
    </div>
  );
}
