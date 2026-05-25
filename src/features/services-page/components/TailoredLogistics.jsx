import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const TailoredLogistics = () => {
  return (
    <section data-theme="dark" className="bg-[#191919] w-full py-[80px] px-4 md:px-[80px] flex flex-col gap-[80px] text-white">

      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-center justify-between gap-[40px] md:gap-[20px]">
        <div className="flex flex-col gap-[12px] max-w-[691px]">
          <h2 className="text-[32px] md:text-[48px] font-medium leading-[120%] font-sans">
            Tailored Logistics <br />
            Services to Fit Your Business
          </h2>
          <p className="text-[16px] leading-[120%] opacity-60 font-sans">
            PrimeOrbit is a global logistics company specializing in ocean freight, inland transport, warehousing, and integrated supply chain solutions. With a worldwide network and smart technology, we help businesses grow across borders with speed and efficiency.
          </p>
        </div>
        <div className="flex h-[120px] w-[120px] shrink-0 items-start justify-end md:h-[271.5px] md:w-[271.5px]">
          <ArrowUpRight
            aria-hidden="true"
            className="h-full w-full text-white/10"
            strokeWidth={1.2}
          />
        </div>
      </div>

      {/* Cards Grid */}
      <div className="w-full h-auto md:h-[395px] flex flex-col md:flex-row items-stretch gap-[24px] text-black">

        {/* Card 1: Ocean Freight */}
        <div className="flex-1 bg-primary rounded-[20px] p-[24px] flex flex-col justify-between items-start min-h-[300px]">
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[24px] md:text-[32px] font-medium leading-[120%]">Ocean Freight</h3>
            <p className="text-[16px] md:text-[18px] leading-[120%] font-bold">
              Full and Less-than-Container load across 100+ ports
            </p>
          </div>
          <button className="w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform self-end md:self-start">
            <ArrowUpRight size={38} className="text-[#191919]" />
          </button>
        </div>

        {/* Card 2: Air Freight */}
        <div className="flex-1 bg-white rounded-[20px] p-[24px] flex flex-col justify-between items-start min-h-[300px]">
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[24px] md:text-[32px] font-medium leading-[120%]">Air Freight</h3>
            <p className="text-[16px] md:text-[18px] leading-[120%] font-bold">
              Fast, secure, and reliable global air cargo services with priority handling
            </p>
          </div>
          <button className="w-[82px] h-[82px] rounded-full bg-secondary flex items-center justify-center hover:scale-105 transition-transform self-end md:self-start">
            <ArrowUpRight size={38} className="text-white" />
          </button>
        </div>

        {/* Card 3: Inland Transportation */}
        <div className="flex-1 bg-primary rounded-[20px] p-[24px] flex flex-col justify-between items-start min-h-[300px]">
          <div className="flex flex-col gap-[12px]">
            <h3 className="text-[24px] md:text-[32px] font-medium leading-[120%]">Inland Transportation</h3>
            <p className="text-[16px] md:text-[18px] leading-[120%] font-bold">
              Modern fleet, timely delivery
            </p>
          </div>
          <button className="w-[82px] h-[82px] rounded-full bg-white flex items-center justify-center hover:scale-105 transition-transform self-end md:self-start">
            <ArrowUpRight size={38} className="text-[#191919]" />
          </button>
        </div>

      </div>

    </section>
  );
};

export default TailoredLogistics;
