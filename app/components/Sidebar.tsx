'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Sparkles, TrendingUp, Droplets, Star, ArrowRight } from 'lucide-react';
import { products } from '../data/products';

const editorsPick = products[0]; // COSRX Snail Mucin

const beautyTips = [
  {
    title: '7-Skin Method',
    description: 'Layer your toner 7 times for intense hydration',
    icon: Droplets,
    slug: '7-skin-method',
  },
  {
    title: 'Sandwich Technique',
    description: 'Apply retinol between two layers of moisturizer',
    icon: Sparkles,
    slug: 'sandwich-technique',
  },
  {
    title: 'Slugging',
    description: 'Seal your routine with petrolatum overnight',
    icon: Star,
    slug: 'slugging',
  },
];

const hotIngredients = [
  { name: 'PDRN', description: 'Salmon DNA for regeneration', trend: '+340%', slug: 'pdrn' },
  { name: 'Spicules', description: 'Natural microneedling', trend: '+280%', slug: 'spicules' },
  { name: 'Mugwort', description: 'Soothing K-herb', trend: '+156%', slug: 'mugwort' },
];

export default function Sidebar() {
  return (
    <div className="sticky top-24 space-y-6 py-8 pl-8 border-l border-white/10">
      {/* Editor's Pick - Featured Card */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-pink-400 uppercase mb-4 flex items-center gap-2">
          <Star className="w-3 h-3" /> Editor&apos;s Pick
        </h3>
        <a
          href={editorsPick.shopUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="block group"
        >
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden mb-3">
            <img
              src={editorsPick.image}
              alt={editorsPick.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
            <div className="absolute bottom-3 left-3 right-3">
              <p className="text-pink-400 text-[10px] uppercase tracking-wider mb-1">
                {editorsPick.trendingReason}
              </p>
              <p className="text-white text-sm font-medium group-hover:text-pink-300 transition-colors">
                {editorsPick.brand}
              </p>
            </div>
          </div>
          <p className="text-gray-400 text-xs leading-relaxed line-clamp-2">
            {editorsPick.description}
          </p>
          <p className="text-pink-400 text-sm font-medium mt-2 flex items-center gap-1 group-hover:gap-2 transition-all">
            Shop Now <ArrowRight className="w-3 h-3" />
          </p>
        </a>
      </motion.div>

      {/* Hot Ingredients */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.1 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-pink-400 uppercase mb-4 flex items-center gap-2">
          <TrendingUp className="w-3 h-3" /> Hot Ingredients
        </h3>
        <div className="space-y-3">
          {hotIngredients.map((ingredient, i) => (
            <motion.div
              key={ingredient.name}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 + i * 0.05 }}
            >
              <Link
                href={`/ingredients/${ingredient.slug}`}
                className="flex items-center gap-3 p-3 bg-white/5 rounded-xl hover:bg-white/10 transition-colors group"
              >
                <div className="flex-1">
                  <p className="text-white text-sm font-medium group-hover:text-pink-300 transition-colors">{ingredient.name}</p>
                  <p className="text-gray-500 text-[10px]">{ingredient.description}</p>
                </div>
                <span className="text-green-400 text-xs font-medium bg-green-400/10 px-2 py-1 rounded-full">
                  {ingredient.trend}
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* K-Beauty Tips */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.2 }}
      >
        <h3 className="text-xs tracking-[0.2em] text-pink-400 uppercase mb-4 flex items-center gap-2">
          <Sparkles className="w-3 h-3" /> K-Beauty Tips
        </h3>
        <div className="space-y-3">
          {beautyTips.map((tip, i) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, x: 10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 + i * 0.05 }}
            >
              <Link
                href={`/tips/${tip.slug}`}
                className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/5 transition-colors group"
              >
                <div className="w-8 h-8 rounded-lg bg-pink-500/10 flex items-center justify-center flex-shrink-0 group-hover:bg-pink-500/20 transition-colors">
                  <tip.icon className="w-4 h-4 text-pink-400" />
                </div>
                <div className="flex-1">
                  <p className="text-white text-sm font-medium group-hover:text-pink-300 transition-colors">
                    {tip.title}
                  </p>
                  <p className="text-gray-500 text-xs mt-0.5">{tip.description}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-gray-600 group-hover:text-pink-400 transition-colors mt-1" />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Magazine Footer */}
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="pt-6 border-t border-white/10"
      >
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-serif text-lg">지</span>
          </div>
          <div>
            <p className="text-white text-sm font-medium">지금 Magazine</p>
            <p className="text-gray-500 text-[10px]">Issue 01 • December 2025</p>
          </div>
        </div>
        <p className="text-[10px] text-gray-600 leading-relaxed">
          Your curated guide to Korean beauty trends. Data sourced from Olive Young, Hwahae & Coupang.
        </p>
      </motion.div>
    </div>
  );
}
