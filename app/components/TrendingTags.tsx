'use client';

import { motion } from 'framer-motion';
import { trendingTags } from '../data/products';

export default function TrendingTags() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-6 border-y border-white/10 my-8"
    >
      <div className="flex items-center gap-6 overflow-x-auto scrollbar-hide">
        <span className="text-xs text-gray-500 tracking-wider uppercase whitespace-nowrap">Trending:</span>
        {trendingTags.map((tag) => (
          <a
            key={tag.name}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-gray-400 hover:text-white transition-colors whitespace-nowrap"
          >
            #{tag.name.replace(' ', '')}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
