import React from 'react';
import image from '../../../assets/image';
import { Package, Truck, Navigation, Settings, MapPin, Search } from 'lucide-react';

const TrackingView = () => {
  return (
    <div className="flex flex-col gap-[20px] font-work text-black w-full min-w-0 max-w-full">
      
      {/* Top Section: Map & Side Tracking */}
      <div className="flex flex-col xl:flex-row items-stretch gap-[24px]">
        
        {/* Left Side: Map & KPIs */}
        <div className="flex-1 flex flex-col gap-[20px]">
          
          {/* Map Container */}
          <div className="w-full h-[400px] xl:h-[576px] rounded-[24px] bg-white relative overflow-hidden shadow-sm border border-gray-100">
             <img src={image.Globalnetworkpng} alt="Map" className="absolute inset-0 w-full h-full object-cover filter grayscale opacity-40" />
             
             {/* Map Pins & Overlays */}
             <div className="absolute left-[20%] top-[40%]">
               <div className="w-[17px] h-[17px] rounded-full bg-[#ffcd51] border-[2.6px] border-white shadow-md"></div>
             </div>
             
             <div className="absolute left-[60%] top-[30%]">
               <div className="w-[17px] h-[17px] rounded-full bg-[#ffcd51] border-[2.6px] border-white shadow-md"></div>
             </div>

             {/* Popup overlay */}
             <div className="absolute left-[40%] top-[40%] z-10">
               <div className="bg-black text-white text-[14px] font-semibold px-[16px] py-[10px] rounded-[10px] relative">
                 Estimate 1 hour
                 <div className="absolute bottom-[-6px] left-[50%] transform -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-black"></div>
               </div>
             </div>
             
             <svg className="absolute left-0 top-0 w-full h-full pointer-events-none" style={{zIndex: 1}}>
               <path d="M 200,230 Q 400,100 650,180" fill="none" stroke="#2a2a7c" strokeWidth="2.6" strokeDasharray="6,6" />
             </svg>
          </div>

          {/* 3 KPI Cards under Map */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px]">
             {/* KPI 1 */}
             <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
                <div className="flex flex-col gap-[8px]">
                  <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                    <Package size={24} />
                  </div>
                  <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">Total Shipments</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">789 Packages</span>
                  <span className="text-[12px] leading-[120%] text-[#6a7282]">Recent shipment totals</span>
                </div>
             </div>
             {/* KPI 2 */}
             <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
                <div className="flex flex-col gap-[8px]">
                  <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                    <Truck size={24} />
                  </div>
                  <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">Delivered Orders</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">652 Deliveries</span>
                  <span className="text-[12px] leading-[120%] text-[#6a7282]">Total this month</span>
                </div>
             </div>
             {/* KPI 3 */}
             <div className="rounded-[24px] bg-white p-[20px] flex flex-col gap-[26px] shadow-sm border border-gray-100">
                <div className="flex flex-col gap-[8px]">
                  <div className="w-[46px] h-[46px] rounded-[12px] bg-[#2a2a7c] text-white flex items-center justify-center">
                    <Navigation size={24} />
                  </div>
                  <span className="text-[14px] leading-[120%] text-[#2a2a7c] font-medium">Active Deliveries</span>
                </div>
                <div className="flex flex-col gap-[8px]">
                  <span className="text-[20px] font-medium leading-[140%] text-[#1e2939]">137 In-Transit</span>
                  <span className="text-[12px] leading-[120%] text-[#6a7282]">Ready for route analysis</span>
                </div>
             </div>
          </div>
        </div>

        {/* Right Side: Package Sidebar */}
        <div className="w-full xl:w-[380px] rounded-[24px] bg-white p-[16px_14px] flex flex-col gap-[26px] shadow-sm border border-gray-100 shrink-0 h-fit">
           
           <div className="flex items-center gap-[12px]">
             <div className="w-[48px] h-[48px] rounded-[16px] bg-[#f5f5f5] flex items-center justify-center text-gray-600">
               <Search size={24} />
             </div>
             <h3 className="text-[18px] font-medium leading-[120%] tracking-[-0.01em] text-[#252b37]">Package being checked</h3>
           </div>

           <div className="flex flex-col gap-[20px] text-[12px] text-[#808899]">
              
              {/* Item 1 (Collapsed) */}
              <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
                 <div className="flex items-center gap-[16px]">
                   <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                     <Truck size={16} />
                   </div>
                   <div className="flex flex-col gap-[2px]">
                     <span className="leading-[120%]">Tracking ID</span>
                     <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">#C023</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-[5px]">
                   <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                     Delivered
                   </div>
                 </div>
              </div>

              {/* Item 2 (Expanded) */}
              <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex flex-col gap-[20px]">
                 <div className="flex items-center justify-between">
                   <div className="flex items-center gap-[16px]">
                     <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                       <Truck size={16} />
                     </div>
                     <div className="flex flex-col gap-[2px]">
                       <span className="leading-[120%]">Tracking ID</span>
                       <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">#C024</span>
                     </div>
                   </div>
                   <div className="flex items-center gap-[5px]">
                     <div className="h-[24px] rounded-[4px] bg-[#ccf1f8] border border-[#bceef8] px-[8px] flex items-center justify-center text-black">
                       Transit
                     </div>
                   </div>
                 </div>

                 <div className="w-full h-[1px] bg-black/10"></div>
                 
                 <div className="flex flex-col gap-[8px] text-[14px]">
                    <div className="flex justify-between items-center">
                      <span>Package arrived on</span>
                      <span className="font-semibold text-black">25 February 2025</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Time</span>
                      <span className="font-semibold text-black">18:00 PM</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span>Total item</span>
                      <span className="font-semibold text-black">2 items</span>
                    </div>
                 </div>

                 <div className="w-full h-[1px] bg-black/10"></div>

                 {/* Timeline */}
                 <div className="flex flex-col gap-[12px] text-[14px] text-black relative pl-[8px]">
                    <div className="absolute left-[13px] top-[10px] bottom-[20px] w-[2px] bg-gray-200 z-0"></div>
                    
                    <div className="flex flex-col gap-[4px] relative z-10">
                      <div className="flex items-center gap-[12px]">
                         <div className="w-[12px] h-[12px] rounded-full bg-[#e1e3e5] flex items-center justify-center">
                           <div className="w-[8px] h-[8px] rounded-full bg-[#b2b6bc]"></div>
                         </div>
                         <span className="font-semibold leading-[120%]">Package being checked</span>
                      </div>
                      <div className="flex flex-col pl-[24px] gap-[4px] text-[12px] text-gray-500">
                         <span>February 19, 2025 • 18:49 PM</span>
                         <span>Jakarta, Indonesia</span>
                      </div>
                    </div>

                    <div className="flex flex-col gap-[4px] relative z-10">
                      <div className="flex items-center gap-[12px]">
                         <div className="w-[12px] h-[12px] rounded-full bg-[#ebebf5] flex items-center justify-center">
                           <div className="w-[8px] h-[8px] rounded-full bg-[#2a2a7c]"></div>
                         </div>
                         <span className="font-semibold leading-[120%]">Package in transit</span>
                      </div>
                      <div className="flex flex-col pl-[24px] gap-[4px] text-[12px] text-gray-500">
                         <span>February 19, 2025 • 21:29 PM</span>
                         <span>Purwakarta, Indonesia</span>
                      </div>
                    </div>
                 </div>

                 <button className="w-full rounded-[48px] bg-[#2a2a7c] text-white py-[16px] text-[16px] hover:bg-[#2a2a7c]/90 transition-colors mt-[10px]">
                   Assign Driver
                 </button>
              </div>

              {/* Item 3 (Collapsed) */}
              <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
                 <div className="flex items-center gap-[16px]">
                   <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                     <Truck size={16} />
                   </div>
                   <div className="flex flex-col gap-[2px]">
                     <span className="leading-[120%]">Tracking ID</span>
                     <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">#C025</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-[5px]">
                   <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                     Delivered
                   </div>
                 </div>
              </div>

              {/* Item 4 (Collapsed) */}
              <div className="w-full rounded-[20px] bg-[#f5f5f5] p-[12px] flex items-center justify-between">
                 <div className="flex items-center gap-[16px]">
                   <div className="w-[34px] h-[34px] rounded-full bg-[#2a2a7c] text-white flex items-center justify-center">
                     <Truck size={16} />
                   </div>
                   <div className="flex flex-col gap-[2px]">
                     <span className="leading-[120%]">Tracking ID</span>
                     <span className="text-[18px] font-medium text-black leading-[120%] tracking-[-0.01em]">#C026</span>
                   </div>
                 </div>
                 <div className="flex items-center gap-[5px]">
                   <div className="h-[24px] rounded-[4px] bg-[#e7f7ee] border border-[#0dac53]/15 px-[8px] flex items-center justify-center text-[#0dac53]">
                     Delivered
                   </div>
                 </div>
              </div>

           </div>
        </div>

      </div>

      {/* Bottom Section: Recent Shipments List */}
      <div className="w-full rounded-[14px] bg-white p-[23px_20px] flex flex-col gap-[24px] shadow-sm border border-gray-100">
         
         <div className="flex items-center justify-between px-[16px]">
            <h2 className="text-[18px] font-medium text-[#1e2939] tracking-[-0.01em]">Recent Shipments</h2>
            <button className="flex items-center gap-[7px] px-[10px] py-[7px] rounded-[7px] bg-white shadow-[0px_0px_0px_1px_rgba(0,0,0,0.09)] text-[14px] text-[#1e2939] hover:bg-gray-50">
              <Settings size={14} />
              <span>Filter</span>
            </button>
         </div>

         <div className="w-full rounded-[8px] shadow-[0px_0px_0px_1px_rgba(0,0,0,0.07)] overflow-x-auto">
            <div className="min-w-[900px] flex flex-col">
               {/* Header Row */}
               <div className="w-full h-[36px] bg-[#fafafa] flex items-center px-[8px] gap-[20px] text-[14px] font-semibold text-[#6a7282]">
                 <div className="w-[130px] px-[16px]">ORDER ID</div>
                 <div className="w-[160px] px-[16px]">ORIGIN</div>
                 <div className="w-[154px] px-[16px]">DESTINATION</div>
                 <div className="w-[120px] px-[16px]">STATUS</div>
                 <div className="w-[102px] px-[16px]">ETA</div>
                 <div className="flex-1 px-[16px]">PROGRES</div>
               </div>

               {/* Table Body */}
               <div className="w-full flex flex-col p-[8px] gap-[8px] bg-white text-[14px] text-[#1e2939]">
                  
                  {/* Row 1 */}
                  <div className="flex items-center gap-[20px] px-[8px] py-[4px]">
                    <div className="w-[130px] px-[16px]">#ORD-2301</div>
                    <div className="w-[160px] px-[16px]">New York, NY</div>
                    <div className="w-[154px] px-[16px] truncate">Los Angeles, CA</div>
                    <div className="w-[120px] px-[16px]">
                      <div className="inline-flex items-center h-[24px] rounded-full bg-[#00b8db]/20 px-[12px] text-[#2a2a7c] text-[12px]">
                        In Transit
                      </div>
                    </div>
                    <div className="w-[102px] px-[16px]">2 hours</div>
                    <div className="flex-1 px-[16px]">
                       <div className="w-full h-[8px] rounded-full bg-[#dbdbdb] overflow-hidden">
                         <div className="h-full bg-[#ffcd51] w-[70%]"></div>
                       </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-100"></div>

                  {/* Row 2 */}
                  <div className="flex items-center gap-[20px] px-[8px] py-[4px]">
                    <div className="w-[130px] px-[16px]">#ORD-2302</div>
                    <div className="w-[160px] px-[16px]">Chicago, IL</div>
                    <div className="w-[154px] px-[16px] truncate">Miami, FL</div>
                    <div className="w-[120px] px-[16px]">
                      <div className="inline-flex items-center h-[24px] rounded-full bg-[#00bc7d]/20 px-[12px] text-[#00a370] text-[12px]">
                        Delivered
                      </div>
                    </div>
                    <div className="w-[102px] px-[16px]">Completed</div>
                    <div className="flex-1 px-[16px]">
                       <div className="w-full h-[8px] rounded-full bg-[#1e2939] overflow-hidden">
                         <div className="h-full bg-[#ffcd51] w-[100%]"></div>
                       </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-100"></div>

                  {/* Row 3 */}
                  <div className="flex items-center gap-[20px] px-[8px] py-[4px]">
                    <div className="w-[130px] px-[16px]">#ORD-2303</div>
                    <div className="w-[160px] px-[16px]">Houston, TX</div>
                    <div className="w-[154px] px-[16px] truncate">Seattle, WA</div>
                    <div className="w-[120px] px-[16px]">
                      <div className="inline-flex items-center h-[24px] rounded-full bg-[#00b8db]/20 px-[12px] text-[#2a2a7c] text-[12px]">
                        In Transit
                      </div>
                    </div>
                    <div className="w-[102px] px-[16px]">6 hours</div>
                    <div className="flex-1 px-[16px]">
                       <div className="w-full h-[8px] rounded-full bg-[#dbdbdb] overflow-hidden">
                         <div className="h-full bg-[#ffcd51] w-[40%]"></div>
                       </div>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-100"></div>

                  {/* Row 4 */}
                  <div className="flex items-center gap-[20px] px-[8px] py-[4px]">
                    <div className="w-[130px] px-[16px]">#ORD-2304</div>
                    <div className="w-[160px] px-[16px]">Boston, MA</div>
                    <div className="w-[154px] px-[16px] truncate">San Francisco, CA</div>
                    <div className="w-[120px] px-[16px]">
                      <div className="inline-flex items-center h-[24px] rounded-full bg-[#fb2c36]/20 px-[12px] text-[#ff6467] text-[12px]">
                        Delayed
                      </div>
                    </div>
                    <div className="w-[102px] px-[16px]">12 hours</div>
                    <div className="flex-1 px-[16px] flex items-center gap-[8px]">
                       <div className="w-[80px] h-[8px] rounded-full bg-[#dbdbdb] overflow-hidden">
                         <div className="h-full bg-[#ffcd51] w-[30%]"></div>
                       </div>
                       <span className="text-[12px] text-[#6a7282]">30%</span>
                    </div>
                  </div>
                  <div className="w-full h-[1px] bg-gray-100"></div>

                  {/* Row 5 */}
                  <div className="flex items-center gap-[20px] px-[8px] py-[4px]">
                    <div className="w-[130px] px-[16px]">#ORD-2305</div>
                    <div className="w-[160px] px-[16px]">Phoenix, AZ</div>
                    <div className="w-[154px] px-[16px] truncate">Denver, CO</div>
                    <div className="w-[120px] px-[16px]">
                      <div className="inline-flex items-center h-[24px] rounded-full bg-[#fe9a00]/20 px-[12px] text-[#ffb900] text-[12px]">
                        Pending
                      </div>
                    </div>
                    <div className="w-[102px] px-[16px]">Not Started</div>
                    <div className="flex-1 px-[16px]">
                       <div className="w-full h-[8px] rounded-full bg-[#dbdbdb] overflow-hidden">
                       </div>
                    </div>
                  </div>

               </div>
            </div>
         </div>
         
      </div>

    </div>
  );
};

export default TrackingView;
