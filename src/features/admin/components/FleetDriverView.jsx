import React from 'react';
import { Settings, Droplet } from 'lucide-react';

const FleetDriverView = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-6">

      {/* Truck Images Grid */}
      <div className="lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div key={i} className="relative rounded-3xl overflow-hidden h-[250px] shadow-sm group cursor-pointer border border-gray-100">
            <img
              src={`https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=800&auto=format&fit=crop`}
              alt="Truck"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className={`absolute bottom-0 left-0 right-0 p-4 flex items-center gap-3 ${i % 2 === 0 ? 'bg-secondary' : 'bg-black'} text-white`}>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-medium">
                {i}
              </div>
              <span className="font-medium">Blind Van</span>
            </div>
          </div>
        ))}
      </div>

      {/* Sidebar Details */}
      <div className="lg:w-1/3 space-y-6">
        <h2 className="text-xl font-bold text-secondary mb-4">Details Information</h2>

        {/* Vehicle Profile */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-secondary text-lg">Profile Information</h3>
            <span className="text-gray-500 font-medium">#123456</span>
          </div>

          <div className="flex items-center gap-4 mb-8">
            <div className="w-24 h-16 rounded-lg overflow-hidden relative">
              <img src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?q=80&w=200&auto=format&fit=crop" alt="Van" className="w-full h-full object-cover" />
              {/* Lightning overlay simulation */}
              <div className="absolute inset-0 flex items-center justify-center">
                <svg className="w-8 h-8 text-orange-500" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" clipRule="evenodd" /></svg>
              </div>
            </div>
            <div>
              <h4 className="font-bold text-secondary text-lg">Blind Van</h4>
              <p className="text-gray-400 text-sm">Sport Car</p>
            </div>
          </div>

          <div className="flex gap-4">
            <div className="flex-1 bg-secondary rounded-2xl p-4 text-white">
              <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center mb-4">
                <Settings size={14} />
              </div>
              <p className="text-xs text-blue-200 mb-1">Service Date</p>
              <p className="font-medium text-sm">May 12, 2026</p>
            </div>

            <div className="flex-1 bg-secondary rounded-2xl p-4 text-white">
              <div className="w-8 h-8 border border-white/20 rounded-full flex items-center justify-center mb-4">
                <Droplet size={14} />
              </div>
              <p className="text-xs text-blue-200 mb-1">Fuel Consumption</p>
              <p className="font-medium text-sm">10 L/100km</p>
            </div>
          </div>
        </div>

        {/* Driver Profile */}
        <div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-bold text-secondary text-lg">Profile Information</h3>
            <span className="text-gray-500 font-medium">#123456</span>
          </div>

          <div className="flex items-center gap-4 mb-6">
            <div className="w-12 h-12 rounded-full overflow-hidden">
              <img src="https://i.pravatar.cc/150?img=11" alt="Driver" className="w-full h-full object-cover" />
            </div>
            <div>
              <h4 className="font-bold text-secondary text-lg">Johnathan Smath</h4>
              <p className="text-gray-400 text-sm">Working Hours</p>
            </div>
          </div>

          <div className="flex items-center gap-2 mb-6">
            <div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-blue-100"></div>
            <span className="font-bold text-secondary text-sm">Working Hours & Shift</span>
          </div>

          <div className="space-y-4">
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-secondary font-medium text-sm">Locations</span>
              <span className="text-gray-400 text-sm">California</span>
            </div>
            <div className="flex justify-between items-center pb-4 border-b border-gray-100">
              <span className="text-secondary font-medium text-sm">Date</span>
              <span className="text-gray-400 text-sm">20 July 2022</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-secondary font-medium text-sm">Time</span>
              <span className="text-gray-400 text-sm">07.00</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default FleetDriverView;
