import React from 'react';
import Hero from './components/Hero';
import { AboutSection, ProjectsSection, SkillsExperienceSection, CertificatesContactSection } from './components/Sections';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#000915] antialiased selection:bg-[#00FFFF]/20 selection:text-white">
      <Hero />
      <AboutSection />
      <ProjectsSection />
      <SkillsExperienceSection />
      <CertificatesContactSection />
      <Footer />
    </div>
  );
}

export default App;
