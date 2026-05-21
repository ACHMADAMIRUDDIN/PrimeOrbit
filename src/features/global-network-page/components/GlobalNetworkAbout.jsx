import React from 'react';
import image from '../../../assets/image';
import { ArrowUpRight, Cpu, LineChart } from 'lucide-react';

const GlobalNetworkAbout = () => {
  return (
    <section className="w-full bg-white flex flex-col items-center p-[40px] md:p-[80px] gap-[60px] font-sans text-black">
      
      {/* Title */}
      <h2 className="w-full max-w-[1320px] text-[24px] md:text-[32px] leading-[120%] font-medium">
        We operate multiple branch offices to support smooth and efficient business operations for our partners.
      </h2>

      {/* Accordion / List Content */}
      <div className="w-full max-w-[1320px] flex flex-col">
        
        {/* Item 01 */}
        <div className="w-full border-b border-black/10 flex flex-col md:flex-row items-start md:items-center py-[40px] pr-0 md:pr-[44px] gap-[20px] md:gap-[40px]">
          <span className="text-[20px] md:text-[28px] font-medium leading-[120%] shrink-0">01</span>
          <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
            <h3 className="text-[20px] md:text-[28px] font-medium leading-[120%]">Top 3 Global Shipping Company</h3>
            <p className="w-full md:max-w-[494px] text-[16px] md:text-[18px] leading-[140%] font-figtree text-[#111]">
              Recognized as one of the world's largest integrated logistics providers by container volume and global presence.
            </p>
          </div>
        </div>

        {/* Item 02 (With Image Expansion) */}
        <div className="w-full flex flex-col pt-[24px] gap-[40px]">
          
          <div className="flex flex-col md:flex-row items-start md:items-center py-[20px] pr-0 md:pr-[44px] gap-[20px] md:gap-[40px]">
             <span className="text-[20px] md:text-[28px] font-medium leading-[120%] shrink-0">02</span>
             <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
               <h3 className="text-[20px] md:text-[28px] font-medium leading-[120%]">Smart Logistics Pioneer</h3>
               <p className="w-full md:max-w-[536px] text-[16px] md:text-[18px] leading-[140%] font-figtree text-[#111]">
                 Among the first to implement AI-driven route optimization and blockchain-enabled cargo tracking.
               </p>
               <div className="w-[44px] h-[44px] rounded-full bg-[#2a2a7c] hidden lg:flex items-center justify-center shrink-0">
                 <ArrowUpRight size={20} className="text-white" />
               </div>
             </div>
          </div>

          {/* Large Image Card */}
          <div className="w-full h-[400px] md:h-[580px] rounded-[24px] relative overflow-hidden bg-gray-200">
             <img src={image.containerSupervisor} alt="Smart Logistics" className="absolute w-full h-full object-cover" />
             
             {/* Info Box Inside Image */}
             <div className="absolute top-[20px] md:top-[40px] left-[20px] md:left-[40px] w-[90%] md:w-[475px] bg-white rounded-[24px] p-[24px] flex flex-col gap-[30px] md:gap-[40px]">
               <div className="flex flex-col gap-[16px]">
                  <h4 className="text-[24px] md:text-[32px] leading-[120%] font-medium">Smart Logistics, <br/>Smarter Future</h4>
                  <p className="text-[14px] md:text-[18px] leading-[120%] opacity-60 font-semibold">
                    At PrimeOrbit, technology isn't an add-on it's the core of how we move faster, safer, and smarter. From AI to blockchain, we continuously evolve to lead the future of global logistics.
                  </p>
               </div>
               
               <div className="flex flex-col gap-[20px] md:gap-[24px] text-[16px] md:text-[18px]">
                 <div className="flex items-center gap-[12px]">
                   <Cpu size={24} className="text-[#2a2a7c] shrink-0" />
                   <span className="font-medium leading-[120%] tracking-[-0.01em]">AI-Powered Route Optimization</span>
                 </div>
                 <div className="flex items-center gap-[12px]">
                   <LineChart size={24} className="text-[#2a2a7c] shrink-0" />
                   <span className="font-medium leading-[120%] tracking-[-0.01em]">Predictive Analytics for Demand Forecasting</span>
                 </div>
               </div>
             </div>
          </div>

        </div>

        {/* Item 03 */}
        <div className="w-full border-b border-black/10 flex flex-col md:flex-row items-start md:items-center py-[40px] pr-0 md:pr-[44px] gap-[20px] md:gap-[40px]">
          <div className="flex items-center gap-[20px] md:gap-[40px] md:w-auto">
             <span className="text-[20px] md:text-[28px] font-medium leading-[120%] shrink-0">03</span>
             <h3 className="text-[20px] md:text-[28px] font-medium leading-[120%]">21 Million+ TEUs Handled Annually</h3>
          </div>
          <div className="flex-1 flex justify-end">
             <p className="w-full md:max-w-[417px] text-[16px] md:text-[18px] leading-[140%] font-figtree text-[#111]">
               Efficiently moving millions of containers across seas and borders, fueling international trade.
             </p>
          </div>
        </div>

        {/* Item 04 */}
        <div className="w-full border-b border-black/10 flex flex-col md:flex-row items-start md:items-center py-[40px] pr-0 md:pr-[44px] gap-[20px] md:gap-[40px]">
          <div className="flex items-center gap-[20px] md:gap-[40px] md:w-auto">
             <span className="text-[20px] md:text-[28px] font-medium leading-[120%] shrink-0">04</span>
             <h3 className="text-[20px] md:text-[28px] font-medium leading-[120%]">Sustainability Leadership</h3>
          </div>
          <div className="flex-1 flex justify-end">
             <p className="w-full md:max-w-[417px] text-[16px] md:text-[18px] leading-[140%] font-figtree text-[#111]">
               Awarded for green shipping initiatives and fleet upgrades aimed at reducing carbon emissions.
             </p>
          </div>
        </div>

      </div>

    </section>
  );
};

export default GlobalNetworkAbout;
