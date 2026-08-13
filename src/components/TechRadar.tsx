import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { Code, Database, Cloud, Wrench, Layers, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Skill } from '../types/portfolio';

interface TechRadarProps {
  skills: Skill[];
}

const CATEGORY_META: Record<string, { icon: React.ReactNode; color: string }> = {
  Frontend: { icon: <Code className="w-4 h-4" />, color: 'text-indigo-400' },
  Backend: { icon: <Layers className="w-4 h-4" />, color: 'text-purple-400' },
  Database: { icon: <Database className="w-4 h-4" />, color: 'text-emerald-400' },
  'Cloud / DevOps': { icon: <Cloud className="w-4 h-4" />, color: 'text-cyan-400' },
  Tools: { icon: <Wrench className="w-4 h-4" />, color: 'text-amber-400' },
};

export const TechRadar: React.FC<TechRadarProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud / DevOps', 'Tools'];
  const filteredSkills = activeCategory === 'All' ? skills : skills.filter(s => s.category === activeCategory);

  return (
    <section id="skills" className="py-24 relative bg-slate-950/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-7 h-7 text-indigo-400" /> Technical <span className="gradient-text">Radar</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Interactive capability matrix and developer ecosystem tools.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Tabs */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    activeCategory === cat
                      ? 'text-white'
                      : 'text-slate-400 hover:text-slate-200 bg-slate-800/60 border border-slate-700/60'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeCategory === cat && (
                    <motion.span
                      layoutId="tech-filter-pill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{cat}</span>
                </motion.button>
              ))}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Skills Cards Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredSkills.map((skill, idx) => {
              const meta = CATEGORY_META[skill.category];
              return (
                <motion.div
                  key={`${skill.name}-${idx}`}
                  className="glass-panel skill-shimmer p-4 rounded-2xl flex flex-col items-center justify-center text-center space-y-2 group cursor-default"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: idx * 0.04 }}
                  whileHover={{
                    scale: 1.06,
                    borderColor: 'rgba(99,102,241,0.4)',
                    boxShadow: '0 8px 30px rgba(99,102,241,0.2)',
                    y: -4
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  <div className={`p-2.5 rounded-xl bg-slate-800/80 group-hover:bg-indigo-500/15 transition-colors ${meta?.color}`}>
                    {meta?.icon ?? <Code className="w-4 h-4" />}
                  </div>
                  <span className="font-semibold text-slate-200 text-sm">{skill.name}</span>
                  <span className="text-[11px] text-slate-500 font-medium">{skill.category}</span>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
