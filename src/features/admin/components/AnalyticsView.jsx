import React from 'react';
import { Package, Truck, CheckCircle, Search, ChevronLeft, ChevronRight, ArrowUpRight, ArrowDownRight, MoreVertical } from 'lucide-react';

const AnalyticsView = () => {
  // KPI Data
  const kpiData = [
    {
      title: 'Total Shipments',
      count: '1,256',
      percentage: '12%',
      isPositive: true,
      icon: <Package size={20} className="text-[#64748B]" />,
      iconBg: 'bg-[#f3f4f6]'
    },
    {
      title: 'In Transit',
      count: '432',
      percentage: '5%',
      isPositive: false,
      icon: <Truck size={20} className="text-[#ea580c]" />,
      iconBg: 'bg-[#fff7ed]'
    },
    {
      title: 'Delivered',
      count: '763',
      percentage: '8%',
      isPositive: true,
      icon: <CheckCircle size={20} className="text-[#64748B]" />,
      iconBg: 'bg-[#fbfbfb]'
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

  // Mock data for Bar Chart
  const chartData = [
    { month: 'Jan', val: 30 },
    { month: 'Feb', val: 50 },
    { month: 'Mar', val: 40 },
    { month: 'Apr', val: 70 },
    { month: 'May', val: 90 },
    { month: 'Jun', val: 65 },
    { month: 'Jul', val: 80 },
  ];

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
            <div className="flex flex-col gap-[8px]">
              <span className="text-[32px] font-medium text-[#1e2939] leading-[120%]">{kpi.count}</span>
              <div className="flex items-center gap-[20px] text-[14px]">
                <div className={`flex items-center gap-[4px] px-[12px] py-[4px] rounded-full font-semibold ${kpi.isPositive ? 'bg-[#eff6ff] text-[#00bc7d]' : 'bg-[#ffdfe3] text-[#fb2c36]'}`}>
                  {kpi.isPositive ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                  {kpi.percentage}
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
        <div className="flex-1 rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px_28px] flex flex-col gap-[20px] min-h-[423px] relative overflow-hidden">
          <div className="flex items-center justify-between">
             <div className="flex flex-col gap-[4px]">
               <h3 className="font-work font-medium text-[18px] tracking-[-0.01em]">Logistics Performance</h3>
               <p className="text-[13px] text-[#797979] tracking-[-0.02em]">You can see monthly logistic volume from here</p>
             </div>
             <button className="w-[24px] h-[24px] rounded-full border border-[#e6e7ea] flex items-center justify-center shadow-sm text-gray-400">
               <MoreVertical size={14} />
             </button>
          </div>
          
          {/* Simple Bar Chart Representation */}
          <div className="flex-1 flex w-full mt-4">
             {/* Y-Axis */}
             <div className="flex flex-col justify-between text-[13px] font-medium text-[#797979] tracking-[-0.02em] pb-[20px]">
               <span>$100K</span>
               <span>$75K</span>
               <span>$50K</span>
               <span>$25K</span>
               <span>$0K</span>
             </div>
             {/* Bars area */}
             <div className="flex-1 flex items-end justify-between ml-[20px] relative pb-[20px] h-[300px]">
                {/* Horizontal Grid lines */}
                <div className="absolute inset-0 flex flex-col justify-between z-0 pb-[20px]">
                  {[...Array(5)].map((_, i) => (
                    <div key={i} className="w-full border-t border-gray-100"></div>
                  ))}
                </div>
                {/* Bars */}
                {chartData.map((data, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center gap-[10px] group w-[40px] sm:w-[60px]">
                    <div 
                      className="w-full bg-[#2a2a7c] rounded-t-[8px] transition-all duration-300 group-hover:bg-[#3b3b9b] opacity-90"
                      style={{ height: `${data.val}%` }}
                    ></div>
                    <span className="absolute bottom-[-24px] text-[13px] font-medium text-[#797979]">{data.month}</span>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* Routes in Transit */}
        <div className="w-full xl:w-[380px] rounded-[24px] bg-white border border-[#efeff1] shadow-[0_4px_18px_rgba(230,229,234,0.27)] p-[24px] flex flex-col shrink-0 min-h-[423px] font-work text-[10px]">
           <div className="flex items-center justify-between mb-[20px]">
             <h3 className="font-medium text-[18px] tracking-[-0.01em]">Routes in Transit</h3>
             <button className="w-[24px] h-[24px] rounded-full border border-[#e6e7ea] flex items-center justify-center shadow-sm text-gray-400">
               <MoreVertical size={14} />
             </button>
           </div>

           <div className="flex flex-col gap-[16px]">
              {/* Package 1 */}
              <div className="w-full rounded-[20px] bg-[#2a2a7c] p-[20px] flex flex-col gap-[16px] text-white relative">
                 <button className="absolute top-[20px] right-[20px] text-white/50 hover:text-white"><MoreVertical size={16} /></button>
                 <div className="flex flex-col gap-[2px]">
                   <span className="font-semibold text-[15px] tracking-[-0.02em]">Wardrobe Package</span>
                   <span className="text-[10px] tracking-[-0.02em] text-white/80"><span className="font-semibold">Invoice Number:</span> 3823KRU8429</span>
                 </div>
                 
                 {/* Timeline Line */}
                 <div className="relative w-full h-[30px] flex items-center mt-2">
                    <div className="absolute left-0 w-full h-[5px] flex rounded-[20px] overflow-hidden">
                      <div className="w-1/2 bg-white/30 h-full"></div>
                      <div className="w-1/2 bg-[#ffcd51] h-full"></div>
                    </div>
                    {/* Dots */}
                    <div className="absolute left-0 w-[16px] h-[16px] rounded-full bg-[#2a2a7c] border-[2px] border-white z-10"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-white flex items-center justify-center z-10 shadow-sm text-[#2a2a7c]">
                       <Truck size={12} strokeWidth={3} />
                    </div>
                    <div className="absolute right-0 w-[16px] h-[16px] rounded-full bg-[#2a2a7c] border-[2px] border-white z-10"></div>
                 </div>

                 {/* Locations */}
                 <div className="flex justify-between mt-2">
                    <div className="flex flex-col text-left">
                       <span className="text-white/80">10:11 AM, May 1</span>
                       <span className="font-bold text-[12px]">San Fransisco, USA</span>
                    </div>
                    <div className="flex flex-col text-right">
                       <span className="text-white/80">10:11 AM, May 28</span>
                       <span className="font-bold text-[12px]">San Jose, Mexico</span>
                    </div>
                 </div>
              </div>

              {/* Package 2 */}
              <div className="w-full rounded-[20px] bg-white border border-[#efeff1] shadow-sm p-[20px] flex flex-col gap-[16px] text-black relative">
                 <button className="absolute top-[20px] right-[20px] text-gray-400 hover:text-gray-600"><MoreVertical size={16} /></button>
                 <div className="flex flex-col gap-[2px]">
                   <span className="font-semibold text-[15px] tracking-[-0.02em]">Gadget Package</span>
                   <span className="text-[10px] tracking-[-0.02em] text-gray-500"><span className="font-semibold text-black">Invoice Number:</span> 3823KRU8429</span>
                 </div>
                 
                 {/* Timeline Line */}
                 <div className="relative w-full h-[30px] flex items-center mt-2">
                    <div className="absolute left-0 w-full h-[5px] flex rounded-[20px] overflow-hidden">
                      <div className="w-1/2 bg-[#2a2a7c]/20 h-full"></div>
                      <div className="w-1/2 bg-[#2a2a7c] h-full"></div>
                    </div>
                    {/* Dots */}
                    <div className="absolute left-0 w-[16px] h-[16px] rounded-full bg-white border-[2px] border-[#2a2a7c] z-10"></div>
                    <div className="absolute left-1/2 -translate-x-1/2 w-[24px] h-[24px] rounded-full bg-[#2a2a7c] flex items-center justify-center z-10 shadow-sm text-white border-[2px] border-[#f5f5f5]">
                       <Truck size={12} strokeWidth={3} />
                    </div>
                    <div className="absolute right-0 w-[16px] h-[16px] rounded-full bg-white border-[2px] border-[#2a2a7c] z-10"></div>
                 </div>

                 {/* Locations */}
                 <div className="flex justify-between mt-2">
                    <div className="flex flex-col text-left">
                       <span className="text-gray-500">10:11 AM, May 1</span>
                       <span className="font-bold text-[12px]">Orange City, USA</span>
                    </div>
                    <div className="flex flex-col text-right">
                       <span className="text-gray-500">10:11 AM, May 28</span>
                       <span className="font-bold text-[12px]">Atlanta, USA</span>
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
