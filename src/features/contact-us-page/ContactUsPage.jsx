import React from 'react';
import Navbar from '../../components/layout/Navbar';
import Footer from '../../components/layout/Footer';

import ContactUsHero from './components/ContactUsHero';
import ContactUsFaq from './components/ContactUsFaq';

const ContactUsPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black flex flex-col">
      {/* Navbar tema transparan (dark) karena menempel di background Hero gambar gelap */}
      <Navbar theme="dark" />
      
      <main className="flex-1 w-full flex flex-col items-center">
        <ContactUsHero />
        <ContactUsFaq />
      </main>

      <Footer />
    </div>
  );
};

export default ContactUsPage;
