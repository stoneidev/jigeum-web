'use client';

import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { sources, products } from '../data/products';

export default function Sidebar() {
  const topProducts = products.slice(0, 5);

  return (
    <div className="sticky top-0 space-y-8 py-8 pl-8 border-l border-white/10">
      {/* Data Sources */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">Our Sources</h3>
        <div className="space-y-4">
          {sources.map((source) => (
            <a 
              key={source.name}
              href={source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block group"
            >
              <div className="flex items-start gap-3">
                <span className="text-xl">{source.logo}</span>
                <div>
                  <p className="text-white text-sm group-hover:text-pink-400 transition-colors flex items-center gap-1">
                    {source.name}
                    <ExternalLink size={10} className="opacity-0 group-hover:opacity-100 transition-opacity" />
                  </p>
                  <p className="text-gray-600 text-xs">{source.description}</p>
                </div>
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
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">In This Issue</h3>
        <div className="space-y-3">
          {topProducts.map((product, i) => (
            <a 
              key={product.id}
              href={product.shopUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 group"
            >
              <span className="text-gray-600 text-xs font-mono w-4">{String(i + 1).padStart(2, '0')}</span>
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
        <h3 className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-4">Follow the Trends</h3>
        <div className="space-y-2">
          <a 
            href="https://www.youtube.com/results?search_query=k-beauty+trends+2025"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            → YouTube Reviews
          </a>
          <a 
            href="https://www.instagram.com/explore/tags/kbeauty/"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            → Instagram #KBeauty
          </a>
          <a 
            href="https://www.tiktok.com/tag/kbeauty"
            target="_blank"
            rel="noopener noreferrer"
            className="block py-2 text-sm text-gray-400 hover:text-white transition-colors"
          >
            → TikTok #KBeauty
          </a>
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
        <p className="text-[10px] text-gray-700 mt-2">
          Issue 01 • December 2025
        </p>
      </motion.div>
    </div>
  );
}
