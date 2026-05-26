import React from 'react';
import image from '../../../assets/image';
import { Plane, Truck } from 'lucide-react';

const GlobalNetworkStats = () => {
  return (
    <section data-theme="light" className="w-full flex flex-col font-sans">
      {/* Statistics & Cards */}
      <div className="w-full bg-white flex flex-col p-[40px] md:p-[80px_120px] gap-[76px] text-black">
        
        {/* Numbers Grid */}
        <div className="w-full max-w-[1280px] mx-auto flex flex-wrap md:flex-nowrap items-start md:items-center justify-between gap-[32px] md:gap-[16px]">
          
          <div className="flex flex-col gap-[16px] flex-1 min-w-[200px]">
             <span className="text-[16px] md:text-[18px] leading-[120%] opacity-40 uppercase font-bold tracking-wider">Years Experiences</span>
             <span className="text-[36px] md:text-[48px] leading-[140%] font-semibold font-figtree">20+</span>
          </div>

          <div className="flex flex-col gap-[16px] flex-1 min-w-[200px]">
             <span className="text-[16px] md:text-[18px] leading-[120%] opacity-40 uppercase font-bold tracking-wider">Active Vessels Worldwide</span>
             <span className="text-[36px] md:text-[48px] leading-[140%] font-semibold font-figtree">500+</span>
          </div>

          <div className="flex flex-col gap-[16px] flex-1 min-w-[200px]">
             <span className="text-[16px] md:text-[18px] leading-[120%] opacity-40 uppercase font-bold tracking-wider">On-Time Delivery Rate</span>
             <span className="text-[36px] md:text-[48px] leading-[140%] font-semibold font-figtree">99.1%</span>
          </div>

          <div className="flex flex-col gap-[16px] flex-1 min-w-[200px]">
             <span className="text-[16px] md:text-[18px] leading-[120%] opacity-40 uppercase font-bold tracking-wider">Global Ports Served</span>
             <span className="text-[36px] md:text-[48px] leading-[140%] font-semibold font-figtree">200+</span>
          </div>

        </div>

        {/* Transport Cards */}
        <div className="w-full max-w-[1280px] mx-auto flex flex-col md:flex-row gap-[24px]">
          
          {/* Sea Card */}
          <div className="flex-1 h-[280px] relative rounded-[16px] overflow-hidden group cursor-pointer bg-gray-200">
            <img src={image.cargoShipAerial} alt="Sea Transport" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            
            <div className="absolute top-[16px] left-[24px] right-[24px] flex items-center justify-between z-10 text-[12px] text-white">
              <div className="w-[28px] h-[28px] flex items-center justify-center">
                <img src={image.dsfscvsxcx} alt="Ship" width={24} height={24} className="w-[16px] h-[16px]" />
              </div>
              <div className="h-[28px] rounded-[100px] bg-white text-black font-semibold flex items-center justify-center px-[12px]">
                Transport
              </div>
            </div>

            <div className="absolute bottom-[12px] left-[24px] right-[24px] flex items-end justify-between z-10 text-white font-figtree">
              <span className="text-[24px] leading-[140%] font-medium">Sea</span>
              <span className="text-[18px] leading-[140%] opacity-80">01</span>
            </div>
            
            {/* Gradient Overlay for text readability */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          </div>

          {/* Air Card */}
          <div className="flex-1 h-[280px] relative rounded-[16px] overflow-hidden group cursor-pointer bg-gray-200">
            <img src={image.airCargoPlane} alt="Air Transport" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            
            <div className="absolute top-[16px] left-[24px] right-[24px] flex items-center justify-between z-10 text-[12px] text-black">
              <div className="w-[28px] h-[28px] flex items-center justify-center">
                <img src={image.dsfscvsxcx} alt="Ship" width={24} height={24} className="w-[16px] h-[16px]" />
              </div>
              <div className="h-[28px] rounded-[100px] backdrop-blur-[8px] bg-white/80 text-black font-semibold flex items-center justify-center px-[12px]">
                Transport
              </div>
            </div>

            <div className="absolute bottom-[12px] left-[24px] right-[24px] flex items-end justify-between z-10 text-white font-figtree">
              <span className="text-[24px] leading-[140%] font-medium">Air</span>
              <span className="text-[18px] leading-[140%] opacity-80">02</span>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          </div>

          {/* Land Card */}
          <div className="flex-1 h-[280px] relative rounded-[16px] overflow-hidden group cursor-pointer bg-gray-200">
            <img src={image.roadTruck} alt="Land Transport" className="absolute w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80" />
            
            <div className="absolute top-[16px] left-[24px] right-[24px] flex items-center justify-between z-10 text-[12px] text-black">
              <div className="w-[28px] h-[28px] flex items-center justify-center">
                <img src={image.dsfscvsxcx} alt="Ship" width={24} height={24} className="w-[16px] h-[16px]" />
              </div>
              <div className="h-[28px] rounded-[100px] backdrop-blur-[8px] bg-white/80 text-black font-semibold flex items-center justify-center px-[12px]">
                Transport
              </div>
            </div>

            <div className="absolute bottom-[12px] left-[24px] right-[24px] flex items-end justify-between z-10 text-white font-figtree">
              <span className="text-[24px] leading-[140%] font-medium">Land</span>
              <span className="text-[18px] leading-[140%] opacity-80">03</span>
            </div>
            
            {/* Gradient Overlay */}
            <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default GlobalNetworkStats;
