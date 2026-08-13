import React, { useState, useEffect } from 'react';
import { portfolioData } from './data/portfolioData';
import { Navbar } from './components/Navbar';
import { BentoHero } from './components/BentoHero';
import { About } from './components/About';
import { TechRadar } from './components/TechRadar';
import { BentoProjects } from './components/BentoProjects';
import { UnifiedTimeline } from './components/UnifiedTimeline';
import { GitHubSection } from './components/GitHubSection';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';
import { ProgressBar } from './components/ProgressBar';

export const App: React.FC = () => {
  const [darkMode, setDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('theme');
    return saved ? saved === 'dark' : true;
  });

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
      document.documentElement.classList.remove('light');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      localStorage.setItem('theme', 'light');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden transition-colors duration-300">
      {/* Scroll progress bar */}
      <ProgressBar />

      {/* Animated ambient background */}
      <div className="mesh-bg" aria-hidden="true">
        <div className="mesh-orb mesh-orb-1" />
        <div className="mesh-orb mesh-orb-2" />
        <div className="mesh-orb mesh-orb-3" />
      </div>
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar
          profile={portfolioData.profile}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        <main>
          <BentoHero profile={portfolioData.profile} />
          <About profile={portfolioData.profile} />
          <TechRadar skills={portfolioData.skills} />
          <BentoProjects projects={portfolioData.projects} />
          <UnifiedTimeline
            education={portfolioData.education}
            certifications={portfolioData.certifications}
            achievements={portfolioData.achievements}
          />
          <GitHubSection defaultUsername="srishanth9912" />
          <Contact profile={portfolioData.profile} />
        </main>

        <Footer profile={portfolioData.profile} />
      </div>
    </div>
  );
};

export default App;
