import React from 'react';
import image from '../../../assets/image';
import { Search, ArrowRight, Check } from 'lucide-react';

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="bg-white px-4 py-24 font-inter antialiased md:px-6 lg:px-[55px]"
    >
      <div className="mx-auto w-full max-w-[1540px]">
        {/* HEADER */}
        <div className="mb-[42px] flex flex-col justify-between gap-6 md:flex-row md:items-start">
          <h2 className="text-[34px] font-semibold leading-[1.18] tracking-[-0.03em] text-[#303030] md:text-[42px] lg:text-[52px]">
            Smarter Routes,
            <br />
            Faster Delivery
          </h2>

          <p className="max-w-[340px] pt-4 text-[13px] font-normal leading-[1.45] text-[#333333] md:text-[14px] lg:mr-[80px]">
            Accelerate your operations with PrimeOrbit advanced logistics infrastructure designed
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-12 gap-[18px]">
          {/* CARD 1 */}
          <div className="group relative col-span-12 h-[420px] overflow-hidden rounded-[18px] lg:col-span-7">
            <img
              src={image.warehouseOperations}
              alt="Warehouse Management Solutions"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent px-[30px] pb-[28px]">
              <h3 className="mb-3 text-[24px] font-semibold tracking-tight text-white">
                Warehouse Management Solutions
              </h3>

              <p className="line-clamp-2 max-w-[92%] text-[15px] leading-[1.55] text-white/75">
                Warehouse Management Solutions enables businesses to manage inventory, storage, and
                warehouse operations efficiently through a ce...
              </p>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="relative col-span-12 h-[420px] overflow-hidden rounded-[18px] bg-[#F4F4F4] p-[20px] lg:col-span-5">
            <div className="flex h-[44px] items-center gap-3 rounded-[10px] bg-white px-4 shadow-sm">
              <Search size={16} strokeWidth={2.4} className="text-[#8f8f8f]" />
              <span className="text-[12px] text-[#aaa]">Search</span>
            </div>

            <div className="absolute bottom-0 left-[20px] right-[20px] h-[315px] overflow-hidden rounded-t-[22px] bg-white px-[26px] pt-[22px] shadow-sm">
              {/* STEPS */}
              <div className="mb-[26px] flex items-center gap-[9px]">
                <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#4B8DEB] text-white">
                  <Check size={10} strokeWidth={3} />
                </div>
                <div className="h-px flex-1 border-t border-dashed border-[#bfbfbf]" />

                <div className="flex h-[15px] w-[15px] items-center justify-center rounded-full bg-[#4B8DEB] text-white">
                  <Check size={10} strokeWidth={3} />
                </div>
                <div className="h-px flex-1 border-t border-dashed border-[#bfbfbf]" />

                <span className="whitespace-nowrap text-[9px] font-semibold tracking-wider text-[#555]">
                  STEP 3
                </span>
                <div className="h-px flex-1 border-t border-dashed border-[#bfbfbf]" />

                <span className="whitespace-nowrap text-[9px] font-semibold tracking-wider text-[#555]">
                  STEP 4
                </span>
              </div>

              {/* TRACKING HEADER */}
              <div className="mb-[22px] flex items-end justify-between">
                <div>
                  <p className="mb-1 text-[10px] font-medium text-[#b7b7b7]">Tracking ID</p>
                  <p className="text-[15px] font-bold text-[#222]">#9876QWER</p>
                </div>

                <div className="text-right">
                  <p className="mb-1 text-[10px] font-medium text-[#b7b7b7]">Estimate</p>
                  <p className="text-[15px] font-bold text-[#222]">10 days</p>
                </div>
              </div>

              {/* TIMELINE */}
              <div className="relative ml-1 border-l border-dashed border-[#d9d9d9] pl-7">
                {[
                  ['Current Location', 'Indonesia', '12.00'],
                  ['Departure Waypoint', 'Singapore', '08.00'],
                  ['Arrival Waypoint', 'Singapore', '03.00'],
                  ['Current Location', 'Indonesia', '12.00'],
                ].map((item, index) => (
                  <div
                    key={index}
                    className={`relative mb-[17px] flex justify-between ${
                      index === 3 ? 'opacity-40' : ''
                    }`}
                  >
                    <span
                      className={`absolute -left-[32px] top-[5px] h-[7px] w-[7px] rounded-full ${
                        index === 0
                          ? 'bg-[#4B8DEB] ring-[4px] ring-blue-100'
                          : 'bg-[#d6d6d6]'
                      }`}
                    />

                    <div>
                      <p className="text-[9px] font-medium text-[#b8b8b8]">{item[0]}</p>
                      <p className="text-[11px] font-semibold text-[#505050]">{item[1]}</p>
                    </div>

                    <div className="text-right">
                      <p className="text-[11px] font-semibold text-[#222]">{item[2]}</p>
                      <p className="text-[9px] text-[#b8b8b8]">Time</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 3 */}
          <div className="col-span-12 flex h-[350px] flex-col justify-between rounded-[18px] bg-[#FFD76B] p-[30px] lg:col-span-5">
            <div>
              <h3 className="mb-[18px] text-[32px] font-semibold leading-[1.12] tracking-[-0.03em] text-black lg:text-[36px]">
                Next-Gen Smart Shipping
                <br />
                Logistics Solutions
              </h3>

              <p className="max-w-[92%] text-[13px] font-bold leading-[1.35] text-black">
                Provides innovative logistics solutions for modern, efficient, and scalable supply
                chains — streamlining operations, improving shipment visibility, and enabling
                smarter logistics management.
              </p>
            </div>

            <div className="flex items-center gap-4">
              <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-[#FFD76B]">
                <ArrowRight size={15} strokeWidth={2.4} className="rotate-180" />
              </button>

              <div className="relative h-px flex-1 bg-black/20">
                <div className="absolute left-0 top-1/2 h-[2px] w-[32%] -translate-y-1/2 rounded-full bg-black" />
              </div>

              <button className="flex h-[30px] w-[30px] items-center justify-center rounded-full border border-black transition hover:bg-black hover:text-[#FFD76B]">
                <ArrowRight size={15} strokeWidth={2.4} />
              </button>
            </div>
          </div>

          {/* CARD 4 */}
          <div className="group relative col-span-12 h-[350px] overflow-hidden rounded-[18px] lg:col-span-7">
            <img
              src={image.deliveryDocs}
              alt="Logistics Shipment Management"
              className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />

            <div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/25 to-transparent px-[30px] pb-[28px]">
              <h3 className="mb-3 text-[24px] font-semibold tracking-tight text-white">
                Logistics Shipment Management
              </h3>

              <p className="line-clamp-2 max-w-[92%] text-[15px] leading-[1.55] text-white/75">
                Logistics Shipment Management enables businesses to monitor, organize, and control
                shipments efficiently, providing real-time visibil...
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;