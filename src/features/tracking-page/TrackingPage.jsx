import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import TrackingHero from './components/TrackingHero';
import TrackingResult from './components/TrackingResult';
import GlobalFootprint from './components/GlobalFootprint';
import TrackingFaq from './components/TrackingFaq';
import TrackingTestimonial from './components/TrackingTestimonial';

const TrackingPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black flex flex-col">
      <Navbar theme="dark" />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <TrackingHero />
        <TrackingResult />
        <GlobalFootprint />
        <TrackingFaq />
        <TrackingTestimonial />
      </main>

      <Footer />
    </div>
  );
};

export default TrackingPage;
