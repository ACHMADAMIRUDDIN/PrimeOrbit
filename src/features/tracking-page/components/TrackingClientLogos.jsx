import React from 'react';

const TrackingClientLogos = () => {
  return (
    <div className="w-full bg-[#191919] overflow-hidden flex items-center justify-center py-[40px] px-4 relative isolate">
      {/* Logos Container */}
      <div className="flex items-center gap-[40px] md:gap-[80px] overflow-x-auto no-scrollbar w-full max-w-[1200px] justify-between">
        
        <div className="flex items-start gap-[10px] shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-[48px] w-[40px] bg-white/20 rounded-md"></div>
          <div className="h-[48px] w-[97px] bg-white/20 rounded-md"></div>
        </div>

        <div className="flex items-start gap-[10px] shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-[48px] w-[36px] bg-white/20 rounded-md"></div>
          <div className="h-[48px] w-[175px] bg-white/20 rounded-md"></div>
        </div>

        <div className="flex items-start gap-[10px] shrink-0 opacity-80 hover:opacity-100 transition-opacity">
          <div className="h-[48px] w-[48px] bg-white/20 rounded-md"></div>
          <div className="h-[48px] w-[128px] bg-white/20 rounded-md"></div>
        </div>

        <div className="flex items-start gap-[10px] shrink-0 opacity-80 hover:opacity-100 transition-opacity hidden md:flex">
          <div className="h-[48px] w-[31px] bg-white/20 rounded-md"></div>
          <div className="h-[48px] w-[122px] bg-white/20 rounded-md"></div>
        </div>

        <div className="flex items-start gap-[10px] shrink-0 opacity-80 hover:opacity-100 transition-opacity hidden lg:flex">
          <div className="h-[48px] w-[40px] bg-white/20 rounded-md"></div>
          <div className="h-[48px] w-[127px] bg-white/20 rounded-md"></div>
        </div>

      </div>
    </div>
  );
};

export default TrackingClientLogos;
