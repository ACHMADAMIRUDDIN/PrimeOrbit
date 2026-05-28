import React from "react";
import image from "../../../assets/image";

const HeroSection = () => {
  return (
    <section
      id="home"
      data-theme="dark"
      className="w-full bg-white px-2 pb-[34px] pt-[22px] md:px-4 md:pb-[40px]"
    >
      <div className="mx-auto w-full max-w-[1600px]">
        <div className="relative min-h-[560px] overflow-hidden rounded-[28px] bg-[#6f8798] md:min-h-[650px] lg:min-h-[690px]">
          <img
            src={image.cargoShipAerial}
            alt="PrimeOrbit cargo ship"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />

          <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(122,147,166,0.58)_0%,rgba(70,103,128,0.16)_28%,rgba(10,15,20,0.38)_100%)]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,13,18,0.26)_0%,rgba(8,13,18,0.04)_44%,rgba(8,13,18,0.14)_100%)]" />

          <div className="relative flex h-full min-h-[560px] flex-col justify-end px-[16px] pb-[26px] pt-[148px] md:min-h-[650px] md:px-[32px] md:pb-[34px] md:pt-[176px] lg:min-h-[690px] lg:px-[40px] lg:pb-[40px] lg:pt-[194px]">
            <div className="flex flex-col gap-[30px] lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-[760px]">
                <p className="mb-[14px] text-[12px] font-medium uppercase leading-none tracking-[0.34em] text-white md:text-[14px]">
                  Moving Business Forward
                </p>

                <h1 className="max-w-[760px] font-sans text-[48px] font-medium leading-[92%] tracking-[-0.055em] text-white md:text-[66px] lg:text-[70px] xl:text-[76px]">
                  Fast. Reliable.
                  <br />
                  Hassle-Free Delivery
                </h1>
              </div>

              <div className="flex w-full max-w-[318px] flex-col items-start gap-[14px] lg:pb-[18px]">
                <button className="rounded-full bg-primary px-[34px] py-[16px] font-sans text-[18px] font-medium leading-none text-[#111111] transition-colors hover:bg-primary/90 md:px-[42px] md:py-[18px] md:text-[19px]">
                  Start Shipping
                </button>

                <p className="max-w-[318px] font-inter text-[16px] leading-[125%] tracking-[-0.02em] text-white/90 md:text-[17px]">
                  Streamlining your end-to-end operations with precision-driven
                  logistics solutions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
