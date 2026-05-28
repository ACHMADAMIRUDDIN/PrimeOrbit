import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import WhyChooseUsHero from "./components/WhyChooseUsHero";
import WhyChooseUsAbout from "./components/WhyChooseUsAbout";
import WhyChooseUsSuccess from "./components/WhyChooseUsSuccess";

const WhyChooseUsPage = () => {
  return (
    <div className="min-h-screen bg-[#f5f5f5] font-sans text-black flex flex-col">
      <Navbar theme="light" />

      <main className="flex-1 w-full flex flex-col items-center">
        <WhyChooseUsHero />
        <WhyChooseUsAbout />
        <WhyChooseUsSuccess />
      </main>

      <Footer />
    </div>
  );
};

export default WhyChooseUsPage;
