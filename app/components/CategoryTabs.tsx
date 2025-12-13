'use client';

const categories = [
  { id: 'all', label: 'All Products' },
  { id: 'skincare', label: 'Skincare' },
  { id: 'makeup', label: 'Makeup' },
  { id: 'device', label: 'Devices' },
];

interface CategoryTabsProps {
  active: string;
  onChange: (id: string) => void;
}

export default function CategoryTabs({ active, onChange }: CategoryTabsProps) {
  return (
    <div className="flex gap-8 py-6 border-b border-white/10 mb-8 overflow-x-auto scrollbar-hide">
      {categories.map((cat) => (
        <button
          key={cat.id}
          onClick={() => onChange(cat.id)}
          className={`text-sm tracking-wider uppercase whitespace-nowrap transition-colors pb-2 border-b-2 -mb-[25px] ${
            active === cat.id
              ? 'text-white border-white'
              : 'text-gray-500 border-transparent hover:text-gray-300'
          }`}
        >
          {cat.label}
        </button>
      ))}
    </div>
  );
}
