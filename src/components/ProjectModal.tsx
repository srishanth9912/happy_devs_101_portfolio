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
          style={{ background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(12px)' }}
        >
          <motion.div
            className="glass-panel w-full max-w-4xl rounded-2xl border border-white/10 shadow-2xl overflow-hidden relative my-8"
            initial={{ scale: 0.88, opacity: 0, y: 30 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.88, opacity: 0, y: 30 }}
            transition={{ type: 'spring', stiffness: 260, damping: 24 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Hero image */}
            <div className="relative h-64 sm:h-80 w-full overflow-hidden bg-slate-900">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

              <motion.button
                onClick={onClose}
                className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-slate-300 hover:text-white border border-white/10 backdrop-blur-sm"
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </motion.button>

              <div className="absolute bottom-6 left-6 space-y-2">
                <motion.span
                  className="inline-block px-3 py-1 rounded-full bg-indigo-500/20 border border-indigo-500/30 text-indigo-300 text-xs font-semibold uppercase tracking-wider"
                  initial={{ opacity: 0, x: -16 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  {project.category}
                </motion.span>
                <motion.h2
                  className="text-2xl sm:text-4xl font-heading font-extrabold text-white"
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
                <h3 className="text-lg font-heading font-semibold text-white">Project Overview</h3>
                <p className="text-slate-300 leading-relaxed">{project.detailedDescription}</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.35 }}
                className="space-y-3"
              >
                <h3 className="text-lg font-heading font-semibold text-white">Technologies</h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((t, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
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
                  <h3 className="text-lg font-heading font-semibold text-white">Main Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 text-sm text-slate-300">
                    {project.features.map((f, i) => (
                      <motion.li
                        key={i}
                        className="flex items-center gap-2"
                        initial={{ opacity: 0, x: -12 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.42 + i * 0.06 }}
                      >
                        <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                        {f}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t border-slate-800">
                {project.challenges?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-amber-300 flex items-center gap-2 text-sm">
                      <AlertTriangle className="w-4 h-4" /> Challenges
                    </h4>
                    <ul className="space-y-1.5 text-slate-400 text-xs">
                      {project.challenges.map((c, i) => <li key={i}>• {c}</li>)}
                    </ul>
                  </div>
                )}
                {project.learnings?.length > 0 && (
                  <div className="space-y-2">
                    <h4 className="font-heading font-semibold text-cyan-300 flex items-center gap-2 text-sm">
                      <Lightbulb className="w-4 h-4" /> Learnings
                    </h4>
                    <ul className="space-y-1.5 text-slate-400 text-xs">
                      {project.learnings.map((l, i) => <li key={i}>• {l}</li>)}
                    </ul>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-4 pt-4 border-t border-slate-800">
                <motion.a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </motion.a>
                <motion.a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 border border-slate-700 text-slate-200 font-semibold text-sm"
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                >
                  <Github className="w-4 h-4" /> View Code
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
