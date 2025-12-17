'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { getFeaturedArticles, TrendArticle } from '../data/trends';
import { products, Product } from '../data/products';

interface TrendArticlesProps {
  onShowProduct: (product: Product) => void;
}

export default function TrendArticles({ onShowProduct }: TrendArticlesProps) {
  const featuredArticles = getFeaturedArticles();

  const getRelatedProducts = (productIds: string[]) => {
    return products.filter(p => productIds.includes(p.id));
  };

  return (
    <section className="py-12 border-b border-white/10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <div className="flex items-center gap-2 mb-2">
          <Sparkles className="w-4 h-4 text-pink-400" />
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase">Trending Now</p>
        </div>
        <h2 className="text-2xl lg:text-3xl font-serif text-white">
          K-Beauty Trends December 2025
        </h2>
        <p className="text-gray-400 text-sm mt-2">
          The hottest Korean skincare trends taking over the beauty world
        </p>
      </motion.div>

      {/* Featured Articles Grid */}
      <div className="space-y-8">
        {featuredArticles.map((article, index) => (
          <FeaturedArticleCard
            key={article.id}
            article={article}
            relatedProducts={getRelatedProducts(article.relatedProductIds)}
            index={index}
            onShowProduct={onShowProduct}
          />
        ))}
      </div>
    </section>
  );
}

interface FeaturedArticleCardProps {
  article: TrendArticle;
  relatedProducts: Product[];
  index: number;
  onShowProduct: (product: Product) => void;
}

function FeaturedArticleCard({ article, relatedProducts, index, onShowProduct }: FeaturedArticleCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group"
    >
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-2xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300">
        {/* Article Header - Clickable Link to Source */}
        <a
          href={article.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative cursor-pointer"
        >
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-pink-500/90 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              {article.category}
            </span>
          </div>

          {/* Read Article Indicator */}
          <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-1 px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
              Read Article
              <ExternalLink className="w-3 h-3" />
            </span>
          </div>

          {/* Article Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <div className="flex items-center gap-3 text-gray-400 text-xs mb-3">
              <span className="flex items-center gap-1">
                <Clock className="w-3 h-3" />
                {article.readTime}
              </span>
              <span>•</span>
              <span>{article.date}</span>
            </div>
            <h3 className="text-xl lg:text-2xl font-serif text-white mb-2 group-hover:text-pink-300 transition-colors">
              {article.title}
            </h3>
            <p className="text-gray-300 text-sm">
              {article.subtitle}
            </p>
          </div>
        </a>

        {/* Article Content */}
        <div className="p-6">
          <p className="text-gray-400 text-sm leading-relaxed mb-6">
            {article.description}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Key Takeaways</p>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
              {article.highlights.map((highlight, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                  <span className="text-pink-400 mt-1">•</span>
                  {highlight}
                </li>
              ))}
            </ul>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="border-t border-white/10 pt-6">
              <p className="text-xs text-gray-500 uppercase tracking-wider mb-4">Shop the Trend</p>
              <div className="flex flex-wrap gap-3">
                {relatedProducts.map((product) => (
                  <button
                    key={product.id}
                    onClick={() => onShowProduct(product)}
                    className="flex items-center gap-3 bg-white/5 hover:bg-white/10 rounded-xl p-3 transition-colors group/product"
                  >
                    <div className="w-12 h-12 rounded-lg overflow-hidden bg-white/10 flex-shrink-0">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="text-left">
                      <p className="text-white text-sm font-medium group-hover/product:text-pink-300 transition-colors line-clamp-1">
                        {product.brand}
                      </p>
                      <p className="text-gray-400 text-xs line-clamp-1">{product.name}</p>
                      <p className="text-pink-400 text-xs font-medium">{product.price}</p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-gray-500 group-hover/product:text-pink-400 transition-colors ml-2" />
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* Read Full Article Button */}
          <a
            href={article.source.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-2 w-full py-3 bg-pink-500/10 hover:bg-pink-500/20 text-pink-400 rounded-xl transition-colors mt-6"
          >
            Read Full Article
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Source */}
          <div className="flex items-center justify-between mt-6 pt-4 border-t border-white/5">
            <div className="flex flex-wrap gap-2">
              {article.tags.slice(0, 3).map((tag) => (
                <span key={tag} className="px-2 py-1 bg-white/5 text-gray-400 text-xs rounded-full">
                  #{tag}
                </span>
              ))}
            </div>
            <a
              href={article.source.url}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1 text-gray-500 hover:text-pink-400 text-xs transition-colors"
            >
              Source: {article.source.name}
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>
      </div>
    </motion.article>
  );
}
