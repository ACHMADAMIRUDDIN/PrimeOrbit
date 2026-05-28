import React from "react";
import image from "../../../assets/image";
import trukIcon from "../../UI/uiicon/truk.png";

const WhyChooseUsHero = () => {
  const heroImages = [
    image.yardInspector,
    image.logisticsTeam,
    image.containerSupervisor,
    image.warehouseManager,
  ];

  const duplicatedImages = [...heroImages, ...heroImages, ...heroImages];

  return (
    <section
      data-theme="light"
      className="w-full relative min-h-[900px] md:min-h-[1024px] bg-[#f5f5f5] overflow-hidden flex flex-col items-center pt-[180px] md:pt-[270px] pb-[40px] px-4 font-sans text-black"
    >
      <div className="flex flex-col items-center gap-[40px] z-10 w-full max-w-[973px] text-center">
        <h1 className="text-[48px] md:text-[76px] tracking-[-0.05em] leading-[100%] font-medium font-geist text-black">
          Integrated <br className="hidden md:block" />
          Logistics Solutions Tailored
        </h1>

        <p className="text-[18px] md:text-[24px] tracking-[-0.02em] leading-[120%] opacity-60 font-sans max-w-[650px] mx-auto">
          From global forwarding to local distribution{" "}
          <br className="hidden md:block" />
          we streamline your supply chain with precision and transparency.
        </p>

        <div className="flex flex-col md:flex-row items-center justify-center gap-[16px] md:gap-[8px] mt-2 font-sans text-[18px] md:text-[20px] w-full">
          <button className="rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center px-[30px] py-[16px] md:py-[20px] hover:bg-[#2a2a7c]/90 transition-colors w-full md:w-auto">
            View Route Capacity
          </button>
          <button className="rounded-[100px] bg-[#ffcd51] text-black flex items-center justify-center px-[30px] py-[16px] md:py-[20px] hover:bg-[#ffcd51]/90 transition-colors w-full md:w-[261px]">
            Find Nearest Hub
          </button>
        </div>
      </div>

      <div className="absolute top-[350px] md:top-[447px] right-[-20px] md:right-[5%] lg:right-[15%] xl:right-[20%] shadow-lg rounded-[100px] bg-white hidden md:flex items-center p-[4px_24px_4px_8px] gap-[12px] transform rotate-[-5deg]">
        <div className="w-[32px] h-[32px] rounded-full bg-[#2a2a7c] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
          <img
            src={trukIcon}
            alt="Truck Icon"
            className="w-[18px] h-[18px] object-contain"
          />
        </div>
        <span className="font-medium text-[16px] leading-[120%] tracking-[-0.02em] text-[#050505]">
          Cargo Status
        </span>
      </div>

      <div className="absolute top-[280px] md:top-[259px] left-[-20px] md:left-[5%] lg:left-[10%] xl:left-[15%] shadow-lg rounded-[100px] bg-white hidden md:flex items-center p-[4px_24px_4px_8px] gap-[12px] transform rotate-[5deg]">
        <div className="w-[32px] h-[32px] rounded-full bg-[#2a2a7c] shadow-[0_4px_10px_rgba(0,0,0,0.1)] flex items-center justify-center">
          <img
            src={trukIcon}
            alt="Truck Icon"
            className="w-[18px] h-[18px] object-contain"
          />
        </div>
        <span className="font-medium text-[16px] leading-[120%] tracking-[-0.02em] text-[#050505]">
          Live Tracking
        </span>
      </div>

      <div className="absolute bottom-[-50px] md:bottom-[-20px] left-0 right-0 w-full overflow-hidden pb-[60px] z-10">
        <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-[#f5f5f5] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-[#f5f5f5] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max items-center gap-[15px] md:gap-[25px] animate-infinite-scroll">
          {duplicatedImages.map((imgSrc, index) => (
            <div key={index} className="shrink-0">
              <img
                src={imgSrc}
                alt={`Logistics ${index + 1}`}
                className="w-[200px] md:w-[362px] h-[180px] md:h-[289px] object-cover rounded-[10px] shadow-md hover:-translate-y-2 transition-transform duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUsHero;
