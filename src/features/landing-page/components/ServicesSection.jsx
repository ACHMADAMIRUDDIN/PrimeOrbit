import React from 'react';
import image from '../../../assets/image';
import { Search, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl lg:text-[56px] font-medium text-[#191919] leading-[1.1] tracking-tight">
            Smarter Routes, <br /> Faster Delivery
          </h2>
          <p className="text-gray-600 max-w-sm text-sm font-medium leading-relaxed pb-2 md:text-right md:ml-auto">
            Accelerate your operations with PrimeOrbit <br className="hidden md:block"/> advanced logistics infrastructure designed
          </p>
        </div>

        {/* Masonry Grid Layout (2 Columns) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          
          {/* Left Column */}
          <div className="flex flex-col gap-6">
            
            {/* Warehouse Card (Shorter) */}
            <div className="relative rounded-[32px] overflow-hidden group h-[340px] shadow-sm">
              <img src={image.warehouseOperations} alt="Warehouse" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white text-2xl font-medium mb-3">Warehouse Management Solutions</h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  Warehouse Management Solutions enables businesses to manage inventory, storage, and warehouse operations efficiently through a single platform.
                </p>
              </div>
            </div>

            {/* Yellow Card (Taller) */}
            <div className="bg-[#FFCD51] rounded-[32px] p-8 md:p-10 h-[460px] flex flex-col justify-between shadow-sm">
              <div>
                <h3 className="text-3xl md:text-[40px] font-medium text-[#191919] mb-6 leading-tight tracking-tight">
                  Next-Gen Smart Shipping<br/>Logistics Solutions
                </h3>
                <p className="text-[#191919] text-sm font-bold leading-relaxed max-w-[90%]">
                  Provides innovative logistics solutions for modern, efficient, and scalable supply chains — streamlining operations, improving shipment visibility, and enabling smarter logistics management.
                </p>
              </div>
              
              {/* Footer Arrows */}
              <div className="flex items-center gap-4 mt-auto">
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#191919] flex items-center justify-center cursor-pointer hover:bg-[#191919] hover:text-[#FFCD51] transition-colors">
                  <ArrowRight size={18} className="rotate-180" />
                </div>
                <div className="flex-1 h-[1.5px] bg-[#191919] opacity-30"></div>
                <div className="w-10 h-10 rounded-full border-[1.5px] border-[#191919] flex items-center justify-center cursor-pointer hover:bg-[#191919] hover:text-[#FFCD51] transition-colors">
                  <ArrowRight size={18} />
                </div>
              </div>
            </div>

          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-6">
            
            {/* Search/Tracking Mockup Card (Taller) */}
            <div className="bg-[#F8F9FA] rounded-[32px] p-8 h-[460px] flex flex-col shadow-sm">
              <div className="bg-white rounded-[16px] shadow-sm p-4 mb-6 flex items-center gap-3">
                <Search size={18} className="text-gray-400" />
                <span className="text-gray-400 text-sm font-medium">Search</span>
              </div>

              <div className="bg-white rounded-[24px] shadow-sm p-8 flex-1 flex flex-col justify-between">
                
                {/* Horizontal Progress Steps */}
                <div className="flex items-center gap-2 mb-8 w-full">
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">✓</div>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300"></div>
                  <div className="w-5 h-5 rounded-full bg-[#3B82F6] flex items-center justify-center text-white text-[10px] font-bold flex-shrink-0">✓</div>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300"></div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider flex-shrink-0">STEP 3</div>
                  <div className="flex-1 border-b-2 border-dotted border-gray-300"></div>
                  <div className="text-[10px] font-bold text-gray-400 tracking-wider flex-shrink-0">STEP 4</div>
                </div>

                {/* Tracking ID Header */}
                <div className="flex justify-between items-end mb-8">
                  <div>
                    <div className="text-[11px] font-medium text-gray-400 mb-1">Tracking ID</div>
                    <div className="text-lg font-bold text-[#191919]">#9876QWER</div>
                  </div>
                  <div className="text-right">
                    <div className="text-[11px] font-medium text-gray-400 mb-1">Estimate</div>
                    <div className="text-lg font-bold text-[#191919]">10 days</div>
                  </div>
                </div>

                {/* Vertical Timeline */}
                <div className="relative pl-6 border-l-2 border-dashed border-gray-200 space-y-5 flex-1">
                  
                  {/* Item 1 */}
                  <div className="relative flex justify-between items-start">
                    <div className="absolute w-[10px] h-[10px] bg-[#3B82F6] rounded-full -left-[30px] top-[4px]"></div>
                    <div>
                      <p className="text-[10px] font-medium text-gray-400 mb-0.5">Current Location</p>
                      <p className="text-[13px] font-semibold text-[#191919]">Indonesia</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-semibold text-[#191919]">12.00</p>
                      <p className="text-[10px] font-medium text-gray-400 mt-0.5">Time</p>
                    </div>
                  </div>
                  
                  {/* Item 2 */}
                  <div className="relative flex justify-between items-start">
                    <div className="absolute w-[10px] h-[10px] bg-gray-300 rounded-full -left-[30px] top-[4px]"></div>
                    <div>
                      <p className="text-[10px] font-medium text-gray-400 mb-0.5">Departure Waypoint</p>
                      <p className="text-[13px] font-semibold text-[#191919]">Singapore</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-semibold text-[#191919]">08.00</p>
                      <p className="text-[10px] font-medium text-gray-400 mt-0.5">Time</p>
                    </div>
                  </div>

                  {/* Item 3 */}
                  <div className="relative flex justify-between items-start">
                    <div className="absolute w-[10px] h-[10px] bg-gray-300 rounded-full -left-[30px] top-[4px]"></div>
                    <div>
                      <p className="text-[10px] font-medium text-gray-400 mb-0.5">Arrival Waypoint</p>
                      <p className="text-[13px] font-semibold text-[#191919]">Singapore</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-semibold text-[#191919]">03.00</p>
                      <p className="text-[10px] font-medium text-gray-400 mt-0.5">Time</p>
                    </div>
                  </div>

                  {/* Item 4 */}
                  <div className="relative flex justify-between items-start">
                    <div className="absolute w-[10px] h-[10px] bg-gray-300 rounded-full -left-[30px] top-[4px]"></div>
                    <div>
                      <p className="text-[10px] font-medium text-gray-400 mb-0.5">Current Location</p>
                      <p className="text-[13px] font-semibold text-[#191919]">Indonesia</p>
                    </div>
                    <div className="text-right">
                      <p className="text-[13px] font-semibold text-[#191919]">12.00</p>
                      <p className="text-[10px] font-medium text-gray-400 mt-0.5">Time</p>
                    </div>
                  </div>

                </div>

              </div>
            </div>

            {/* Shipment Management Card (Shorter) */}
            <div className="relative rounded-[32px] overflow-hidden group h-[340px] shadow-sm">
              <img src={image.containerSupervisor} alt="Logistics" className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent flex flex-col justify-end p-8 md:p-10">
                <h3 className="text-white text-2xl font-medium mb-3">Logistics Shipment Management</h3>
                <p className="text-white/70 text-sm font-medium leading-relaxed">
                  Logistics Shipment Management enables businesses to monitor, organize, and control shipments efficiently, providing real-time visibility.
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
