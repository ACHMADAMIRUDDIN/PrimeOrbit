import React from 'react';
import { ArrowRight, QrCode, FileText, BarChart2, Share2 } from 'lucide-react';

const GlobalNetworkShowcase = () => {
  return (
    <section className="w-full bg-[#f5f5f5] flex flex-col p-[40px] md:p-[80px_60px] gap-[40px] md:gap-[64px] font-sans">
      
      {/* Title */}
      <h2 className="w-full max-w-[1320px] mx-auto text-[32px] md:text-[50px] leading-[120%] font-medium text-[#191919]">
        We operate multiple branch offices to support smooth and efficient business operations for our partners.
      </h2>

      {/* Cards Layout */}
      <div className="w-full max-w-[1320px] mx-auto flex flex-col xl:flex-row items-stretch justify-between gap-[20px] text-white font-inter">
        
        {/* Left Big Card (Real-Time Tracking) */}
        <div className="w-full xl:w-[424px] rounded-[24px] bg-[#191919] flex flex-col justify-between p-[24px] md:p-[40px] gap-[60px] md:gap-[206px]">
          
          <div className="flex flex-col gap-[40px] md:gap-[60px]">
            <h3 className="text-[32px] md:text-[40px] leading-[116%] font-semibold">Real-Time Tracking</h3>
            
            {/* Tracking Route */}
            <div className="flex items-center gap-[10px] md:gap-[26px] font-sans text-[#a5a5a5] text-[12px] md:text-[14px]">
              <div className="flex flex-col gap-[8px]">
                <span className="leading-[120%]">Current Location</span>
                <span className="font-semibold text-white leading-[120%]">Indonesia</span>
              </div>
              
              <div className="flex items-center">
                <div className="w-[4px] h-[4px] rounded-full border border-white bg-white"></div>
                <div className="w-[10px] md:w-[20px] border-t border-dashed border-white/50"></div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className="leading-[120%]">Departure Waypoint</span>
                <span className="font-semibold text-white leading-[120%]">Australia</span>
              </div>

              <div className="flex items-center">
                <div className="w-[10px] md:w-[20px] border-t border-dashed border-white/50"></div>
                <div className="w-[4px] h-[4px] rounded-full border border-white bg-white"></div>
              </div>

              <div className="flex flex-col gap-[8px]">
                <span className="leading-[120%]">Arrival Waypoint</span>
                <span className="font-semibold text-white leading-[120%]">Singapore</span>
              </div>
            </div>
          </div>

          {/* Learn More Button */}
          <button className="flex items-center justify-between text-[18px] md:text-[20px] font-medium leading-[140%] font-sans hover:text-gray-300 transition-colors">
            <span>Learn more</span>
            <ArrowRight size={24} />
          </button>
        </div>

        {/* Right Cards Grid */}
        <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-[24px] text-[#191919] font-sans">
          
          {/* Card 1: Smart Logistics */}
          <div className="rounded-[24px] bg-white p-[24px_20px] flex flex-col gap-[18px] hover:shadow-lg transition-shadow">
            <Share2 size={40} className="text-[#2a2a7c]" />
            <h4 className="text-[24px] md:text-[28px] leading-[120%] font-medium">Smart Logistics</h4>
            <p className="leading-[140%] text-[#a5a5a5] text-[16px] md:text-[18px] line-clamp-2">
              Manage shipments, routes, and operational data efficiently through an integrate
            </p>
            <button className="flex items-center justify-between text-[#2a2a7c] font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Card 2: QR Scan System */}
          <div className="rounded-[24px] bg-white p-[24px_20px] flex flex-col gap-[18px] hover:shadow-lg transition-shadow">
            <QrCode size={40} className="text-[#2a2a7c]" />
            <h4 className="text-[24px] md:text-[28px] leading-[120%] font-medium">QR Scan System</h4>
            <p className="leading-[140%] text-[#a5a5a5] text-[16px] md:text-[18px] line-clamp-2">
              Simplify shipment verification and access through QR code technology, allowing overall
            </p>
            <button className="flex items-center justify-between text-[#2a2a7c] font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Card 3: AI Documentation */}
          <div className="rounded-[24px] bg-white p-[24px_20px] flex flex-col gap-[18px] hover:shadow-lg transition-shadow">
            <FileText size={40} className="text-[#2a2a7c]" />
            <h4 className="text-[24px] md:text-[28px] leading-[120%] font-medium">AI Documentation</h4>
            <p className="leading-[140%] text-[#a5a5a5] text-[16px] md:text-[18px] line-clamp-2">
              Simplify logistics documentation with automated digital records, reducing, and documentation
            </p>
            <button className="flex items-center justify-between text-[#2a2a7c] font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Card 4: Smart Analytics */}
          <div className="rounded-[24px] bg-white p-[24px_20px] flex flex-col gap-[18px] hover:shadow-lg transition-shadow">
            <BarChart2 size={40} className="text-[#2a2a7c]" />
            <h4 className="text-[24px] md:text-[28px] leading-[120%] font-medium">Smart Analytics</h4>
            <p className="leading-[140%] text-[#a5a5a5] text-[16px] md:text-[18px] line-clamp-2">
              Gain valuable insights through logistics analytics that help businesses monitoring
            </p>
            <button className="flex items-center justify-between text-[#2a2a7c] font-medium mt-auto">
              <span>Learn more</span>
              <ArrowRight size={20} />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default GlobalNetworkShowcase;
