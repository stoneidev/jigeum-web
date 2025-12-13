'use client';

import { motion } from 'framer-motion';
import { Youtube, Instagram, Info } from 'lucide-react';
import { Product } from '../data/products';

interface ProductCardProps {
  product: Product;
  index: number;
  onShowDetails: (product: Product) => void;
}

export default function ProductCard({ product, index, onShowDetails }: ProductCardProps) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05 }}
      className="group"
    >
      {/* Image */}
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-4">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-gray-800 to-gray-900 group-hover:scale-105 transition-transform duration-700"
          style={{
            backgroundImage: `url(${product.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
        
        {/* Source Badge */}
        <a 
          href={product.source.url}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-sm text-[10px] text-white rounded hover:bg-black/80 transition-colors"
        >
          {product.source.name} {product.source.rank && `#${product.source.rank}`}
        </a>

        {/* Quick Actions - Show on Hover */}
        <div className="absolute bottom-3 left-3 right-3 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <a 
            href={product.youtubeSearch}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 py-2 bg-white/90 text-black text-xs rounded hover:bg-white transition-colors"
          >
            <Youtube size={12} /> Reviews
          </a>
          <a 
            href={product.instagramTag}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-1 py-2 bg-white/90 text-black text-xs rounded hover:bg-white transition-colors"
          >
            <Instagram size={12} /> Posts
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
          className="text-xs text-pink-400 tracking-wider uppercase hover:text-pink-300 transition-colors"
        >
          {product.brand}
        </a>

        {/* Name */}
        <h3 className="text-white font-serif text-lg leading-tight">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-xs leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* Meta */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-center gap-3 text-xs text-gray-500">
            {product.tiktokViews && <span>📱 {product.tiktokViews}</span>}
            {product.instagramPosts && <span>📸 {product.instagramPosts}</span>}
          </div>
          <span className="text-white font-medium">{product.price}</span>
        </div>

        {/* Details Button */}
        <button
          onClick={() => onShowDetails(product)}
          className="flex items-center justify-center gap-2 w-full py-3 mt-3 border border-white/20 text-white text-xs tracking-wider uppercase hover:bg-white/5 transition-all"
        >
          <Info size={12} /> View Details
        </button>
      </div>
    </motion.article>
  );
}
