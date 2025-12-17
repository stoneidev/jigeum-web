'use client';

import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Clock, ExternalLink, Sparkles } from 'lucide-react';
import { trendArticles, TrendArticle } from '../data/trends';
import { products, Product } from '../data/products';

interface CarouselCardProps {
  article: TrendArticle;
  relatedProducts: Product[];
  onShowProduct: (product: Product) => void;
  isActive: boolean;
}

function CarouselCard({ article, relatedProducts, onShowProduct, isActive }: CarouselCardProps) {
  const [imageError, setImageError] = useState(false);
  const [productImageErrors, setProductImageErrors] = useState<Record<string, boolean>>({});

  return (
    <a
      href={article.source.url}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex-shrink-0 w-[85%] md:w-[45%] lg:w-[40%] snap-start group cursor-pointer transition-all duration-300 ${
        isActive ? 'opacity-100' : 'opacity-70'
      }`}
    >
      <div className="bg-gradient-to-br from-white/5 to-white/[0.02] rounded-xl overflow-hidden border border-white/10 hover:border-pink-500/30 transition-all duration-300 h-full">
        {/* Thumbnail Image */}
        <div className="relative aspect-[16/9] overflow-hidden">
          {!imageError ? (
            <img
              src={article.image}
              alt={article.title}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              onError={() => setImageError(true)}
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
              <div className="text-center text-gray-500">
                <Sparkles size={24} className="mx-auto mb-2 opacity-50" />
                <p className="text-xs">Image unavailable</p>
              </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-2 py-1 bg-pink-500/90 backdrop-blur-sm text-white text-[10px] font-medium rounded-full">
              {article.category}
            </span>
          </div>

          {/* Read Indicator */}
          <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
            <span className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-[10px] rounded-full">
              Read <ExternalLink className="w-3 h-3" />
            </span>
          </div>

          {/* Title Overlay */}
          <div className="absolute bottom-0 left-0 right-0 p-4">
            <div className="flex items-center gap-2 text-gray-400 text-[10px] mb-2">
              <Clock className="w-3 h-3" />
              <span>{article.readTime}</span>
              <span>•</span>
              <span>{article.source.name}</span>
            </div>
            <h3 className="text-sm lg:text-base font-medium text-white group-hover:text-pink-300 transition-colors line-clamp-2">
              {article.title}
            </h3>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="p-3 border-t border-white/5">
            <p className="text-[10px] text-gray-500 uppercase mb-2">Shop the Trend</p>
            <div className="flex gap-2">
              {relatedProducts.slice(0, 2).map((product) => (
                <button
                  key={product.id}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    onShowProduct(product);
                  }}
                  className="flex items-center gap-2 flex-1 bg-white/5 hover:bg-white/10 rounded-lg p-2 transition-colors group/product"
                >
                  <div className="w-10 h-10 rounded-md overflow-hidden bg-white/10 flex-shrink-0">
                    {!productImageErrors[product.id] ? (
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover"
                        onError={() => setProductImageErrors(prev => ({ ...prev, [product.id]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-pink-500/20 to-purple-500/20 flex items-center justify-center">
                        <span className="text-[8px] text-gray-500">📦</span>
                      </div>
                    )}
                  </div>
                  <div className="text-left min-w-0 flex-1">
                    <p className="text-white text-xs font-medium truncate group-hover/product:text-pink-300 transition-colors">
                      {product.brand}
                    </p>
                    <p className="text-pink-400 text-[10px] font-medium">{product.price}</p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </a>
  );
}

interface TrendArticlesProps {
  onShowProduct: (product: Product) => void;
}

export default function TrendArticles({ onShowProduct }: TrendArticlesProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const getRelatedProducts = (productIds: string[]) => {
    return products.filter(p => productIds.includes(p.id));
  };

  const scrollToIndex = (index: number) => {
    const newIndex = Math.max(0, Math.min(index, trendArticles.length - 1));
    setActiveIndex(newIndex);
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth;
      scrollRef.current.scrollTo({
        left: newIndex * (cardWidth * 0.85 + 16),
        behavior: 'smooth'
      });
    }
  };

  const handleScroll = () => {
    if (scrollRef.current) {
      const cardWidth = scrollRef.current.offsetWidth * 0.85 + 16;
      const newIndex = Math.round(scrollRef.current.scrollLeft / cardWidth);
      setActiveIndex(newIndex);
    }
  };

  return (
    <section className="py-8 border-b border-white/10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center justify-between mb-4"
      >
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Sparkles className="w-4 h-4 text-pink-400" />
            <p className="text-pink-400 text-xs tracking-[0.2em] uppercase">Trending Now</p>
          </div>
          <h2 className="text-xl lg:text-2xl font-serif text-white">
            K-Beauty Trends December 2025
          </h2>
        </div>

        {/* Navigation Arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={() => scrollToIndex(activeIndex - 1)}
            disabled={activeIndex === 0}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Previous"
          >
            <ChevronLeft className="w-5 h-5 text-white" />
          </button>
          <button
            onClick={() => scrollToIndex(activeIndex + 1)}
            disabled={activeIndex === trendArticles.length - 1}
            className="p-2 rounded-full bg-white/5 hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
            aria-label="Next"
          >
            <ChevronRight className="w-5 h-5 text-white" />
          </button>
        </div>
      </motion.div>

      {/* Carousel */}
      <div
        ref={scrollRef}
        onScroll={handleScroll}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 -mx-4 px-4"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {trendArticles.map((article, index) => (
          <CarouselCard
            key={article.id}
            article={article}
            relatedProducts={getRelatedProducts(article.relatedProductIds)}
            onShowProduct={onShowProduct}
            isActive={index === activeIndex}
          />
        ))}
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-4">
        {trendArticles.map((_, index) => (
          <button
            key={index}
            onClick={() => scrollToIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === activeIndex
                ? 'bg-pink-400 w-6'
                : 'bg-white/20 hover:bg-white/40'
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
