import React from 'react';
import { Search, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';
import mapImg from '../../UI/adminicon/Map.png';

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
    { name: 'DKI Jakarta', percentage: 96, color: 'bg-[#20236a]' },
    { name: 'West Java', percentage: 83, color: 'bg-[#20236a]' },
    { name: 'Bali', percentage: 76, color: 'bg-[#20236a]' },
  ];

  const locationStatsCol2 = [
    { name: 'East Java', percentage: 56, color: 'bg-[#ffcd51]' },
    { name: 'DIY Yogyakarta', percentage: 43, color: 'bg-[#ffcd51]' },
    { name: 'Central Java', percentage: 33, color: 'bg-[#c5c5c7]' },
  ];



  return (
    <div className="flex flex-col gap-[24px] font-work text-black w-full min-w-0 max-w-full">
      
      {/* Top Section: Split Widgets */}
      <div className="flex flex-col xl:flex-row gap-[20px] w-full">
        
        {/* Shipping Location */}
        <div className="flex-1 rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px] flex flex-col gap-[20px] min-h-[450px]">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-[16px]">
             <div className="flex flex-col gap-[8px]">
                <h3 className="font-work font-medium text-[18px] tracking-[-0.01em] text-[#191919] leading-[120%]">Shipping Location</h3>
                {/* Legend */}
                <div className="flex items-center gap-[15px] text-[12px] text-[#797979] font-work font-medium">
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#ef4444]"></div>
                    <span>Most</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#20236a]"></div>
                    <span>Medium</span>
                  </div>
                  <div className="flex items-center gap-[6px]">
                    <div className="w-[8px] h-[8px] rounded-full bg-[#d1d5db]"></div>
                    <span>Low</span>
                  </div>
                </div>
             </div>
             
             {/* Dropdown */}
             <button className="bg-gray-50 border border-gray-100 rounded-[8px] flex items-center justify-between px-[12px] py-[6px] text-[12px] font-work font-medium text-gray-600 hover:bg-gray-100 transition-colors w-[130px]">
               <span>Last 8 Months</span>
               <ChevronDown size={14} className="text-gray-400" />
             </button>
          </div>

          {/* Map Area (Custom SVG Java & Bali Map) */}
          <div className="w-full h-[295px] rounded-[16px] bg-[#f9fafb] relative overflow-hidden flex items-center justify-center border border-[#efeff1] p-2">
             <img src={mapImg} alt="Shipping Location Map" className="w-full h-full object-contain scale-[1.3]" />
          </div>

          {/* Stats Progress Bars */}
          <div className="flex flex-col sm:flex-row gap-[24px] font-work text-[14px] text-[#797979] mt-2">
            {/* Column 1 */}
            <div className="flex-1 flex flex-col gap-[16px]">
              {locationStatsCol1.map((stat, i) => (
                <div key={i} className="flex flex-col gap-[6px] w-full">
                  <div className="flex items-baseline justify-between font-medium">
                    <span className="text-[#191919]">{stat.name}</span>
                    <span className="text-[13px] text-[#797979]">{stat.percentage}%</span>
                  </div>
                  <div className="w-full h-[8px] rounded-full bg-[#efeff1] overflow-hidden">
                    <div className={`h-full ${stat.color} rounded-full transition-all duration-500`} style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div className="flex-1 flex flex-col gap-[16px]">
              {locationStatsCol2.map((stat, i) => (
                <div key={i} className="flex flex-col gap-[6px] w-full">
                  <div className="flex items-baseline justify-between font-medium">
                    <span className="text-[#191919]">{stat.name}</span>
                    <span className="text-[13px] text-[#797979]">{stat.percentage}%</span>
                  </div>
                  <div className="w-full h-[8px] rounded-full bg-[#efeff1] overflow-hidden">
                    <div className={`h-full ${stat.color} rounded-full transition-all duration-500`} style={{ width: `${stat.percentage}%` }}></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Shipping Revenue */}
        <div className="w-full xl:w-[420px] rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px] flex flex-col gap-[20px] shrink-0 min-h-[450px]">
           {/* Header */}
           <div className="flex items-center justify-between gap-[20px]">
             <h3 className="font-work font-medium text-[18px] tracking-[-0.01em] text-[#191919]">Shipping Revenue</h3>
             {/* Dropdown */}
             <button className="bg-gray-50 border border-gray-100 rounded-[8px] flex items-center justify-between px-[12px] py-[6px] text-[12px] font-work font-medium text-gray-600 hover:bg-gray-100 transition-colors w-[105px]">
               <span>This Year</span>
               <ChevronDown size={14} className="text-gray-400" />
             </button>
           </div>

           {/* Semi-Circle Gauge */}
           <div className="relative flex items-center justify-center font-work mt-2 h-[130px]">
              <div className="absolute inset-x-0 bottom-[8px] flex flex-col items-center justify-center text-center pointer-events-none">
                 <span className="text-[12px] text-[#797979] font-medium tracking-[-0.01em]">Total Revenue</span>
                 <span className="text-[26px] leading-[120%] text-[#20236a] font-bold mt-0.5 mb-0.5">$473,265</span>
                 <span className="text-[12px] text-[#797979] font-medium tracking-[-0.01em]">81% from Target Revenue</span>
              </div>
              
              {/* SVG Gauge */}
              <svg width="240" height="130" viewBox="0 0 240 130" xmlns="http://www.w3.org/2000/svg">
                {/* Background Arc */}
                <path 
                  d="M 30,120 A 90,90 0 0,1 210,120" 
                  fill="none" 
                  stroke="#efeff1" 
                  strokeWidth="20" 
                  strokeLinecap="round" 
                />
                {/* Active Arc (81% of 283 length is 229, dashoffset is 54) */}
                <path 
                  d="M 30,120 A 90,90 0 0,1 210,120" 
                  fill="none" 
                  stroke="#20236a" 
                  strokeWidth="20" 
                  strokeLinecap="round" 
                  strokeDasharray="283"
                  strokeDashoffset="54"
                  className="transition-all duration-1000 ease-out"
                />
              </svg>
           </div>

           {/* Divider Line */}
           <div className="w-full border-t border-[#efeff1]"></div>

           {/* Horizontal Bar Chart representation */}
           <div className="w-full">
              <svg viewBox="0 0 440 200" className="w-full h-auto" xmlns="http://www.w3.org/2000/svg">
                 {/* Vertical Dashed Grid lines */}
                 <line x1="40" y1="10" x2="40" y2="160" stroke="#f4f4f6" strokeWidth="1" strokeDasharray="3 3" />
                 <line x1="135" y1="10" x2="135" y2="160" stroke="#f4f4f6" strokeWidth="1" strokeDasharray="3 3" />
                 <line x1="230" y1="10" x2="230" y2="160" stroke="#f4f4f6" strokeWidth="1" strokeDasharray="3 3" />
                 <line x1="325" y1="10" x2="325" y2="160" stroke="#f4f4f6" strokeWidth="1" strokeDasharray="3 3" />
                 <line x1="420" y1="10" x2="420" y2="160" stroke="#f4f4f6" strokeWidth="1" strokeDasharray="3 3" />

                 {/* Bar Q1 */}
                 <rect x="40" y="20" width="380" height="18" fill="#f4f4f6" rx="4" />
                 <rect x="40" y="20" width="256" height="18" fill="#c5c5c7" rx="4" />
                 <text x="48" y="29" fill="#ffffff" fontSize="10.5" fontFamily="Work Sans, sans-serif" fontWeight="600" dominantBaseline="middle">$67,396</text>

                 {/* Bar Q2 (Highlighted Dark) */}
                 <rect x="40" y="60" width="380" height="18" fill="#f4f4f6" rx="4" />
                 <rect x="40" y="60" width="323" height="18" fill="#2d2d30" rx="4" />
                 <text x="48" y="69" fill="#ffffff" fontSize="10.5" fontFamily="Work Sans, sans-serif" fontWeight="600" dominantBaseline="middle">$84,899</text>

                 {/* Bar Q3 */}
                 <rect x="40" y="100" width="380" height="18" fill="#f4f4f6" rx="4" />
                 <rect x="40" y="100" width="216" height="18" fill="#c5c5c7" rx="4" />
                 <text x="48" y="109" fill="#ffffff" fontSize="10.5" fontFamily="Work Sans, sans-serif" fontWeight="600" dominantBaseline="middle">$56,822</text>

                 {/* Bar Q4 */}
                 <rect x="40" y="140" width="380" height="18" fill="#f4f4f6" rx="4" />
                 <rect x="40" y="140" width="221" height="18" fill="#c5c5c7" rx="4" />
                 <text x="48" y="149" fill="#ffffff" fontSize="10.5" fontFamily="Work Sans, sans-serif" fontWeight="600" dominantBaseline="middle">$58,113</text>

                 {/* Y-Axis Labels */}
                 <g fill="#797979" fontSize="13" fontFamily="Work Sans, sans-serif" fontWeight="500" textAnchor="end">
                    <text x="25" y="29" dominantBaseline="middle">Q1</text>
                    <text x="25" y="69" dominantBaseline="middle">Q2</text>
                    <text x="25" y="109" dominantBaseline="middle">Q3</text>
                    <text x="25" y="149" dominantBaseline="middle">Q4</text>
                 </g>

                 {/* X-Axis Labels */}
                 <g fill="#797979" fontSize="11" fontFamily="Work Sans, sans-serif" fontWeight="500" textAnchor="middle">
                    <text x="40" y="185">$0</text>
                    <text x="135" y="185">$25K</text>
                    <text x="230" y="185">$50K</text>
                    <text x="325" y="185">$75K</text>
                    <text x="420" y="185">$100K</text>
                 </g>
              </svg>
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
