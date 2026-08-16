import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ExternalLink, Github, CheckCircle2, AlertTriangle, Lightbulb } from 'lucide-react';
import { Project } from '../types/portfolio';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          key="modal-backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{ background: 'rgba(5,5,5,0.92)', backdropFilter: 'blur(20px)' }}
        >
          <motion.div
            className="w-full max-w-4xl rounded-2xl border border-white/[0.06] bg-[#0A0A0A] shadow-2xl overflow-hidden relative my-8"
            initial={{ scale: 0.9, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.9, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-[#050505]">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              {/* Noise */}
              <div className="absolute inset-0 opacity-20 mix-blend-overlay"
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-[#0A0A0A]/30 to-transparent" />

              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-[#050505]/80 text-white/40 hover:text-white border border-white/[0.06]"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
                data-cursor-hover
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="absolute bottom-6 left-6 space-y-2">
                <motion.span
                  className="inline-block px-3 py-1 rounded-full bg-[#CCFF00]/10 border border-[#CCFF00]/20 text-[#CCFF00] text-[10px] font-mono uppercase tracking-[0.2em]"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
                <motion.h2
                  className="text-2xl sm:text-4xl font-heading font-bold tracking-tight text-white"
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.25 }}
                >
                  {project.title}
                </motion.h2>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 sm:p-8 space-y-8 max-h-[60vh] overflow-y-auto">
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="space-y-3"
              >
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#CCFF00]">Overview</h3>
                <p className="text-white/45 leading-relaxed text-sm">{project.detailedDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-3"
              >
                <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#CCFF00]">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06] text-white/50 text-xs font-mono"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.38 + i * 0.04 }}
                    >
                      {t}
                    </motion.span>
                  ))}
                </div>
              </motion.div>

              {project.features?.length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="space-y-3"
                >
                  <h3 className="text-sm font-mono uppercase tracking-[0.2em] text-[#00FFD4]">Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-white/40">
                    {project.features.map((f, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.42 + i * 0.06 }}
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#CCFF00] shrink-0" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-white/[0.04]">
                {project.challenges?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#FF2D78] flex items-center gap-2">
                      <AlertTriangle className="w-3.5 h-3.5" /> Challenges
                    </h4>
                    <ul className="space-y-1.5 text-white/30 text-xs font-mono">
                      {project.challenges.map((c, i) => <li key={i}>→ {c}</li>)}
                    </ul>
                  </div>
                )}
                {project.learnings?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-mono text-xs uppercase tracking-[0.2em] text-[#00FFD4] flex items-center gap-2">
                      <Lightbulb className="w-3.5 h-3.5" /> Learnings
                    </h4>
                    <ul className="space-y-1.5 text-white/30 text-xs font-mono">
                      {project.learnings.map((l, i) => <li key={i}>→ {l}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-white/[0.04]">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn px-6 py-2.5 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="neon-btn-outline px-6 py-2.5 rounded-full text-xs font-heading uppercase tracking-wider flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  data-cursor-hover
                >
                  <Github className="w-4 h-4" /> Source
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
