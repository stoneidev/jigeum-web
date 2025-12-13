'use client';

import { motion } from 'framer-motion';
import { TrendingUp } from 'lucide-react';
import { trendingTags } from '../data/products';

export default function TrendingTags() {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="py-5 border-y border-white/10 my-8"
    >
      <div className="flex items-center gap-4 overflow-x-auto scrollbar-hide -mx-4 px-4">
        <span className="flex items-center gap-2 text-xs text-pink-400 tracking-wider uppercase whitespace-nowrap">
          <TrendingUp size={14} />
          Trending
        </span>
        <div className="w-px h-4 bg-white/10" />
        {trendingTags.map((tag, i) => (
          <motion.a
            key={tag.name}
            href={tag.url}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: i * 0.05 }}
            className="px-3 py-1.5 bg-white/5 hover:bg-white/10 text-sm text-gray-400 hover:text-white transition-all rounded-full whitespace-nowrap"
          >
            #{tag.name.replace(' ', '')}
          </motion.a>
        ))}
      </div>
    </motion.div>
  );
}
