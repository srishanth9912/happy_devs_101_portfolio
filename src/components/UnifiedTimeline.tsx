import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { GraduationCap, ShieldCheck, Trophy, Calendar, Award, ExternalLink, GitCommit } from 'lucide-react';
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
    { id: 'education', label: 'Academic Education', icon: <GraduationCap className="w-4 h-4" /> },
    { id: 'certifications', label: 'Certifications', icon: <ShieldCheck className="w-4 h-4" /> },
    { id: 'achievements', label: 'Hackathons & Awards', icon: <Trophy className="w-4 h-4" /> }
  ];

  return (
    <section id="timeline" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white flex items-center justify-center gap-2">
              <GitCommit className="w-7 h-7 text-indigo-400" /> Career & Academic <span className="gradient-text">Timeline</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Unified milestone tracker covering education, certifications, and hackathons.
            </p>
          </div>
        </ScrollReveal>

        {/* Tab Switcher */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-14">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold flex items-center gap-2 transition-colors duration-200 ${
                    activeTab === tab.id
                      ? 'text-white'
                      : 'bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-200'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeTab === tab.id && (
                    <motion.span
                      layoutId="timeline-tab-pill"
                      className="absolute inset-0 bg-indigo-600 rounded-xl shadow-lg shadow-indigo-600/30"
                      transition={{ type: 'spring', bounce: 0.25, duration: 0.45 }}
                    />
                  )}
                  <span className="relative z-10">{tab.icon}</span>
                  <span className="relative z-10">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Tab Content Display */}
        <div className="max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            {activeTab === 'education' && (
              <motion.div
                key="edu-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="space-y-6"
              >
                {education.map((edu, idx) => (
                  <div key={idx} className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 space-y-4">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-slate-800 pb-4">
                      <div>
                        <h3 className="text-xl font-heading font-bold text-white">{edu.degree}</h3>
                        <p className="text-indigo-400 font-semibold">{edu.institution}</p>
                      </div>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-xs font-semibold self-start shrink-0">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {edu.startYear} – {edu.endYear}
                      </span>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed">{edu.description}</p>

                    {edu.gpaOrHonors && (
                      <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 pt-2">
                        <Award className="w-4 h-4" /> {edu.gpaOrHonors}
                      </div>
                    )}
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'certifications' && (
              <motion.div
                key="cert-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {certifications.map((cert, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-3xl space-y-4 flex flex-col justify-between border border-white/10">
                    <div className="space-y-3">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400 w-fit">
                        <ShieldCheck className="w-6 h-6" />
                      </div>
                      <h3 className="text-lg font-heading font-bold text-white">{cert.name}</h3>
                      <p className="text-slate-400 text-sm font-medium">{cert.issuer}</p>
                      {cert.credentialId && (
                        <p className="text-xs text-slate-500 font-mono">ID: {cert.credentialId}</p>
                      )}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <span className="text-xs text-slate-400 flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5 text-indigo-400" /> {cert.date}
                      </span>
                      {cert.credentialUrl && (
                        <a
                          href={cert.credentialUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1 text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                        >
                          Credential <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'achievements' && (
              <motion.div
                key="achieve-tab"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -15 }}
                transition={{ duration: 0.2 }}
                className="grid grid-cols-1 md:grid-cols-3 gap-6"
              >
                {achievements.map((item, idx) => (
                  <div key={idx} className="glass-panel p-6 rounded-3xl space-y-4 border border-white/10">
                    <div className="flex items-center justify-between">
                      <div className="p-3 rounded-xl bg-indigo-500/10 text-indigo-400">
                        <Trophy className="w-5 h-5 text-amber-400" />
                      </div>
                      <span className="px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-xs font-semibold text-slate-300">
                        {item.date}
                      </span>
                    </div>

                    <div>
                      <span className="text-xs uppercase tracking-wider font-semibold text-indigo-400">{item.category}</span>
                      <h3 className="text-lg font-heading font-bold text-white mt-0.5">{item.title}</h3>
                      <p className="text-xs font-medium text-slate-400 mt-0.5">{item.organization}</p>
                    </div>

                    <p className="text-slate-300 text-sm leading-relaxed border-t border-slate-800 pt-3">{item.description}</p>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
};
