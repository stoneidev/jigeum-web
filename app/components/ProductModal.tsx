'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, Youtube, Instagram } from 'lucide-react';
import { Product } from '../data/products';

interface ProductModalProps {
  product: Product | null;
  onClose: () => void;
}

export default function ProductModal({ product, onClose }: ProductModalProps) {
  if (!product) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-lg border border-white/10"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-4 right-4 z-10 w-8 h-8 flex items-center justify-center bg-black/50 rounded-full hover:bg-black/70 transition-colors"
          >
            <X size={16} className="text-white" />
          </button>

          {/* Header Image */}
          <div className="relative h-48 overflow-hidden">
            <div 
              className="absolute inset-0"
              style={{
                backgroundImage: `url(${product.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                filter: 'blur(20px)',
                transform: 'scale(1.1)'
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-900" />
            <div className="absolute bottom-4 left-6 right-6">
              <a 
                href={product.source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-2 py-1 bg-white/10 backdrop-blur rounded text-[10px] text-white hover:bg-white/20 transition-colors mb-2"
              >
                {product.source.name} #{product.source.rank} • {product.source.date}
              </a>
              <h2 className="text-2xl font-serif text-white">{product.name}</h2>
              <a 
                href={product.brandUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-pink-400 text-sm hover:text-pink-300 transition-colors"
              >
                {product.brand}
              </a>
            </div>
          </div>

          {/* Content */}
          <div className="p-6 space-y-6">
            {/* Quick Info */}
            <div className="flex items-center justify-between py-4 border-y border-white/10">
              <div>
                <p className="text-xs text-gray-500">Price</p>
                <p className="text-white font-medium">{product.price}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Volume</p>
                <p className="text-white font-medium">{product.details.volume}</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Amazon Rating</p>
                <p className="text-white font-medium">{product.details.amazonRating} ({product.details.amazonReviews})</p>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">About</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{product.description}</p>
            </div>

            {/* Key Ingredients */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Key Ingredients</h3>
              <div className="flex flex-wrap gap-2">
                {product.details.keyIngredients.map((ingredient) => (
                  <span key={ingredient} className="px-3 py-1 bg-white/5 text-gray-300 text-xs rounded-full">
                    {ingredient}
                  </span>
                ))}
              </div>
            </div>

            {/* Highlights */}
            <div>
              <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Highlights</h3>
              <ul className="space-y-2">
                {product.details.highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-300">
                    <span className="text-pink-400 mt-0.5">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Skin Type & How to Use */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">Skin Type</h3>
                <p className="text-gray-300 text-sm">{product.details.skinType}</p>
              </div>
              <div>
                <h3 className="text-xs text-gray-500 uppercase tracking-wider mb-2">How to Use</h3>
                <p className="text-gray-300 text-sm">{product.details.howToUse}</p>
              </div>
            </div>

            {/* Social Stats */}
            <div className="flex items-center gap-4 py-4 border-t border-white/10">
              {product.tiktokViews && (
                <span className="text-xs text-gray-500">📱 TikTok {product.tiktokViews}</span>
              )}
              {product.instagramPosts && (
                <span className="text-xs text-gray-500">📸 Instagram {product.instagramPosts}</span>
              )}
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <a 
                href={product.youtubeSearch}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-red-500/20 text-red-400 text-sm rounded hover:bg-red-500/30 transition-colors"
              >
                <Youtube size={16} /> Watch Reviews
              </a>
              <a 
                href={product.instagramTag}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-purple-500/20 text-purple-400 text-sm rounded hover:bg-purple-500/30 transition-colors"
              >
                <Instagram size={16} /> See Posts
              </a>
              <a 
                href={product.shopUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black text-sm rounded hover:bg-gray-200 transition-colors"
              >
                <ExternalLink size={16} /> Amazon
              </a>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
