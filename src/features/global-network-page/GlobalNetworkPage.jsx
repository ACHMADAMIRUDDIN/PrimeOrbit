import React from "react";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";

import GlobalNetworkHero from "./components/GlobalNetworkHero";
import LogoTicker from "./components/LogoTicker";
import GlobalNetworkStats from "./components/GlobalNetworkStats";
import GlobalNetworkFeatures from "./components/GlobalNetworkFeatures";
import GlobalNetworkAbout from "./components/GlobalNetworkAbout";
import GlobalNetworkShowcase from "./components/GlobalNetworkShowcase";

import GlobalFootprint from "../tracking-page/components/GlobalFootprint";
import TrackingTestimonial from "../tracking-page/components/TrackingTestimonial";

const GlobalNetworkPage = () => {
  return (
    <div className="min-h-screen bg-white font-sans text-black flex flex-col">
      <Navbar theme="light" />

      <main className="flex-1 w-full flex flex-col items-center">
        <GlobalNetworkHero />
        <LogoTicker />
        <GlobalNetworkStats />
        <GlobalNetworkFeatures />
        <GlobalNetworkAbout />
        <GlobalNetworkShowcase />
        <GlobalFootprint />
        <TrackingTestimonial />
      </main>

      <Footer />
    </div>
  );
};

export default GlobalNetworkPage;
