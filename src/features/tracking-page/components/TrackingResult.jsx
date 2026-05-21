import React from 'react';
import { Download } from 'lucide-react';

const TrackingResult = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center py-[80px] px-4 md:px-[90px] gap-[69px] font-sans">
      
      {/* Heading */}
      <div className="w-full max-w-[877px] flex flex-col items-center gap-[20px] text-center">
        <h2 className="text-[32px] md:text-[40px] font-medium leading-[120%] text-[#191919]">
          Order Tracking
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[120%] text-black/60 font-bold">
          Order tracking is a service provided by companies to allow customers to monitor the progress and location of their purchases from the time they are placed until they are delivered.
        </p>
      </div>

      {/* Tracking Card */}
      <div className="w-full max-w-[1260px] shadow-[0_0_25px_rgba(0,0,0,0.08)] rounded-[24px] bg-white flex flex-col p-[24px] md:p-[45px_46px] gap-[40px] md:gap-[67px]">
        
        {/* Top Section */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
          <h3 className="text-[24px] md:text-[28px] font-medium leading-[120%] text-[#191919]">
            Order Details
          </h3>
          <button className="rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center px-[30px] py-[16px] md:py-[20px] gap-[12px] md:gap-[24px] text-[18px] md:text-[20px] hover:bg-[#2a2a7c]/90 transition-colors w-full md:w-auto">
            <span>Download Invoice</span>
            <Download size={24} />
          </button>
        </div>

        {/* Order Info Row */}
        <div className="w-full flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px] md:gap-0 px-0 md:px-[12px] text-[#191919]">
          
          <div className="flex flex-col gap-[11px] w-full md:w-[181px]">
            <span className="text-[16px] md:text-[18px] leading-[120%] font-bold">Order Number</span>
            <span className="text-[24px] md:text-[28px] leading-[120%] font-medium">#2315482546</span>
          </div>

          <div className="hidden md:block h-[50px] w-[1px] bg-black/20"></div>

          <div className="flex flex-col gap-[11px] w-full md:w-[181px]">
            <span className="text-[16px] md:text-[18px] leading-[120%] font-bold">Order Placed</span>
            <span className="text-[24px] md:text-[28px] leading-[120%] font-medium">Feb 20, 2027</span>
          </div>

          <div className="hidden md:block h-[50px] w-[1px] bg-black/20"></div>

          <div className="flex flex-col gap-[11px] w-full md:w-[181px]">
            <span className="text-[16px] md:text-[18px] leading-[120%] font-bold">Order Delivered</span>
            <span className="text-[24px] md:text-[28px] leading-[120%] font-medium">Feb 23, 2027</span>
          </div>

          <div className="hidden md:block h-[50px] w-[1px] bg-black/20"></div>

          <div className="flex flex-col gap-[11px] w-full md:w-[181px]">
            <span className="text-[16px] md:text-[18px] leading-[120%] font-bold">No of Items</span>
            <span className="text-[24px] md:text-[28px] leading-[120%] font-medium">2 items</span>
          </div>

          <div className="hidden md:block h-[50px] w-[1px] bg-black/20"></div>

          <div className="flex flex-col gap-[11px] w-full md:w-[181px]">
            <span className="text-[16px] md:text-[18px] leading-[120%] font-bold">Status</span>
            <span className="text-[24px] md:text-[28px] leading-[120%] font-medium text-[#fb2c36]">Transit</span>
          </div>

        </div>

        {/* Timeline Component */}
        <div className="w-full relative flex flex-col md:flex-row justify-between items-start mt-8 md:mt-0 pt-4 md:pt-0">
          
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:flex absolute top-[30px] left-[5%] w-[90%] items-center z-0">
             <div className="h-[2px] w-[70%] border-t-[2px] border-dashed border-black"></div>
             <div className="h-[2px] w-[30%] border-t-[2px] border-dashed border-black/40"></div>
          </div>
          
          {/* Connecting Line (Mobile) */}
          <div className="md:hidden absolute left-[30px] top-[10%] h-[80%] border-l-[2px] border-dashed border-black z-0"></div>

          {/* Step 1 */}
          <div className="flex flex-row md:flex-col items-center gap-[18px] z-10 bg-white md:bg-transparent py-4 md:py-0 w-full md:w-auto">
            <div className="w-[60px] h-[60px] rounded-full bg-[#2a2a7c] flex items-center justify-center text-white text-[23.33px] font-semibold shrink-0">
              01
            </div>
            <div className="flex flex-col items-start md:items-center text-left md:text-center text-[#2a2a7c] gap-[4px]">
              <span className="font-bold text-[14px] leading-[120%]">Order Placed</span>
              <span className="text-[20px] leading-[140%]">Feb 20th, 2024</span>
            </div>
          </div>

          {/* Step 2 */}
          <div className="flex flex-row md:flex-col items-center gap-[18px] z-10 bg-white md:bg-transparent py-4 md:py-0 w-full md:w-auto">
            <div className="w-[60px] h-[60px] rounded-full bg-[#2a2a7c] flex items-center justify-center text-white text-[23.33px] font-semibold shrink-0">
              02
            </div>
            <div className="flex flex-col items-start md:items-center text-left md:text-center text-[#2a2a7c] gap-[4px]">
              <span className="font-bold text-[14px] leading-[120%]">Order Packed</span>
              <span className="text-[20px] leading-[140%]">Feb 20th, 2024</span>
            </div>
          </div>

          {/* Step 3 */}
          <div className="flex flex-row md:flex-col items-center gap-[18px] z-10 bg-white md:bg-transparent py-4 md:py-0 w-full md:w-auto">
            <div className="w-[60px] h-[60px] rounded-full bg-[#2a2a7c] flex items-center justify-center text-white text-[23.33px] font-semibold shrink-0">
              03
            </div>
            <div className="flex flex-col items-start md:items-center text-left md:text-center text-[#2a2a7c] gap-[4px]">
              <span className="font-bold text-[14px] leading-[120%]">In Transit</span>
              <span className="text-[20px] leading-[140%]">Feb 21th, 2024</span>
            </div>
          </div>

          {/* Step 4 */}
          <div className="flex flex-row md:flex-col items-center gap-[18px] z-10 bg-white md:bg-transparent py-4 md:py-0 w-full md:w-auto opacity-60">
            <div className="w-[60px] h-[60px] rounded-full border-[1.7px] border-black bg-white flex items-center justify-center text-black text-[23.33px] font-semibold shrink-0">
              04
            </div>
            <div className="flex flex-col items-start md:items-center text-left md:text-center text-black gap-[4px]">
              <span className="font-bold text-[14px] leading-[120%]">Out for Delivery</span>
              <span className="text-[20px] leading-[140%]">Feb 23th, 2024</span>
            </div>
          </div>

        </div>

      </div>

    </section>
  );
};

export default TrackingResult;
