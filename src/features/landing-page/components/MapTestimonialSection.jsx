import React from 'react';
import image from '../../../assets/image';

const MapTestimonialSection = () => {
  return (
    <section className="py-24 bg-white px-6 md:px-12">
      <div className="container mx-auto max-w-7xl">

        {/* Global Footprint Header */}
        <div className="mb-4">
          <p className="text-gray-400 text-xs tracking-widest uppercase font-medium mb-4">
            Global Footprint
          </p>
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary max-w-lg leading-tight">
              Successfully managing supply chains across 50+ countries and counting
            </h2>
            <p className="text-gray-500 max-w-sm text-sm">
              Quickly calculate your shipping fee by entering the origin, destination, shipment type, weight, and package dimensions
            </p>
          </div>
        </div>

        {/* Map Area Placeholder */}
        <div className="relative w-full h-[400px] bg-gray-50 rounded-3xl mb-24 flex items-center justify-center overflow-hidden border border-gray-100">
          <img src={image.seaAirCargo} alt="Global coverage" className="absolute inset-0 w-full h-full object-cover opacity-35" />
          <p className="text-gray-400 z-10 font-medium">Interactive Map Implementation</p>
        </div>

        {/* Testimonials Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary leading-tight">
            Smarter Routes, <br /> Faster Delivery
          </h2>
          <p className="text-gray-500 max-w-xs text-sm text-right">
            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

          {/* Card 1 */}
          <div className="bg-[#F0F2F5] rounded-3xl p-6 flex flex-col justify-between h-64">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src={image.clientPortraitWoman} alt="Melinda" className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-secondary/80 text-sm font-medium leading-relaxed">
                Completely always transformed our shipping process.
              </p>
            </div>
            <div>
              <h4 className="font-bold text-secondary text-sm">Melinda Angelin</h4>
              <p className="text-gray-500 text-xs">Supply Chain Manager</p>
            </div>
          </div>

          {/* Card 2 - Dark */}
          <div className="bg-[#323232] rounded-3xl p-6 flex flex-col justify-center h-64 shadow-xl">
            <h3 className="text-4xl font-bold text-white mb-2">11.23T+</h3>
            <p className="text-gray-400 text-sm mb-6">Global Logistics Market Value</p>
            <button className="bg-[#4338CA] hover:bg-indigo-600 text-white text-xs px-4 py-2 rounded-full w-fit transition-colors">
              Learn More
            </button>
          </div>

          {/* Card 3 */}
          <div className="bg-[#F0F2F5] rounded-3xl p-6 flex flex-col justify-between h-64">
            <div>
              <div className="w-10 h-10 rounded-full bg-blue-200 mb-4 overflow-hidden">
                <img src={image.clientPortraitMan} alt="Sophia" className="w-full h-full object-cover object-top" />
              </div>
              <p className="text-secondary/80 text-sm font-medium leading-relaxed">
                We trust PrimeOrbit for all our international shipments
              </p>
            </div>
            <div>
              <h4 className="font-bold text-secondary text-sm">Sophia Nguyen</h4>
              <p className="text-gray-500 text-xs">Operations Director</p>
            </div>
          </div>

          {/* Card 4 - Image Background */}
          <div className="relative rounded-3xl overflow-hidden h-64 group col-span-1 md:col-span-2 lg:col-span-1">
            <img src={image.clientPortraitWoman} alt="Olivia" className="w-full h-full object-cover object-top" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
              <h4 className="font-bold text-white text-sm">Olivia Martinez</h4>
              <p className="text-gray-300 text-xs">Business Owner</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MapTestimonialSection;
