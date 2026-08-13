import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Mail, Github, Linkedin, Terminal, Sparkles, Activity, Cpu, Coffee, MapPin } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface BentoHeroProps {
  profile: Profile;
}

export const BentoHero: React.FC<BentoHeroProps> = ({ profile }) => {
  const [typedCode, setTypedCode] = useState('');
  const fullCode = `const developer = {
  name: "${profile.name}",
  role: "${profile.role}",
  focus: "${profile.currentFocus}",
  status: "Available for Opportunities"
};`;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullCode.length) {
        setTypedCode(fullCode.slice(0, ++i));
      } else {
        clearInterval(timer);
      }
    }, 35);
    return () => clearInterval(timer);
  }, [fullCode]);

  return (
    <section id="home" className="min-h-screen pt-28 pb-16 flex items-center justify-center relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">

        {/* Bento Grid Header Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-stretch">

          {/* Cell 1: Prominent Profile Picture / Avatar Card (Span 4) */}
          <motion.div
            className="md:col-span-4 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col items-center text-center justify-between space-y-4 relative group"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Avatar Frame with Glow Ring */}
            <div className="relative w-44 h-44 sm:w-48 sm:h-48 rounded-2xl overflow-hidden border-2 border-indigo-500/40 shadow-2xl avatar-glow group-hover:scale-105 transition-transform duration-500 mt-2">
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-full h-full object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent" />
            </div>

            <div className="space-y-1">
              <h3 className="text-xl font-heading font-extrabold text-white">
                {profile.name}
              </h3>
              <p className="text-indigo-400 font-semibold text-xs sm:text-sm">
                {profile.role}
              </p>
              <p className="text-slate-400 text-xs flex items-center justify-center gap-1 pt-1">
                <MapPin className="w-3.5 h-3.5 text-pink-400" /> {profile.location}
              </p>
            </div>
          </motion.div>

          {/* Cell 2: Hero Headline & CTA Actions (Span 8) */}
          <motion.div
            className="md:col-span-8 glass-panel p-8 sm:p-10 rounded-3xl border border-white/10 flex flex-col justify-between space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <div className="space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                {profile.status}
              </div>

              <div>
                <h1 className="text-3xl sm:text-5xl font-heading font-extrabold tracking-tight text-white leading-tight">
                  Building Future-Ready <span className="gradient-text block mt-1">Web & AI Solutions</span>
                </h1>
              </div>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl">
                {profile.intro}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3 pt-4 border-t border-slate-800">
              <motion.a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/30 transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={profile.resumeUrl}
                download="Srishanth_Resume.pdf"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/80 hover:bg-slate-800 border border-slate-700 text-slate-200 font-semibold text-sm transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                <Download className="w-4 h-4 text-indigo-400" /> Download Resume
              </motion.a>

              <motion.a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-slate-800/40 hover:bg-slate-800 border border-slate-700/60 text-slate-300 font-semibold text-sm transition-all"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.96 }}
              >
                Contact Me
              </motion.a>
            </div>
          </motion.div>

          {/* Cell 3: Interactive Code Terminal (Span 7) */}
          <motion.div
            className="md:col-span-7 glass-panel p-6 rounded-3xl border border-white/10 font-mono text-sm shadow-xl"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-slate-800">
              <div className="flex space-x-2">
                <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-amber-500/80 inline-block" />
                <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
              </div>
              <span className="text-xs text-slate-500 flex items-center gap-1">
                <Terminal className="w-3.5 h-3.5 text-indigo-400" /> srishanth.config.ts
              </span>
            </div>

            <pre className="text-slate-300 overflow-x-auto text-xs sm:text-sm">
              <code>{typedCode}<span className="typewriter-cursor" /></code>
            </pre>
          </motion.div>

          {/* Cell 4: System Telemetry & Quick Socials (Span 5) */}
          <motion.div
            className="md:col-span-5 glass-panel p-6 rounded-3xl border border-white/10 flex flex-col justify-between space-y-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.25 }}
          >
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <h3 className="text-xs font-heading font-bold text-white flex items-center gap-1.5">
                <Activity className="w-4 h-4 text-indigo-400" /> Developer Telemetry
              </h3>
              <span className="text-[11px] font-mono text-emerald-400">STATUS: ONLINE</span>
            </div>

            <div className="space-y-2 text-xs">
              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Cpu className="w-3.5 h-3.5 text-indigo-400" /> Focus
                </span>
                <span className="text-slate-200 font-semibold">{profile.currentFocus}</span>
              </div>

              <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/60 border border-slate-800">
                <span className="text-slate-400 flex items-center gap-1.5">
                  <Coffee className="w-3.5 h-3.5 text-amber-400" /> Fuel
                </span>
                <span className="text-amber-400 font-mono font-semibold">100% Charged</span>
              </div>
            </div>

            {/* Social Icons Bar */}
            <div className="flex items-center justify-around gap-2 pt-2 border-t border-slate-800">
              <motion.a
                href={profile.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="GitHub"
              >
                <Github className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={profile.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </motion.a>

              <motion.a
                href={`mailto:${profile.socials.email}`}
                className="p-3 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-white hover:border-indigo-500/50 transition-all"
                whileHover={{ scale: 1.1 }}
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
};
