'use client';

import { motion } from 'framer-motion';

export default function Header() {
  return (
    <motion.header 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="border-b border-white/10"
    >
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-pink-500/10 to-purple-500/10 py-2 text-center">
        <p className="text-xs text-gray-400">
          December 2025 Issue • Data sourced from Olive Young, Hwahae, Coupang
        </p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-6">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a href="/" className="text-center">
            <p className="text-[10px] tracking-[0.3em] text-gray-500 uppercase">The</p>
            <h1 className="text-3xl lg:text-4xl font-serif font-light text-white tracking-wide">지금</h1>
            <p className="text-[10px] tracking-[0.2em] text-gray-500 uppercase">K-Beauty Magazine</p>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-10">
            <a href="#skincare" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              Skincare
            </a>
            <a href="#makeup" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              Makeup
            </a>
            <a href="#devices" className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase">
              Devices
            </a>
            <a 
              href="https://www.youtube.com/results?search_query=k-beauty+trends+2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-sm tracking-wide uppercase"
            >
              Watch ↗
            </a>
          </nav>
          
          {/* Issue Info */}
          <div className="hidden lg:block text-right">
            <p className="text-xs text-gray-500 uppercase tracking-wider">Issue No.</p>
            <p className="text-2xl font-serif text-white">01</p>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
