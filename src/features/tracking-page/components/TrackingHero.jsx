import React from 'react';
import image from '../../../assets/image';

const FloatingBadgeIcon = () => (
  <span className="flex h-[22px] w-[22px] items-center justify-center rounded-full bg-[#0f5de8]">
    <svg
      aria-hidden="true"
      className="h-[12px] w-[12px] text-white"
      fill="none"
      viewBox="0 0 16 16"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3 4.75h6.25l1.8 1.9h1.2c.97 0 1.75.78 1.75 1.75v1.6h-1.1a1.75 1.75 0 0 1-3.3 0H6.4a1.75 1.75 0 0 1-3.3 0H2V5.75C2 5.2 2.45 4.75 3 4.75Z"
        fill="currentColor"
      />
      <circle cx="4.75" cy="10.25" fill="#0f5de8" r="0.9" />
      <circle cx="11.25" cy="10.25" fill="#0f5de8" r="0.9" />
    </svg>
  </span>
);

const FloatingBadge = ({ className = '' }) => (
  <div
    className={`absolute z-20 flex items-center gap-[8px] rounded-full bg-white px-[7px] py-[7px] shadow-[0px_10px_20px_rgba(0,0,0,0.12)] ${className}`}
  >
    <FloatingBadgeIcon />
    <span className="pr-[8px] font-inter text-[11px] font-medium leading-none tracking-[-0.03em] text-[#111111]">
      Tracklane
    </span>
  </div>
);

const TrackingHero = () => {
  return (
    <section className="relative w-full overflow-hidden bg-[#78828b]">
      <img
        src={image.containerStacks}
        alt="Container stacks"
        className="absolute inset-0 h-full w-full object-cover object-center"
      />

      <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(111,120,129,0.52)_0%,rgba(79,89,99,0.26)_36%,rgba(18,22,27,0.18)_100%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(0,0,0,0.18)_0%,rgba(0,0,0,0.05)_45%,rgba(0,0,0,0.14)_100%)]" />

      <FloatingBadge className="left-[18%] top-[168px] -translate-x-1/2 md:left-[24%] md:top-[188px]" />
      <FloatingBadge className="left-[8%] top-[360px] -translate-x-1/2 md:left-[7%] md:top-[424px]" />
      <FloatingBadge className="right-[7%] top-[236px] rotate-[8deg] md:right-[8%] md:top-[252px]" />

      <div className="relative mx-auto flex min-h-[610px] w-full max-w-[1320px] flex-col items-center px-[22px] pb-[42px] pt-[162px] text-white md:min-h-[700px] md:px-[42px] md:pb-[54px] md:pt-[190px] lg:min-h-[748px] lg:px-[56px] lg:pb-[66px] lg:pt-[204px]">
        <div className="flex w-full max-w-[941px] flex-col items-center gap-[22px]">
          <h1 className="text-center font-sans text-[50px] font-medium leading-[108%] tracking-[-0.07em] text-white md:text-[76px] lg:text-[78px]">
            Track Your
            <br />
            Shipment Instantly
          </h1>

          <p className="max-w-[650px] text-center font-geist text-[20px] leading-[120%] tracking-[-0.02em] text-white/92 md:text-[24px]">
            From global forwarding to local distribution
            <br className="hidden md:block" />
            we streamline your supply chain with precision and transparency.
          </p>

          <div className="mt-[38px] flex w-full max-w-[941px] flex-col items-center rounded-[100px] border border-white/70 bg-white/16 p-[8px_8px_8px_22px] backdrop-blur-[7px] md:h-[84px] md:flex-row md:justify-between md:gap-0">
            <input
              type="text"
              placeholder="12345"
              className="w-full flex-1 bg-transparent px-4 py-2 text-[20px] font-medium leading-[120%] text-white placeholder-white outline-none md:px-0 md:py-0 md:text-[38px]"
            />

            <button className="mt-[10px] w-full rounded-[100px] bg-white px-[30px] py-[18px] font-sans text-[18px] font-medium leading-none text-[#111111] transition-colors hover:bg-white/90 md:mt-0 md:w-auto md:px-[34px] md:py-[18px] md:text-[20px]">
              Track Package
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrackingHero;
