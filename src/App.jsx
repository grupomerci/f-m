import React from 'react';
import Navigation from './components/Navigation';
import MarcasImpactantes from './components/MarcasImpactantes';
import MotivosIdentidade from './components/MotivosIdentidade';
import Portfolio from './components/Portfolio';
import SobreSection from './components/SobreSection';
import DepoimentosSection from './components/DepoimentosSection';
import HeroSection from './components/HeroSection';
import Pacotes from './components/Pacotes';
import WebsiteSection from './components/WebsiteSection';
import FAQ from './components/FAQ';
import Footer from './components/Footer';

function App() {
  return (
    <main className="bg-white inline-flex flex-col justify-start items-center overflow-hidden">
      <Navigation />
      <HeroSection />
      <MotivosIdentidade />
      <Portfolio />
      <SobreSection />
      <DepoimentosSection />
      <Pacotes />
      <WebsiteSection />
      <FAQ /> 
      {/* 
      */}
      <Footer />
      {
      /* 
        */
      }
      {/* 
      <MarcasImpactantes />
      */}
    </main>
  );
}

export default App;
