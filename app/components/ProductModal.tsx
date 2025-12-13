'use client';

import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Youtube, Instagram, Star, Droplets } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (product) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [product]);

  // Close on escape key
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, [onClose]);

  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-end lg:items-center justify-center bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 100 }}
          transition={{ type: 'spring', damping: 25, stiffness: 300 }}
          className="relative w-full lg:max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-t-2xl lg:rounded-2xl border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Drag Handle - Mobile */}
          <div className="lg:hidden flex justify-center pt-3 pb-1">
            <div className="w-10 h-1 bg-white/20 rounded-full" />
          </div>

          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-colors"
            aria-label="Close modal"
          >
            <X size={18} className="text-white" />
          </button>

          {/* Header Image */}
          <div className="relative h-56 overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(30px) brightness(0.5)',
                transform: 'scale(1.2)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-zinc-900" />
            <div className="absolute bottom-6 left-6 right-6">
              <a 
                href={product.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-3 py-1.5 bg-white/10 backdrop-blur rounded-full text-xs text-white hover:bg-white/20 transition-colors mb-3"
              >
                <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
                {product.source.name} #{product.source.rank} • {product.source.date}
              </a>
              <h2 className="text-2xl lg:text-3xl font-serif text-white mb-1">{product.name}</h2>
              <a 
                href={product.brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 text-sm hover:text-pink-300 transition-colors"
              >
                {product.brand} →
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Price</p>
                <p className="text-white font-medium">{product.price}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Volume</p>
                <p className="text-white font-medium">{product.details.volume}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4 text-center">
                <p className="text-xs text-gray-500 mb-1">Rating</p>
                <p className="text-white font-medium flex items-center justify-center gap-1">
                  <Star size={12} className="text-yellow-400 fill-yellow-400" />
                  {product.details.amazonRating}
                </p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-pink-400" /> About
              </h3>
              <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <Droplets size={12} className="text-pink-400" /> Key Ingredients
              </h3>
              <div className="flex flex-wrap gap-2">
                {product.details.keyIngredients.map((ingredient) => (
                  <span key={ingredient} className="px-3 py-1.5 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-gray-300 text-xs rounded-full border border-white/5">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-3 flex items-center gap-2">
                <span className="w-4 h-px bg-pink-400" /> Highlights
              </h3>
              <ul className="space-y-2">
                {product.details.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-300">
                    <span className="w-5 h-5 bg-pink-500/20 rounded-full flex items-center justify-center text-pink-400 text-xs flex-shrink-0 mt-0.5">✓</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skin Type & How to Use */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Skin Type</h3>
                <p className="text-gray-300 text-sm">{product.details.skinType}</p>
              </div>
              <div className="bg-white/5 rounded-xl p-4">
                <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">How to Use</h3>
                <p className="text-gray-300 text-sm">{product.details.howToUse}</p>
              </div>
            </div>

            {/* Social Stats */}
            {(product.tiktokViews || product.instagramPosts) && (
              <div className="flex items-center gap-4 py-4 border-t border-white/10">
                {product.tiktokViews && (
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">📱 TikTok {product.tiktokViews}</span>
                )}
                {product.instagramPosts && (
                  <span className="text-xs text-gray-400 flex items-center gap-1.5">📸 Instagram {product.instagramPosts}</span>
                )}
              </div>
            )}

            {/* Actions */}
            <div className="flex gap-3 pb-4">
              <a 
                href={product.youtubeSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-red-500/20 text-red-400 text-sm rounded-xl hover:bg-red-500/30 transition-colors"
              >
                <Youtube size={18} /> Reviews
              </a>
              <a 
                href={product.instagramTag}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-purple-500/20 text-purple-400 text-sm rounded-xl hover:bg-purple-500/30 transition-colors"
              >
                <Instagram size={18} /> Posts
              </a>
              <a 
                href={product.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3.5 bg-white text-black text-sm font-medium rounded-xl hover:bg-gray-100 transition-colors"
              >
                <ExternalLink size={18} /> Shop
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
