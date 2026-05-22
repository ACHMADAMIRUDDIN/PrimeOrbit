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
      <div className="w-full h-[380px] rounded-[24px] bg-[#f8f9fa] relative overflow-hidden flex shadow-sm border border-gray-100">
         
         {/* Custom SVG Street Map Background */}
         <div className="absolute inset-0 z-0 opacity-80">
            <svg 
              className="w-full h-full pointer-events-none" 
              stroke="#e6e7eb" 
              strokeWidth="2" 
              fill="none" 
              preserveAspectRatio="none"
              viewBox="0 0 1000 380"
            >
              {/* Horizontal/diagonal main street grids */}
              <path d="M-50,80 L1100,80" />
              <path d="M-50,220 L1100,220" />
              <path d="M-50,300 L1100,300" strokeWidth="1.5" />
              <path d="M150,-50 L150,450" />
              <path d="M300,-50 L300,450" />
              <path d="M520,-50 L520,450" strokeWidth="2.5" />
              <path d="M780,-50 L780,450" />
              
              {/* Diagonal streets */}
              <path d="M-50,0 L400,450" strokeWidth="1.5" />
              <path d="M100,-50 L-50,100" />
              <path d="M350,-50 L750,350" strokeWidth="3" />
              <path d="M800,-50 L500,250" />
              <path d="M450,-50 L950,400" />
              <path d="M100,430 L900,100" strokeWidth="1.5" />
              
              {/* Winding local streets */}
              <path d="M-20,180 Q100,140 220,180 T400,180" strokeWidth="1" />
              <path d="M300,320 Q420,360 550,320" strokeWidth="1" />
              
              {/* Neighborhood blocks */}
              <path d="M150,150 L200,120 L250,150" />
              <path d="M220,80 L220,130" />
              <path d="M250,220 L250,290" />
              <path d="M50,220 L50,350 L120,380" />
              <path d="M300,120 L400,120 L450,150" />
              <path d="M520,180 L620,180" />
              <path d="M520,290 L700,290" strokeWidth="1" />
              <path d="M600,80 L700,120 L800,80" />
              <path d="M620,180 L620,250" />
              <path d="M720,220 L720,330" />
            </svg>
         </div>

         {/* Delivery Route SVG overlay */}
         <svg 
           viewBox="0 0 1000 380" 
           preserveAspectRatio="none"
           className="absolute inset-0 w-full h-full z-10 pointer-events-none"
         >
           {/* The delivery route in high-contrast yellow/orange */}
           <path 
             d="M 90,60 L 220,180 L 300,260 L 325,260 L 350,210 L 415,210 L 440,90 L 480,95 L 500,120 L 530,115 L 550,165 L 565,160 L 620,210" 
             fill="none" 
             stroke="#ffb703" 
             strokeWidth="3.5" 
             strokeLinecap="round"
             strokeLinejoin="round"
           />
           
           {/* Departure Terminal Circle (Top Left) */}
           <circle cx="90" cy="60" r="7" fill="#1b1c5c" stroke="#ffffff" strokeWidth="3" />
           
           {/* Destination Terminal Circle (Bottom Right) */}
           <circle cx="620" cy="210" r="7" fill="#1b1c5c" stroke="#ffffff" strokeWidth="3" />
           
           {/* Active Tracker Pulse / Outer Ring */}
           <circle cx="508" cy="123" r="14" fill="#1b1c5c" fillOpacity="0.1" />
           
           {/* Active Tracker Badge */}
           <circle cx="508" cy="123" r="10" fill="#ebebf5" stroke="#ffffff" strokeWidth="2" />
           
           {/* Active Tracker Chevron pointing southeast (rotate 135 deg) */}
           <g transform="translate(508, 123) rotate(135)">
             <path d="M0,-4.5 L3.5,4.5 L0,2.2 L-3.5,4.5 Z" fill="#1b1c5c" />
           </g>
         </svg>

         {/* Left Side: Floating Stats Card */}
         <div className="hidden md:flex flex-col gap-[14px] absolute left-[20px] bottom-[20px] z-20 w-[200px] bg-white rounded-[24px] p-5 shadow-[0px_4px_25px_rgba(0,0,0,0.06)] border border-gray-100/50 transition-all hover:shadow-[0px_8px_30px_rgba(0,0,0,0.1)]">
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#989dab] text-[11px] uppercase tracking-wider font-semibold">Distance</span>
              <span className="text-[18px] font-semibold text-[#121336]">153 km</span>
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#989dab] text-[11px] uppercase tracking-wider font-semibold">Est. delivery time</span>
              <span className="text-[18px] font-semibold text-[#121336]">2 hours 22 minutes</span>
            </div>
            <div className="w-full h-[1px] bg-gray-100"></div>
            <div className="flex flex-col gap-[2px]">
              <span className="text-[#989dab] text-[11px] uppercase tracking-wider font-semibold">Total weight</span>
              <span className="text-[18px] font-semibold text-[#121336]">29.86 kg</span>
            </div>
         </div>

         {/* Right Side: Floating Shipment Tracker Card */}
         <div className="absolute right-[20px] top-[20px] bottom-[20px] z-20 w-[calc(100%-40px)] sm:w-full max-w-[340px] md:max-w-[360px] bg-white rounded-[24px] p-6 shadow-[0px_8px_30px_rgba(0,0,0,0.08)] border border-gray-100/50 flex flex-col justify-between transition-all hover:shadow-[0px_12px_40px_rgba(0,0,0,0.12)]">
            
            {/* Header section */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-[12px]">
                <div className="w-[36px] h-[36px] rounded-full bg-[#ebebf5] flex items-center justify-center text-[#121336]">
                  <Package size={18} />
                </div>
                <h3 className="font-semibold text-[17px] text-[#121336] tracking-tight">Shipment Tracker</h3>
              </div>
              <button className="w-[32px] h-[32px] rounded-md border border-[#e6e7ea] flex items-center justify-center text-gray-400 hover:bg-gray-50 hover:text-gray-600 transition-colors">
                <MoreVertical size={16} />
              </button>
            </div>

            {/* Cargo ID and Date Ship */}
            <div className="flex items-center justify-between text-[12px] mt-2 border-b border-gray-100 pb-3">
              <div className="flex flex-col gap-[3px]">
                <span className="text-[#989dab] text-[10px] uppercase tracking-wider font-semibold">Cargo ID</span>
                <span className="font-semibold text-[#121336] text-[13px]">#JTQ98340237D</span>
              </div>
              <div className="flex flex-col gap-[3px] text-right">
                <span className="text-[#989dab] text-[10px] uppercase tracking-wider font-semibold">Date Ship</span>
                <span className="font-semibold text-[#121336] text-[13px]">Friday, June 14 2024</span>
              </div>
            </div>

            {/* Vertical timeline */}
            <div className="flex flex-col relative font-work pl-[4px] gap-[18px] my-3">
              {/* Connecting dashed line */}
              <div className="absolute left-[13px] top-[26px] bottom-[26px] w-[1px] border-l border-dashed border-gray-300"></div>

              {/* Departure Stop */}
              <div className="flex items-start gap-[12px] relative z-10">
                <div className="w-[28px] h-[28px] rounded-full bg-[#ebebf5] flex items-center justify-center shrink-0 mt-0.5 text-[#121336]">
                  <Truck size={13} />
                </div>
                <div className="flex flex-col gap-[1px]">
                  <span className="font-bold text-[14px] text-[#121336]">Departure</span>
                  <span className="text-[12px] text-[#989dab] leading-tight font-medium">Boketto. Inc, Kelapa Gading, <br/>Jakarta Utara, 53428</span>
                </div>
              </div>

              {/* Destinations Stop */}
              <div className="flex items-start gap-[12px] relative z-10">
                <div className="w-[28px] h-[28px] rounded-full bg-[#121336] flex items-center justify-center shrink-0 mt-0.5 text-white">
                  <MapPin size={13} />
                </div>
                <div className="flex flex-col gap-[1px]">
                  <span className="font-bold text-[14px] text-[#121336]">Destinations</span>
                  <span className="text-[12px] text-[#989dab] leading-tight font-medium">Meriana. Inc, Kelapa Gading, <br/>Jakarta Utara, 53428</span>
                </div>
              </div>
            </div>

            {/* Action pill button */}
            <button className="w-full rounded-full bg-[#1b1c5c] text-white py-[12px] text-[15px] font-semibold hover:bg-[#1b1c5c]/90 transition-colors shadow-[0px_4px_12px_rgba(27,28,92,0.15)] active:scale-[0.98]">
              See Details
            </button>
         </div>

      </div>

    </div>
  );
};

export default DashboardMain;
