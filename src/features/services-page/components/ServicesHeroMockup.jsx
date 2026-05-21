import React from 'react';
import image from '../../../assets/image';
import { Search, MapPin, Grid, Plus, MoreVertical, ChevronDown } from 'lucide-react';

const ServicesHeroMockup = () => {
  return (
    <section className="w-full flex flex-col items-center relative pb-[100px]">
      {/* Gray Background */}
      <div className="absolute top-0 w-full h-[715px] bg-[#f5f5f5] z-0"></div>

      {/* Background Graphic Element */}
      <img src={image.truckBadge} alt="" className="absolute top-[206px] right-[-5%] md:right-[5%] w-[271.5px] h-[271.5px] object-contain opacity-20 z-0" />

      {/* The Dashboard Mockup Container */}
      <div className="mt-[180px] w-full max-w-[1134px] h-[853px] bg-[#f5f5f5] rounded-[22px] shadow-[0_0_23px_rgba(0,0,0,0.08)] flex overflow-hidden z-10 border border-gray-200 relative">
        
        {/* Sidebar Mockup */}
        <div className="w-[225px] h-full bg-white flex flex-col items-start p-[33px_25px_40px_24px] gap-[44px]">
          <div className="flex items-center gap-[9px]">
            <div className="w-[25px] h-[28px] bg-primary rounded-md flex items-center justify-center font-bold text-secondary text-sm italic">P</div>
            <div className="font-semibold text-xl text-[#2d2d2d]">PrimeOrbit</div>
          </div>
          
          <div className="flex flex-col gap-[9px] w-full text-[#9c9c9d] text-[15px]">
            <div className="w-full bg-[#2a2a7c] text-white rounded-[19px] p-[11px_13px] flex items-center gap-[13px] shadow-inner">
              <Grid size={19} />
              <span className="font-medium">Dashboard</span>
            </div>
            <div className="w-full flex items-center gap-[9px] p-[11px_13px]">
              <MapPin size={19} className="opacity-40" />
              <span>Tracking</span>
            </div>
            <div className="w-full flex items-center gap-[9px] p-[11px_13px]">
              <MapPin size={19} className="opacity-40" />
              <span>Inventory</span>
            </div>
            <div className="w-full flex items-center gap-[9px] p-[11px_13px]">
              <MapPin size={19} className="opacity-40" />
              <span>Fleet & Driver</span>
            </div>
            <div className="w-full flex items-center gap-[9px] p-[11px_13px]">
              <MapPin size={19} className="opacity-40" />
              <span>Analytics</span>
            </div>
            <div className="w-full flex items-center gap-[9px] p-[11px_13px]">
              <MapPin size={19} className="opacity-40" />
              <span>Order</span>
            </div>
          </div>
        </div>

        {/* Content Mockup */}
        <div className="flex-1 flex flex-col font-inter bg-[#f5f5f5]">
          
          {/* Header */}
          <div className="h-[76px] w-full bg-white/60 backdrop-blur-md border-b border-white flex items-center justify-between px-[27px]">
            <div className="w-[439px] h-[38px] rounded-[78px] bg-[#f5f5f5] flex items-center px-[19px] gap-[6px] text-[11px] text-[#64748b]">
              <Search size={19} />
              <span>Search data, participants, or tasks...</span>
            </div>
            
            <div className="flex items-center gap-[11px]">
              <div className="h-[38px] rounded-[36px] bg-[#f5f5f5] border border-[#eceef1] px-[8px] flex items-center gap-[8px]">
                <div className="w-[26px] h-[26px] rounded-full bg-[#08050d] text-white flex items-center justify-center">
                   <div className="w-3 h-3 bg-white/20 rounded-sm"></div>
                </div>
                <span className="font-medium text-[10px] text-[#000] font-urbanist">10 March 2024</span>
                <ChevronDown size={10} />
              </div>
              <div className="w-[38px] h-[38px] rounded-full bg-[#f5f5f5] flex items-center justify-center">
                <Plus size={16} />
              </div>
              <div className="w-[38px] h-[38px] rounded-full bg-gray-300"></div>
            </div>
          </div>

          {/* Body Content */}
          <div className="p-[27px] flex flex-col gap-[19px]">
            
            {/* Title Area */}
            <div className="flex justify-between items-center w-full">
              <div className="flex flex-col gap-[5px] font-workSans">
                <span className="text-[13px] text-[#989dab]">Here's analytic details for your business here</span>
                <h1 className="text-[25px] font-medium text-[#17171a]">Good Morning, Sabrina!</h1>
              </div>
              <div className="flex gap-[9px]">
                 <div className="w-[42px] h-[42px] rounded-full bg-white border border-[#eceef1] flex items-center justify-center text-[#989dab]">
                   <Plus size={16} />
                 </div>
                 <div className="h-[42px] rounded-full bg-[#2a2a7c] text-white flex items-center px-[14px] gap-[8px] text-[12px]">
                   <Plus size={16} />
                   <span>Add New Shipping</span>
                 </div>
              </div>
            </div>

            {/* 3 Metric Cards */}
            <div className="flex gap-[16px] w-full font-plusJakarta">
              
              <div className="flex-1 bg-white rounded-[19px] p-[16px] flex flex-col gap-[6px]">
                <div className="flex justify-between items-center text-[#4a5565] font-medium text-[11px]">
                  <span>Total Shipments</span>
                  <div className="w-[28px] h-[28px] rounded-lg bg-[#f3f4f6] flex items-center justify-center">
                    <Search size={14} />
                  </div>
                </div>
                <div className="text-[24px] font-medium text-[#1e2939] leading-tight">1,256</div>
                <div className="flex justify-between items-center text-[8px]">
                  <div className="bg-[#eff6ff] text-[#00bc7d] rounded-full px-2 py-1 flex items-center gap-1">
                     <span className="font-medium">+12%</span>
                  </div>
                  <span className="text-[#4a5565] text-[9px]">from last month</span>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-[19px] p-[16px] flex flex-col gap-[6px]">
                <div className="flex justify-between items-center text-[#4a5565] font-medium text-[11px]">
                  <span>In Transit</span>
                  <div className="w-[28px] h-[28px] rounded-lg bg-[#fff7ed] flex items-center justify-center">
                    <Search size={14} />
                  </div>
                </div>
                <div className="text-[24px] font-medium text-[#1e2939] leading-tight">432</div>
                <div className="flex justify-between items-center text-[8px]">
                  <div className="bg-[#ffdfe3] text-[#fb2c36] rounded-full px-2 py-1 flex items-center gap-1">
                     <span className="font-medium">-5%</span>
                  </div>
                  <span className="text-[#4a5565] text-[9px]">from last month</span>
                </div>
              </div>

              <div className="flex-1 bg-white rounded-[19px] p-[16px] flex flex-col gap-[6px]">
                <div className="flex justify-between items-center text-[#4a5565] font-medium text-[11px]">
                  <span>Delivered</span>
                  <div className="w-[28px] h-[28px] rounded-lg bg-[#fbfbfb] flex items-center justify-center">
                    <Plus size={14} />
                  </div>
                </div>
                <div className="text-[24px] font-medium text-[#1e2939] leading-tight">763</div>
                <div className="flex justify-between items-center text-[8px]">
                  <div className="bg-[#eff6ff] text-[#00bc7d] rounded-full px-2 py-1 flex items-center gap-1">
                     <span className="font-medium">+8%</span>
                  </div>
                  <span className="text-[#4a5565] text-[9px]">from last month</span>
                </div>
              </div>

            </div>

            {/* Charts Area */}
            <div className="flex gap-[16px] h-[270px] w-full">
              
              <div className="w-[453px] bg-white rounded-[19px] border border-[#eceef1] relative p-[16px]">
                 <div className="flex justify-between items-center w-full mb-4">
                    <div className="flex items-center gap-2">
                       <div className="w-[24px] h-[24px] bg-[#f0f2ff] rounded-[19px]"></div>
                       <span className="font-semibold text-[13px]">Shipment Analytics</span>
                    </div>
                    <div className="flex gap-2">
                       <div className="border border-[#e6e7ea] rounded-[19px] px-3 py-1 text-[8px] flex items-center gap-1">
                         <span>January 2024 - June 2024</span>
                         <ChevronDown size={8} />
                       </div>
                       <MoreVertical size={16} className="text-gray-400" />
                    </div>
                 </div>
                 {/* Fake Chart Graphic */}
                 <div className="w-full h-[180px] bg-gray-50 flex items-end justify-between px-4 pb-6 pt-4 rounded-xl border border-gray-100">
                    <div className="w-10 bg-indigo-200 h-[60%] rounded-t-md"></div>
                    <div className="w-10 bg-indigo-400 h-[40%] rounded-t-md"></div>
                    <div className="w-10 bg-indigo-600 h-[80%] rounded-t-md"></div>
                    <div className="w-10 bg-indigo-300 h-[50%] rounded-t-md"></div>
                    <div className="w-10 bg-indigo-500 h-[90%] rounded-t-md"></div>
                    <div className="w-10 bg-indigo-200 h-[30%] rounded-t-md"></div>
                 </div>
              </div>

              <div className="flex-1 bg-white rounded-[19px] border border-[#eceef1] p-[16px] relative">
                 <div className="flex justify-between items-center w-full mb-2">
                    <span className="font-semibold text-[13px]">Shipping Revenue</span>
                    <MoreVertical size={16} className="text-gray-400" />
                 </div>
                 <div className="text-[11px] text-[#989dab] mb-1">Total Revenue</div>
                 <div className="text-[22px] font-medium font-workSans mb-4">$15,245.53</div>
                 <div className="w-full h-[140px] bg-gray-50 rounded-xl border border-gray-100 flex items-end px-4 gap-2">
                    <div className="flex-1 bg-gray-200 h-[100%] rounded-t-md"></div>
                    <div className="flex-1 bg-blue-300 h-[70%] rounded-t-md"></div>
                    <div className="flex-1 bg-gray-200 h-[40%] rounded-t-md"></div>
                    <div className="flex-1 bg-[#2a2a7c] h-[80%] rounded-t-md"></div>
                 </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHeroMockup;
