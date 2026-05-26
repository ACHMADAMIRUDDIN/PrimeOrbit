import React from 'react';
import { Package, Truck, CheckCircle, Search, ChevronLeft, ChevronRight, MoreVertical, MoreHorizontal, Plane } from 'lucide-react';
import image from '../../../assets/image';

const AnalyticsView = () => {
  // KPI Data
  const kpiData = [
    {
      title: 'Total Shipments',
      count: '1,256',
      percentage: '12%',
      isPositive: true,
      icon: <Package size={20} className="text-[#64748B]" />,
      iconBg: 'bg-[#f3f4f6]',
      arrowImage: 'sdfsfsfsfsf'
    },
    {
      title: 'In Transit',
      count: '432',
      percentage: '5%',
      isPositive: false,
      icon: <Truck size={20} className="text-[#ea580c]" />,
      iconBg: 'bg-[#fff7ed]',
      arrowImage: 'dzcxzvcxvfd'
    },
    {
      title: 'Delivered',
      count: '763',
      percentage: '8%',
      isPositive: true,
      icon: <CheckCircle size={20} className="text-[#64748B]" />,
      iconBg: 'bg-[#fbfbfb]',
      arrowImage: 'sdfsfsfsfsf'
    }
  ];

  // Table Data
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


  return (
    <div className="flex flex-col gap-[24px] font-work text-black w-full min-w-0 max-w-full">
      
      {/* Top KPI Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-[20px] w-full">
        {kpiData.map((kpi, idx) => (
          <div key={idx} className="w-full rounded-[24px] bg-white p-[20px] flex flex-col gap-[8px] shadow-sm">
            <div className="flex items-center justify-between">
              <span className="font-medium tracking-[-0.01em] text-[18px]">{kpi.title}</span>
              <div className={`w-[35px] h-[35px] rounded-[10px] ${kpi.iconBg} flex items-center justify-center`}>
                {kpi.icon}
              </div>
            </div>
            <div className="flex flex-col gap-[8px] mt-[4px]">
              <span className="text-[32px] leading-[120%] font-medium text-[#1e2939]">{kpi.count}</span>
              <div className="flex items-center justify-between text-[14px]">
                <div className={`flex items-center gap-[8px] rounded-full ${kpi.isPositive ? 'bg-[#eff6ff] text-[#00bc7d]' : 'bg-[#ffdfe3] text-[#fb2c36]'} px-[12px] py-[6px]`}>
                  <img src={image[kpi.arrowImage]} alt="arrow" className="w-[12px] h-[8px] object-contain" />
                  <span className="font-semibold">{kpi.percentage}</span>
                </div>
                <span className="text-[#4a5565]">from last month</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Middle Section: Logistics Performance & Routes in Transit */}
      <div className="flex flex-col xl:flex-row gap-[20px] w-full font-jakarta">
        {/* Logistics Performance Chart */}
        <div className="flex-1 rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px_28px] flex flex-col gap-[20px] min-h-[560px] relative overflow-hidden">
          <div className="flex items-center justify-between">
             <div className="flex flex-col gap-[4px]">
                <h3 className="font-work font-medium text-[18px] tracking-[-0.01em]">Logistics Performance</h3>
                <p className="text-[13px] text-[#797979] tracking-[-0.02em]">You can see monthly logistic volume from here</p>
             </div>
             <button className="w-[24px] h-[24px] rounded-full border border-[#e6e7ea] flex items-center justify-center shadow-sm text-gray-400">
                <MoreVertical size={14} />
             </button>
          </div>
          {/* SVG Ribbon Area Chart Representation */}
          <div className="flex-1 flex items-center justify-center w-full mt-4 min-h-[420px]">
             <svg viewBox="0 0 600 360" className="w-full h-auto max-h-[450px]" xmlns="http://www.w3.org/2000/svg">
                <defs>
                   {/* Gradient for area below curve */}
                   <linearGradient id="lowerGrad" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#fdebc2" stopOpacity="0.4" />
                      <stop offset="100%" stopColor="#fdebc2" stopOpacity="0.0" />
                   </linearGradient>
                </defs>

                {/* Horizontal Grid lines */}
                <line x1="80" y1="30" x2="560" y2="30" stroke="#efeff1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="80" y1="100" x2="560" y2="100" stroke="#efeff1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="80" y1="170" x2="560" y2="170" stroke="#efeff1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="80" y1="240" x2="560" y2="240" stroke="#efeff1" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="80" y1="310" x2="560" y2="310" stroke="#efeff1" strokeWidth="1" strokeDasharray="3 3" />

                {/* Fading area below lower curve */}
                <path 
                   d="M 80,310 L 80,243 L 110,243 C 130,243 140,173 160,173 L 250,173 C 280,173 295,208 320,208 C 340,208 360,157 380,157 L 430,157 C 450,157 465,103 480,103 L 560,103 L 560,310 Z" 
                   fill="url(#lowerGrad)" 
                />

                {/* Ribbon fill between upper and lower curves */}
                <path 
                   d="M 80,205 L 110,205 C 130,205 140,135 160,135 L 250,135 C 280,135 295,170 320,170 C 340,170 360,119 380,119 L 430,119 C 450,119 465,65 480,65 L 560,65 L 560,103 L 480,103 C 465,103 450,157 430,157 L 380,157 C 360,157 340,208 320,208 C 295,208 280,173 250,173 L 160,173 C 140,173 130,243 110,243 L 80,243 Z" 
                   fill="#fdebc2" 
                   fillOpacity="0.95"
                />

                {/* Vertical Dashed Line near May */}
                <line x1="380" y1="30" x2="380" y2="310" stroke="#191919" strokeWidth="1.2" strokeDasharray="4 4" strokeOpacity="0.7" />

                {/* Upper Curve Line */}
                <path 
                   d="M 80,205 L 110,205 C 130,205 140,135 160,135 L 250,135 C 280,135 295,170 320,170 C 340,170 360,119 380,119 L 430,119 C 450,119 465,65 480,65 L 560,65" 
                   fill="none" 
                   stroke="#20236a" 
                   strokeWidth="2" 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                />

                {/* Lower Curve Line */}
                <path 
                   d="M 80,243 L 110,243 C 130,243 140,173 160,173 L 250,173 C 280,173 295,208 320,208 C 340,208 360,157 380,157 L 430,157 C 450,157 465,103 480,103 L 560,103" 
                   fill="none" 
                   stroke="#20236a" 
                   strokeWidth="2" 
                   strokeLinecap="round" 
                   strokeLinejoin="round" 
                />

                {/* Y-Axis Labels */}
                <g fill="#797979" fontSize="13" fontFamily="Work Sans, sans-serif" fontWeight="500" textAnchor="end">
                   <text x="65" y="30" dominantBaseline="middle">$100K</text>
                   <text x="65" y="100" dominantBaseline="middle">$75K</text>
                   <text x="65" y="170" dominantBaseline="middle">$50K</text>
                   <text x="65" y="240" dominantBaseline="middle">$25K</text>
                   <text x="65" y="310" dominantBaseline="middle">$0K</text>
                </g>

                {/* X-Axis Labels */}
                <g fill="#797979" fontSize="13" fontFamily="Work Sans, sans-serif" fontWeight="500" textAnchor="middle">
                   <text x="80" y="340">Jan</text>
                   <text x="160" y="340">Feb</text>
                   <text x="240" y="340">Mar</text>
                   <text x="320" y="340">Apr</text>
                   <text x="400" y="340">May</text>
                   <text x="480" y="340">Jun</text>
                   <text x="560" y="340">Jul</text>
                </g>
             </svg>
          </div>
        </div>

        {/* Routes in Transit */}
        <div className="w-full xl:w-[380px] rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px] flex flex-col shrink-0 min-h-[560px] font-work text-[10px]">
           <div className="flex items-center justify-between mb-[20px]">
             <h3 className="font-work font-medium text-[20px] md:text-[22px] tracking-[-0.01em] text-[#191919]">Routes in Transit</h3>
             <button className="w-[32px] h-[32px] rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-gray-500 hover:bg-gray-100 transition-colors">
               <MoreHorizontal size={16} />
             </button>
           </div>

           <div className="flex flex-col gap-[20px]">
              {/* Package 1 (Wardrobe) */}
              <div className="w-full rounded-[24px] bg-[#20236a] p-[24px] flex flex-col gap-[20px] text-white relative shadow-md">
                 <button className="absolute top-[24px] right-[24px] text-white/70 hover:text-white transition-colors">
                   <MoreHorizontal size={20} />
                 </button>
                 
                 <div className="flex flex-col gap-[4px]">
                   <span className="font-semibold text-[20px] tracking-tight leading-tight">Wardrobe Package</span>
                   <span className="text-[12px] opacity-80">Invoice Number: <span className="font-medium">3823KRU8429</span></span>
                 </div>
                 
                 {/* Progress Route Bar */}
                 <div className="relative w-full h-[32px] flex items-center justify-between mt-2 z-10">
                    {/* Yellow line connecting Truck (Circle 3) to right end */}
                    <div className="absolute left-[50%] right-[8px] h-[4px] bg-[#FFCD51] z-0"></div>
                    
                    {/* Circle 1 */}
                    <div className="w-[16px] h-[16px] rounded-full border-[2.2px] border-white bg-transparent shrink-0 z-10"></div>
                    {/* Circle 2 */}
                    <div className="w-[16px] h-[16px] rounded-full border-[2.2px] border-white bg-transparent shrink-0 z-10"></div>
                    
                    {/* Circle 3 (Truck) */}
                    <div className="w-[32px] h-[32px] rounded-full border-[2.2px] border-white bg-[#20236a] flex items-center justify-center text-white shrink-0 z-10 shadow-sm">
                       <Truck size={14} className="fill-white text-white" />
                    </div>
                    
                    {/* Circle 4 (Plane) */}
                    <div className="w-[32px] h-[32px] rounded-full bg-white flex items-center justify-center text-[#20236a] shrink-0 z-10 shadow-sm">
                       <Plane size={14} className="fill-[#20236a] text-[#20236a] rotate-45" />
                    </div>
                    
                    {/* Circle 5 */}
                    <div className="w-[16px] h-[16px] rounded-full border-[2.2px] border-white bg-transparent shrink-0 z-10"></div>
                 </div>

                 {/* Locations */}
                 <div className="flex justify-between mt-1 text-[12px] leading-tight">
                    <div className="flex flex-col text-left gap-[4px]">
                       <span className="opacity-80">10:11 AM, May 1</span>
                       <span className="font-semibold text-[15px]">San Fransisco, USA</span>
                    </div>
                    <div className="flex flex-col text-right gap-[4px]">
                       <span className="opacity-80">10:11 AM, May 28</span>
                       <span className="font-semibold text-[15px]">San Jose, Mexico</span>
                    </div>
                 </div>
              </div>

              {/* Package 2 (Gadget) */}
              <div className="w-full rounded-[24px] bg-white border border-gray-100 p-[24px] flex flex-col gap-[20px] text-[#191919] relative shadow-sm">
                 <button className="absolute top-[24px] right-[24px] text-gray-400 hover:text-gray-600 transition-colors">
                   <MoreHorizontal size={20} />
                 </button>
                 
                 <div className="flex flex-col gap-[4px]">
                   <span className="font-semibold text-[20px] tracking-tight leading-tight">Gadget Package</span>
                   <span className="text-[12px] text-gray-500">Invoice Number: <span className="font-medium text-gray-700">3823KRU8429</span></span>
                 </div>
                 
                 {/* Progress Route Bar */}
                 <div className="relative w-full h-[32px] flex items-center justify-between mt-2 z-10">
                    {/* Blue line connecting all circles */}
                    <div className="absolute left-[8px] right-[8px] h-[4px] bg-[#20236a] z-0"></div>
                    
                    {/* Circle 1 */}
                    <div className="w-[16px] h-[16px] rounded-full bg-[#20236a] shrink-0 z-10"></div>
                    {/* Circle 2 */}
                    <div className="w-[16px] h-[16px] rounded-full bg-[#20236a] shrink-0 z-10 border-[2.2px] border-white"></div>
                    
                    {/* Circle 3 (Truck) */}
                    <div className="w-[32px] h-[32px] rounded-full bg-[#20236a] flex items-center justify-center text-white shrink-0 z-10 shadow-sm border-[2.2px] border-white">
                       <Truck size={14} className="fill-white text-white" />
                    </div>
                    
                    {/* Circle 4 (Plane) */}
                    <div className="w-[32px] h-[32px] rounded-full bg-[#20236a] flex items-center justify-center text-white shrink-0 z-10 shadow-sm border-[2.2px] border-white">
                       <Plane size={14} className="fill-white text-white rotate-45" />
                    </div>
                    
                    {/* Circle 5 */}
                    <div className="w-[16px] h-[16px] rounded-full bg-[#20236a] shrink-0 z-10"></div>
                 </div>

                 {/* Locations */}
                 <div className="flex justify-between mt-1 text-[12px] leading-tight">
                    <div className="flex flex-col text-left gap-[4px]">
                       <span className="text-gray-500">10:11 AM, May 1</span>
                       <span className="font-semibold text-[15px]">Orange City, USA</span>
                    </div>
                    <div className="flex flex-col text-right gap-[4px]">
                       <span className="text-gray-500">10:11 AM, May 28</span>
                       <span className="font-semibold text-[15px]">Atlanta, USA</span>
                    </div>
                 </div>
              </div>
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
            <button className="bg-[#f0f0f0] rounded-[8px] p-[6px] hover:bg-gray-200 transition-colors">
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
              <div className="w-[100px] p-[10px_4px]">Order ID</div>
              <div className="w-[120px] p-[10px_4px]">Company</div>
              <div className="w-[110px] p-[10px_4px]">Shipping Date</div>
              <div className="w-[110px] p-[10px_4px]">Estimate Date</div>
              <div className="flex-1 p-[10px_4px]">Route</div>
              <div className="w-[80px] p-[10px_4px]">Price</div>
              <div className="w-[120px] p-[10px_4px]">Status</div>
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

export default AnalyticsView;
