import React from 'react';
import image from '../../../assets/image';

const TrackingHero = () => {
  return (
    <section className="w-full h-[880px] bg-[#191919] relative overflow-hidden flex flex-col items-center pt-[228px] text-white">
      
      {/* Background Graphic elements from Figma */}
      <img src={image.truckBadge} alt="" className="absolute top-[367px] left-[81%] w-[146.8px] h-[57.2px] object-contain opacity-20" />
      <img src={image.airCargoPlane} alt="" className="absolute top-[272.28px] left-[23%] w-[144.8px] h-[46.8px] object-contain opacity-20" />
      <img src={image.containerStacks} alt="" className="absolute top-[536.98px] left-[4%] w-[145.3px] h-[49.4px] object-contain opacity-20" />

      {/* Hero Content */}
      <div className="flex flex-col items-center gap-[40px] z-10 w-full max-w-[941px] px-4">
        
        <h1 className="text-[50px] md:text-[78px] tracking-[-0.06em] leading-[120%] font-medium text-center font-sans">
          Track Your <br className="hidden md:block"/>Shipment Instantly
        </h1>
        
        <p className="text-[18px] md:text-[24px] tracking-[-0.02em] leading-[120%] font-geist text-center max-w-[650px] mt-[10px]">
          From global forwarding to local distribution <br className="hidden md:block"/>
          we streamline your supply chain with precision and transparency.
        </p>

        {/* Input Container */}
        <div className="w-full max-w-[941px] h-auto md:h-[84px] mt-[40px] backdrop-blur-[4px] bg-white/30 border border-white rounded-[100px] flex flex-col md:flex-row items-center justify-between p-[8px_8px_8px_24px] gap-[12px] md:gap-0">
          
          <input 
            type="text" 
            placeholder="2315482546"
            className="bg-transparent outline-none border-none text-white text-[20px] md:text-[28px] font-medium leading-[120%] placeholder-white/70 w-full md:w-auto flex-1 px-4 md:px-0"
          />
          
          <button className="w-full md:w-auto rounded-[100px] bg-white text-black flex items-center justify-center px-[26px] py-[18px] text-[18px] md:text-[20px] font-sans hover:bg-gray-200 transition-colors">
            Track Package
          </button>
        </div>

      </div>
    </section>
  );
};

export default TrackingHero;
