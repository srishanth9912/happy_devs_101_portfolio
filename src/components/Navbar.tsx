import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { Profile } from '../types/portfolio';

interface NavbarProps {
  profile: Profile;
}

export const Navbar = ({ profile }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'github', label: 'GitHub' },
    { id: 'contact', label: 'Contact' },
  ];

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60);
      const headerEl = document.querySelector('header');
      const headerHeight = headerEl ? headerEl.getBoundingClientRect().height : 0;
      const scrollPos = window.scrollY + headerHeight + 20;
      for (let i = navItems.length - 1; i >= 0; i--) {
        const el = document.getElementById(navItems[i].id);
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 ${
        scrolled
          ? 'bg-[#050505]/80 backdrop-blur-2xl border-b border-white/[0.04] py-3'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-10 flex items-center justify-between">
        {/* Logo — Brutalist style */}
        <motion.a
          href="#home"
          className="font-heading font-bold text-xl tracking-tight group flex items-center gap-0.5"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          data-cursor-hover
        >
          <span className="text-[#CCFF00]">{profile.name.split(' ')[0]}</span>
          <span className="text-white/30 font-light">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              data-cursor-hover
              className={`relative px-4 py-2 text-[13px] font-medium uppercase tracking-[0.15em] transition-colors duration-300 ${
                activeSection === item.id
                  ? 'text-[#CCFF00]'
                  : 'text-white/40 hover:text-white/80'
              }`}
            >
              {item.label}
              {activeSection === item.id && (
                <motion.span
                  layoutId="nav-underline"
                  className="absolute bottom-0 left-2 right-2 h-[2px] bg-[#CCFF00]"
                  style={{ boxShadow: '0 0 10px rgba(204,255,0,0.5)' }}
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.5 }}
                />
              )}
            </a>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-white/60 hover:text-white"
          aria-label="Toggle Menu"
          data-cursor-hover
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile — Full screen takeover */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden fixed inset-0 top-0 bg-[#050505]/98 backdrop-blur-xl z-50 flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="absolute top-6 right-6 p-2 text-white/60"
              aria-label="Close Menu"
            >
              <X className="w-7 h-7" />
            </button>

            <nav className="flex flex-col items-center gap-2">
              {navItems.map((item, i) => (
                <motion.a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`text-3xl sm:text-4xl font-heading font-bold uppercase tracking-wider py-3 transition-colors ${
                    activeSection === item.id
                      ? 'text-[#CCFF00] neon-glow-lime'
                      : 'text-white/20 hover:text-white/60'
                  }`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.06 }}
                >
                  {item.label}
                </motion.a>
              ))}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
