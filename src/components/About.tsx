import React from 'react';
import { motion } from 'motion/react';
import { User, MapPin, Briefcase, Target, Compass, Heart } from 'lucide-react';
import { ScrollReveal } from './ScrollReveal';
import { CountUp } from './CountUp';
import { Profile } from '../types/portfolio';

interface AboutProps {
  profile: Profile;
}

const stats = [
  { number: 12, suffix: '+', label: 'Projects Built' },
  { number: 5, suffix: '+', label: 'Hackathons' },
  { number: 9, suffix: '.0', label: 'CGPA' },
  { number: 100, suffix: '%', label: 'Commitment' },
];

export const About: React.FC<AboutProps> = ({ profile }) => {
  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white">
              About <span className="gradient-text">Me</span>
            </h2>
            <p className="text-slate-400 text-base sm:text-lg">
              Professional background, developer focus, and personal goals.
            </p>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Bio and Goals */}
          <div className="lg:col-span-7 space-y-6">
            <ScrollReveal direction="left">
              <div className="glass-panel p-8 rounded-2xl space-y-4">
                <h3 className="text-xl font-heading font-semibold text-white flex items-center gap-2">
                  <User className="w-5 h-5 text-indigo-400" /> Biography
                </h3>
                <p className="text-slate-300 leading-relaxed">{profile.bio}</p>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <ScrollReveal delay={0.1}>
                <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-indigo-500/30 transition-colors h-full">
                  <h4 className="text-base font-heading font-semibold text-white flex items-center gap-2">
                    <Target className="w-5 h-5 text-indigo-400" /> Career Goals
                  </h4>
                  <p className="text-slate-400 text-sm leading-relaxed">{profile.careerGoals}</p>
                </div>
              </ScrollReveal>

              <ScrollReveal delay={0.2}>
                <div className="glass-panel p-6 rounded-2xl space-y-3 hover:border-pink-500/30 transition-colors h-full">
                  <h4 className="text-base font-heading font-semibold text-white flex items-center gap-2">
                    <Heart className="w-5 h-5 text-pink-400" /> Developer Interests
                  </h4>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {profile.interests.map((interest, idx) => (
                      <motion.span
                        key={idx}
                        className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-xs font-medium"
                        whileHover={{ scale: 1.06, backgroundColor: 'rgba(99,102,241,0.2)' }}
                      >
                        {interest}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>

          {/* Stats + Profile Card Column */}
          <div className="lg:col-span-5 space-y-6">
            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, idx) => (
                <ScrollReveal key={idx} delay={idx * 0.08}>
                  <motion.div
                    className="glass-panel p-6 rounded-2xl text-center hover:border-indigo-500/30 transition-all group"
                    whileHover={{ scale: 1.04, y: -4 }}
                  >
                    <div className="text-3xl font-heading font-extrabold gradient-text mb-1">
                      <CountUp end={stat.number} suffix={stat.suffix} />
                    </div>
                    <div className="text-slate-400 text-xs font-medium">{stat.label}</div>
                  </motion.div>
                </ScrollReveal>
              ))}
            </div>

            {/* Profile Info Card */}
            <ScrollReveal direction="right" delay={0.2}>
              <div className="glass-panel p-7 rounded-2xl space-y-5 border border-indigo-500/15 shadow-xl">
                <h3 className="text-lg font-heading font-bold text-white border-b border-slate-800 pb-4">
                  Quick Profile
                </h3>
                {[
                  { icon: <MapPin className="w-4 h-4" />, label: 'Location', value: profile.location },
                  { icon: <Briefcase className="w-4 h-4" />, label: 'Role', value: profile.role },
                  { icon: <Compass className="w-4 h-4" />, label: 'Current Focus', value: profile.currentFocus },
                  { icon: <User className="w-4 h-4" />, label: 'Experience', value: profile.experience },
                ].map(({ icon, label, value }, i) => (
                  <motion.div
                    key={i}
                    className="flex items-start gap-3"
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.08 }}
                    viewport={{ once: true }}
                  >
                    <div className="p-2.5 rounded-xl bg-indigo-500/10 text-indigo-400 shrink-0">{icon}</div>
                    <div>
                      <span className="text-[11px] uppercase tracking-wider font-semibold text-slate-500">{label}</span>
                      <p className="text-slate-200 font-medium text-sm mt-0.5">{value}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};
