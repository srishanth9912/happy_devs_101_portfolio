import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Compass, Terminal } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CountUp } from './CountUp';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

const stats = [
  { number: 12, suffix: '+', label: 'PROJECTS' },
  { number: 5, suffix: '+', label: 'HACKATHONS' },
  { number: 9, suffix: '.0', label: 'CGPA' },
  { number: 100, suffix: '%', label: 'PASSION' },
];

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-28 relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10">

        {/* Section label */}
        <ScrollReveal>
          <div className="mb-20">
            <span className="text-[#CCFF00] font-mono text-xs uppercase tracking-[0.3em] block mb-3">// 01</span>
            <h2 className="text-5xl sm:text-7xl font-heading font-bold tracking-tighter">
              About<span className="text-[#CCFF00]">.</span>
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left — Oversized stats */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="left">
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, idx) => (
                  <motion.div
                    key={idx}
                    className="cyber-card p-6 rounded-2xl text-center group"
                    whileHover={{ scale: 1.04, y: -6 }}
                    data-cursor-hover
                  >
                    <div className="text-5xl sm:text-6xl font-heading font-bold text-[#CCFF00] neon-glow-lime mb-2">
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-white/30 text-[10px] font-mono uppercase tracking-[0.3em]">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>

            {/* Quick info */}
            <ScrollReveal delay={0.2}>
              <div className="mt-6 space-y-3">
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: profile.location },
                  { icon: <Compass className="w-4 h-4" />, label: profile.currentFocus },
                ].map(({ icon, label }, i) => (
                  <div key={i} className="flex items-center gap-3 text-white/30 text-sm">
                    <span className="text-[#CCFF00]">{icon}</span>
                    <span>{label}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Right — Terminal-style bio */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="right">
              <div className="terminal-card rounded-2xl overflow-hidden">
                <div className="terminal-header">
                  <div className="terminal-dot bg-[#FF5F57]" />
                  <div className="terminal-dot bg-[#FFBD2E]" />
                  <div className="terminal-dot bg-[#28CA41]" />
                  <span className="ml-auto text-white/20 text-xs font-mono flex items-center gap-1.5">
                    <Terminal className="w-3 h-3" /> about.md
                  </span>
                </div>

                <div className="p-6 sm:p-8 space-y-6">
                  {/* Bio */}
                  <div>
                    <span className="text-[#CCFF00] font-mono text-xs block mb-3">## Bio</span>
                    <p className="text-white/50 text-sm leading-[1.8] font-mono">
                      {profile.bio}
                    </p>
                  </div>

                  {/* Career Goals */}
                  <div>
                    <span className="text-[#FF2D78] font-mono text-xs block mb-3">## Career Goals</span>
                    <p className="text-white/50 text-sm leading-[1.8] font-mono">
                      {profile.careerGoals}
                    </p>
                  </div>

                  {/* Interests */}
                  <div>
                    <span className="text-[#00FFD4] font-mono text-xs block mb-3">## Interests</span>
                    <div className="flex flex-wrap gap-2">
                      {profile.interests.map((interest, idx) => (
                        <motion.span
                          key={idx}
                          className="skill-tag px-3 py-1.5 rounded-lg text-xs font-mono"
                          whileHover={{ scale: 1.08 }}
                          data-cursor-hover
                        >
                          {interest}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
