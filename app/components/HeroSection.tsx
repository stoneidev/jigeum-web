'use client';

import { motion } from 'framer-motion';
import { products } from '../data/products';

export default function HeroSection() {
  const featuredProduct = products[0];

  return (
    <motion.section 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="relative my-8"
    >
      {/* Featured Story */}
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        {/* Image */}
        <div className="relative aspect-[4/5] lg:aspect-[3/4] overflow-hidden rounded-sm">
          <div 
            className="absolute inset-0 bg-gradient-to-br from-pink-200 to-purple-200"
            style={{
              backgroundImage: `url(${featuredProduct.image})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center'
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
          
          {/* Source Badge */}
          <div className="absolute top-6 left-6">
            <a 
              href={featuredProduct.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-xs text-white hover:bg-white/20 transition-colors"
            >
              <span className="w-2 h-2 bg-green-400 rounded-full" />
              {featuredProduct.source.name} #{featuredProduct.source.rank} • {featuredProduct.source.date}
            </a>
          </div>

          {/* Content Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-10">
            <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">Cover Story</p>
            <h2 className="text-2xl lg:text-4xl font-serif text-white mb-3 leading-tight">
              {featuredProduct.name}
            </h2>
            <p className="text-gray-300 text-sm mb-4 max-w-md">
              {featuredProduct.description}
            </p>
            <a 
              href={featuredProduct.brandUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-white text-sm border-b border-white/50 pb-1 hover:border-white transition-colors"
            >
              Discover {featuredProduct.brand} →
            </a>
          </div>
        </div>

        {/* Editorial Text */}
        <div className="lg:pl-8">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-4">Editor&apos;s Letter</p>
          <h3 className="text-3xl lg:text-5xl font-serif text-white leading-tight mb-6">
            The New Era of<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400">
              Korean Beauty
            </span>
          </h3>
          <div className="space-y-4 text-gray-400 text-sm leading-relaxed">
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
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl font-serif text-white">{stat.value}</p>
                <p className="text-xs text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
}
