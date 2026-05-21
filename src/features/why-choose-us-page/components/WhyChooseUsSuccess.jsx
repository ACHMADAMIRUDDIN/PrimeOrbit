import React from 'react';
import image from '../../../assets/image';
import { MapPin } from 'lucide-react';

const WhyChooseUsSuccess = () => {
  return (
    <section data-theme="light" className="w-full relative bg-[#f5f5f5] overflow-hidden flex flex-col items-center pt-[100px] pb-[100px] font-sans text-black min-h-[1024px]">
      
      <div className="w-full max-w-[1320px] px-4 mx-auto flex flex-col gap-[78px] z-10">
        
        {/* Header Label */}
        <div className="flex items-center gap-[20px]">
          <span className="uppercase tracking-[0.2em] font-medium leading-[120%] text-[14px] md:text-[16px] text-[#a5a5a5]">
            Success Stories
          </span>
          <div className="flex-1 h-[1px] bg-[#d9d9d9]"></div>
        </div>

        {/* Title */}
        <h2 className="text-[24px] md:text-[32px] leading-[120%] font-medium max-w-[1320px]">
          We operate multiple branch offices to support smooth and efficient business operations for our partners.
        </h2>

      </div>

      {/* Map Container */}
      <div className="w-full max-w-[1320px] mx-auto h-[500px] md:h-[591px] relative overflow-hidden mt-[50px] font-inter">
        
        {/* Background Map */}
        <img src={image.cargoShipAerial} alt="Global Network" className="absolute w-full h-full object-cover opacity-20" />

        {/* Pin: Middle East */}
        <div className="absolute top-[50%] right-[3%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform -translate-y-1/2 scale-[0.6] md:scale-100 hidden lg:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-black" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Middle East Point</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jeddah, Arab</span>
          </div>
        </div>

        {/* Pin: Southeast Asia */}
        <div className="absolute top-[20%] right-[20%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-black" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Southeast Asia</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Jakarta, Indonesia</span>
          </div>
        </div>

        {/* Yellow Testimonial Overlay */}
        <div className="absolute top-[10%] left-[5%] md:left-[35%] lg:left-[40%] xl:left-[486px] w-[233px] h-[240px] rounded-[28px] bg-[#ffcd51] flex flex-col p-[24px] shadow-lg z-10">
          <span className="text-[#332910] text-[80px] md:text-[93.71px] font-medium leading-[100%] absolute top-[20px] left-[14px]">
            “
          </span>
          <p className="mt-[60px] font-poppins text-[14px] leading-[132%] text-black relative z-10 font-medium">
            We trust Transvora for all our international shipments
          </p>
        </div>

        {/* Sarah Queen Black Pin */}
        <div className="absolute top-[35%] md:top-[42%] left-[10%] md:left-[30%] lg:left-[35%] xl:left-[37.12%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-black text-white flex items-center p-[12px_24px] gap-[16px] z-20">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-black" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">Sarah Queen</span>
            <span className="font-medium text-[12px] leading-[120%] opacity-80">Jeddah, Arab</span>
          </div>
        </div>

        {/* Pin: East Asia Route */}
        <div className="absolute top-[20%] left-[10%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform scale-[0.6] md:scale-100 hidden lg:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-black" />
          </div>
          <div className="flex flex-col gap-[4px] whitespace-nowrap">
            <span className="font-medium leading-[125%] text-[16px]">East Asia Route</span>
            <span className="font-medium text-[12px] leading-[120%] text-[#a5a5a5]">Tianshui, China</span>
          </div>
        </div>

        {/* Pin: South America Supply */}
        <div className="absolute bottom-[20%] right-[66%] shadow-[1px_4px_10px_rgba(0,0,0,0.1)] rounded-[100px] bg-[#f9f8f8] border border-[#4e87d3]/50 flex items-center p-[12px_24px] gap-[8px] transform scale-[0.6] md:scale-100 hidden md:flex">
          <div className="rounded-full bg-white p-[7px]">
            <MapPin size={24} className="text-black" />
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

export default WhyChooseUsSuccess;
