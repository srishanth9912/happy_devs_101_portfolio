import React, { useState } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { ExternalLink, Github, Eye, Sparkles } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface BentoProjectsProps {
  projects: Project[];
}

export const BentoProjects: React.FC<BentoProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const categories = ['All', 'Web', 'Full Stack', 'AI', 'Mobile'];
  const filtered = activeFilter === 'All' ? projects : projects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white flex items-center justify-center gap-2">
              <Sparkles className="w-7 h-7 text-indigo-400" /> Featured <span className="gradient-text">Bento Projects</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Featured builds showcasing software architecture, AI integrations, and full-stack applications.
            </p>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap justify-center gap-2 mb-12">
              {categories.map((cat) => (
                <motion.button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  className={`relative px-5 py-2.5 rounded-xl text-sm font-semibold transition-colors duration-200 ${
                    activeFilter === cat
                      ? 'text-white'
                      : 'bg-slate-800/60 border border-slate-700/60 text-slate-400 hover:text-slate-200'
                  }`}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                >
                  {activeFilter === cat && (
                    <motion.span
                      layoutId="bento-project-filter"
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

        {/* Asymmetrical Bento Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid grid-cols-1 md:grid-cols-12 gap-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            {filtered.map((project, idx) => {
              // Asymmetrical span calculation
              const colSpan = (idx === 0 || idx === 3) ? 'md:col-span-7' : 'md:col-span-5';

              return (
                <motion.div
                  key={project.id}
                  className={`${colSpan} glass-panel rounded-3xl overflow-hidden border border-white/10 flex flex-col group`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.08 }}
                  whileHover={{
                    borderColor: 'rgba(99,102,241,0.4)',
                    boxShadow: '0 20px 50px rgba(99,102,241,0.18)',
                    y: -5
                  }}
                >
                  {/* Image banner */}
                  <div className="relative h-60 overflow-hidden bg-slate-900">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950/90 via-slate-950/20 to-transparent" />

                    <span className="absolute top-4 right-4 px-3 py-1 rounded-full bg-slate-900/80 backdrop-blur-md border border-white/10 text-xs font-semibold text-indigo-300">
                      {project.category}
                    </span>

                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-slate-950/60 backdrop-blur-sm">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xl"
                      >
                        <Eye className="w-4 h-4" /> Inspect Project
                      </button>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6 flex flex-col justify-between flex-grow space-y-4">
                    <div className="space-y-2">
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-heading font-bold text-white hover:text-indigo-400 cursor-pointer transition-colors"
                      >
                        {project.title}
                      </h3>
                      <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                        {project.description}
                      </p>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.technologies.map((t, i) => (
                        <span key={i} className="px-2.5 py-0.5 rounded-md bg-indigo-500/10 text-indigo-300 text-xs font-medium">
                          {t}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-slate-800">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-xs font-semibold text-indigo-400 hover:text-indigo-300"
                      >
                        View Full Specs →
                      </button>

                      <div className="flex items-center gap-3">
                        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <Github className="w-4 h-4" />
                        </a>
                        <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white">
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
