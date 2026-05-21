import React from 'react';
import image from '../../../assets/image';

const SURFACE_COLOR = '#f8f8f8';

const WhyChooseUsSuccess = () => {
  return (
    <section
      className="relative flex w-full flex-col items-center overflow-hidden pb-[100px] pt-[100px] font-sans text-black"
      style={{ backgroundColor: SURFACE_COLOR }}
    >
      
      <div className="z-10 mx-auto flex w-full max-w-[1320px] flex-col gap-[78px] px-4">
        
        <div className="flex items-center gap-[20px]">
          <span className="text-[14px] font-medium uppercase leading-[120%] tracking-[0.2em] text-[#a5a5a5] md:text-[16px]">
            Success Stories
          </span>

          <div className="h-[1px] flex-1 bg-[#d9d9d9]" />
        </div>

        <h2 className="max-w-[1320px] text-[24px] font-medium leading-[120%] md:text-[32px]">
          We operate multiple branch offices to support smooth and efficient business operations for our partners.
        </h2>
      </div>

      <div
        className="mx-auto mt-[50px] w-full max-w-[1320px] px-4"
        style={{ backgroundColor: SURFACE_COLOR }}
      >
        <img
          src={image.whyChooseUsSuccessMap}
          alt="Success stories global map"
          className="block h-auto w-full select-none"
          draggable="false"
        />
      </div>
    </section>
  );
};

export default WhyChooseUsSuccess;
