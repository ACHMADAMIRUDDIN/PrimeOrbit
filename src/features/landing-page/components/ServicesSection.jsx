import React from 'react';
import image from '../../../assets/image';
import { Search, ArrowRight } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <h2 className="text-4xl md:text-5xl font-bold text-secondary leading-tight">
            Smarter Routes, <br /> Faster Delivery
          </h2>
          <p className="text-gray-500 max-w-xs text-sm">
            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Warehouse Card */}
          <div className="relative rounded-3xl overflow-hidden group h-[300px]">
            <img src={image.warehouseOperations} alt="Warehouse" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-xl font-semibold mb-2">Warehouse Management Solutions</h3>
              <p className="text-gray-300 text-sm">
                Warehouse Management Solutions enables businesses to manage inventory, storage, and warehouse operations efficiently through a single platform.
              </p>
            </div>
          </div>

          {/* Search/Tracking Mockup Card */}
          <div className="bg-gray-50 rounded-3xl p-8 h-[300px] border border-gray-100 flex flex-col">
            <div className="bg-white rounded-xl shadow-sm p-4 mb-4 flex items-center gap-3">
              <Search size={18} className="text-gray-400" />
              <span className="text-gray-400 text-sm">Search</span>
            </div>

            <div className="bg-white rounded-xl shadow-sm p-6 flex-1 relative overflow-hidden">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <div className="text-xs text-gray-400 mb-1">Tracking ID</div>
                  <div className="font-bold text-secondary">#2978QWER</div>
                </div>
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-1">Estimated</div>
                  <div className="font-bold text-secondary">12 days</div>
                </div>
              </div>

              <div className="relative pl-6 border-l-2 border-gray-100 space-y-6">
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-primary rounded-full -left-[1.65rem] top-1 border-2 border-white"></div>
                  <p className="text-xs text-gray-400">Current Location</p>
                  <p className="text-sm font-semibold text-secondary">Indonesia</p>
                </div>
                <div className="relative">
                  <div className="absolute w-3 h-3 bg-gray-200 rounded-full -left-[1.65rem] top-1 border-2 border-white"></div>
                  <p className="text-xs text-gray-400">Destination</p>
                  <p className="text-sm font-semibold text-secondary">Singapore</p>
                </div>
              </div>
            </div>
          </div>

          {/* Yellow Card */}
          <div className="bg-primary rounded-3xl p-8 h-[300px] flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4 leading-tight">Next-Gen Smart Shipping Logistics Solutions</h3>
              <p className="text-secondary/80 text-sm font-medium">
                Provides innovative logistics solutions for modern, efficient, and scalable supply chains — streamlining operations, improving shipment visibility, and enabling smarter logistics management.
              </p>
            </div>
            <div className="flex justify-between items-center border-t border-secondary/20 pt-6">
              <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center">
                <ArrowRight size={16} className="text-secondary rotate-180" />
              </div>
              <div className="flex-1 h-px bg-secondary mx-4"></div>
              <div className="w-8 h-8 rounded-full border border-secondary flex items-center justify-center">
                <ArrowRight size={16} className="text-secondary" />
              </div>
            </div>
          </div>

          {/* Shipment Management Card */}
          <div className="relative rounded-3xl overflow-hidden group h-[300px]">
            <img src={image.containerSupervisor} alt="Logistics" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-8">
              <h3 className="text-white text-xl font-semibold mb-2">Logistics Shipment Management</h3>
              <p className="text-gray-300 text-sm">
                Logistics Shipment Management enables businesses to monitor, organize, and control shipments efficiently, providing real-time visibility.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
