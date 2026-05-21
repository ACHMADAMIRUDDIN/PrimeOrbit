import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import LogoTicker from './components/LogoTicker'; 
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import PlatformSection from './components/PlatformSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CalculatorSection from './components/CalculatorSection';
import LandingGlobalFootprintSection from './components/LandingGlobalFootprintSection';
import LandingTestimonialsSection from './components/LandingTestimonialsSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <LogoTicker />
        <StatsSection />
        <ServicesSection />
        <PlatformSection />
        <WhyChooseUsSection />
        <CalculatorSection />
        <LandingGlobalFootprintSection />
        <LandingTestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
