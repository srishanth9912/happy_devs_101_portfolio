import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Heart, Github, Linkedin, Mail } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="border-t border-slate-800 py-10 bg-slate-950 text-slate-400 text-sm relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-indigo-600/5 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Branding */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-white text-lg">
              <span className="text-indigo-500">&lt;</span>{profile.name}<span className="text-indigo-500">/&gt;</span>
            </span>
          </div>

          {/* Social links */}
          <div className="flex items-center gap-3">
            {[
              { href: profile.socials.github, icon: <Github className="w-4 h-4" />, label: 'GitHub' },
              { href: profile.socials.linkedin, icon: <Linkedin className="w-4 h-4" />, label: 'LinkedIn' },
              { href: `mailto:${profile.socials.email}`, icon: <Mail className="w-4 h-4" />, label: 'Email' },
            ].map(({ href, icon, label }) => (
              <motion.a
                key={label}
                href={href}
                target={label !== 'Email' ? '_blank' : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="p-2.5 rounded-full bg-slate-800/60 border border-slate-700 text-slate-400 hover:text-white"
                whileHover={{ scale: 1.12, borderColor: 'rgba(99,102,241,0.6)', y: -2 }}
                whileTap={{ scale: 0.9 }}
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs">
              © {new Date().getFullYear()} {profile.name} · Made with <Heart className="w-3.5 h-3.5 text-pink-500 fill-pink-500" />
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 rounded-full bg-slate-800/80 border border-slate-700 hover:border-indigo-500 text-slate-300 hover:text-white"
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
