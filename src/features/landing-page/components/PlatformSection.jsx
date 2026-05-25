import React from 'react';
import { Truck, FileText, Clock } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section data-theme="light" className="py-24 bg-white px-4 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-black rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch justify-between relative overflow-hidden">
          
          {/* Left Content */}
          <div className="lg:w-[56%] flex flex-col justify-between relative z-10 py-1">
            {/* Top Title Group */}
            <div className="mb-20 md:mb-28 lg:mb-32">
              <h2 className="text-[28px] md:text-[34px] lg:text-[40px] font-medium text-white leading-[1.25] tracking-tight font-plusJakarta">
                Movein is a smart logistics <br className="hidden md:block"/>
                platform built for seamless, <br className="hidden md:block"/>
                <span className="text-primary">
                  efficient, and reliable shipment <br className="hidden md:block"/>
                  management operations.
                </span>
              </h2>
            </div>
            
            {/* Bottom Group (Tracking + Button) */}
            <div className="w-full max-w-[440px] mt-auto">
              
              {/* Waypoint Status Tracker */}
              <div className="flex items-center justify-between mb-8 text-white w-full">
                {/* Location 1 */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] text-white/50 font-medium tracking-wide mb-1.5 uppercase">Current Location</span>
                  <span className="text-[16px] font-semibold text-white font-plusJakarta">Indonesia</span>
                </div>

                {/* Dot Divider 1 */}
                <div className="w-1.5 h-1.5 rounded-full bg-white/80 self-end mb-[8px] mx-1"></div>

                {/* Location 2 */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] text-white/50 font-medium tracking-wide mb-1.5 uppercase">Departure Waypoint</span>
                  <span className="text-[16px] font-semibold text-white font-plusJakarta">Australia</span>
                </div>

                {/* Dot Divider 2 */}
                <div className="w-1.5 h-1.5 rounded-full bg-white/80 self-end mb-[8px] mx-1"></div>

                {/* Location 3 */}
                <div className="flex flex-col items-start text-left">
                  <span className="text-[11px] text-white/50 font-medium tracking-wide mb-1.5 uppercase">Arrival Waypoint</span>
                  <span className="text-[16px] font-semibold text-white font-plusJakarta">Singapore</span>
                </div>
              </div>
              
              {/* Action Button - Fully Rounded */}
              <button className="w-full bg-primary hover:bg-primary/95 text-dark font-semibold text-[15px] py-4 rounded-full transition-colors">
                Start Shipping
              </button>
            </div>
          </div>
          
          {/* Right Content - Features Cards */}
          <div className="lg:w-[38%] flex flex-col gap-4 relative z-10 w-full max-w-[360px] lg:max-w-none mx-auto lg:mx-0 justify-center">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-7 md:p-8 flex flex-col items-start w-full transition-all duration-300 hover:scale-[1.01]">
              <Truck size={24} className="text-dark mb-4" strokeWidth={1.5} />
              <h3 className="text-[18px] font-semibold text-dark mb-2 tracking-tight font-plusJakarta">Smart Fleet Management</h3>
              <p className="text-dark/50 text-[14px] font-normal leading-relaxed">
                Optimize routes in real-time and monitor fuel consumption to reduce operational.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-primary rounded-[24px] p-7 md:p-8 flex flex-col items-start w-full relative z-20 hover:scale-[1.01] transition-all duration-300">
              <FileText size={24} className="text-dark mb-4" strokeWidth={1.5} />
              <h3 className="text-[18px] font-semibold text-dark mb-2 tracking-tight font-plusJakarta">Automated Compliance</h3>
              <p className="text-dark font-medium text-[14px] leading-relaxed">
                Streamline customs documentation and digital bills of lading with AI-powered veri...
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-7 md:p-8 flex flex-col items-start w-full transition-all duration-300 hover:scale-[1.01]">
              <Clock size={24} className="text-dark mb-4" strokeWidth={1.5} />
              <h3 className="text-[18px] font-semibold text-dark mb-2 tracking-tight font-plusJakarta">Real-Time Visibility</h3>
              <p className="text-dark/50 text-[14px] font-normal leading-relaxed">
                Gain 24/7 end-to-end tracking of your shipments with high-precision IoT sensor...
              </p>
            </div>
            
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;