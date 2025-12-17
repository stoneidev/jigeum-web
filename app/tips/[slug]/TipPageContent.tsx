'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import {
  ArrowLeft,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Lightbulb,
  ExternalLink,
  ArrowRight,
  Sparkles,
} from 'lucide-react';
import { BeautyTip } from '../../data/tips';
import { Product } from '../../data/products';

interface TipPageContentProps {
  tip: BeautyTip;
  recommendedProducts: Product[];
}

export default function TipPageContent({ tip, recommendedProducts }: TipPageContentProps) {
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
            src={tip.heroImage}
            alt={tip.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 bg-pink-500/90 text-white text-xs font-medium rounded-full">
                  K-Beauty Tips
                </span>
                <span className="flex items-center gap-1 text-gray-400 text-sm">
                  <Clock className="w-4 h-4" />
                  {tip.readTime}
                </span>
                <span className="text-gray-400 text-sm">
                  {tip.difficulty}
                </span>
              </div>
              <h1 className="text-3xl lg:text-5xl font-serif text-white mb-3">
                {tip.title}
              </h1>
              <p className="text-lg text-gray-300 max-w-2xl">
                {tip.subtitle}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Content */}
      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* Skin Types */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="flex flex-wrap gap-2 mb-8"
        >
          <span className="text-gray-500 text-sm">Best for:</span>
          {tip.skinTypes.map((type) => (
            <span
              key={type}
              className="px-3 py-1 bg-white/5 text-gray-300 text-sm rounded-full"
            >
              {type} Skin
            </span>
          ))}
        </motion.div>

        {/* Introduction */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="prose prose-invert prose-pink max-w-none mb-12"
        >
          {tip.introduction.split('\n\n').map((paragraph, i) => (
            <p key={i} className="text-gray-300 leading-relaxed mb-4">
              {paragraph}
            </p>
          ))}
        </motion.div>

        {/* Benefits */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-pink-400" />
            Benefits
          </h2>
          <div className="grid md:grid-cols-2 gap-3">
            {tip.benefits.map((benefit, i) => (
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

        {/* Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6">
            Step-by-Step Guide
          </h2>
          <div className="space-y-6">
            {tip.steps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + i * 0.1 }}
                className="flex gap-4"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-pink-500/20 flex items-center justify-center">
                  <span className="text-pink-400 font-medium">{step.step}</span>
                </div>
                <div className="flex-1 pt-1">
                  <h3 className="text-white font-medium mb-2">{step.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.section>

        {/* Tips */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-yellow-400" />
            Pro Tips
          </h2>
          <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-xl p-6">
            <ul className="space-y-3">
              {tip.tips.map((tipItem, i) => (
                <li key={i} className="flex items-start gap-3 text-sm">
                  <span className="text-yellow-400 mt-1">•</span>
                  <span className="text-gray-300">{tipItem}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.section>

        {/* Warnings */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-xl font-serif text-white mb-6 flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-orange-400" />
            What to Avoid
          </h2>
          <div className="bg-orange-500/10 border border-orange-500/20 rounded-xl p-6">
            <ul className="space-y-3">
              {tip.warnings.map((warning, i) => (
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
            transition={{ delay: 0.7 }}
            className="mb-12"
          >
            <h2 className="text-xl font-serif text-white mb-6">
              Recommended Products
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
          transition={{ delay: 0.8 }}
          className="pt-8 border-t border-white/10"
        >
          <h3 className="text-sm text-gray-500 uppercase tracking-wider mb-4">
            Sources
          </h3>
          <div className="flex flex-wrap gap-3">
            {tip.sources.map((source) => (
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
          <p className="text-gray-400 mb-4">Discover more K-Beauty secrets</p>
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
