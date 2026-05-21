import React from 'react';
import image from '../../../assets/image';
import { Plus, Settings, Search, Package, MapPin, Truck, ChevronDown, MoreVertical } from 'lucide-react';

const DashboardMain = () => {
  return (
    <div className="flex flex-col gap-[24px] font-work text-black w-full min-w-0 max-w-full">
      
      {/* Header Text & Buttons */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-[20px]">
        <div className="flex flex-col gap-[7px]">
          <h1 className="text-[32px] leading-[120%] font-medium flex items-center">
            Good Morning, John! <span className="ml-2 text-2xl">👋</span>
          </h1>
          <p className="text-[16px] leading-[120%] text-[#989dab]">
            Here's analytic details for your business here
          </p>
        </div>
        
        <div className="flex items-center gap-[11px] text-[16px] text-white">
          <button className="w-[53px] h-[53px] rounded-full bg-white border border-[#eceef1] flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors shrink-0">
            <Settings size={20} />
          </button>
          <button className="h-[53px] rounded-full bg-[#2a2a7c] flex items-center justify-center px-[18px] py-[16px] gap-[10px] hover:bg-[#2a2a7c]/90 transition-colors font-medium shrink-0">
            <Plus size={20} />
            <span>Add New Shipping</span>
          </button>
        </div>
      </div>

      {/* 3 KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px]">
        
        {/* Card 1: Total Shipments */}
        <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[8px] shadow-sm">
           <div className="flex items-center justify-between">
              <h3 className="font-medium leading-[120%] tracking-[-0.01em]">Total Shipments</h3>
              <div className="w-[35px] h-[35px] rounded-[10px] bg-[#f3f4f6] flex items-center justify-center text-gray-600">
                <Search size={16} />
              </div>
           </div>
           <div className="flex flex-col gap-[8px] mt-[4px]">
             <span className="text-[32px] leading-[120%] font-medium text-[#1e2939]">1,256</span>
             <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-[8px] rounded-full bg-[#eff6ff] px-[12px] py-[6px] text-[#00bc7d]">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-semibold">12%</span>
                </div>
                <span className="text-[#4a5565]">from last month</span>
             </div>
           </div>
        </div>

        {/* Card 2: In Transit */}
        <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[8px] shadow-sm">
           <div className="flex items-center justify-between">
              <h3 className="font-medium leading-[120%] tracking-[-0.01em]">In Transit</h3>
              <div className="w-[35px] h-[35px] rounded-[10px] bg-[#fff7ed] flex items-center justify-center text-orange-500">
                <Truck size={16} />
              </div>
           </div>
           <div className="flex flex-col gap-[8px] mt-[4px]">
             <span className="text-[32px] leading-[120%] font-medium text-[#1e2939]">432</span>
             <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-[8px] rounded-full bg-[#ffdfe3] px-[12px] py-[6px] text-[#fb2c36]">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" className="transform rotate-180" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-semibold">5%</span>
                </div>
                <span className="text-[#4a5565]">from last month</span>
             </div>
           </div>
        </div>

        {/* Card 3: Delivered */}
        <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[8px] shadow-sm">
           <div className="flex items-center justify-between">
              <h3 className="font-medium leading-[120%] tracking-[-0.01em]">Delivered</h3>
              <div className="w-[35px] h-[35px] rounded-[10px] bg-[#fbfbfb] flex items-center justify-center text-gray-700">
                <Package size={16} />
              </div>
           </div>
           <div className="flex flex-col gap-[8px] mt-[4px]">
             <span className="text-[32px] leading-[120%] font-medium text-[#1e2939]">763</span>
             <div className="flex items-center justify-between text-[14px]">
                <div className="flex items-center gap-[8px] rounded-full bg-[#eff6ff] px-[12px] py-[6px] text-[#00bc7d]">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  <span className="font-semibold">8%</span>
                </div>
                <span className="text-[#4a5565]">from last month</span>
             </div>
           </div>
        </div>

      </div>

      {/* Analytics & Revenue Row */}
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-[20px]">
         
         {/* Shipment Analytics Chart */}
         <div className="rounded-[24px] bg-white border border-[#eceef1] p-[20px_20px_41px_20px] flex flex-col gap-[40px] relative">
            <div className="flex items-center justify-between text-[18px]">
               <h3 className="font-medium tracking-[-0.01em] leading-[120%]">Shipment Analytics</h3>
               <button className="flex items-center gap-[8px] px-[15px] py-[9px] rounded-full border border-[#e6e7ea] text-[12px] text-gray-600 hover:bg-gray-50">
                 <span>January 2024 - June 2024</span>
                 <ChevronDown size={12} />
               </button>
            </div>

            <div className="flex items-end gap-[15px] h-[220px] relative text-[#989dab] text-[12px] font-sans pr-[10px]">
               {/* Left Axis */}
               <div className="flex flex-col justify-between h-full w-[40px] text-right pb-[25px]">
                 <span>$100K</span>
                 <span>$75K</span>
                 <span>$50K</span>
                 <span>$25K</span>
                 <span>$0K</span>
               </div>
               
               {/* Horizontal Grid Lines */}
               <div className="absolute left-[55px] right-0 h-full flex flex-col justify-between pb-[32px] pointer-events-none">
                 {[1,2,3,4,5].map((i) => <div key={i} className="w-full border-b border-[#f0f0f0]"></div>)}
               </div>

               {/* Bars Container */}
               <div className="flex-1 flex items-end justify-between px-[10px] h-full relative z-10">
                  {/* Tooltip Popup (Feb) */}
                  <div className="absolute top-[-30px] left-[15%] transform -translate-x-1/2 bg-[#2a2a7c] text-white px-[19px] py-[8px] rounded-[24px] text-[14px] font-semibold whitespace-nowrap shadow-lg">
                    82.500
                  </div>

                  {/* Jan */}
                  <div className="flex flex-col items-center gap-[11px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[120px] bg-[#e1e1f0] rounded-[24px]"></div>
                    <span>Jan</span>
                  </div>
                  {/* Feb (Active) */}
                  <div className="flex flex-col items-center gap-[10px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[190px] bg-[#2a2a7c] rounded-[24px]"></div>
                    <span className="font-semibold text-black">Feb</span>
                  </div>
                  {/* Mar */}
                  <div className="flex flex-col items-center gap-[11px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[80px] bg-[#e1e1f0] rounded-[24px]"></div>
                    <span>Mar</span>
                  </div>
                  {/* Apr */}
                  <div className="flex flex-col items-center gap-[11px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[160px] bg-[#e1e1f0] rounded-[24px]"></div>
                    <span>Apr</span>
                  </div>
                  {/* May */}
                  <div className="flex flex-col items-center gap-[11px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[140px] bg-[#e1e1f0] rounded-[24px]"></div>
                    <span>May</span>
                  </div>
                  {/* June */}
                  <div className="flex flex-col items-center gap-[11px] w-[50px]">
                    <div className="w-[45px] lg:w-[60px] h-[110px] bg-[#e1e1f0] rounded-[24px]"></div>
                    <span>June</span>
                  </div>
               </div>
            </div>
         </div>

         {/* Shipping Revenue */}
         <div className="rounded-[24px] bg-white border border-[#eceef1] p-[32px_22px_32px_20px] flex flex-col gap-[30px]">
            <div className="flex items-center justify-between text-[18px]">
               <h3 className="font-medium tracking-[-0.01em] leading-[120%]">Shipping Revenue</h3>
               <button className="flex items-center gap-[8px] px-[15px] py-[9px] rounded-full border border-[#e6e7ea] text-[12px] text-gray-600 hover:bg-gray-50">
                 <span>This Year</span>
                 <ChevronDown size={12} />
               </button>
            </div>

            <div className="flex flex-col gap-[4px] text-[14px] text-[#989dab]">
               <span>Total Revenue</span>
               <div className="flex items-center gap-[12px]">
                 <span className="text-[28px] md:text-[36px] leading-[120%] font-medium text-black">$15.245.53</span>
                 <div className="flex items-center gap-[8px] rounded-full bg-[#ecfaee] px-[8px] py-[4px] text-[#219234] text-[12px]">
                   <svg width="10" height="10" viewBox="0 0 12 8" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 7L6 2L11 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                   <span>7.52%</span>
                 </div>
               </div>
            </div>

            <div className="flex flex-col gap-[12px] mt-2 font-urbanist">
               {/* Q4 */}
               <div className="flex flex-col gap-[4px]">
                 <span className="text-[12px] opacity-60 ml-auto">58.34%</span>
                 <div className="flex items-center gap-[12px]">
                   <span className="w-[20px] text-[13px] font-medium text-[#989dab]">Q4</span>
                   <div className="flex-1 h-[16px] bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 w-[58.34%] rounded-full"></div>
                   </div>
                 </div>
               </div>
               {/* Q3 */}
               <div className="flex flex-col gap-[4px]">
                 <span className="text-[12px] opacity-60 ml-auto">85.12%</span>
                 <div className="flex items-center gap-[12px]">
                   <span className="w-[20px] text-[13px] font-medium text-[#989dab]">Q3</span>
                   <div className="flex-1 h-[16px] bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 w-[85.12%] rounded-full"></div>
                   </div>
                 </div>
               </div>
               {/* Q2 */}
               <div className="flex flex-col gap-[4px]">
                 <span className="text-[12px] opacity-60 ml-auto">63.78%</span>
                 <div className="flex items-center gap-[12px]">
                   <span className="w-[20px] text-[13px] font-medium text-[#989dab]">Q2</span>
                   <div className="flex-1 h-[16px] bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 w-[63.78%] rounded-full"></div>
                   </div>
                 </div>
               </div>
               {/* Q1 */}
               <div className="flex flex-col gap-[4px]">
                 <span className="text-[12px] opacity-60 ml-auto">68.56%</span>
                 <div className="flex items-center gap-[12px]">
                   <span className="w-[20px] text-[13px] font-medium text-[#989dab]">Q1</span>
                   <div className="flex-1 h-[16px] bg-gray-100 rounded-full overflow-hidden">
                     <div className="h-full bg-gradient-to-r from-blue-400 to-indigo-600 w-[68.56%] rounded-full"></div>
                   </div>
                 </div>
               </div>
               
               {/* X Axis */}
               <div className="flex items-center justify-between pl-[32px] mt-2 text-[12px] text-[#989dab]">
                 <span>0</span>
                 <span>20%</span>
                 <span>40%</span>
                 <span>60%</span>
                 <span>80%</span>
                 <span>100%</span>
               </div>
            </div>

         </div>

      </div>

      {/* Shipment Tracker Map Card */}
      <div className="w-full h-[380px] rounded-[24px] bg-white relative overflow-hidden flex shadow-sm border border-gray-100">
         
         {/* Map Background Placeholder */}
         <div className="absolute inset-0 z-0">
           <img src={image.Globalnetworkpng} alt="Map" className="w-full h-full object-cover opacity-50 filter grayscale" />
           {/* Fade overlay on right side to match Figma */}
           <div className="absolute right-0 top-0 bottom-0 w-[50%] bg-gradient-to-l from-white to-transparent z-10"></div>
         </div>

         {/* Left Side: Map UI Pins */}
         <div className="absolute left-[10%] top-[30%] z-20 flex flex-col items-center">
            <div className="w-[18px] h-[18px] rounded-full bg-[#2a2a7c] border-[3px] border-white shadow-md"></div>
            {/* Dashed line to next pin */}
            <svg className="absolute top-[18px] left-[15px] w-[400px] h-[150px] pointer-events-none" style={{zIndex: -1}}>
              <path d="M0,0 Q 200,-50 400,100" fill="none" stroke="#2a2a7c" strokeWidth="2" strokeDasharray="5,5" />
            </svg>
         </div>
         <div className="absolute left-[50%] top-[45%] z-20 flex flex-col items-center">
            <div className="w-[28px] h-[28px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center shadow-lg border-[3px] border-white">
              <Truck size={14} />
            </div>
         </div>
         <div className="absolute left-[85%] md:left-[60%] top-[65%] z-20 flex flex-col items-center">
            <div className="w-[18px] h-[18px] rounded-full bg-[#2a2a7c] border-[3px] border-white shadow-md"></div>
         </div>

         {/* Right Side: Overlay Cards */}
         <div className="absolute right-[20px] top-[18px] z-30 w-full max-w-[338px] flex flex-col gap-[16px]">
            
            {/* Card 5: Main Details */}
            <div className="rounded-[20px] bg-white border border-[#eceef1] shadow-[0px_0px_25px_rgba(0,0,0,0.08)] p-[20px] flex flex-col gap-[20px]">
               <div className="flex items-center justify-between">
                 <div className="flex items-center gap-[12px]">
                   <div className="w-[31px] h-[31px] rounded-full bg-[#ebebf5] flex items-center justify-center text-gray-700">
                     <Package size={15} />
                   </div>
                   <h3 className="font-medium leading-[120%] tracking-[-0.01em]">Shipment Tracker</h3>
                 </div>
                 <button className="w-[31px] h-[31px] rounded-md border border-[#e6e7ea] flex items-center justify-center text-gray-500 hover:bg-gray-50">
                   <MoreVertical size={15} />
                 </button>
               </div>

               <div className="flex items-center gap-[40px] text-[12px]">
                 <div className="flex flex-col gap-[6px]">
                   <span className="opacity-40">Cargo ID</span>
                   <span className="font-semibold">#JTQ98340237D</span>
                 </div>
                 <div className="flex flex-col gap-[6px] text-right ml-auto">
                   <span className="opacity-40">Date Ship</span>
                   <span className="font-semibold">Friday, June 14 2024</span>
                 </div>
               </div>

               <div className="flex flex-col relative font-urbanist text-[15px] pl-[10px] gap-[20px]">
                 {/* Connecting line */}
                 <div className="absolute left-[20px] top-[30px] bottom-[30px] w-[2px] bg-gray-200"></div>

                 <div className="flex items-start gap-[12px] relative z-10">
                   <div className="w-[20px] h-[20px] rounded-full bg-[#ebebf5] flex items-center justify-center shrink-0 mt-1 text-gray-500">
                     <Truck size={10} />
                   </div>
                   <div className="flex flex-col gap-[2px]">
                     <span className="font-semibold">Departure</span>
                     <span className="text-[12px] text-gray-400 font-work">Boketto. Inc, Kelapa Gading, <br/>Jakarta Utara, 53428</span>
                   </div>
                 </div>

                 <div className="flex items-start gap-[12px] relative z-10">
                   <div className="w-[20px] h-[20px] rounded-full bg-[#121336] flex items-center justify-center shrink-0 mt-1 text-white">
                     <MapPin size={10} />
                   </div>
                   <div className="flex flex-col gap-[2px]">
                     <span className="font-semibold">Destinations</span>
                     <span className="text-[12px] text-gray-400 font-work">Meriana. Inc, Kelapa Gading, <br/>Jakarta Utara, 53428</span>
                   </div>
                 </div>
               </div>

               <button className="w-full rounded-full bg-[#2a2a7c] text-white py-[12px] text-[16px] hover:bg-[#2a2a7c]/90 transition-colors mt-[10px]">
                 See Details
               </button>
            </div>

            {/* Card 6: Floating Stats */}
            <div className="hidden lg:flex flex-col justify-between absolute right-[102%] top-[100px] w-[180px] h-[184px] bg-white rounded-[20px] shadow-[0px_0px_25px_rgba(0,0,0,0.05)] p-[16px] text-[12px] font-inter">
               <div className="flex flex-col gap-[2px]">
                 <span className="opacity-40">Distance</span>
                 <span className="text-[16px] font-medium tracking-[-0.02em]">153 km</span>
               </div>
               <div className="w-full h-[1px] bg-gray-100"></div>
               <div className="flex flex-col gap-[2px]">
                 <span className="opacity-40">Est. delivery time</span>
                 <span className="text-[16px] font-medium tracking-[-0.02em]">2 hours 22 mins</span>
               </div>
               <div className="w-full h-[1px] bg-gray-100"></div>
               <div className="flex flex-col gap-[2px]">
                 <span className="opacity-40">Total weight</span>
                 <span className="text-[16px] font-medium tracking-[-0.02em]">29.86 kg</span>
               </div>
            </div>

         </div>

      </div>

    </div>
  );
};

export default DashboardMain;
