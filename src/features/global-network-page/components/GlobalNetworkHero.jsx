import React from 'react';
import { MapPin, ArrowRight } from 'lucide-react';
import image from '../../../assets/image';

const GlobalNetworkHero = () => {
  return (
    <section data-theme="light" className="w-full h-auto min-h-[917px] relative overflow-hidden bg-[#f7f8f9] flex flex-col items-center pt-[180px] md:pt-[224px] px-4 font-sans text-black">

      {/* Main Text Content */}
      <div className="flex flex-col items-center gap-[40px] md:gap-[48px] z-10 w-full max-w-[973px] text-center">

        <h1 className="text-[48px] md:text-[76px] tracking-[-0.05em] leading-[100%] font-medium font-geist text-[#191919]">
          Integrated <br />
          Logistics Solutions Tailored
        </h1>

        <div className="flex flex-col items-center gap-[8px] md:gap-[4px] text-[18px] md:text-[24px] text-[#050505]">
          <div className="flex flex-col md:flex-row items-center gap-[8px]">
            <span className="tracking-[-0.02em] leading-[120%]">From global forwarding</span>
            <div className="w-[36px] h-[36px] bg-[#2a2a7c] rounded-full flex items-center justify-center p-[8px]">
              <ArrowRight size={16} color="white" />
            </div>
            <span className="tracking-[-0.02em] leading-[120%]">to local distribution</span>
          </div>
          <span className="tracking-[-0.02em] leading-[120%] mt-2 md:mt-0">
            we streamline your supply chain with precision and transparency.
          </span>
        </div>

        <div className="flex flex-col md:flex-row items-center gap-[16px] md:gap-[8px] mt-4 font-sans text-[18px] md:text-[20px]">
          <button className="rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center px-[30px] py-[16px] md:py-[20px] hover:bg-[#2a2a7c]/90 transition-colors w-full md:w-auto">
            View Route Capacity
          </button>
          <button className="rounded-[100px] bg-[#ffcd51] text-black flex items-center justify-center px-[30px] py-[16px] md:py-[20px] hover:bg-[#ffcd51]/90 transition-colors w-full md:w-[261px]">
            Find Nearest Hub
          </button>
        </div>

      </div>

      {/* Floating Graphic Elements (Desktop only for precision, adapted for mobile) */}
      <div className="w-full max-w-[1360px] h-[400px] md:h-[500px] relative mt-[40px] md:mt-0">

        <img
          src={image.portTerminal}
          alt="Global logistics network"
          className="absolute top-[20px] left-1/2 h-full w-[80%] -translate-x-1/2 rounded-[40px] object-cover opacity-15"
        />

        {/* Floating Card 1: Heavy-Duty Wingbox */}
        <div className="absolute top-[50%] left-[5%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[0px_0px_24px_24px] bg-[#191919] w-[250px] flex items-center justify-between p-[12px_16px] gap-[16px] text-white hidden md:flex">
          <div className="bg-white rounded-full p-[7px]">
            <MapPin size={24} className="text-black" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-medium leading-[125%] text-[16px]">Heavy-Duty Wingbox</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Singapore</span>
          </div>
        </div>

        {/* Floating Card 2: Movein Jakarta */}
        <div className="absolute top-[10%] right-[10%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[16px] hidden md:flex text-black">
          <div className="bg-white rounded-full p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-medium leading-[125%] text-[16px]">Movein</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Floating Card 3: Middle East Point */}
        <div className="absolute top-[60%] right-[5%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[16px] hidden lg:flex text-black">
          <div className="bg-white rounded-full p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-medium leading-[125%] text-[16px]">Middle East Point</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jeddah, Arab</span>
          </div>
        </div>

        {/* Floating Card 4: South America Supply */}
        <div className="absolute top-[80%] left-[25%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[16px] hidden lg:flex text-black">
          <div className="bg-white rounded-full p-[7px]">
            <MapPin size={24} className="text-blue-500" />
          </div>
          <div className="flex flex-col gap-[4px]">
            <span className="font-medium leading-[125%] text-[16px]">South America Supply</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Brasilia, Brazil</span>
          </div>
        </div>

        {/* Status Bubble */}
        <div className="absolute top-[30%] left-[30%] rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center p-[8px_16px] text-[10px] hidden md:flex font-sans">
          Status: Available
        </div>

      </div>

    </section>
  );
};

export default GlobalNetworkHero;
