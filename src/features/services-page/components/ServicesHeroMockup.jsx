import React from 'react';
import herroImage from '../../UI/herro.png';
import image from '../../../assets/image';
import { ArrowRight, ArrowUpRight } from 'lucide-react';

const ServicesHeroMockup = () => {
  return (
    <section data-theme="light" className="relative w-full overflow-hidden bg-[#f5f5f5] px-4 pt-[156px] pb-0 md:px-6 md:pt-[172px] lg:pt-[186px]">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[72%] bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.92),_rgba(245,245,245,1)_72%)]"></div>

      <div className="relative mx-auto flex w-full max-w-[1320px] flex-col items-center">
        <ArrowUpRight
          className="pointer-events-none absolute right-[4%] top-[10px] hidden h-[148px] w-[148px] text-[#dfe3ea] md:block lg:right-[6%] lg:top-[34px] lg:h-[184px] lg:w-[184px]"
          strokeWidth={1.2}
        />

        <div className="flex w-full max-w-[973px] flex-col items-center gap-[32px] text-center md:gap-[40px]">
          <h1 className="font-geist text-[44px] font-medium leading-[100%] tracking-[-0.05em] text-[#050505] md:text-[76px]">
            Integrated
            <br />
            Logistics Solutions Tailored
          </h1>

          <div className="flex flex-col items-center gap-[6px] text-[18px] text-[#050505] md:text-[24px]">
            <div className="flex flex-col items-center gap-[8px] md:flex-row">
              <span className="leading-[120%] tracking-[-0.02em]">From global forwarding</span>
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#2a2a7c] p-[8px] text-white">
                <img
                  src={image.warehouse}  alt="Warehouse icon" className="h-[16px] w-[16px] object-contain"/>
              </div>
              <span className="leading-[120%] tracking-[-0.02em]">to local distribution</span>
            </div>
            <span className="max-w-[760px] leading-[120%] tracking-[-0.02em]">
              we streamline your supply chain with precision and transparency.
            </span>
          </div>
        </div>

        <div className="relative mt-[64px] w-full max-w-[1134px] overflow-hidden rounded-t-[24px] border-x border-t border-white/80 bg-white shadow-[0px_0px_30px_rgba(0,0,0,0.08)]">
          <div
            className="aspect-[1425/676] w-full bg-[length:100%_100%] bg-top bg-no-repeat"
            style={{ backgroundImage: `url(${herroImage})` }}
          />
          {/* Soft White Gradient Fade at the bottom */}
          <div className="absolute inset-x-0 bottom-0 h-[80px] bg-gradient-to-t from-white to-transparent pointer-events-none z-10" />
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroMockup;
