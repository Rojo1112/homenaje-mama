import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Timeline } from './components/Timeline';
import { PolaroidGallery } from './components/PolaroidGallery';
import { CoralUISSection } from './components/CoralUISSection';
import { InteractiveLetters } from './components/InteractiveLetters';
import { WisdomQuotes } from './components/WisdomQuotes';
import { SurpriseHug } from './components/SurpriseHug';
import { Footer } from './components/Footer';
import { AudioPlayer } from './components/AudioPlayer';
import { GeologicalBackground } from './components/GeologicalBackground';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-crema-100 flex flex-col font-sans selection:bg-terracota selection:text-white relative">
      {/* Sutil ambientación geológica de fondo (curvas de nivel, brújula Brunton, estratos) */}
      <GeologicalBackground />

      {/* Top Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="flex-1 relative z-10">
        <Hero />
        <Timeline />
        <PolaroidGallery />
        <CoralUISSection />
        <InteractiveLetters />
        <WisdomQuotes />
        <SurpriseHug />
      </main>

      {/* Floating Audio Player */}
      <AudioPlayer />

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default App;
