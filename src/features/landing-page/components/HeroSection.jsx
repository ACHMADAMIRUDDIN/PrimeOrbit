import React from 'react';
import image from '../../../assets/image';

const HeroSection = () => {
  return (
    <section id="home" className="relative w-full h-[888px] flex items-center justify-center overflow-hidden bg-[#1c1c1c]">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={image.cargoShipAerial} alt="Hero Background" className="w-full h-full object-cover object-top opacity-80" />
        <div className="absolute inset-0 bg-secondary/30 bg-gradient-to-t from-[#191919] via-[#191919]/50 to-transparent"></div>
      </div>

      <div className="w-full max-w-[1320px] px-4 md:px-[60px] relative z-10 flex flex-col items-start gap-[54px] pt-[120px]">
        
        {/* Main Content */}
        <div className="flex flex-col items-start gap-[44px] max-w-[854px]">
          
          <div className="flex flex-col items-start gap-[16px]">
            <div className="bg-white/20 rounded-[100px] px-[20px] py-[10px] text-white text-[16px] leading-[150%] font-medium backdrop-blur-sm">
              Moving Business Forward
            </div>
            
            <h1 className="text-[50px] md:text-[78px] font-medium text-white leading-[110%] tracking-[-2px] font-sans">
              Fast. Reliable.<br />
              Hassle-Free Delivery
            </h1>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-[28px]">
            <button className="bg-primary text-[#191919] font-medium text-[20px] leading-[150%] px-[48px] py-[20px] rounded-[100px] hover:bg-primary/90 transition-colors">
              Start Shipping
            </button>
            <p className="text-[#a5a5a5] text-[16px] leading-[160%] font-inter max-w-[382px]">
              Streamlining your end-to-end operations with precision-driven logistics solutions
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default HeroSection;
