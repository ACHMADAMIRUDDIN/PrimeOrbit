import React from 'react';
import { Truck, FileText, Clock } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section className="py-24 bg-white px-4 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="bg-[#050505] rounded-[32px] p-8 md:p-12 lg:p-14 flex flex-col lg:flex-row gap-12 lg:gap-8 relative overflow-hidden">
          
          {/* Left Content */}
          <div className="lg:w-[50%] flex flex-col justify-between relative z-10">
            <div>
              <h2 className="text-[24px] md:text-[28px] lg:text-[32px] font-medium text-white leading-[1.4] tracking-normal mb-8">
                Movein is a smart logistics <br className="hidden md:block"/>
                platform built for seamless, <br className="hidden md:block"/>
                <span className="text-[#FFCD51]">efficient, and reliable shipment <br className="hidden md:block"/>
                management operations.</span>
              </h2>
            </div>
            
            <div className="w-full max-w-[400px] mt-12 lg:mt-0">
              <div className="flex justify-between items-center mb-6 px-1">
                <div className="flex flex-col">
                  <span className="text-[10px] text-white/50 mb-1.5 font-medium">Current Location</span>
                  <span className="text-white text-[13px] md:text-[14px] font-medium">Indonesia</span>
                </div>
                
                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                
                <div className="flex flex-col items-start md:items-center">
                  <span className="text-[10px] text-white/50 mb-1.5 font-medium">Departure Waypoint</span>
                  <span className="text-white text-[13px] md:text-[14px] font-medium">Australia</span>
                </div>

                <div className="flex items-center">
                  <div className="w-1 h-1 rounded-full bg-white"></div>
                </div>
                
                <div className="flex flex-col items-end">
                  <span className="text-[10px] text-white/50 mb-1.5 font-medium">Arrival Waypoint</span>
                  <span className="text-white text-[13px] md:text-[14px] font-medium">Singapore</span>
                </div>
              </div>
              
              <button className="w-full bg-[#FFCD51] hover:bg-[#F2C041] text-[#191919] font-medium text-[14px] py-3.5 rounded-full transition-colors">
                Start Shipping
              </button>
            </div>
          </div>
          
          {/* Right Content - Features Cards */}
          <div className="lg:w-[50%] flex flex-col gap-4 relative z-10 w-full max-w-[460px] lg:max-w-none mx-auto lg:mx-0">
            
            {/* Card 1 */}
            <div className="bg-white rounded-[24px] p-6 ml-auto w-full lg:w-[88%]">
              <Truck size={24} className="text-[#191919] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-medium text-[#191919] mb-2">Smart Fleet Management</h3>
              <p className="text-[#191919]/40 text-[13px] font-medium leading-relaxed">
                Optimize routes in real-time and monitor fuel consumption to reduce operational.
              </p>
            </div>
            
            {/* Card 2 (Offset to the left) */}
            <div className="bg-[#FFCD51] rounded-[24px] p-6 w-full relative z-20">
              <FileText size={24} className="text-[#191919] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-medium text-[#191919] mb-2">Automated Compliance</h3>
              <p className="text-[#191919]/70 text-[13px] font-medium leading-relaxed">
                Streamline customs documentation and digital bills of lading with AI-powered veri...
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-[24px] p-6 ml-auto w-full lg:w-[88%]">
              <Clock size={24} className="text-[#191919] mb-4" strokeWidth={1.5} />
              <h3 className="text-[17px] font-medium text-[#191919] mb-2">Real-Time Visibility</h3>
              <p className="text-[#191919]/40 text-[13px] font-medium leading-relaxed">
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
