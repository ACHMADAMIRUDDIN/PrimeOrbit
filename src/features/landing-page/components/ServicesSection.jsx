import React from 'react';
import image from '../../../assets/image';
import { Search, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" data-theme="light" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-semibold text-[#191919] leading-[1.1] tracking-tight">
            Smarter Routes, <br /> Faster Delivery
          </h2>
          <p className="text-gray-500 max-w-xs text-sm font-normal leading-relaxed md:text-right pb-1">
            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>

        {/* Grid Layout - 2x2 Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 w-full">
          
          {/* 1. Warehouse Card (Top Left) */}
          <div className="relative rounded-[32px] overflow-hidden h-[460px] shadow-sm group">
            <img 
              src={image.warehouseOperations || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"} 
              alt="Warehouse Management Solutions" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-white text-2xl font-semibold mb-3">Warehouse Management Solutions</h3>
              <p className="text-white/80 text-sm font-normal leading-relaxed max-w-[95%]">
                Warehouse Management Solutions enables businesses to manage inventory, storage, and warehouse operations efficiently through a ce...
              </p>
            </div>
          </div>

          {/* 2. Search/Tracking Mockup Card (Top Right) */}
          <div className="bg-[#F4F5F6] rounded-[32px] p-6 h-[460px] flex flex-col justify-between shadow-sm">
            {/* Fake Search Bar */}
            <div className="bg-white rounded-full py-3 px-5 flex items-center gap-3 border border-gray-100/50 shadow-sm">
              <Search size={16} className="text-gray-400" />
              <span className="text-gray-400 text-sm font-normal">Search</span>
            </div>

            {/* White Container Inside Tracking */}
            <div className="bg-white rounded-[24px] p-6 flex-1 mt-4 flex flex-col justify-between shadow-sm overflow-hidden">
              
              {/* Horizontal Progress Steps */}
              <div className="flex items-center gap-2 w-full mb-6">
                <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                <div className="flex-1 border-b-2 border-dotted border-gray-200"></div>
                <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                <div className="flex-1 border-b-2 border-dotted border-gray-200"></div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 3</div>
                <div className="flex-1 border-b-2 border-dotted border-gray-200"></div>
                <div className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 4</div>
              </div>

              {/* Tracking ID Header */}
              <div className="flex justify-between items-end mb-4">
                <div>
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Tracking ID</div>
                  <div className="text-base font-bold text-[#191919]">#9876QWER</div>
                </div>
                <div className="text-right">
                  <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Estimate</div>
                  <div className="text-base font-bold text-[#191919]">10 days</div>
                </div>
              </div>

              {/* Vertical Timeline */}
              <div className="relative pl-6 border-l-2 border-dotted border-gray-200 space-y-3.5 flex-1 overflow-hidden mt-2">
                
                {/* Item 1 */}
                <div className="relative flex justify-between items-start">
                  <div className="absolute w-2.5 h-2.5 bg-[#3B82F6] rounded-full -left-[31px] top-[5px] ring-4 ring-blue-50"></div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400">Current Location</p>
                    <p className="text-xs font-bold text-[#191919]">Indonesia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#191919]">12.00</p>
                    <p className="text-[10px] font-semibold text-gray-400">Time</p>
                  </div>
                </div>
                
                {/* Item 2 */}
                <div className="relative flex justify-between items-start">
                  <div className="absolute w-2.5 h-2.5 bg-gray-300 rounded-full -left-[31px] top-[5px]"></div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400">Departure Waypoint</p>
                    <p className="text-xs font-bold text-[#191919]">Singapore</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#191919]">08.00</p>
                    <p className="text-[10px] font-semibold text-gray-400">Time</p>
                  </div>
                </div>

                {/* Item 3 */}
                <div className="relative flex justify-between items-start">
                  <div className="absolute w-2.5 h-2.5 bg-gray-300 rounded-full -left-[31px] top-[5px]"></div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400">Arrival Waypoint</p>
                    <p className="text-xs font-bold text-[#191919]">Singapore</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#191919]">03.00</p>
                    <p className="text-[10px] font-semibold text-gray-400">Time</p>
                  </div>
                </div>

                {/* Item 4 */}
                <div className="relative flex justify-between items-start">
                  <div className="absolute w-2.5 h-2.5 bg-gray-300 rounded-full -left-[31px] top-[5px]"></div>
                  <div>
                    <p className="text-[10px] font-semibold text-gray-400">Current Location</p>
                    <p className="text-xs font-bold text-[#191919]">Indonesia</p>
                  </div>
                  <div className="text-right">
                    <p className="text-xs font-bold text-[#191919]">12.00</p>
                    <p className="text-[10px] font-semibold text-gray-400">Time</p>
                  </div>
                </div>

              </div>

            </div>
          </div>

          {/* 3. Yellow Card (Bottom Left) */}
          <div className="bg-[#FFCD51] rounded-[32px] p-8 md:p-10 h-[460px] flex flex-col justify-between shadow-sm">
            <div>
              <h3 className="text-3xl md:text-[38px] font-semibold text-[#191919] mb-6 leading-tight tracking-tight">
                Next-Gen Smart Shipping<br/>Logistics Solutions
              </h3>
              <p className="text-[#191919]/90 text-sm font-semibold leading-relaxed max-w-[95%]">
                Provides innovative logistics solutions for modern, efficient, and scalable supply chains — streamlining operations, improving shipment visibility, and enabling smarter logistics management.
              </p>
            </div>
            
            {/* Footer Arrows & Active Bar */}
            <div className="flex items-center gap-4 w-full">
              {/* Arrow Left */}
              <div className="w-11 h-11 rounded-full border border-[#191919] flex items-center justify-center cursor-pointer hover:bg-[#191919] hover:text-[#FFCD51] transition-colors duration-300 shrink-0">
                <ArrowRight size={18} className="rotate-180" />
              </div>
              
              {/* Custom Horizontal Slider Bar */}
              <div className="flex-1 flex items-center relative mx-2">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 w-[35%] h-[3px] bg-[#191919] rounded-full"></div>
                <div className="w-full h-[1px] bg-[#191919] opacity-25"></div>
              </div>
              
              {/* Arrow Right */}
              <div className="w-11 h-11 rounded-full border border-[#191919] flex items-center justify-center cursor-pointer hover:bg-[#191919] hover:text-[#FFCD51] transition-colors duration-300 shrink-0">
                <ArrowRight size={18} />
              </div>
            </div>
          </div>

          {/* 4. Shipment Management Card (Bottom Right) */}
          <div className="relative rounded-[32px] overflow-hidden h-[460px] shadow-sm group">
            <img 
              src={image.containerSupervisor || "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"} 
              alt="Logistics Shipment Management" 
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
              <h3 className="text-white text-2xl font-semibold mb-3">Logistics Shipment Management</h3>
              <p className="text-white/80 text-sm font-normal leading-relaxed max-w-[95%]">
                Logistics Shipment Management enables businesses to monitor, organize, and control shipments efficiently, providing real-time visibil...
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ServicesSection;