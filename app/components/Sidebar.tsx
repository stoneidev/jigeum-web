'use client';

import { motion } from 'framer-motion';
import { ExternalLink, Youtube, Instagram, Music } from 'lucide-react';
import { sources, products } from '../data/products';

export default function Sidebar() {
  const topProducts = products.slice(0, 5);

  return (
    <div className="sticky top-24 space-y-8 py-8 pl-8 border-l border-white/10">
      {/* Data Sources */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-pink-400" /> Our Sources
        </h3>
        <div className="space-y-3">
          {sources.map((source) => (
            <a 
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
            >
              <span className="text-xl">{source.logo}</span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm group-hover:text-pink-400 transition-colors flex items-center gap-1">
                  {source.name}
                  <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                </p>
                <p className="text-gray-600 text-xs truncate">{source.description}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Index */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-pink-400" /> In This Issue
        </h3>
        <div className="space-y-1">
          {topProducts.map((product, i) => (
            <a 
              key={product.id}
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 p-2 rounded-lg hover:bg-white/5 transition-colors group"
            >
              <span className="w-6 h-6 bg-white/5 rounded-full flex items-center justify-center text-xs text-gray-500 group-hover:bg-pink-500/20 group-hover:text-pink-400 transition-colors">
                {i + 1}
              </span>
              <div className="flex-1 min-w-0">
                <p className="text-white text-sm truncate group-hover:text-pink-400 transition-colors">
                  {product.name}
                </p>
                <p className="text-gray-600 text-xs">{product.brand}</p>
              </div>
            </a>
          ))}
        </div>
      </motion.div>

      {/* Social */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4 flex items-center gap-2">
          <span className="w-4 h-px bg-pink-400" /> Follow the Trends
        </h3>
        <div className="space-y-2">
          {[
            { icon: Youtube, label: 'YouTube Reviews', href: 'https://www.youtube.com/results?search_query=k-beauty+trends+2025', color: 'hover:text-red-400' },
            { icon: Instagram, label: 'Instagram #KBeauty', href: 'https://www.instagram.com/explore/tags/kbeauty/', color: 'hover:text-purple-400' },
            { icon: Music, label: 'TikTok #KBeauty', href: 'https://www.tiktok.com/tag/kbeauty', color: 'hover:text-pink-400' },
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-3 py-2.5 px-3 text-sm text-gray-400 hover:text-white ${item.color} transition-colors rounded-lg hover:bg-white/5`}
            >
              <item.icon size={16} />
              {item.label}
            </a>
          ))}
        </div>
      </motion.div>

      {/* Colophon */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-8 border-t border-white/10"
      >
        <p className="text-[10px] text-gray-600 leading-relaxed">
          지금 (Jigeum) is an independent publication dedicated to Korean beauty. 
          Rankings and data are sourced from official Korean retail platforms. 
          All product links are affiliate links.
        </p>
        <p className="text-[10px] text-gray-700 mt-3 flex items-center gap-2">
          <span className="w-2 h-2 bg-pink-500/50 rounded-full" />
          Issue 01 • December 2025
        </p>
      </motion.div>
    </div>
  );
}
