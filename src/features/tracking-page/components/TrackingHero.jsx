import React from 'react';
import image from '../../../assets/image';
import { Truck } from 'lucide-react';

const FloatingBadgeIcon = () => (
  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0f5de8]">
    <svg
      aria-hidden="true"
      className="h-[12px] w-[12px] text-white"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.75h6.25l1.8 1.9h1.2c.97 0 1.75.78 1.75 1.75v1.6h-1.1a1.75 1.75 0 0 1-3.3 0H6.4a1.75 1.75 0 0 1-3.3 0H2V5.75C2 5.2 2.45 4.75 3 4.75Z"
        fill="currentColor"
      />
      <circle cx="4.75" cy="10.25" fill="#0f5de8" r="0.9" />
      <circle cx="11.25" cy="10.25" fill="#0f5de8" r="0.9" />
    </svg>
  </span>
);

const FloatingBadge = ({ className = '' }) => (
  <div
    className={`absolute z-20 flex items-center gap-[8px] rounded-full bg-white px-[7px] py-[7px] shadow-[0px_10px_20px_rgba(0,0,0,0.12)] ${className}`}
  >
    <FloatingBadgeIcon />
    <span className="pr-[8px] font-inter text-[11px] font-medium leading-none tracking-[-0.03em] text-[#111111]">
      Tracklane
    </span>
  </div>
);

const TrackingHero = () => {
  return (
    <section data-theme="dark" className="w-full h-[880px] bg-[#191919] relative overflow-hidden flex flex-col items-center pt-[228px] text-white">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img src={image.trackingHeroBg} alt="Tracking Hero Background" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-[#0d0f14]/30 bg-gradient-to-t from-[#191919] via-[#191919]/20 to-black/40"></div>
      </div>
      
      {/* Floating Tracklane Badges */}
      <div className="absolute top-[31%] left-[23%] transform rotate-[8deg] bg-white rounded-[100px] flex items-center p-[6px_18px_6px_6px] gap-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-white/20 select-none z-10">
        <div className="w-[36px] h-[36px] rounded-full bg-[#1e58ff] flex items-center justify-center shadow-sm">
          <Truck size={18} className="text-white fill-white animate-pulse" />
        </div>
        <span className="font-sans font-medium text-[16px] tracking-tight text-[#1c1c1c]">
          Tracklane
        </span>
      </div>

      <div className="absolute top-[60%] left-[4%] transform -rotate-[12deg] bg-white rounded-[100px] flex items-center p-[6px_18px_6px_6px] gap-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-white/20 select-none z-10">
        <div className="w-[36px] h-[36px] rounded-full bg-[#1e58ff] flex items-center justify-center shadow-sm">
          <Truck size={18} className="text-white fill-white" />
        </div>
        <span className="font-sans font-medium text-[16px] tracking-tight text-[#1c1c1c]">
          Tracklane
        </span>
      </div>

      <div className="absolute top-[41%] right-[9%] transform rotate-[8deg] bg-white rounded-[100px] flex items-center p-[6px_18px_6px_6px] gap-[10px] shadow-[0_12px_32px_rgba(0,0,0,0.15)] border border-white/20 select-none z-10">
        <div className="w-[36px] h-[36px] rounded-full bg-[#1e58ff] flex items-center justify-center shadow-sm">
          <Truck size={18} className="text-white fill-white" />
        </div>
        <span className="font-sans font-medium text-[16px] tracking-tight text-[#1c1c1c]">
          Tracklane
        </span>
      </div>

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-[40px] z-10 w-full max-w-[941px] px-4">
        
        <h1 className="text-[52px] md:text-[84px] tracking-[-0.05em] leading-[110%] font-medium text-center font-sans max-w-[900px] text-white">
          Track Your <br className="hidden md:block"/>Shipment Instantly
        </h1>
        
        <p className="text-[18px] md:text-[22px] tracking-[-0.02em] leading-[140%] font-sans text-center max-w-[680px] text-white/90 mt-[10px]">
          From global forwarding to local distribution <br className="hidden md:block"/>
          we streamline your supply chain with precision and transparency.
        </p>

        {/* Input Container */}
        <div className="w-full max-w-[941px] h-auto md:h-[88px] mt-[32px] backdrop-blur-[16px] bg-white/10 border border-white/40 rounded-[100px] flex flex-col md:flex-row items-center justify-between p-[8px_8px_8px_32px] gap-[12px] md:gap-0 shadow-[0_16px_40px_rgba(0,0,0,0.2)]">
          
          <input 
            type="text" 
            placeholder="2315482546"
            className="bg-transparent outline-none border-none text-white text-[22px] md:text-[26px] font-light leading-[120%] placeholder-white/80 w-full md:w-auto flex-1 px-4 md:px-0"
          />
          
          <button className="w-full md:w-auto h-full rounded-[100px] bg-white text-black flex items-center justify-center px-[42px] py-[18px] md:py-0 text-[18px] md:text-[20px] font-sans font-medium hover:bg-white/90 active:scale-[0.98] transition-all duration-200">
            Track Package
          </button>
        </div>
      </div>
    </section>
  );
};

export default TrackingHero;
