import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';
import MapTestimonialSection from '../landing-page/components/MapTestimonialSection';

import ServicesHeroMockup from './components/ServicesHeroMockup';
import IntegratedSolutions from './components/IntegratedSolutions';
import TailoredLogistics from './components/TailoredLogistics';
import SectorSolutions from './components/SectorSolutions';

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-[#121336]">
      <Navbar theme="light" />
      
      <main>
        <ServicesHeroMockup />
        <IntegratedSolutions />
        <TailoredLogistics />
        <SectorSolutions />
        <MapTestimonialSection />
      </main>

      <Footer />
    </div>
  );
};

export default ServicesPage;
