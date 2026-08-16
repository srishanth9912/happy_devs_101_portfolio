import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { ArrowRight, Download, Github, Linkedin, Mail } from 'lucide-react';
import { Profile } from '../types/portfolio';
import { Marquee } from './Marquee';

interface HeroProps {
  profile: Profile;
}

export const BentoHero: React.FC<HeroProps> = ({ profile }) => {
  const [typedRole, setTypedRole] = useState('');
  const fullRole = profile.role;

  useEffect(() => {
    let i = 0;
    const timer = setInterval(() => {
      if (i < fullRole.length) {
        setTypedRole(fullRole.slice(0, ++i));
      } else {
        clearInterval(timer);
      }
    }, 40);
    return () => clearInterval(timer);
  }, [fullRole]);

  const nameLetters = profile.name.split('');
  const techStack = ['REACT', 'PYTHON', 'JAVA', 'TYPESCRIPT', 'LINUX', 'DSA', 'GIT', 'NODE.JS', 'TAILWIND', 'MONGODB'];

  return (
    <section id="home" className="min-h-screen flex flex-col justify-center relative overflow-hidden">
      {/* Ambient neon orbs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] rounded-full opacity-[0.04]"
          style={{ background: 'radial-gradient(circle, #CCFF00, transparent 70%)' }} />
        <div className="absolute top-[40%] -right-[15%] w-[500px] h-[500px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #FF2D78, transparent 70%)' }} />
        <div className="absolute -bottom-[20%] left-[30%] w-[400px] h-[400px] rounded-full opacity-[0.03]"
          style={{ background: 'radial-gradient(circle, #00FFD4, transparent 70%)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 w-full pt-32 pb-8 relative z-10">
        {/* Status pill */}
        <motion.div
          className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full border border-[#CCFF00]/20 bg-[#CCFF00]/[0.04] mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <span className="w-2 h-2 rounded-full bg-[#CCFF00] animate-glow-pulse" />
          <span className="text-[#CCFF00] text-xs font-mono font-semibold uppercase tracking-[0.2em]">
            {profile.status}
          </span>
        </motion.div>

        {/* Giant animated name */}
        <div className="mb-6 overflow-hidden">
          <h1 className="text-[clamp(3rem,10vw,8rem)] font-heading font-bold leading-[0.9] tracking-tighter">
            {nameLetters.map((letter, i) => (
              <motion.span
                key={i}
                className={letter === ' ' ? 'inline' : 'inline-block'}
                initial={{ y: 120, opacity: 0, rotateX: -90 }}
                animate={{ y: 0, opacity: 1, rotateX: 0 }}
                transition={{
                  duration: 0.8,
                  delay: 0.3 + i * 0.04,
                  ease: [0.23, 1, 0.32, 1],
                }}
              >
                {letter === ' ' ? '\u00A0' : letter}
              </motion.span>
            ))}
          </h1>
        </div>

        {/* Glitch role title */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
        >
          <p className="font-mono text-lg sm:text-xl text-white/50">
            {typedRole}
            <span className="inline-block w-[2px] h-5 bg-[#CCFF00] ml-1 align-text-bottom" style={{ animation: 'glow-pulse 1s step-end infinite' }} />
          </p>
        </motion.div>

        {/* Intro */}
        <motion.p
          className="text-white/40 text-base sm:text-lg max-w-2xl leading-relaxed mb-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.2 }}
        >
          {profile.intro}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-wrap gap-4 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4 }}
        >
          <motion.a
            href="#projects"
            className="neon-btn px-8 py-3.5 rounded-full text-sm font-heading font-bold uppercase tracking-wider flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            View Projects <ArrowRight className="w-4 h-4" />
          </motion.a>

          <motion.a
            href={profile.resumeUrl}
            download="Srishanth_Resume.pdf"
            className="neon-btn-outline px-8 py-3.5 rounded-full text-sm font-heading uppercase tracking-wider flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-cursor-hover
          >
            <Download className="w-4 h-4" /> Resume
          </motion.a>
        </motion.div>

        {/* Social icons */}
        <motion.div
          className="flex items-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.6 }}
        >
          {[
            { href: profile.socials.github, icon: <Github className="w-5 h-5" />, label: 'GitHub' },
            { href: profile.socials.linkedin, icon: <Linkedin className="w-5 h-5" />, label: 'LinkedIn' },
            { href: `mailto:${profile.socials.email}`, icon: <Mail className="w-5 h-5" />, label: 'Email' },
          ].map(({ href, icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={label !== 'Email' ? '_blank' : undefined}
              rel="noopener noreferrer"
              aria-label={label}
              className="p-3 rounded-full border border-white/[0.06] text-white/30 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              data-cursor-hover
            >
              {icon}
            </motion.a>
          ))}

          <span className="ml-4 text-white/15 text-xs font-mono hidden sm:block">// scroll to explore ↓</span>
        </motion.div>
      </div>

      {/* Scrolling tech marquee at bottom */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        <Marquee items={techStack} />
      </motion.div>
    </section>
  );
};
