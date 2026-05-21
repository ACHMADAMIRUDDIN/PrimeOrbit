import React from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

const OrderDetailsView = () => {
  // Table Data (same as Analytics for consistency)
  const recentShipments = [
    { id: '12345XYZ', company: 'TechGear Inc.', shipDate: '2024-03-15', estDate: '2024-03-15', route: 'San Francisco, CA → New York, NY', price: '$45.00', status: 'Delivered' },
    { id: '67890ABC', company: 'FashionFits', shipDate: '2024-03-17', estDate: '2024-03-17', route: 'Los Angeles, CA → Chicago, IL', price: '$30.00', status: 'Out for Delivery' },
    { id: '11223DEF', company: 'ReadWorld', shipDate: '2024-03-16', estDate: '2024-03-16', route: 'Seattle, WA → Miami, FL', price: '$25.00', status: 'In Transit' },
    { id: '44556GHI', company: 'GreenHaven', shipDate: '2024-03-14', estDate: '2024-03-14', route: 'Dallas, TX → Atlanta, GA', price: '$35.00', status: 'Delivered' },
    { id: '77889JKL', company: 'AutoParts Pro', shipDate: '2024-03-18', estDate: '2024-03-18', route: 'Detroit, MI → Los Angeles, CA', price: '$50.00', status: 'Processing' },
    { id: '82049IDN', company: 'GearFashion', shipDate: '2024-03-12', estDate: '2024-03-12', route: 'New York, NY → Madrid, SP', price: '$77.00', status: 'In Transit' },
    { id: '22394SPG', company: 'AlcatrazTech', shipDate: '2024-03-07', estDate: '2024-03-07', route: 'Chicago, IL → Birmingham, EN', price: '$95.00', status: 'Processing' },
  ];

  const getStatusColor = (status) => {
    switch (status) {
      case 'Delivered': return 'bg-[#d9f9e7] text-[#02bc57]';
      case 'Out for Delivery': return 'bg-[#fcdfe0] text-[#f04a4a]';
      case 'In Transit': return 'bg-[#fef7d6] text-[#d6b712]';
      case 'Processing': return 'bg-[#dde1f9] text-[#4663fe]';
      default: return 'bg-gray-100 text-gray-600';
    }
  };

  const locationStatsCol1 = [
    { name: 'DKI Jakarta', percentage: 96, color: 'bg-[#2a2a7c]' },
    { name: 'West Java', percentage: 83, color: 'bg-[#2a2a7c]' },
    { name: 'Bali', percentage: 76, color: 'bg-[#2a2a7c]' },
  ];

  const locationStatsCol2 = [
    { name: 'East Java', percentage: 56, color: 'bg-[#ffcd51]' },
    { name: 'DIY Yogyakarta', percentage: 43, color: 'bg-[#ffcd51]' },
    { name: 'Central Java', percentage: 33, color: 'bg-[#c4c4c4]' },
  ];

  // Donut Chart SVG Variables
  const radius = 90;
  const circumference = 2 * Math.PI * radius;
  const targetPercentage = 81;
  const strokeDashoffset = circumference - (targetPercentage / 100) * circumference;

  return (
    <div className="flex flex-col gap-[24px] font-work text-black w-full min-w-0 max-w-full">
      
      {/* Top Section: Split Widgets */}
      <div className="flex flex-col xl:flex-row gap-[20px] w-full">
        
        {/* Shipping Location */}
        <div className="flex-1 rounded-[12px] bg-white p-[16px] flex flex-col gap-[16px] min-h-[400px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[16px]">
             <div className="flex flex-col gap-[4px]">
               <h3 className="font-medium text-[18px] tracking-[-0.01em] leading-[120%]">Shipping Location</h3>
               <div className="flex items-center gap-[15px] text-[10px] text-[#8a8a8a] font-nunito">
                 <div className="flex items-center gap-[4px]">
                   <div className="w-[6px] h-[6px] rounded-[2px] bg-[#f04a4a]"></div>
                   <span>Most</span>
                 </div>
                 <div className="flex items-center gap-[4px]">
                   <div className="w-[6px] h-[6px] rounded-[2px] bg-[#333]"></div>
                   <span>Medium</span>
                 </div>
                 <div className="flex items-center gap-[4px]">
                   <div className="w-[6px] h-[6px] rounded-[2px] bg-[#e1e1e1]"></div>
                   <span>Low</span>
                 </div>
               </div>
             </div>
             
             {/* Dropdown */}
             <button className="bg-[#f0f0f0] rounded-[8px] flex items-center justify-between px-[10px] py-[6px] text-[12px] font-nunito font-semibold w-[120px]">
               <span>Last 8 Months</span>
               <ChevronDown size={14} />
             </button>
          </div>

          {/* Map Image Placeholder (SVG Dot Map) */}
          <div className="w-full h-[190px] rounded-[8px] bg-[#f9fafb] relative overflow-hidden flex items-center justify-center border border-gray-100">
             {/* Abstract Map Dots */}
             <svg className="absolute inset-0 w-full h-full text-gray-200" width="100%" height="100%">
                <pattern id="pattern-circles" x="0" y="0" width="15" height="15" patternUnits="userSpaceOnUse">
                   <circle fill="currentColor" cx="3" cy="3" r="1.5"></circle>
                </pattern>
                <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
             </svg>
             {/* Highlighted map locations */}
             <div className="absolute w-[8px] h-[8px] bg-[#f04a4a] rounded-full shadow-[0_0_10px_rgba(240,74,74,0.8)]" style={{ top: '40%', left: '30%' }}></div>
             <div className="absolute w-[6px] h-[6px] bg-[#333] rounded-full" style={{ top: '60%', left: '45%' }}></div>
             <div className="absolute w-[6px] h-[6px] bg-[#333] rounded-full" style={{ top: '50%', left: '60%' }}></div>
             <div className="absolute w-[4px] h-[4px] bg-[#e1e1e1] rounded-full" style={{ top: '70%', left: '75%' }}></div>
          </div>

          {/* Stats Progress Bars */}
          <div className="flex flex-col sm:flex-row gap-[20px] font-nunito text-[12px] text-[#8a8a8a] mt-2">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-[16px]">
              {locationStatsCol1.map((stat, i) => (
                <div key={i} className="flex flex-col gap-[4px] w-full">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-black">{stat.name}</span>
                    <span className="text-[10px]">{stat.percentage}%</span>
                  </div>
                  <div className="w-full h-[8px] rounded-[4px] bg-[#e1e1e1] overflow-hidden">
                    <div className={`h-full ${stat.color} transition-all duration-500`} style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-[16px]">
              {locationStatsCol2.map((stat, i) => (
                <div key={i} className="flex flex-col gap-[4px] w-full">
                  <div className="flex items-baseline justify-between">
                    <span className="font-semibold text-black">{stat.name}</span>
                    <span className="text-[10px]">{stat.percentage}%</span>
                  </div>
                  <div className="w-full h-[8px] rounded-[4px] bg-[#e1e1e1] overflow-hidden">
                    <div className={`h-full ${stat.color} transition-all duration-500`} style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shipping Revenue */}
        <div className="w-full xl:w-[350px] rounded-[12px] bg-white p-[16px_16px_8px] flex flex-col gap-[16px] shrink-0 min-h-[400px]">
           {/* Header */}
           <div className="flex items-center justify-between gap-[20px]">
             <h3 className="font-medium text-[18px] tracking-[-0.01em] leading-[120%]">Shipping Revenue</h3>
             {/* Dropdown */}
             <button className="bg-[#f0f0f0] rounded-[8px] flex items-center justify-between px-[10px] py-[6px] text-[12px] font-nunito font-semibold w-[90px]">
               <span>This Year</span>
               <ChevronDown size={14} />
             </button>
           </div>

           {/* Donut Chart */}
           <div className="flex-1 relative flex items-center justify-center font-nunito mt-4">
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 text-center pointer-events-none">
                 <span className="text-[10px] text-[#8a8a8a]">Total Revenue</span>
                 <span className="text-[20px] leading-[120%] text-[#333] font-bold mt-1 mb-1">$473,265</span>
                 <span className="text-[10px] text-[#8a8a8a]">81% from Target Revenue</span>
              </div>
              
              {/* SVG Donut */}
              <svg width="220" height="220" viewBox="0 0 200 200" className="transform -rotate-90">
                <circle
                  cx="100" cy="100" r={radius}
                  fill="none" stroke="#e1e1e1" strokeWidth="15"
                />
                <circle
                  cx="100" cy="100" r={radius}
                  fill="none" stroke="#2a2a7c" strokeWidth="15"
                  strokeDasharray={circumference}
                  strokeDashoffset={strokeDashoffset}
                  strokeLinecap="round"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
           </div>

           {/* Sparkline Decorative */}
           <div className="w-full h-[40px] border-t-2 border-[#f0f0f0] mt-4 flex items-end justify-between px-2 pt-4">
              {[30, 45, 20, 60, 80, 50, 90, 40, 70].map((val, i) => (
                <div key={i} className="w-[12px] bg-gradient-to-t from-gray-200 to-gray-100 rounded-t-[4px]" style={{ height: `${val}%` }}></div>
              ))}
           </div>
        </div>

      </div>

      {/* Bottom Section: Recent Shipment Table */}
      <div className="w-full rounded-[12px] bg-white p-[16px] flex flex-col gap-[16px] font-nunito text-[#333]">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-[12px]">
          <h3 className="font-work font-medium text-[18px] tracking-[-0.01em]">Recent Shipment</h3>
          <div className="flex items-center gap-[12px] text-[12px] text-[#8a8a8a]">
            {/* Search */}
            <div className="flex items-center gap-[6px] bg-[#f0f0f0] rounded-[8px] px-[8px] py-[6px] w-[193px]">
              <Search size={16} />
              <input type="text" placeholder="Search.." className="bg-transparent border-none outline-none flex-1 text-[#333]" />
            </div>
            {/* Filter button */}
            <button className="bg-[#f0f0f0] rounded-[8px] p-[6px] hover:bg-gray-200 transition-colors flex items-center justify-center">
              <Search size={16} /> {/* Placeholder for filter icon */}
            </button>
            {/* Pagination */}
            <div className="flex items-center gap-[4px] ml-2 font-semibold text-[#333]">
              <span>1 - 10 of 120</span>
              <div className="flex items-center">
                <button className="p-[4px] hover:bg-gray-100 rounded-lg"><ChevronLeft size={16} /></button>
                <button className="p-[4px] hover:bg-gray-100 rounded-lg"><ChevronRight size={16} /></button>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="w-full overflow-x-auto">
          <div className="min-w-[850px] w-full flex flex-col gap-[2px] text-[12px]">
            {/* Table Header */}
            <div className="w-full bg-[#f5f5f5] rounded-t-[6px] flex items-center px-[8px] py-[4px] text-[#333] font-semibold">
              <div className="w-[100px] p-[10px_4px] flex items-center gap-[4px]">Order ID <ChevronDown size={12}/></div>
              <div className="w-[120px] p-[10px_4px] flex items-center gap-[4px]">Company <ChevronDown size={12}/></div>
              <div className="w-[110px] p-[10px_4px] flex items-center gap-[4px]">Shipping Date <ChevronDown size={12}/></div>
              <div className="w-[110px] p-[10px_4px] flex items-center gap-[4px]">Estimate Date <ChevronDown size={12}/></div>
              <div className="flex-1 p-[10px_4px] flex items-center gap-[4px]">Route <ChevronDown size={12}/></div>
              <div className="w-[80px] p-[10px_4px] flex items-center gap-[4px]">Price <ChevronDown size={12}/></div>
              <div className="w-[120px] p-[10px_4px] flex items-center gap-[4px]">Status <ChevronDown size={12}/></div>
            </div>

            {/* Table Rows */}
            <div className="w-full flex flex-col">
              {recentShipments.map((shipment, idx) => (
                <div key={idx} className="w-full flex items-center px-[8px] py-[4px] border-b border-[#f0f0f0] hover:bg-gray-50 transition-colors font-semibold">
                  <div className="w-[100px] p-[10px_4px]">{shipment.id}</div>
                  <div className="w-[120px] p-[10px_4px]">{shipment.company}</div>
                  <div className="w-[110px] p-[10px_4px]">{shipment.shipDate}</div>
                  <div className="w-[110px] p-[10px_4px]">{shipment.estDate}</div>
                  <div className="flex-1 p-[10px_4px] truncate">{shipment.route}</div>
                  <div className="w-[80px] p-[10px_4px]">{shipment.price}</div>
                  <div className="w-[120px] p-[10px_4px]">
                    <span className={`px-[8px] py-[2px] rounded-full text-[10px] ${getStatusColor(shipment.status)}`}>
                      {shipment.status}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default OrderDetailsView;
