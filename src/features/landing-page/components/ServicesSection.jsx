import React from 'react';
import image from '../../../assets/image';
import { Search, ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" data-theme="light" className="py-24 bg-white px-4 md:px-6 lg:px-[55px]">
      <div className="mx-auto w-full max-w-[1540px]">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6">
          <h2 className="text-3xl md:text-[38px] lg:text-[42px] font-medium text-[#191919] leading-[1.2] tracking-normal font-sans">
            Smarter Routes, <br /> Faster Delivery
          </h2>
          <p className="text-gray-500 max-w-sm text-sm md:text-[15px] font-normal leading-relaxed text-left md:text-left pb-1">

            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>
        {/* Asymmetrical Layout - Two Rows */}
        <div className="flex flex-col gap-8 w-full">
          
          {/* Row 1: Warehouse Card (58%) & Search/Tracking Mockup Card (42%) */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            
            {/* 1. Warehouse Card */}
            <div className="relative rounded-[32px] overflow-hidden h-[460px] w-full lg:w-[58%] shadow-sm group">
              <img 
                src={image.warehouseOperations || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"} 
                alt="Warehouse Management Solutions" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent group-hover:bg-black/30 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white text-2xl font-semibold mb-2.5 font-plusJakarta">Warehouse Management Solutions</h3>
                <p className="text-white/80 text-[14px] font-normal leading-relaxed max-w-[90%]">
                  Warehouse Management Solutions enables businesses to manage inventory, storage, and warehouse operations efficiently through a ce...
                </p>
              </div>
            </div>

            {/* 2. Search/Tracking Mockup Card */}
            <div className="bg-[#F4F5F6] rounded-[32px] p-6 h-[460px] w-full lg:w-[42%] flex flex-col justify-between shadow-sm">
              {/* Fake Search Bar */}
              <div className="bg-white rounded-full py-3 px-5 flex items-center gap-3 border border-gray-100/50 shadow-sm">
                <Search size={16} className="text-gray-400" />
                <span className="text-gray-400 text-sm font-normal">Search</span>
              </div>

              {/* White Container Inside Tracking */}
              <div className="bg-white rounded-[24px] p-6 flex-1 mt-4 flex flex-col justify-between shadow-sm overflow-hidden h-[330px]">
                
                {/* Horizontal Progress Steps */}
                <div className="flex items-center gap-2 w-full mb-6">
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                  <div className="flex-1 border-t-2 border-dotted border-gray-200"></div>
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold">✓</div>
                  <div className="flex-1 border-t-2 border-dotted border-gray-200"></div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 3</div>
                  <div className="flex-1 border-t-2 border-dotted border-gray-200"></div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider">STEP 4</div>
                </div>

                {/* Tracking ID Header */}
                <div className="flex justify-between items-end mb-4">
                  <div>
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Tracking ID</div>
                    <div className="text-[17px] font-semibold text-[#191919] font-plusJakarta">#9876QWER</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider mb-0.5">Estimate</div>
                    <div className="text-[17px] font-semibold text-[#191919] font-plusJakarta">10 days</div>
                  </div>
                </div>

                {/* Timeline with Fade Overlay */}
                <div className="relative flex-1 mt-2 overflow-hidden h-[180px]">
                  {/* Vertical Timeline */}
                  <div className="relative pl-6 border-l-2 border-dotted border-gray-200 space-y-4 h-full overflow-y-auto no-scrollbar pb-6">
                    
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
                        <p className="text-[10px] font-semibold text-gray-400">Departur Waypoint</p>
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
                    <div className="relative flex justify-between items-start opacity-70">
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
                  {/* Premium Bottom Fade Mask */}
                  <div className="absolute bottom-0 left-0 right-0 h-14 bg-gradient-to-t from-white via-white/80 to-transparent pointer-events-none z-10"></div>
                </div>

              </div>
            </div>
            
          </div>

          {/* Row 2: Yellow Card (42%) & Shipment Management Card (58%) */}
          <div className="flex flex-col lg:flex-row gap-8 w-full">
            
            {/* 3. Yellow Card */}
            <div className="bg-[#FFCD51] rounded-[32px] p-8 md:p-10 h-[460px] w-full lg:w-[42%] flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-3xl md:text-[38px] font-semibold text-[#191919] mb-5 leading-[1.1] tracking-tight font-plusJakarta">
                  Next-Gen Smart Shipping<br/>Logistics Solutions
                </h3>
                <p className="text-[#191919] text-[15px] font-semibold leading-relaxed max-w-[95%]">
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
                  <div className="w-full h-[1px] bg-[#191919] opacity-20"></div>
                </div>
                
                {/* Arrow Right */}
                <div className="w-11 h-11 rounded-full border border-[#191919] flex items-center justify-center cursor-pointer hover:bg-[#191919] hover:text-[#FFCD51] transition-colors duration-300 shrink-0">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

            {/* 4. Shipment Management Card */}
            <div className="relative rounded-[32px] overflow-hidden h-[460px] w-full lg:w-[58%] shadow-sm group">
              <img 
                src={image.containerSupervisor || "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&q=80&w=800"} 
                alt="Logistics Shipment Management" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent group-hover:bg-black/30 transition-all duration-500 flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white text-2xl font-semibold mb-2.5 font-plusJakarta">Logistics Shipment Management</h3>
                <p className="text-white/80 text-[14px] font-normal leading-relaxed max-w-[90%]">
                  Logistics Shipment Management enables businesses to monitor, organize, and control shipments efficiently, providing real-time visibil...
                </p>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;