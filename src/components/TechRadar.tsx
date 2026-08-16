import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { ScrollReveal } from './ScrollReveal';
import { Skill } from '../types/portfolio';
import { TechIcon } from './TechIcon';

interface TechRadarProps {
  skills: Skill[];
}

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: '#CCFF00',
  Backend: '#FF2D78',
  Database: '#00FFD4',
  'Cloud / DevOps': '#4D7CFF',
  Tools: '#FF6B35',
};

export const TechRadar: React.FC<TechRadarProps> = ({ skills }) => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Frontend', 'Backend', 'Database', 'Cloud / DevOps', 'Tools'];
  const filteredSkills = activeCategory === 'All' ? skills : skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="py-28 relative">
      <div className="section-line mb-28" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 02</span>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
              Skills<span className="text-[#FF2D78]">.</span>
            </h2>
            <p className="text-white/30 text-base mt-4 max-w-xl">
              Technologies and tools in my development arsenal.
            </p>
          </div>
        </ScrollReveal>

        {/* Category Filter — Pill buttons */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap gap-2 mb-16">
              {categories.map((cat) => {
                const isActive = activeCategory === cat;
                const color = cat === 'All' ? '#CCFF00' : CATEGORY_COLORS[cat] || '#CCFF00';
                return (
                  <motion.button
                    key={cat}
                    onClick={() => setActiveCategory(cat)}
                    className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] transition-all duration-300 border ${
                      isActive
                        ? 'text-[#050505] font-bold'
                        : 'text-white/30 border-white/[0.06] hover:text-white/60 hover:border-white/15'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    data-cursor-hover
                  >
                    {isActive && (
                      <motion.span
                        layoutId="skill-filter-pill"
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: color,
                          boxShadow: `0 0 25px ${color}40`,
                        }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                  </motion.button>
                );
              })}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Floating Tag Cloud with Official Icons */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="flex flex-wrap gap-3 justify-center lg:justify-start"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filteredSkills.map((skill, idx) => {
              const color = CATEGORY_COLORS[skill.category] || '#CCFF00';
              return (
                <motion.div
                  key={`${skill.name}-${idx}`}
                  className="px-5 py-3 rounded-2xl cyber-card flex items-center gap-3 group border border-white/[0.08] hover:border-white/20 bg-[#080808]"
                  initial={{ opacity: 0, scale: 0.8, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: idx * 0.03, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    scale: 1.06,
                    y: -4,
                    borderColor: `${color}60`,
                    boxShadow: `0 0 25px ${color}20, 0 10px 30px rgba(0,0,0,0.4)`,
                  }}
                  data-cursor-hover
                >
                  {/* Official Language / Tool Icon */}
                  <div className="w-6 h-6 flex items-center justify-center shrink-0">
                    <TechIcon name={skill.name} className="w-5 h-5" />
                  </div>

                  <div>
                    <span className="font-heading font-semibold text-white text-sm block leading-tight">
                      {skill.name}
                    </span>
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em]" style={{ color: `${color}80` }}>
                      {skill.category}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};
