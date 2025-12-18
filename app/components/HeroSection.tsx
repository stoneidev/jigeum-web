'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { products } from '../data/products';

export default function HeroSection() {
  const featuredProduct = products[0];
  const [imageError, setImageError] = useState(false);

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative my-8"
    >
      {/* Featured Story */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-2xl group"
        >
          {!imageError ? (
            <img
              src={featuredProduct.image}
              alt={featuredProduct.name}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center text-gray-400">
                <p className="text-sm">Cover Image</p>
                <p className="text-xs mt-1">{featuredProduct.name}</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Source Badge */}
          <div className="absolute top-6 left-6">
            <a 
              href={featuredProduct.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-xs text-white hover:bg-white/20 transition-colors"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              {featuredProduct.source.name} #{featuredProduct.source.rank} • {featuredProduct.source.date}
            </a>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">Cover Story</p>
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-3 leading-tight font-medium">
              {featuredProduct.name}
            </h2>
            <p className="text-gray-200 text-sm mb-5 max-w-md line-clamp-2 font-normal">
              {featuredProduct.description}
            </p>
            <a 
              href={featuredProduct.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-sm font-medium rounded-full hover:bg-gray-100 transition-colors"
            >
              Discover {featuredProduct.brand} <ArrowRight size={16} />
            </a>
          </div>
        </motion.div>

        {/* Editorial Text */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="lg:pl-8"
        >
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-4">Editor&apos;s Letter</p>
          <h3 className="text-3xl lg:text-5xl font-serif text-white leading-tight mb-6">
            The New Era of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Korean Beauty
            </span>
          </h3>
          <div className="space-y-4 text-gray-300 text-sm leading-relaxed font-normal">
            <p>
              In 2025, Korea solidified its position as the world&apos;s second-largest cosmetics exporter, 
              with $3.6 billion in Q1 alone. The U.S. market saw a remarkable 53% year-over-year growth.
            </p>
            <p>
              This issue presents the products that are defining the global beauty conversation—curated 
              from Korea&apos;s most trusted sources: Olive Young, Hwahae, and Coupang.
            </p>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mt-8 pt-8 border-t border-white/10">
            {[
              { value: '$3.6B', label: 'Q1 Exports' },
              { value: '53%', label: 'US Growth' },
              { value: '7.7M', label: '#KBeauty Posts' },
            ].map((stat, i) => (
              <motion.div 
                key={stat.label}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
              >
                <p className="text-2xl lg:text-3xl font-serif text-white font-medium">{stat.value}</p>
                <p className="text-xs text-gray-400 mt-1 font-normal">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}
