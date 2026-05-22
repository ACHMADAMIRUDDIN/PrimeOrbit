import React from 'react';
import image from '../../../assets/image';
import { ShieldCheck } from 'lucide-react';

const SectorSolutions = () => {
  return (
    <section data-theme="light" className="bg-[#f5f5f5] w-full py-[80px] px-4 md:px-[120px] flex flex-col gap-[80px] text-black overflow-hidden">

      {/* Header */}
      <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
        <h2 className="text-[40px] md:text-[56px] font-medium leading-[120%] font-sans">
          Solutions for Every Sector
        </h2>
        <p className="max-w-[450px] text-[16px] leading-[140%] font-figtree">
          Providing specialized logistics for E-commerce, Automotive, FMCG, and Industrial manufacturing
        </p>
      </div>

      {/* Grid Content */}
      <div className="w-full flex flex-col lg:flex-row lg:h-[480px] items-stretch gap-[19px] font-poppins">

        {/* Image 1 (Kiri) - Mengikuti tinggi induk (480px) */}
        <div className="flex-1 h-[300px] lg:h-full rounded-[24px] overflow-hidden">
          <img
            src={image.airCargoPlane}
            alt="Air Cargo"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Center Cards (Tengah) - Tinggi total pas 480px */}
        <div className="w-full lg:w-[386.8px] flex flex-col gap-[20px] flex-shrink-0">

          {/* Card 98% */}
          <div className="flex-1 h-[230px] rounded-[24px] bg-primary p-[20px_30px_20px_19px] flex flex-col justify-between">
            <p className="text-[16px] leading-[130%] font-light text-[#1e1e1e] max-w-[337px]">
              Customer satisfaction through transparent real-time tracking.
            </p>
            <h3 className="text-[50px] leading-[130%] font-medium text-[#1e1e1e] mt-4">98%</h3>
          </div>

          {/* Card 15+ */}
          <div className="flex-1 h-[230px] rounded-[24px] bg-white p-[20px_30px_20px_19px] flex flex-col justify-between">
            <div className="w-[27px] h-[25px] rounded-[5px] bg-[#2460d6]/10 flex items-center justify-center">
              <ShieldCheck size={16} className="text-[#2460d6]" />
            </div>
            <div>
              <h3 className="text-[50px] leading-[130%] font-medium text-[#1e1e1e] mt-2">15+</h3>
              <p className="text-[16px] leading-[130%] font-light text-[#1e1e1e] max-w-[337px] mt-1">
                Delivering reliable logistics solutions across international markets.
              </p>
            </div>
          </div>

        </div>

        {/* Image 2 (Kanan) - Mengikuti tinggi induk (480px) */}
        <div className="flex-1 h-[300px] lg:h-full rounded-[24px] overflow-hidden">
          <img
            src={image.containerYard}
            alt="Logistics"
            className="w-full h-full object-cover"
          />
        </div>

      </div>

    </section>
  );
};

export default SectorSolutions;
