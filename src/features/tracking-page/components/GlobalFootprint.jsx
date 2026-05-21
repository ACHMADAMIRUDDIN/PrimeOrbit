import React from 'react';
import image from '../../../assets/image';
import { MapPin } from 'lucide-react';

const GlobalFootprint = () => {
  return (
    <section className="w-full bg-[#fcfcfc] py-[100px] px-4 md:px-[60px] flex flex-col gap-[74px] font-sans text-black">
      
      {/* Top Label & Divider */}
      <div className="w-full max-w-[1320px] mx-auto flex items-center justify-between gap-[7px]">
        <span className="opacity-60 leading-[140%] whitespace-nowrap text-[20px] font-medium">GLOBAL FOOTPRINT</span>
        <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
      </div>

      {/* Main Text Content */}
      <div className="w-full max-w-[1323px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
        <h2 className="text-[28px] md:text-[32px] font-medium leading-[120%] max-w-[608px]">
          Successfully managing supply chains across 50+ countries and counting
        </h2>
        <p className="text-[16px] md:text-[20px] leading-[140%] opacity-60 max-w-[419px]">
          Quickly calculate your shipping fee by entering the origin, destination, shipment type, weight, and package dimensions
        </p>
      </div>

      {/* Map Area */}
      <div className="w-full max-w-[1320px] mx-auto h-[300px] md:h-[591px] relative overflow-hidden font-inter">
        
        {/* The World Map Graphic */}
        <img src={image.cargoShipAerial} alt="Global Network" className="absolute w-full h-full object-cover object-center opacity-20" />

        {/* Pin 1: Middle East */}
        <div className="absolute top-[50%] left-[80%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform -translate-x-1/2 -translate-y-1/2 scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Middle East Point</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jeddah, Arab</span>
          </div>
        </div>

        {/* Pin 2: Southeast Asia */}
        <div className="absolute top-[30%] left-[65%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform -translate-x-1/2 scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Southeast Asia</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Pin 3: Europe Gateway (Dark Mode Pin) */}
        <div className="absolute top-[40%] left-[50%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#191919] text-white flex items-center p-[12px_24px] gap-[16px] transform -translate-x-1/2 scale-[0.6] md:scale-100">
          <div className="rounded-full bg-white/10 p-[7px]">
            <MapPin size={24} className="text-white" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Europe Gateway</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Madrid, Spain</span>
          </div>
        </div>

        {/* Pin 4: East Asia Route */}
        <div className="absolute top-[10%] left-[20%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">East Asia Route</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Tianshui, China</span>
          </div>
        </div>

        {/* Pin 5: South America Supply */}
        <div className="absolute top-[75%] left-[30%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">South America Supply</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Brasilia, Brazil</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default GlobalFootprint;
