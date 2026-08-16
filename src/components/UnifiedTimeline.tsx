import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { GraduationCap, ShieldCheck, Trophy, Calendar, Award, ExternalLink } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Education as EducationType, Certification, Achievement } from '../types/portfolio';

interface UnifiedTimelineProps {
  education: EducationType[];
  certifications: Certification[];
  achievements: Achievement[];
}

export const UnifiedTimeline: React.FC<UnifiedTimelineProps> = ({
  education,
  certifications,
  achievements
}) => {
  const [activeTab, setActiveTab] = useState<'education' | 'certifications' | 'achievements'>('education');

  const tabs = [
    { id: 'education' as const, label: 'Education', icon: <GraduationCap className="w-4 h-4" />, color: '#CCFF00' },
    { id: 'certifications' as const, label: 'Certifications', icon: <ShieldCheck className="w-4 h-4" />, color: '#FF2D78' },
    { id: 'achievements' as const, label: 'Achievements', icon: <Trophy className="w-4 h-4" />, color: '#00FFD4' },
  ];

  const activeColor = tabs.find(t => t.id === activeTab)?.color || '#CCFF00';

  return (
    <section id="timeline" className="py-28 relative">
      <div className="section-line mb-28" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 04</span>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
              Timeline<span className="text-[#FF2D78]">.</span>
            </h2>
            <p className="text-white/30 text-base mt-4 max-w-xl">
              Education, certifications, and milestones.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap gap-2 mb-16">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`relative px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-[0.15em] flex items-center gap-2 transition-all duration-300 border ${
                    activeTab === tab.id
                      ? 'text-[#050505] font-bold'
                      : 'text-white/30 border-white/[0.06] hover:text-white/60 hover:border-white/15'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="timeline-tab-pill"
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: tab.color,
                        boxShadow: `0 0 25px ${tab.color}40`,
                      }}
                      transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Content */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical timeline line */}
          <div className="absolute left-6 sm:left-8 top-0 bottom-0 w-[2px]"
            style={{
              background: `linear-gradient(180deg, ${activeColor}40, ${activeColor}10, transparent)`,
            }}
          />

          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="edu-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {education.map((edu, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-16 sm:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-[18px] sm:left-[26px] top-2 timeline-dot" />

                    <div className="cyber-card p-6 sm:p-8 rounded-2xl space-y-4">
                      <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3">
                        <div>
                          <h3 className="text-xl font-heading font-bold text-white">{edu.degree}</h3>
                          <p className="text-[#CCFF00] font-mono text-sm mt-1">{edu.institution}</p>
                        </div>
                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 text-[11px] font-mono self-start shrink-0">
                          <Calendar className="w-3 h-3" /> {edu.startYear} – {edu.endYear}
                        </span>
                      </div>
                      <p className="text-white/35 text-sm leading-relaxed">{edu.description}</p>
                      {edu.gpaOrHonors && (
                        <div className="flex items-center gap-2 text-xs font-mono text-[#CCFF00]">
                          <Award className="w-4 h-4" /> {edu.gpaOrHonors}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                key="cert-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {certifications.map((cert, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-16 sm:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="absolute left-[18px] sm:left-[26px] top-2 timeline-dot"
                      style={{ background: '#FF2D78', boxShadow: '0 0 20px rgba(255,45,120,0.5)' }} />

                    <div className="cyber-card cyber-card-magenta p-6 sm:p-8 rounded-2xl space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <h3 className="text-lg font-heading font-bold text-white">{cert.name}</h3>
                          <p className="text-[#FF2D78] font-mono text-sm mt-1">{cert.issuer}</p>
                        </div>
                        <span className="text-[11px] font-mono text-white/30 flex items-center gap-1">
                          <Calendar className="w-3 h-3" /> {cert.date}
                        </span>
                      </div>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-xs font-mono text-[#FF2D78] hover:underline"
                          data-cursor-hover
                        >
                          View Credential <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'achievements' && (
              <motion.div
                key="achieve-tab"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                {achievements.map((item, idx) => (
                  <motion.div
                    key={idx}
                    className="relative pl-16 sm:pl-20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    <div className="absolute left-[18px] sm:left-[26px] top-2 timeline-dot"
                      style={{ background: '#00FFD4', boxShadow: '0 0 20px rgba(0,255,212,0.5)' }} />

                    <div className="cyber-card p-6 sm:p-8 rounded-2xl space-y-4">
                      <div className="flex items-start justify-between gap-3">
                        <div>
                          <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#00FFD4]">{item.category}</span>
                          <h3 className="text-lg font-heading font-bold text-white mt-1">{item.title}</h3>
                          <p className="text-white/30 text-xs font-mono mt-1">{item.organization}</p>
                        </div>
                        <span className="text-[11px] font-mono text-white/30 shrink-0">{item.date}</span>
                      </div>
                      <p className="text-white/35 text-sm leading-relaxed">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};
