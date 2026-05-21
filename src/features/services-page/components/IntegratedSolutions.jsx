import React from 'react';
import { ArrowRight } from 'lucide-react';

const IntegratedSolutions = () => {
  return (
    <section className="bg-white w-full py-[120px] flex justify-center">
      <div className="max-w-[973px] flex flex-col items-center gap-[48px] text-center font-geist">
        
        <h2 className="text-[#000] text-[40px] md:text-[76px] font-medium leading-[100%] tracking-[-0.05em]">
          Integrated <br />
          Logistics Solutions Tailored
        </h2>

        <div className="flex flex-col items-center gap-[4px] text-[18px] md:text-[24px] color-[#050505] font-sans">
          
          <div className="flex flex-col md:flex-row items-center gap-[8px]">
            <span className="tracking-[-0.02em] leading-[120%]">From global forwarding</span>
            <div className="w-[36px] h-[36px] rounded-full bg-secondary flex items-center justify-center text-white mx-2">
               <ArrowRight size={16} />
            </div>
            <span className="tracking-[-0.02em] leading-[120%]">to local distribution</span>
          </div>
          
          <span className="tracking-[-0.02em] leading-[120%]">
            we streamline your supply chain with precision and transparency.
          </span>
          
        </div>
      </div>
    </section>
  );
};

export default IntegratedSolutions;
