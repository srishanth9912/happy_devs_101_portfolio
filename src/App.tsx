import React from 'react';
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
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { Marquee } from './components/Marquee';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen font-sans antialiased overflow-x-hidden bg-[#050505] text-[#FAFAFA]">
      {/* Page loader */}
      <PageLoader />

      {/* Custom cursor (hidden on mobile via CSS) */}
      <CustomCursor />

      {/* Scroll progress bar */}
      <ProgressBar />

      {/* Grain overlay */}
      <div className="grain-overlay" aria-hidden="true" />

      <div className="relative z-10">
        <Navbar profile={portfolioData.profile} />

        <main>
          <BentoHero profile={portfolioData.profile} />

          <About profile={portfolioData.profile} />

          {/* Divider marquee */}
          <Marquee
            items={['SOFTWARE ENGINEER', 'PROBLEM SOLVER', 'FULL STACK', 'AI ENTHUSIAST', 'LINUX', 'OPEN SOURCE']}
            reverse
            separator="◆"
          />

          <TechRadar skills={portfolioData.skills} />

          <BentoProjects projects={portfolioData.projects} />

          {/* Divider marquee */}
          <Marquee
            items={['REACT', 'JAVA', 'PYTHON', 'TYPESCRIPT', 'C', 'GIT', 'MONGODB', 'TAILWIND', 'NODE.JS', 'DSA']}
            separator="●"
          />

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
