import React from 'react';
import { Settings, Car } from 'lucide-react';
import image from '../../../assets/image';
import serviceIcon from '../../UI/adminicon/Frame 515030.png';
import fuelIcon from '../../UI/adminicon/Frame 515030 (1).png';

const FleetDriverView = () => {
  const fleetData = [
    {
      id: 1,
      name: 'Blind Van',
      image: image.fleetVan,
      theme: 'bg-[#0F0F12]'
    },
    {
      id: 2,
      name: 'Blind Van',
      image: image.sideBoxTruck,
      theme: 'bg-[#242A5C]',
      hasLightning: true
    },
    {
      id: 3,
      name: 'Blind Van',
      image: image.roadTruck,
      theme: 'bg-[#0F0F12]'
    },
    {
      id: 4,
      name: 'Blind Van',
      image: image.truk,
      theme: 'bg-[#0F0F12]'
    },
    {
      id: 5,
      name: 'Blind Van',
      image: image.containerYard,
      theme: 'bg-[#0F0F12]'
    },
    {
      id: 6,
      name: 'Blind Van',
      image: image.sideBoxTruck,
      theme: 'bg-[#0F0F12]'
    }
  ];

  return (
    <div className="flex flex-col lg:flex-row gap-6 w-full">

      {/* Truck Images Grid */}
      <div className="lg:w-[60%] w-full grid grid-cols-1 sm:grid-cols-2 gap-6">
        {fleetData.map((item) => (
          <div key={item.id} className="relative rounded-2xl overflow-hidden h-[415px] shadow-sm group cursor-pointer border border-gray-100 transition-all duration-300 hover:shadow-md">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            {/* Optional Lightning bolt decal for Card 2 */}
            {item.hasLightning && (
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-90 select-none">
                <svg className="w-20 h-20 text-orange-500 filter drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                </svg>
              </div>
            )}
            <div className={`absolute bottom-0 left-0 right-0 p-5 flex items-center gap-3 ${item.theme} text-white`}>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
                {item.id}
              </div>
              <span className="font-semibold text-base">{item.name}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Details */}
      <div className="flex-1 w-full bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
        <h2 className="text-xl font-bold text-secondary mb-6 px-1">Details Information</h2>

        <div className="space-y-6">
          {/* Vehicle Profile */}
          <div className="bg-[#F4F5F7] rounded-xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-secondary text-sm">Profile Information</h3>
              <span className="text-gray-400 font-medium text-xs">#123456</span>
            </div>

            <div className="flex items-center gap-4 mb-6">
              <div className="w-24 h-14 rounded-xl overflow-hidden relative border border-gray-200 bg-white">
                <img
                  src={image.sideBoxTruck}
                  alt="Van"
                  className="w-full h-full object-cover"
                />
                {/* Lightning overlay */}
                <div className="absolute inset-0 flex items-center justify-center bg-black/5">
                  <svg className="w-7 h-7 text-orange-500 filter drop-shadow-md" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" />
                  </svg>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-secondary text-base">Blind Van</h4>
                <p className="text-gray-400 text-xs font-medium">Sport Car</p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="flex-1 bg-[#242A5C] rounded-xl p-4 text-white hover:opacity-95 transition-opacity">
                <img src={serviceIcon} alt="Service Date" className="w-8 h-8 object-contain mb-3" />
                <p className="text-[10px] text-indigo-200 mb-0.5">Service Date</p>
                <p className="font-bold text-xs">May 12, 2026</p>
              </div>

              <div className="flex-1 bg-[#242A5C] rounded-xl p-4 text-white hover:opacity-95 transition-opacity">
                <img src={fuelIcon} alt="Fuel Consumption" className="w-8 h-8 object-contain mb-3" />
                <p className="text-[10px] text-indigo-200 mb-0.5">Fuel Consumption</p>
                <p className="font-bold text-xs">10 L/100km</p>
              </div>
            </div>
          </div>

          {/* Driver Profile */}
          <div className="bg-[#F4F5F7] rounded-xl p-5">
            <div className="flex justify-between items-center mb-5">
              <h3 className="font-bold text-secondary text-sm">Profile Information</h3>
              <span className="text-gray-400 font-medium text-xs">#123456</span>
            </div>

            <div className="flex items-center gap-4 mb-5">
              <div className="w-12 h-12 rounded-full overflow-hidden">
                <img src={image.clientPortraitMan} alt="Driver" className="w-full h-full object-cover" />
              </div>
              <div>
                <h4 className="font-bold text-secondary text-base">Johnathan Smath</h4>
                <p className="text-gray-400 text-xs font-medium">Working Hours</p>
              </div>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 bg-blue-500 rounded-full border-2 border-blue-100"></div>
              <span className="font-bold text-secondary text-xs">Working Hours & Shift</span>
            </div>

            <div className="space-y-1">
              <div className="flex justify-between items-center py-2.5 border-b border-gray-200/50">
                <span className="text-secondary font-medium text-xs">Locations</span>
                <span className="text-gray-400 text-xs font-medium">California</span>
              </div>
              <div className="flex justify-between items-center py-2.5 border-b border-gray-200/50">
                <span className="text-secondary font-medium text-xs">Date</span>
                <span className="text-gray-400 text-xs font-medium">20 July 2022</span>
              </div>
              <div className="flex justify-between items-center pt-2.5">
                <span className="text-secondary font-medium text-xs">Time</span>
                <span className="text-gray-400 text-xs font-medium">07.00</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FleetDriverView;
