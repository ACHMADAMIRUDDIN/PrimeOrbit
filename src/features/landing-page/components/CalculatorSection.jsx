import React from 'react';
import image from '../../../assets/image';

const CalculatorSection = () => {
  return (
    <section className="py-24 bg-gray-50 relative">
      <div
        className="absolute inset-0 z-0 opacity-20 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.seaAirCargo})` }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="bg-white rounded-[2.5rem] p-8 md:p-16 shadow-xl flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          <div className="lg:w-1/2">
            <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight mb-6">
              Get Accurate <br />
              Shipping Costs <br />
              In Seconds
            </h2>
            <p className="text-gray-500 mb-8 max-w-md text-sm leading-relaxed">
              Quickly calculate your shipping fee by entering the origin, destination, shipment type, weight, and package dimensions
            </p>
            <button className="bg-secondary text-white px-8 py-3 rounded-full hover:bg-secondary/90 transition-colors font-medium">
              Get Started
            </button>
          </div>

          <div className="lg:w-1/2 w-full">
            <div className="bg-[#F8F9FA] rounded-3xl p-6 md:p-8 border border-gray-100 shadow-inner">
              <div className="flex items-center gap-3 mb-8 pb-4 border-b border-gray-200">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-secondary font-semibold">T</span>
                </div>
                <h3 className="font-semibold text-secondary">Shipment Details</h3>
              </div>

              <form className="space-y-6">
                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                  <input type="text" placeholder="Singapore" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" defaultValue="Singapore" />
                </div>

                <div className="relative">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-blue-500"></div>
                  <input type="text" placeholder="Netherlands" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-10 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" defaultValue="Netherlands" />
                </div>

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">Type</label>
                  <select className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none">
                    <option>Industrial Equipment</option>
                    <option>Electronics</option>
                    <option>Medical Supplies</option>
                  </select>
                </div>

                <div className="flex gap-4">
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-2 font-medium">Weight</label>
                    <input type="text" defaultValue="125 kg" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                  <div className="flex-1">
                    <label className="block text-xs text-gray-500 mb-2 font-medium">Dimensions (L x W x H)</label>
                    <input type="text" defaultValue="120 x 80 x 75 cm" className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30" />
                  </div>
                </div>

                <button type="button" className="w-full bg-secondary text-white py-4 rounded-xl hover:bg-secondary/90 transition-colors font-medium mt-4">
                  Calculate
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CalculatorSection;
