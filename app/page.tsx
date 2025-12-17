'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import TrendArticles from './components/TrendArticles';
import CategoryTabs from './components/CategoryTabs';
import ProductCard from './components/ProductCard';
import ProductModal from './components/ProductModal';
import Sidebar from './components/Sidebar';
import FeedbackWidget from './components/FeedbackWidget';
import RoutineGuide from './components/RoutineGuide';
import { products, Product } from './data/products';

export default function Home() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => setShowScrollTop(window.scrollY > 500);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredProducts = activeCategory === 'all' 
    ? products.slice(1)
    : products.filter(p => p.category === activeCategory);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <main className="min-h-screen bg-black">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="lg:grid lg:grid-cols-12 lg:gap-0">
          {/* Main Content */}
          <div className="lg:col-span-8 lg:pr-8">
            <HeroSection />

            {/* Featured Trend Articles */}
            <TrendArticles onShowProduct={setSelectedProduct} />

            {/* Products Section - Compact Header */}
            <div className="flex items-center justify-between py-4 border-b border-white/10 mb-4">
              <div>
                <h2 className="text-lg lg:text-xl font-serif text-white">
                  Must-Have Products
                </h2>
              </div>
              <CategoryTabs active={activeCategory} onChange={setActiveCategory} />
            </div>
            
            {/* Product Grid */}
            <section className="pb-24 lg:pb-16">
              <AnimatePresence mode="wait">
                <motion.div 
                  key={activeCategory}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-1 md:grid-cols-2 gap-8"
                >
                  {filteredProducts.map((product, index) => (
                    <ProductCard 
                      key={product.id} 
                      product={product} 
                      index={index}
                      onShowDetails={setSelectedProduct}
                    />
                  ))}
                </motion.div>
              </AnimatePresence>
              
              {filteredProducts.length === 0 && (
                <div className="text-center py-16">
                  <p className="text-gray-500">No products in this category yet.</p>
                </div>
              )}
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

      {/* Routine Guide Section */}
      <RoutineGuide />

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
              <p className="text-xs text-pink-400/80 mb-2">🚧 This site is currently under construction</p>
              <p className="text-xs text-gray-500">We do not sell products directly.</p>
              <p className="text-xs text-gray-500">Jigeum is an information platform for K-Beauty trends.</p>
              <p className="text-xs text-gray-600 mt-3">Rankings sourced from Olive Young, Hwahae, Coupang.</p>
              <p className="text-xs text-gray-700 mt-1">All product links are affiliate links.</p>
              <p className="text-xs text-gray-700 mt-4">© 2025 Jigeum. Issue 01.</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Navigation - Mobile only */}
      <nav className="fixed bottom-0 left-0 right-0 bg-black/95 backdrop-blur-xl border-t border-white/10 py-3 px-6 lg:hidden safe-area-inset-bottom">
        <div className="flex justify-around">
          {[
            { icon: '📖', label: 'Magazine', href: '#' },
            { icon: '📺', label: 'Watch', href: 'https://www.youtube.com/results?search_query=k-beauty+trends+2025' },
            { icon: '📸', label: 'Instagram', href: 'https://www.instagram.com/explore/tags/kbeauty/' },
            { icon: '🎵', label: 'TikTok', href: 'https://www.tiktok.com/tag/kbeauty' },
          ].map((item) => (
            <a 
              key={item.label}
              href={item.href} 
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="text-center py-1 px-3 rounded-lg active:bg-white/10 transition-colors"
            >
              <span className="text-lg block">{item.icon}</span>
              <p className="text-[10px] text-gray-400 mt-0.5">{item.label}</p>
            </a>
          ))}
        </div>
      </nav>

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={scrollToTop}
            className="fixed bottom-20 lg:bottom-8 right-4 lg:right-8 w-12 h-12 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors z-30"
            aria-label="Scroll to top"
          >
            <ArrowUp size={20} />
          </motion.button>
        )}
      </AnimatePresence>

      {/* Feedback Widget */}
      <FeedbackWidget />
    </main>
  );
}
