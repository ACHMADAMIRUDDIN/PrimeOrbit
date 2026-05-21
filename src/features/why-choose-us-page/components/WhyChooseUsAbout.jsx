import React from 'react';

const WhyChooseUsAbout = () => {
  return (
    <section className="w-full bg-black text-white flex flex-col items-center p-[60px_20px] md:p-[80px_120px] gap-[40px] md:gap-[46px] text-center overflow-hidden">
      
      {/* PrimeOrbit Label with Gold Lines */}
      <div className="h-[56px] flex items-center justify-center gap-[12px]">
        <div className="w-[22px] h-[4px] bg-[#ffcd51] rounded-[100px]"></div>
        <span className="font-gugi text-[28px] md:text-[40px] leading-[120%] tracking-wider">
          PrimeOrbit
        </span>
        <div className="w-[22px] h-[4px] bg-[#ffcd51] rounded-[100px]"></div>
      </div>

      {/* Large Highlighted Text */}
      <div className="w-full max-w-[1200px] text-[24px] md:text-[32px] leading-[140%] font-medium font-figtree">
        <span>At PrimeOrbit</span>
        <span className="text-[#f5f5f5]/60">, we don't just move cargo — we move </span>
        <span>global commerce</span>
        <span className="text-[#f5f5f5]/60"> with </span>
        <span>precision</span>
        <span className="text-[#f5f5f5]/60">, </span>
        <span>scale</span>
        <span className="text-[#f5f5f5]/60">, and </span>
        <span>trust</span>
        <span className="text-[#f5f5f5]/60">. Backed by decades of experience and a powerful global network, we connect </span>
        <span>continents</span>
        <span className="text-[#f5f5f5]/60">, </span>
        <span>empower businesses</span>
        <span className="text-[#f5f5f5]/60">, and </span>
        <span>deliver with unwavering reliability</span>
        <span className="text-[#f5f5f5]/60">.</span>
      </div>

    </section>
  );
};

export default WhyChooseUsAbout;
