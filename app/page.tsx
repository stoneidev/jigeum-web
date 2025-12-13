'use client';

import { useState } from 'react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendingTags from './components/TrendingTags';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Sidebar from './components/Sidebar';
import { products, Product } from './data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const filteredProducts = activeCategory === 'all' 
    ? products.slice(1)
    : products.filter(p => p.category === activeCategory);

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-0">
          {/* Main Content */}
          <div className="lg:col-span-8 lg:pr-8">
            <HeroSection />
            <TrendingTags />
            
            {/* Section Title */}
            <div className="mb-8">
              <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">The Edit</p>
              <h2 className="text-2xl lg:text-3xl font-serif text-white">
                December&apos;s Must-Have Products
              </h2>
            </div>

            <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
            
            {/* Product Grid */}
            <section className="pb-24 lg:pb-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                {filteredProducts.map((product, index) => (
                  <ProductCard 
                    key={product.id} 
                    product={product} 
                    index={index}
                    onShowDetails={setSelectedProduct}
                  />
                ))}
              </div>
            </section>
          </div>

          {/* Sidebar - Desktop only */}
          <aside className="hidden lg:block lg:col-span-4">
            <Sidebar />
          </aside>
        </div>
      </div>

      {/* Product Modal */}
      <ProductModal 
        product={selectedProduct} 
        onClose={() => setSelectedProduct(null)} 
      />

      {/* Footer */}
      <footer className="border-t border-white/10 py-12 px-4 lg:px-8 mb-16 lg:mb-0">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-serif text-white mb-2">지금</h3>
              <p className="text-gray-600 text-sm">The K-Beauty Magazine</p>
            </div>
            <div className="flex gap-8">
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Watch</p>
                <div className="space-y-2">
                  <a href="https://www.youtube.com/results?search_query=k-beauty+trends+2025" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">YouTube</a>
                  <a href="https://www.tiktok.com/tag/kbeauty" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">TikTok</a>
                </div>
              </div>
              <div>
                <p className="text-xs text-gray-500 uppercase tracking-wider mb-3">Follow</p>
                <div className="space-y-2">
                  <a href="https://www.instagram.com/explore/tags/kbeauty/" target="_blank" rel="noopener noreferrer" className="block text-sm text-gray-400 hover:text-white transition-colors">Instagram</a>
                </div>
              </div>
            </div>
            <div className="lg:text-right">
              <p className="text-xs text-gray-600">Rankings sourced from Olive Young, Hwahae, Coupang.</p>
              <p className="text-xs text-gray-700 mt-1">All product links are affiliate links.</p>
              <p className="text-xs text-gray-700 mt-4">© 2025 Jigeum. Issue 01.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-4 px-6 lg:hidden">
        <div className="flex justify-around">
          <a href="#" className="text-center">
            <span className="text-lg">📖</span>
            <p className="text-[10px] text-gray-400 mt-1">Magazine</p>
          </a>
          <a href="https://www.youtube.com/results?search_query=k-beauty+trends+2025" target="_blank" rel="noopener noreferrer" className="text-center">
            <span className="text-lg">📺</span>
            <p className="text-[10px] text-gray-400 mt-1">Watch</p>
          </a>
          <a href="https://www.instagram.com/explore/tags/kbeauty/" target="_blank" rel="noopener noreferrer" className="text-center">
            <span className="text-lg">📸</span>
            <p className="text-[10px] text-gray-400 mt-1">Instagram</p>
          </a>
          <a href="https://www.tiktok.com/tag/kbeauty" target="_blank" rel="noopener noreferrer" className="text-center">
            <span className="text-lg">🎵</span>
            <p className="text-[10px] text-gray-400 mt-1">TikTok</p>
          </a>
        </div>
      </nav>
    </main>
  );
}
