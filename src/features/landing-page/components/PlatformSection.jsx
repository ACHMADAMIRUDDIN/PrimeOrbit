import React from 'react';
import { Truck, FileText, Clock } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#050505] rounded-[32px] p-8 md:p-12 lg:p-16 flex flex-col lg:flex-row gap-12 lg:gap-8 items-stretch justify-between relative overflow-hidden">
          
          {/* Left Content */}
          <div className="lg:w-[60%] flex flex-col justify-between relative z-10 py-1">
            {/* Top Title Group */}
            <div className="mb-20 md:mb-28 lg:mb-32">
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.35] tracking-tight">
                Movein is a smart logistics <br className="hidden md:block"/>
                platform built for seamless, <br className="hidden md:block"/>
                <span className="text-[#FFCD51]">
                  efficient, and reliable shipment <br className="hidden md:block"/>
                  management operations.
                </span>
              </h2>
            </div>
            
            {/* Bottom Group (Tracking + Button) */}
            <div className="w-full max-w-[440px] mt-auto">
              
              {/* Waypoint Status Tracker */}
              <div className="flex items-center justify-between mb-8 text-white">
                {/* Location 1 */}
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 font-medium mb-1">Current Location</span>
                  <span className="text-[14px] font-semibold">Indonesia</span>
                </div>

                {/* Dot Divider 1 */}
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80 mx-2 self-end mb-1.5"></div>

                {/* Location 2 */}
                <div className="flex flex-col items-center text-center">
                  <span className="text-[10px] text-white/50 font-medium mb-1">Departure Waypoint</span>
                  <span className="text-[14px] font-semibold">Australia</span>
                </div>

                {/* Dot Divider 2 */}
                <div className="w-1.5 h-1.5 rounded-full bg-white opacity-80 mx-2 self-end mb-1.5"></div>

                {/* Location 3 */}
                <div className="flex flex-col items-end text-right">
                  <span className="text-[10px] text-white/50 font-medium mb-1">Arrival Waypoint</span>
                  <span className="text-[14px] font-semibold">Singapore</span>
                </div>
              </div>
              
              {/* Action Button - Fully Rounded */}
              <button className="w-full bg-[#FFCD51] hover:bg-[#F2C041] text-[#191919] font-semibold text-[14px] py-4 rounded-full transition-colors">
                Start Shipping
              </button>
            </div>
          </div>
          
          {/* Right Content - Features Cards */}
          <div className="lg:w-[32%] flex flex-col gap-3 relative z-10 w-full max-w-[310px] lg:max-w-none mx-auto lg:mx-0 justify-center">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[20px] py-6 px-[18px] w-full shadow-sm">
              <Truck size={18} className="text-[#191919] mb-2.5" strokeWidth={1.5} />
              <h3 className="text-[15px] font-bold text-[#191919] mb-1 tracking-tight">Smart Fleet Management</h3>
              <p className="text-[#191919]/40 text-[11.5px] font-medium leading-relaxed">
                Optimize routes in real-time and monitor fuel consumption to reduce operational.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-[#FFCD51] rounded-[20px] py-6 px-[18px] w-full shadow-md relative z-20">
              <FileText size={18} className="text-[#191919] mb-2.5" strokeWidth={1.5} />
              <h3 className="text-[15px] font-bold text-[#191919] mb-1 tracking-tight">Automated Compliance</h3>
              <p className="text-[#191919]/70 text-[11.5px] font-medium leading-relaxed">
                Streamline customs documentation and digital bills of lading with AI-powered veri...
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-[20px] py-6 px-[18px] w-full shadow-sm">
              <Clock size={18} className="text-[#191919] mb-2.5" strokeWidth={1.5} />
              <h3 className="text-[15px] font-bold text-[#191919] mb-1 tracking-tight">Real-Time Visibility</h3>
              <p className="text-[#191919]/40 text-[11.5px] font-medium leading-relaxed">
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