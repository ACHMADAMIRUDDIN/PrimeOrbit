import React from 'react';
import image from '../../../assets/image';

const StatsSection = () => {
  return (
    <section className="bg-[#1C1C1C] text-white py-20 px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-16">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-white rounded-md flex items-center justify-center text-secondary font-bold text-xl italic">
              P
            </div>
          </div>
          <div className="text-gray-400 text-sm tracking-widest uppercase font-medium mt-6 md:mt-0">
            What Makes Us Different
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex gap-16 mb-12 border-b border-gray-800 pb-12">
              <div>
                <h3 className="text-5xl font-light mb-2">200<span className="text-primary">+</span></h3>
                <p className="text-gray-400 text-sm">Global Partners</p>
              </div>
              <div>
                <h3 className="text-5xl font-light mb-2">1.2M</h3>
                <p className="text-gray-400 text-sm">Successful Deliveries</p>
              </div>
            </div>

            <h2 className="text-3xl font-semibold mb-6">
              Optimizing complex supply chains with digital precision
            </h2>
            <p className="text-gray-400 leading-relaxed text-sm max-w-md">
              We provide end-to-end logistics solutions designed for the modern era. From intelligent warehousing to real-time fleet management, we streamline your operations for scalability.
            </p>
          </div>

          <div className="relative">
            <div className="rounded-2xl overflow-hidden h-[500px]">
              {/* Note: Placeholder for actual truck image from design */}
              <img
                src={image.roadTruck}
                alt="Logistics Truck"
                className="w-full h-full object-cover object-right"
              />
            </div>

            <div className="absolute -bottom-8 -left-8 md:-left-12 bg-[#2D3394] p-8 rounded-2xl shadow-xl max-w-[240px]">
              <p className="text-sm text-blue-200 mb-6 font-medium">
                On-time delivery rate across our global network
              </p>
              <h3 className="text-5xl font-bold text-white">99.9%</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
