import React from 'react';
import { motion } from 'motion/react';
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface FooterProps {
  profile: Profile;
}

export const Footer: React.FC<FooterProps> = ({ profile }) => {
  return (
    <footer className="border-t border-white/[0.04] py-12 relative overflow-hidden">
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#CCFF00]/[0.01] to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 relative">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-8">
          {/* Branding */}
          <div className="flex items-center gap-2">
            <span className="font-heading font-bold text-xl tracking-tight">
              <span className="text-[#CCFF00]">{profile.name.split(' ')[0]}</span>
              <span className="text-white/15">.</span>
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
                className="p-2.5 rounded-full border border-white/[0.06] text-white/20 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all duration-300"
                whileHover={{ scale: 1.15, y: -3 }}
                whileTap={{ scale: 0.9 }}
                data-cursor-hover
              >
                {icon}
              </motion.a>
            ))}
          </div>

          {/* Copyright + back to top */}
          <div className="flex items-center gap-5">
            <span className="text-white/15 text-[11px] font-mono tracking-wider">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <motion.button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              className="p-2.5 rounded-full border border-white/[0.06] text-white/20 hover:text-[#CCFF00] hover:border-[#CCFF00]/30 transition-all duration-300"
              whileHover={{ scale: 1.15, y: -3 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Back to top"
              data-cursor-hover
            >
              <ArrowUp className="w-4 h-4" />
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
};
