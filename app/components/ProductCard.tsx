'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Youtube, Instagram, Info, ShoppingBag } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onShowDetails: (product: Product) => void;
}

export default function ProductCard({ product, index, onShowDetails }: ProductCardProps) {
  const [imageError, setImageError] = useState(false);

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-lg mb-4 cursor-pointer" onClick={() => onShowDetails(product)}>
        {!imageError ? (
          <img
            src={product.image}
            alt={product.name}
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center text-gray-500">
              <ShoppingBag size={32} className="mx-auto mb-2 opacity-50" />
              <p className="text-xs">Image unavailable</p>
            </div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Source Badge */}
        <a 
          href={product.source.url}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="absolute top-3 left-3 px-2.5 py-1.5 bg-black/60 backdrop-blur-sm text-[10px] text-white rounded-full hover:bg-black/80 transition-colors flex items-center gap-1.5"
        >
          <span className="w-1.5 h-1.5 bg-green-400 rounded-full" />
          {product.source.name} {product.source.rank && `#${product.source.rank}`}
        </a>

        {/* Price Badge */}
        <div className="absolute top-3 right-3 px-3 py-1.5 bg-white/90 text-black text-xs font-medium rounded-full">
          {product.price}
        </div>

        {/* Quick Actions */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a 
            href={product.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white text-black text-xs font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Youtube size={14} /> Reviews
          </a>
          <a 
            href={product.instagramTag}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 flex items-center justify-center gap-1.5 py-2.5 bg-white text-black text-xs font-medium rounded-lg hover:bg-gray-100 transition-colors"
          >
            <Instagram size={14} /> Posts
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="space-y-2">
        {/* Brand */}
        <a 
          href={product.brandUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs text-pink-400 tracking-wider uppercase hover:text-pink-300 transition-colors inline-block"
        >
          {product.brand}
        </a>

        {/* Name */}
        <h3 
          className="text-white font-serif text-lg leading-tight cursor-pointer hover:text-pink-200 transition-colors"
          onClick={() => onShowDetails(product)}
        >
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Social Stats */}
        <div className="flex items-center gap-3 text-xs text-gray-500 pt-1">
          {product.tiktokViews && <span className="flex items-center gap-1">📱 {product.tiktokViews}</span>}
          {product.instagramPosts && <span className="flex items-center gap-1">📸 {product.instagramPosts}</span>}
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2 pt-2">
          <button
            onClick={() => onShowDetails(product)}
            className="flex-1 flex items-center justify-center gap-2 py-3 border border-white/20 text-white text-xs tracking-wider rounded-lg hover:bg-white/5 hover:border-white/40 transition-all min-h-[44px]"
          >
            <Info size={14} /> Details
          </button>
          <a
            href={product.shopUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-3 bg-white text-black text-xs tracking-wider rounded-lg hover:bg-gray-100 transition-all font-medium min-h-[44px]"
          >
            <ShoppingBag size={14} /> Shop
          </a>
        </div>
      </div>
    </motion.article>
  );
}
