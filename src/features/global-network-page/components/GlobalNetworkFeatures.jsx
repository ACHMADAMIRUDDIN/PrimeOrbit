import React from "react";
import image from "../../../assets/image";
import { Zap, ArrowRight } from "lucide-react";

const GlobalNetworkFeatures = () => {
  return (
    <section
      data-theme="dark"
      className="w-full bg-[#1b1b1b] flex flex-col lg:flex-row items-center justify-between p-[40px] md:p-[60px_80px_60px_100px] gap-[40px] lg:gap-[30px] text-white font-sans"
    >
      <div className="w-full lg:w-[540px] h-[240px] md:h-[300px] rounded-[24px] bg-gray-800 relative overflow-hidden flex flex-col justify-end p-[20px] md:p-[24px_24px] gap-[12px]">
        <img
          src={image.portTerminal}
          alt="Optimized routes"
          className="absolute top-0 left-0 w-full h-full object-cover opacity-60 z-0"
        />
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>

        <p className="w-full md:w-[380px] relative z-10 leading-[130%] text-[14px] md:text-[16px]">
          Optimized routes and strong carrier partnerships drive reliable
          on-time global delivery.
        </p>

        <div className="w-full md:w-[480px] h-[46px] rounded-[10px] bg-white text-[#1e1e1e] flex items-center justify-between p-[8px_16px_8px_12px] z-10 font-poppins">
          <div className="flex items-center gap-[10px]">
            <img
              src={image.astruck}
              alt="Astruck Icon"
              className="w-[24px] h-[22px] object-contain"
            />
            <span className="leading-[130%] font-light text-[13px] md:text-[14px]">
              Fast & Reliable Delivery
            </span>
          </div>
          <ArrowRight size={18} className="text-[#1e1e1e]" />
        </div>
      </div>

      <div className="w-full lg:w-[500px] flex flex-col items-start gap-[30px] md:gap-[50px]">
        <div className="-mt-[20px] md:-mt-[40px] flex flex-col gap-[20px]">
          <h2 className="text-[32px] font-medium leading-[120%] tracking-normal text-white font-sans">
            Get Accurate Shipping Costs <br /> In Seconds
          </h2>
          <p className="text-[20px] font-normal leading-[140%] tracking-normal opacity-60 max-w-[480px] font-sans">
            Quickly calculate your shipping fee by entering the origin,
            destination, shipment type, weight,
          </p>
        </div>

        <div className="flex items-center gap-[36px] md:gap-[24px] font-poppins mt-[16px] md:mt-[24px]">
          <div className="flex flex-col gap-[8px] transform translate-y-[10px]">
            <span className="text-[22px] md:text-[28px] font-normal leading-[130%] text-white">
              120+
            </span>
            <span className="text-[13px] md:text-[15px] leading-[120%] font-sans opacity-80">
              Countries Covered
            </span>
          </div>

          <div className="flex flex-col gap-[8px] transform translate-y-[10px]">
            <span className="text-[22px] md:text-[28px] font-normal leading-[130%] text-white">
              24/7
            </span>
            <span className="text-[13px] md:text-[15px] leading-[120%] font-sans opacity-80">
              Global Monitoring
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkFeatures;
