import React from 'react';
import image from '../../../assets/image';
import { Zap, ArrowRight } from 'lucide-react';

const GlobalNetworkFeatures = () => {
  return (
    <section data-theme="dark" className="w-full bg-[#1b1b1b] flex flex-col lg:flex-row items-center justify-between p-[40px] md:p-[76px_104px_77px_124px] gap-[40px] lg:gap-[20px] text-white font-sans">
      
      {/* Left Side: Image Card */}
      <div className="w-full lg:w-[596px] h-[400px] md:h-[500px] rounded-[24px] bg-gray-800 relative overflow-hidden flex flex-col justify-end p-[20px] md:p-[30px_29px] gap-[18px]">
        {/* Placeholder for the background image */}
        <img src={image.portTerminal} alt="Optimized routes" className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0" />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>
        
        <p className="w-full md:w-[426px] relative z-10 leading-[120%] text-[16px] md:text-[20px]">
          Optimized routes and strong carrier partnerships drive reliable on-time global delivery.
        </p>
        
        <div className="w-full md:w-[539px] h-[54px] rounded-[10px] bg-white text-[#1e1e1e] flex items-center justify-between p-[8px_18px_8px_12px] z-10 font-poppins">
          <div className="flex items-center gap-[10px]">
            <div className="w-[25.5px] h-[23px] rounded-[5px] bg-[#2460d6] flex items-center justify-center">
              <Zap size={14} color="white" />
            </div>
            <span className="leading-[130%] font-light text-[14px] md:text-[16px]">Fast & Reliable Delivery</span>
          </div>
          <ArrowRight size={20} className="text-[#1e1e1e]" />
        </div>
      </div>

      {/* Right Side: Text & Stats */}
      <div className="w-full lg:w-[558px] flex flex-col items-start gap-[60px] md:gap-[122px]">
        
        <div className="flex flex-col gap-[26px]">
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] text-white">
            Get Accurate Shipping Costs <br/> In Seconds
          </h2>
          <p className="text-[16px] md:text-[20px] leading-[140%] opacity-60 max-w-[533px]">
            Quickly calculate your shipping fee by entering the origin, destination, shipment type, weight, 
          </p>
        </div>

        <div className="flex items-center gap-[40px] md:gap-[28px] font-poppins">
          
          <div className="flex flex-col gap-[12px]">
            <span className="text-[32px] md:text-[40px] font-semibold leading-[130%] text-white">120+</span>
            <span className="text-[14px] md:text-[16px] leading-[120%] font-sans opacity-80">Countries Covered</span>
          </div>

          <div className="flex flex-col gap-[12px]">
            <span className="text-[32px] md:text-[40px] font-semibold leading-[130%] text-white">24/7</span>
            <span className="text-[14px] md:text-[16px] leading-[120%] font-sans opacity-80">Global Monitoring</span>
          </div>

        </div>

      </div>

    </section>
  );
};

export default GlobalNetworkFeatures;
