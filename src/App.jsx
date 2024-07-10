import TestimonialSection from './components/section/TestimonialSection';
import AboutSection from './components/section/AboutSection';
import AdvantageSection from './components/section/AdvantageSection';
import ServiceSection from './components/section/ServiceSection';
import InfoBar from './components/InfoBar';
import Navbar from './components/Navbar';
import HomeSection from './components/section/HomeSection';
import Footer from './components/Footer'
import React from 'react';

function App() {
  return (
    <main className="font-popins text-[1.2vw]">
      <Navbar/>
      <HomeSection />
      <InfoBar />
      <ServiceSection />
    <AdvantageSection />
    <AboutSection />
    <TestimonialSection />
    <Footer />
    </main>
  );
}

export default App;
