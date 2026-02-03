'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  const [activeMainTab, setActiveMainTab] = useState<'magazine' | 'routine'>('magazine');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });

    const handleTabChange = (e: CustomEvent) => {
      setActiveMainTab(e.detail as 'magazine' | 'routine');
    };
    window.addEventListener('mainTabChange', handleTabChange as EventListener);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mainTabChange', handleTabChange as EventListener);
    };
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className={`sticky top-0 z-40 transition-all duration-300 ${scrolled ? 'bg-black/95 backdrop-blur-xl border-b' : 'border-b'
        }`}
      style={{
        borderColor: scrolled ? 'rgba(255, 255, 255, 0.1)' : 'rgba(205, 46, 58, 0.3)'
      }}
    >
      {/* Top Bar - Hide on scroll */}
      <div
        className={`py-2 text-center transition-all duration-300 ${scrolled ? 'h-0 py-0 overflow-hidden opacity-0' : 'opacity-100'
          }`}
        style={{
          background: scrolled ? 'transparent' : 'linear-gradient(90deg, rgba(205, 46, 58, 0.15) 0%, rgba(0, 71, 160, 0.15) 100%)'
        }}
      >
        <p className="text-xs text-gray-400">
          December 2025 Issue • Data sourced from Olive Young, Hwahae, Coupang
        </p>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className={`flex items-center justify-between transition-all duration-300 ${scrolled ? 'py-3' : 'py-6'
          }`}>
          {/* Logo */}
          <Link href="/" className="text-center group">
            <p className={`tracking-[0.3em] text-gray-500 uppercase transition-all ${scrolled ? 'text-[8px] hidden' : 'text-[10px]'
              }`}>The</p>
            <h1
              className={`tracking-wide transition-all font-medium ${scrolled ? 'text-xl' : 'text-2xl lg:text-3xl'
                }`}
              style={{
                fontFamily: "'Noto Sans KR', sans-serif",
                background: 'linear-gradient(135deg, #CD2E3A 0%, #0047A0 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}
            >
              지금
            </h1>
            <p className={`tracking-[0.2em] text-gray-500 uppercase transition-all ${scrolled ? 'text-[8px]' : 'text-[10px]'
              }`}>K-Beauty Magazine</p>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {/* Main Tabs */}
            <div className="flex bg-white/5 rounded-full p-1 mr-4">
              {[
                { id: 'magazine', label: 'Magazine' },
                { id: 'routine', label: 'Routine' }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => {
                    setActiveMainTab(tab.id as 'magazine' | 'routine');
                    window.dispatchEvent(new CustomEvent('mainTabChange', { detail: tab.id }));
                  }}
                  className={`px-4 py-1.5 rounded-full text-xs font-medium tracking-wide uppercase transition-all ${activeMainTab === tab.id
                      ? 'bg-white text-black shadow-lg'
                      : 'text-gray-400 hover:text-white'
                    }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className="h-4 w-px bg-white/10 mx-2" />

            {['skincare', 'makeup', 'device'].map((item) => (
              <a
                key={item}
                href={`#products`}
                onClick={(e) => {
                  e.preventDefault();
                  // 탭을 먼저 magazine으로 변경
                  setActiveMainTab('magazine');
                  window.dispatchEvent(new CustomEvent('mainTabChange', { detail: 'magazine' }));

                  // 약간의 지연 후 스크롤 (렌더링 대기)
                  setTimeout(() => {
                    const element = document.getElementById('products');
                    if (element) {
                      const headerOffset = 100;
                      const elementPosition = element.getBoundingClientRect().top;
                      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                      window.dispatchEvent(new CustomEvent('categoryChange', { detail: item }));
                    }
                  }, 50);
                }}
                className="relative text-gray-400 hover:text-white transition-colors text-[11px] tracking-widest uppercase group min-h-[44px] flex items-center"
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-pink-400 transition-all group-hover:w-full" />
              </a>
            ))}
            <a
              href="https://www.youtube.com/results?search_query=k-beauty+trends+2025"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors text-[11px] tracking-widest uppercase flex items-center gap-1"
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
