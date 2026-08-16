import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence, LayoutGroup } from 'motion/react';
import { ExternalLink, Github, Eye, Search, LayoutGrid, ListFilter, ChevronDown, ChevronUp } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { Project } from '../types/portfolio';
import { ProjectModal } from './ProjectModal';

interface ProjectsProps {
  projects: Project[];
}

export const BentoProjects: React.FC<ProjectsProps> = ({ projects }) => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [viewMode, setViewMode] = useState<'grid' | 'editorial'>('grid');
  const [showAll, setShowAll] = useState(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const INITIAL_COUNT = 3;

  // Dynamically compute category counts and pills
  const categories = useMemo(() => {
    const cats = Array.from(new Set(projects.map((p) => p.category)));
    return ['All', ...cats];
  }, [projects]);

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCat = activeFilter === 'All' || p.category === activeFilter;
      const q = searchQuery.toLowerCase().trim();
      const matchesSearch =
        !q ||
        p.title.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCat && matchesSearch;
    });
  }, [projects, activeFilter, searchQuery]);

  // Sliced items based on showAll
  const displayedProjects = showAll ? filtered : filtered.slice(0, INITIAL_COUNT);
  const hasMore = filtered.length > INITIAL_COUNT;

  // Reset showAll when filter or search changes
  const handleFilterChange = (cat: string) => {
    setActiveFilter(cat);
    setShowAll(false);
  };

  const handleSearchChange = (val: string) => {
    setSearchQuery(val);
    setShowAll(false);
  };

  return (
    <section id="projects" className="py-28 relative">
      <div className="section-line mb-28" />
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
            <div>
              <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 03</span>
              <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
                Projects<span className="text-[#00FFD4]">.</span>
              </h2>
              <p className="text-white/40 text-base mt-4 max-w-xl">
                Featured builds, AI pipelines, system architectures, and live full-stack applications.
              </p>
            </div>

            {/* View switcher & Search */}
            <div className="flex items-center gap-3">
              {/* Search bar */}
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-white/30" />
                <input
                  type="text"
                  placeholder="Search projects or tech..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="bg-[#0c0c0c] border border-white/[0.08] text-white text-xs rounded-full pl-9 pr-4 py-2.5 w-48 sm:w-64 focus:outline-none focus:border-[#CCFF00]/50 placeholder:text-white/20 transition-all font-mono"
                />
              </div>

              {/* Grid / Editorial switch */}
              <div className="flex bg-[#0c0c0c] border border-white/[0.08] p-1 rounded-full">
                <button
                  onClick={() => setViewMode('grid')}
                  title="Grid View (Top Row)"
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'grid' ? 'bg-[#CCFF00] text-[#050505]' : 'text-white/40 hover:text-white'
                  }`}
                  data-cursor-hover
                >
                  <LayoutGrid className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setViewMode('editorial')}
                  title="Editorial Story View"
                  className={`p-2 rounded-full transition-colors ${
                    viewMode === 'editorial' ? 'bg-[#CCFF00] text-[#050505]' : 'text-white/40 hover:text-white'
                  }`}
                  data-cursor-hover
                >
                  <ListFilter className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </ScrollReveal>

        {/* Filter Pills */}
        <ScrollReveal delay={0.1}>
          <LayoutGroup>
            <div className="flex flex-wrap gap-2 mb-12">
              {categories.map((cat) => {
                const count = cat === 'All' ? projects.length : projects.filter((p) => p.category === cat).length;
                return (
                  <motion.button
                    key={cat}
                    onClick={() => handleFilterChange(cat)}
                    className={`relative px-4 sm:px-5 py-2 rounded-full text-xs font-mono uppercase tracking-[0.12em] transition-all duration-300 border flex items-center gap-2 ${
                      activeFilter === cat
                        ? 'text-[#050505] font-bold'
                        : 'text-white/40 border-white/[0.06] hover:text-white/80 hover:border-white/15'
                    }`}
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    data-cursor-hover
                  >
                    {activeFilter === cat && (
                      <motion.span
                        layoutId="project-filter-pill"
                        className="absolute inset-0 rounded-full bg-[#CCFF00]"
                        style={{ boxShadow: '0 0 25px rgba(204,255,0,0.3)' }}
                        transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                      />
                    )}
                    <span className="relative z-10">{cat}</span>
                    <span
                      className={`relative z-10 text-[10px] px-1.5 py-0.2 rounded-full ${
                        activeFilter === cat ? 'bg-black/20 text-black font-mono' : 'bg-white/[0.06] text-white/40 font-mono'
                      }`}
                    >
                      {count}
                    </span>
                  </motion.button>
                );
              })}
            </div>
          </LayoutGroup>
        </ScrollReveal>

        {/* Empty state */}
        {filtered.length === 0 && (
          <div className="text-center py-20 border border-white/[0.06] rounded-2xl bg-[#0a0a0a]/50">
            <p className="text-white/40 font-mono text-sm">No projects matching your filter criteria.</p>
            <button
              onClick={() => {
                setActiveFilter('All');
                setSearchQuery('');
                setShowAll(false);
              }}
              className="mt-4 text-[#CCFF00] font-mono text-xs uppercase underline tracking-wider"
              data-cursor-hover
            >
              Reset Filters
            </button>
          </div>
        )}

        {/* Project cards View */}
        <AnimatePresence mode="wait">
          {viewMode === 'grid' ? (
            /* Bento Grid Layout - Default top row */
            <motion.div
              key={`grid-${activeFilter}-${searchQuery}-${showAll}`}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {displayedProjects.map((project, idx) => (
                <motion.div
                  key={project.id}
                  className="cyber-card rounded-2xl overflow-hidden flex flex-col justify-between group border border-white/[0.08] hover:border-[#CCFF00]/40 transition-all duration-300 bg-[#080808]"
                  initial={{ opacity: 0, y: 25 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05, ease: [0.23, 1, 0.32, 1] }}
                  whileHover={{
                    boxShadow: '0 0 45px rgba(204,255,0,0.08)',
                  }}
                >
                  {/* Thumbnail */}
                  <div className="relative h-48 overflow-hidden bg-[#111]">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent" />
                    
                    <span className="absolute top-3 left-3 px-2.5 py-1 rounded-full bg-[#050505]/85 backdrop-blur-md border border-white/[0.08] text-[9px] font-mono uppercase tracking-[0.2em] text-[#CCFF00]">
                      {project.category}
                    </span>

                    <button
                      onClick={() => setSelectedProject(project)}
                      className="absolute bottom-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 px-3 py-1.5 rounded-full bg-[#CCFF00] text-[#050505] text-[11px] font-heading font-bold uppercase tracking-wider flex items-center gap-1.5 shadow-lg shadow-[#CCFF00]/20"
                      data-cursor-hover
                    >
                      <Eye className="w-3.5 h-3.5" /> Inspect
                    </button>
                  </div>

                  {/* Body */}
                  <div className="p-6 flex flex-col flex-grow justify-between">
                    <div>
                      <div className="text-white/20 font-mono text-[10px] uppercase tracking-widest mb-1">
                        // 0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                      </div>
                      <h3
                        onClick={() => setSelectedProject(project)}
                        className="text-xl font-heading font-bold tracking-tight text-white group-hover:text-[#CCFF00] cursor-pointer transition-colors mb-2 line-clamp-1"
                        data-cursor-hover
                      >
                        {project.title}
                      </h3>
                      <p className="text-white/40 text-xs leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.slice(0, 3).map((t, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 rounded-md bg-white/[0.03] border border-white/[0.06] text-white/50 text-[10px] font-mono"
                          >
                            {t}
                          </span>
                        ))}
                        {project.technologies.length > 3 && (
                          <span className="px-2 py-0.5 rounded-md bg-white/[0.03] text-white/30 text-[10px] font-mono">
                            +{project.technologies.length - 3}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bottom actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-white/[0.04]">
                      <button
                        onClick={() => setSelectedProject(project)}
                        className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider hover:underline"
                        data-cursor-hover
                      >
                        Details →
                      </button>

                      <div className="flex items-center gap-2">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-white/40 hover:text-[#CCFF00] transition-colors p-1.5 rounded-full hover:bg-white/[0.05]"
                          title="GitHub Repository"
                          data-cursor-hover
                        >
                          <Github className="w-4 h-4" />
                        </a>
                        {project.liveUrl && project.liveUrl !== project.githubUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-white/40 hover:text-[#00FFD4] transition-colors p-1.5 rounded-full hover:bg-white/[0.05]"
                            title="Live Demo"
                            data-cursor-hover
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          ) : (
            /* Editorial Magazine Layout */
            <motion.div
              key={`editorial-${activeFilter}-${searchQuery}-${showAll}`}
              className="space-y-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
            >
              {displayedProjects.map((project, idx) => {
                const isHovered = hoveredId === project.id;
                const isEven = idx % 2 === 0;

                return (
                  <motion.div
                    key={project.id}
                    className={`grid grid-cols-1 lg:grid-cols-12 gap-0 cyber-card rounded-2xl overflow-hidden group border border-white/[0.08] hover:border-[#CCFF00]/30 transition-all bg-[#080808]`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: idx * 0.06, ease: [0.23, 1, 0.32, 1] }}
                    onMouseEnter={() => setHoveredId(project.id)}
                    onMouseLeave={() => setHoveredId(null)}
                    whileHover={{
                      boxShadow: '0 0 60px rgba(204,255,0,0.06)',
                    }}
                  >
                    {/* Image — Full bleed */}
                    <div
                      className={`lg:col-span-5 relative h-64 lg:h-auto min-h-[260px] overflow-hidden ${
                        isEven ? '' : 'lg:order-2'
                      }`}
                    >
                      <motion.img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                        animate={{ scale: isHovered ? 1.08 : 1 }}
                        transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0A0A]/90 via-transparent to-transparent" />

                      {/* Category badge */}
                      <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#050505]/80 backdrop-blur-md border border-white/[0.08] text-[10px] font-mono uppercase tracking-[0.2em] text-[#CCFF00]">
                        {project.category}
                      </span>

                      {/* Hover overlay with VIEW button */}
                      <motion.div
                        className="absolute inset-0 flex items-center justify-center bg-[#050505]/75 backdrop-blur-sm"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.button
                          onClick={() => setSelectedProject(project)}
                          className="neon-btn px-6 py-3 rounded-full text-xs font-heading font-bold uppercase tracking-wider flex items-center gap-2"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          data-cursor-hover
                        >
                          <Eye className="w-4 h-4" /> Inspect Project
                        </motion.button>
                      </motion.div>
                    </div>

                    {/* Content */}
                    <div
                      className={`lg:col-span-7 p-8 sm:p-10 flex flex-col justify-between ${
                        isEven ? '' : 'lg:order-1'
                      }`}
                    >
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                          <span className="text-white/20 font-mono text-xs">
                            // 0{idx + 1 < 10 ? `0${idx + 1}` : idx + 1}
                          </span>
                        </div>
                        <h3
                          onClick={() => setSelectedProject(project)}
                          className="text-2xl sm:text-3xl font-heading font-bold tracking-tight text-white hover:text-[#CCFF00] cursor-pointer transition-colors mb-3"
                          data-cursor-hover
                        >
                          {project.title}
                        </h3>
                        <p className="text-white/40 text-sm leading-relaxed mb-6 max-w-xl">
                          {project.description}
                        </p>

                        {/* Tech tags */}
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.technologies.map((t, i) => (
                            <span
                              key={i}
                              className="px-3 py-1 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/50 text-[11px] font-mono hover:border-[#CCFF00]/30 hover:text-[#CCFF00] transition-colors"
                            >
                              {t}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions */}
                      <div className="flex items-center gap-4 pt-6 border-t border-white/[0.04]">
                        <button
                          onClick={() => setSelectedProject(project)}
                          className="text-[#CCFF00] text-xs font-mono uppercase tracking-wider hover:underline flex items-center gap-1.5"
                          data-cursor-hover
                        >
                          View Details <span aria-hidden="true">→</span>
                        </button>

                        <div className="flex items-center gap-3 ml-auto">
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all"
                            title="GitHub Repository"
                            data-cursor-hover
                          >
                            <Github className="w-4 h-4" />
                          </a>
                          {project.liveUrl && project.liveUrl !== project.githubUrl && (
                            <a
                              href={project.liveUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="p-2 rounded-full bg-white/[0.03] border border-white/[0.06] text-white/40 hover:text-[#00FFD4] hover:border-[#00FFD4]/30 transition-all"
                              title="Live Deployment"
                              data-cursor-hover
                            >
                              <ExternalLink className="w-4 h-4" />
                            </a>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </AnimatePresence>

        {/* See More / Show Less Button */}
        {hasMore && (
          <ScrollReveal delay={0.2}>
            <div className="mt-14 flex justify-center">
              <motion.button
                onClick={() => setShowAll(!showAll)}
                className="group relative px-8 py-4 rounded-full border border-[#CCFF00]/30 bg-[#080808] hover:bg-[#CCFF00] hover:text-[#050505] text-[#CCFF00] text-xs font-heading font-bold uppercase tracking-[0.2em] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#CCFF00]/5 hover:shadow-[#CCFF00]/25"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
                data-cursor-hover
              >
                <span>
                  {showAll
                    ? 'Show Less Projects'
                    : `See More Projects (${filtered.length - INITIAL_COUNT} more)`}
                </span>
                {showAll ? (
                  <ChevronUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
                ) : (
                  <ChevronDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
                )}
              </motion.button>
            </div>
          </ScrollReveal>
        )}
      </div>

      <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </section>
  );
};
