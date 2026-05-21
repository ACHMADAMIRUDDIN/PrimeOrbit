import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import ServicesHeroMockup from './components/ServicesHeroMockup';
import ServicesGlobalFootprintSection from './components/ServicesGlobalFootprintSection';
import ServicesTestimonialsSection from './components/ServicesTestimonialsSection';
import TailoredLogistics from './components/TailoredLogistics';
import SectorSolutions from './components/SectorSolutions';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#121336]">
      <Navbar theme="light" />
      
      <main>
        <ServicesHeroMockup />
        <TailoredLogistics />
        <SectorSolutions />
        <ServicesGlobalFootprintSection />
        <ServicesTestimonialsSection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
