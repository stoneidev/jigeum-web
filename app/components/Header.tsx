'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'bg-black/95 backdrop-blur-xl border-b border-white/10' : 'border-b border-white/10'
      }`}
    >
      {/* Top Bar - Hide on scroll */}
      <div className={`bg-gradient-to-r from-pink-500/10 to-purple-500/10 py-2 text-center transition-all duration-300 ${
        scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'opacity-100'
      }`}>
        <p className="text-xs text-gray-400">
          December 2025 Issue • Data sourced from Olive Young, Hwahae, Coupang
        </p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${
          scrolled ? 'py-3' : 'py-6'
        }`}>
          {/* Logo */}
          <a href="/" className="text-center group">
            <p className={`tracking-[0.3em] text-gray-500 uppercase transition-all ${
              scrolled ? 'text-[8px] hidden' : 'text-[10px]'
            }`}>The</p>
            <h1 className={`font-serif font-light text-white tracking-wide transition-all ${
              scrolled ? 'text-2xl' : 'text-3xl lg:text-4xl'
            }`}>지금</h1>
            <p className={`tracking-[0.2em] text-gray-500 uppercase transition-all ${
              scrolled ? 'text-[8px]' : 'text-[10px]'
            }`}>K-Beauty Magazine</p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            {['skincare', 'makeup', 'devices'].map((item) => (
              <a 
                key={item}
                href={`#${item}`} 
                className="relative text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase group"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-400 transition-all group-hover:w-full" />
              </a>
            ))}
            <a 
              href="https://www.youtube.com/results?search_query=k-beauty+trends+2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase flex items-center gap-1"
            >
              Watch <span className="text-pink-400">↗</span>
            </a>
          </nav>
          
          {/* Issue Info */}
          <div className={`hidden lg:block text-right transition-all ${scrolled ? 'opacity-0 w-0' : 'opacity-100'}`}>
            <p className="text-xs text-gray-500 uppercase tracking-wider">Issue No.</p>
            <p className="text-2xl font-serif text-white">01</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
