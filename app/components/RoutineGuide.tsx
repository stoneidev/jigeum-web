'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sun, Moon, Clock, ChevronDown, Sparkles } from 'lucide-react';
import { routines, skinCareDietTips, Routine } from '../data/routines';

export default function RoutineGuide() {
  const [activeRoutine, setActiveRoutine] = useState<'morning' | 'night'>('morning');
  const [expandedStep, setExpandedStep] = useState<number | null>(null);

  const currentRoutine = routines.find(r => r.type === activeRoutine) as Routine;

  return (
    <section className="py-16 bg-gradient-to-b from-black to-gray-950">
      <div className="max-w-4xl mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-pink-400 text-xs tracking-[0.2em] uppercase mb-2">The Ritual</p>
          <h2 className="text-3xl lg:text-4xl font-serif text-white mb-4">
            2025 K-Beauty Routine
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            한국에서 유행하는 &quot;스킵케어&quot; 트렌드. 더 적은 단계로 더 건강한 피부를.
          </p>
        </div>

        {/* Skin-Care Diet Tips */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {skinCareDietTips.map((tip, index) => (
            <motion.div
              key={tip.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-4 text-center"
            >
              <span className="text-2xl mb-2 block">{tip.icon}</span>
              <h4 className="text-white text-sm font-medium mb-1">{tip.title}</h4>
              <p className="text-gray-500 text-xs">{tip.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Routine Toggle */}
        <div className="flex justify-center mb-8">
          <div className="bg-white/10 rounded-full p-1 flex">
            <button
              onClick={() => setActiveRoutine('morning')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeRoutine === 'morning'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Sun className="w-4 h-4" />
              Morning
            </button>
            <button
              onClick={() => setActiveRoutine('night')}
              className={`flex items-center gap-2 px-6 py-3 rounded-full transition-all ${
                activeRoutine === 'night'
                  ? 'bg-white text-black'
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              <Moon className="w-4 h-4" />
              Night
            </button>
          </div>
        </div>

        {/* Routine Info */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeRoutine}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            {/* Time Badge */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center gap-2 bg-pink-500/20 text-pink-400 px-4 py-2 rounded-full text-sm">
                <Clock className="w-4 h-4" />
                Total: {currentRoutine.totalTime}
              </div>
            </div>

            {/* Description */}
            <p className="text-gray-400 text-center mb-8 max-w-2xl mx-auto">
              {currentRoutine.description}
            </p>

            {/* Steps */}
            <div className="space-y-3">
              {currentRoutine.steps.map((step) => (
                <motion.div
                  key={step.order}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: step.order * 0.05 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl overflow-hidden"
                >
                  <button
                    onClick={() => setExpandedStep(expandedStep === step.order ? null : step.order)}
                    className="w-full flex items-center justify-between p-4 text-left"
                  >
                    <div className="flex items-center gap-4">
                      <span className="w-8 h-8 bg-white/10 rounded-full flex items-center justify-center text-sm font-medium text-white">
                        {step.order}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <h4 className="text-white font-medium">{step.name}</h4>
                          {step.optional && (
                            <span className="text-[10px] bg-gray-700 text-gray-300 px-2 py-0.5 rounded-full">
                              Optional
                            </span>
                          )}
                        </div>
                        <p className="text-gray-500 text-sm">{step.nameKo}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-gray-500 text-sm">{step.duration}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-gray-400 transition-transform ${
                          expandedStep === step.order ? 'rotate-180' : ''
                        }`}
                      />
                    </div>
                  </button>

                  <AnimatePresence>
                    {expandedStep === step.order && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-4 pt-0 border-t border-white/10">
                          <p className="text-gray-400 text-sm mt-4 mb-4">
                            {step.description}
                          </p>

                          {/* Tips */}
                          <div className="mb-4">
                            <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">Tips</p>
                            <ul className="space-y-1">
                              {step.tips.map((tip, i) => (
                                <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                                  <span className="text-pink-400">•</span>
                                  {tip}
                                </li>
                              ))}
                            </ul>
                          </div>

                          {/* Recommended Products */}
                          {step.recommendedProducts && (
                            <div>
                              <p className="text-xs text-gray-500 uppercase tracking-wider mb-2">
                                Recommended
                              </p>
                              <div className="flex flex-wrap gap-2">
                                {step.recommendedProducts.map((product) => (
                                  <span
                                    key={product}
                                    className="text-xs bg-pink-500/20 text-pink-400 px-3 py-1 rounded-full"
                                  >
                                    {product}
                                  </span>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </div>

            {/* Pro Tips */}
            <div className="mt-8 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <Sparkles className="w-5 h-5 text-pink-400" />
                <h4 className="text-white font-medium">Pro Tips</h4>
              </div>
              <ul className="space-y-2">
                {currentRoutine.proTips.map((tip, i) => (
                  <li key={i} className="text-sm text-gray-400 flex items-start gap-2">
                    <span className="text-pink-400">✦</span>
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
