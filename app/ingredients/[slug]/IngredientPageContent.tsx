'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  TrendingUp,
  CheckCircle2,
  AlertTriangle,
  Beaker,
  Sparkles,
  Target,
  ExternalLink,
  ArrowRight,
  Leaf,
} from 'lucide-react';
import { Ingredient } from '../../data/ingredients';
import { Product } from '../../data/products';

interface IngredientPageContentProps {
  ingredient: Ingredient;
  recommendedProducts: Product[];
}

export default function IngredientPageContent({ ingredient, recommendedProducts }: IngredientPageContentProps) {
  return (
    <main className="min-h-screen bg-black">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-xl border-b border-white/10">
        <div className="max-w-4xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm">Back to Magazine</span>
          </Link>
          <Link href="/" className="text-xl font-serif text-white">
            지금
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20">
        <div className="aspect-[21/9] relative overflow-hidden">
          <img
            src={ingredient.heroImage}
            alt={ingredient.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-green-500/90 text-white text-xs font-medium rounded-full flex items-center gap-1">
                  <TrendingUp className="w-3 h-3" />
                  {ingredient.trendGrowth} Growth
                </span>
                <span className="px-3 py-1 bg-white/10 text-white text-xs rounded-full">
                  {ingredient.category}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-2">
                {ingredient.name}
              </h1>
              <p className="text-gray-400 text-sm mb-3">
                {ingredient.koreanName}
              </p>
              <p className="text-lg text-gray-300 max-w-2xl">
                {ingredient.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Origin */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex items-center gap-2 mb-8 text-sm"
        >
          <Leaf className="w-4 h-4 text-green-400" />
          <span className="text-gray-500">Origin:</span>
          <span className="text-gray-300">{ingredient.origin}</span>
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          {ingredient.introduction.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* How It Works */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <Beaker className="w-5 h-5 text-blue-400" />
            How It Works
          </h2>
          <div className="bg-blue-500/10 border border-blue-500/20 rounded-xl p-6">
            {ingredient.howItWorks.split('\n\n').map((paragraph, i) => (
              <p key={i} className="text-gray-300 leading-relaxed mb-4 last:mb-0">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.section>

        {/* Types (if available) */}
        {ingredient.types && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="mb-12"
          >
            <h2 className="text-xl font-serif text-white mb-6">
              Types of {ingredient.name}
            </h2>
            <div className="grid gap-4">
              {ingredient.types.map((type, i) => (
                <div
                  key={i}
                  className="p-4 bg-white/5 rounded-xl border border-white/10"
                >
                  <p className="text-white font-medium mb-1">{type.name}</p>
                  <p className="text-gray-400 text-sm">{type.description}</p>
                </div>
              ))}
            </div>
          </motion.section>
        )}

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {ingredient.benefits.map((benefit, i) => (
              <div
                key={i}
                className="flex items-start gap-3 p-4 bg-white/5 rounded-xl"
              >
                <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300 text-sm">{benefit}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Best For */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <Target className="w-5 h-5 text-purple-400" />
            Best For
          </h2>
          <div className="flex flex-wrap gap-2">
            {ingredient.bestFor.map((item, i) => (
              <span
                key={i}
                className="px-4 py-2 bg-purple-500/10 text-purple-300 text-sm rounded-full border border-purple-500/20"
              >
                {item}
              </span>
            ))}
          </div>
        </motion.section>

        {/* How To Use */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6">
            How To Use
          </h2>
          <div className="space-y-3">
            {ingredient.howToUse.map((step, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-4 bg-white/5 rounded-xl"
              >
                <span className="w-6 h-6 rounded-full bg-pink-500/20 flex items-center justify-center text-pink-400 text-sm flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-300 text-sm">{step}</span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Warnings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            Cautions
          </h2>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <ul className="space-y-3">
              {ingredient.warnings.map((warning, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-orange-400 mt-1">•</span>
                  <span className="text-gray-300">{warning}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Recommended Products */}
        {recommendedProducts.length > 0 && (
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-xl font-serif text-white mb-6">
              Products with {ingredient.name}
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {recommendedProducts.map((product) => (
                <a
                  key={product.id}
                  href={product.shopUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 bg-white/5 hover:bg-white/10 rounded-xl transition-colors group"
                >
                  <div className="w-16 h-16 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white font-medium group-hover:text-pink-300 transition-colors">
                      {product.brand}
                    </p>
                    <p className="text-gray-400 text-sm truncate">
                      {product.name}
                    </p>
                    <p className="text-pink-400 text-sm font-medium mt-1">
                      {product.price}
                    </p>
                  </div>
                  <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-pink-400 transition-colors" />
                </a>
              ))}
            </div>
          </motion.section>
        )}

        {/* Sources */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="pt-8 border-t border-white/10"
        >
          <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Sources
          </h3>
          <div className="flex flex-wrap gap-3">
            {ingredient.sources.map((source) => (
              <a
                key={source.name}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-sm text-gray-400 hover:text-pink-400 transition-colors"
              >
                {source.name}
                <ExternalLink className="w-3 h-3" />
              </a>
            ))}
          </div>
        </motion.section>
      </article>

      {/* Footer CTA */}
      <section className="border-t border-white/10 py-12 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-400 mb-4">Explore more K-Beauty ingredients</p>
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white rounded-full transition-colors"
          >
            Back to Magazine
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
