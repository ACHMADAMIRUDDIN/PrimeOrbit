import React from 'react';
import image from '../../../assets/image';

const LandingGlobalFootprintSection = () => {
  return (
    <section className="flex w-full flex-col gap-[74px] bg-[#ffffff] px-4 py-[100px] font-sans text-black md:px-[60px]">
      <div className="mx-auto flex w-full max-w-[1320px] items-center justify-between gap-[7px]">
        <span className="whitespace-nowrap text-[20px] font-medium leading-[140%] opacity-60">GLOBAL FOOTPRINT</span>
        <div className="h-[1px] flex-1 bg-[#d9d9d9]"></div>
      </div>

      <div className="mx-auto flex w-full max-w-[1323px] flex-col items-start justify-between gap-[20px] md:flex-row md:items-center">
        <h2 className="max-w-[608px] text-[28px] font-medium leading-[120%] md:text-[32px]">
          Successfully managing supply chains across 50+ countries and counting
        </h2>
        <p className="max-w-[419px] text-[16px] leading-[140%] opacity-60 md:text-[20px]">
          Quickly calculate your shipping fee by entering the origin, destination, shipment type, weight, and package dimensions
        </p>
      </div>

      <div className="mx-auto w-full max-w-[1320px]">
        <img
          src={image.trackingGlobalFootprintMap}
          alt="Global footprint map"
          className="block h-auto w-full"
        />
      </div>
    </section>
  );
};

export default LandingGlobalFootprintSection;
