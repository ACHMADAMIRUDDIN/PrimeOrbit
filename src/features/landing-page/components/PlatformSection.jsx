import React from 'react';
import { Truck, ShieldCheck, Clock } from 'lucide-react';

const PlatformSection = () => {
  return (
    <section className="py-20 bg-white px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="bg-[#0A0A0A] rounded-[2.5rem] p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:gap-24 relative overflow-hidden">
          
          {/* Left Content */}
          <div className="lg:w-1/2 flex flex-col justify-between relative z-10">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white leading-tight mb-4">
                Movein is a smart logistics <br className="hidden md:block"/>
                platform built for seamless, <br className="hidden md:block"/>
                <span className="text-primary">efficient, and reliable shipment <br className="hidden md:block"/>
                management operations.</span>
              </h2>
            </div>
            
            <div className="mt-16 bg-[#1A1A1A] p-6 rounded-2xl border border-gray-800 flex justify-between items-center w-full max-w-md">
              <div>
                <p className="text-gray-500 text-xs mb-1">Current Location</p>
                <p className="text-white text-sm font-semibold">Indonesia</p>
              </div>
              <div className="flex flex-col items-center">
                <div className="flex items-center w-24">
                  <div className="w-1.5 h-1.5 rounded-full bg-primary"></div>
                  <div className="flex-1 border-t border-dashed border-gray-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                  <div className="flex-1 border-t border-dashed border-gray-600"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-gray-500"></div>
                </div>
                <p className="text-gray-500 text-[10px] mt-2 whitespace-nowrap">Document Waypoint</p>
                <p className="text-white text-xs font-semibold">Australia</p>
              </div>
              <div className="text-right">
                <p className="text-gray-500 text-xs mb-1">Arrival Waypoint</p>
                <p className="text-white text-sm font-semibold">Singapore</p>
              </div>
            </div>
            
            <button className="mt-8 bg-primary hover:bg-yellow-500 text-secondary font-semibold px-8 py-4 rounded-full transition-colors w-fit w-full sm:w-auto text-center">
              Start Shipping
            </button>
          </div>
          
          {/* Right Content - Features Cards */}
          <div className="lg:w-1/2 space-y-4 relative z-10">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 transition-transform hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <Truck size={20} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Smart Fleet Management</h3>
              <p className="text-gray-500 text-sm">
                Optimize routes in real-time and monitor fuel consumption to reduce operational costs.
              </p>
            </div>
            
            {/* Card 2 */}
            <div className="bg-primary rounded-3xl p-6 md:p-8 transition-transform hover:-translate-y-1 duration-300 shadow-xl shadow-primary/20">
              <div className="w-10 h-10 border border-secondary/20 rounded-lg flex items-center justify-center mb-4 bg-white/10">
                <ShieldCheck size={20} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Automated Compliance</h3>
              <p className="text-secondary/80 text-sm font-medium">
                Streamline customs documentation and digital bills of lading with AI-powered verification.
              </p>
            </div>
            
            {/* Card 3 */}
            <div className="bg-white rounded-3xl p-6 md:p-8 transition-transform hover:-translate-y-1 duration-300">
              <div className="w-10 h-10 border border-gray-200 rounded-lg flex items-center justify-center mb-4">
                <Clock size={20} className="text-secondary" />
              </div>
              <h3 className="text-xl font-bold text-secondary mb-2">Real-Time Visibility</h3>
              <p className="text-gray-500 text-sm">
                Gain 24/7 end-to-end tracking of your shipments with high-precision IoT sensors.
              </p>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
};

export default PlatformSection;
