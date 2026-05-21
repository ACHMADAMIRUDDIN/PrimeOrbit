import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import ServicesSection from './components/ServicesSection';
import WhyChooseUsSection from './components/WhyChooseUsSection';
import CalculatorSection from './components/CalculatorSection';
import MapTestimonialSection from './components/MapTestimonialSection';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <HeroSection />
        <StatsSection />
        <ServicesSection />
        <WhyChooseUsSection />
        <CalculatorSection />
        <MapTestimonialSection />
      </main>

      <Footer />
    </div>
  );
};

export default LandingPage;
