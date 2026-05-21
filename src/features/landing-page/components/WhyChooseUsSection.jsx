import React from 'react';

const WhyChooseUsSection = () => {
  return (
    <section id="why-choose-us" className="py-[120px] bg-white flex flex-col items-center">
      <div className="w-full max-w-[1320px] px-4 md:px-[60px] flex flex-col gap-[80px]">
        
        {/* Header Content */}
        <div className="flex flex-col md:flex-row justify-between items-start gap-[40px] w-full">
          <div className="flex flex-col gap-[20px] max-w-[600px]">
            <h2 className="text-[40px] md:text-[58px] font-medium leading-[120%] text-[#2d2d2d] font-sans">
              PrimeOrbit is a smart logistics platform
            </h2>
          </div>
          <div className="flex flex-col gap-[30px] max-w-[400px]">
            <p className="text-[20px] leading-[140%] text-gray-500 font-inter">
              We streamline operations, from intelligent fleet management to real-time tracking, giving you total control and visibility.
            </p>
            <button className="bg-secondary text-white rounded-[100px] px-[32px] py-[16px] text-[18px] font-medium w-max hover:bg-secondary/90 transition-colors">
              Start Shipping
            </button>
          </div>
        </div>

        {/* 3 Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-[24px] w-full">
          
          <div className="bg-[#f8f9fa] rounded-[24px] p-[40px] flex flex-col gap-[20px] h-[320px]">
            <div className="w-[60px] h-[60px] bg-[#eef2ff] rounded-full flex items-center justify-center mb-4">
              <div className="w-[30px] h-[30px] bg-secondary rounded-md"></div>
            </div>
            <h3 className="text-[24px] font-medium text-[#2d2d2d] leading-[130%]">Smart Fleet Management</h3>
            <p className="text-[16px] text-gray-500 leading-[150%]">Optimize routing, reduce fuel costs, and ensure your fleet is always running efficiently.</p>
          </div>

          <div className="bg-[#f8f9fa] rounded-[24px] p-[40px] flex flex-col gap-[20px] h-[320px]">
            <div className="w-[60px] h-[60px] bg-[#fffbf0] rounded-full flex items-center justify-center mb-4">
              <div className="w-[30px] h-[30px] bg-primary rounded-md"></div>
            </div>
            <h3 className="text-[24px] font-medium text-[#2d2d2d] leading-[130%]">Automated Compliance</h3>
            <p className="text-[16px] text-gray-500 leading-[150%]">Never worry about documentation. We automate global shipping compliance rules.</p>
          </div>

          <div className="bg-[#f8f9fa] rounded-[24px] p-[40px] flex flex-col gap-[20px] h-[320px]">
            <div className="w-[60px] h-[60px] bg-[#f0fdf4] rounded-full flex items-center justify-center mb-4">
              <div className="w-[30px] h-[30px] bg-green-500 rounded-md"></div>
            </div>
            <h3 className="text-[24px] font-medium text-[#2d2d2d] leading-[130%]">Real-Time Visibility</h3>
            <p className="text-[16px] text-gray-500 leading-[150%]">Track every shipment down to the exact minute with our IoT-powered tracking systems.</p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default WhyChooseUsSection;
