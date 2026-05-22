import React, { useState, useRef, useEffect } from 'react';
import { ChevronDown } from 'lucide-react';
import image from '../../../assets/image';

const locationOptions = ['Singapore', 'Netherlands', 'Indonesia', 'United States', 'Australia', 'Germany', 'France', 'Japan'];

const ShipmentDetailsIcon = () => (
  <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[#2d66d9]">
    <svg aria-hidden="true" className="h-[10px] w-[10px]" viewBox="0 0 12 12">
      <path
        d="M2.15 2.45L9.75 5.65L2.15 8.95L3.45 5.85L2.15 2.45Z"
        fill="#ffffff"
      />
    </svg>
  </span>
);

const TargetMarkerIcon = () => (
  <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#2d66d9]">
    <svg aria-hidden="true" className="h-[14px] w-[14px]" viewBox="0 0 16 16">
      <circle cx="8" cy="8" fill="none" r="4.1" stroke="#ffffff" strokeWidth="1.5" />
      <circle cx="8" cy="8" fill="#ffffff" r="1.55" />
      <path
        d="M8 1.6V3.35M8 12.65V14.4M1.6 8H3.35M12.65 8H14.4"
        stroke="#ffffff"
        strokeLinecap="round"
        strokeWidth="1.2"
      />
    </svg>
  </span>
);

// Komponen Baris Pilihan Lokasi yang sekarang menerima fungsi onClick
const LocationSelectRow = ({ value, onClick, isOpen }) => (
  <button
    className="group flex w-full items-center gap-[12px] rounded-[14px] bg-transparent py-[2px] text-left transition-colors hover:bg-[#fafbff] focus:outline-none"
    type="button"
    onClick={onClick}
  >
    <TargetMarkerIcon />
    <span className="flex-1 text-[14px] font-medium text-[#1c1c1c]">{value}</span>
    <ChevronDown
      className={`shrink-0 text-[#2a2a2a] transition-transform duration-200 group-hover:translate-y-[1px] ${
        isOpen ? 'rotate-180' : ''
      }`}
      size={18}
      strokeWidth={1.8}
    />
  </button>
);

const LocationSelector = () => {
  // State untuk menyimpan lokasi asal dan tujuan
  const [origin, setOrigin] = useState(locationOptions[0]);
  const [destination, setDestination] = useState(locationOptions[1]);
  
  // State untuk melacak dropdown mana yang sedang terbuka ('origin', 'destination', atau null)
  const [activeDropdown, setActiveDropdown] = useState(null);
  
  const containerRef = useRef(null);

  // Menutup dropdown otomatis jika pengguna mengklik di luar area komponen
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (containerRef.current && !containerRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleRowClick = (type) => {
    setActiveDropdown(activeDropdown === type ? null : type);
  };

  const handleSelectLocation = (location) => {
    if (activeDropdown === 'origin') {
      setOrigin(location);
    } else if (activeDropdown === 'destination') {
      setDestination(location);
    }
    setActiveDropdown(null); // Tutup dropdown setelah memilih
  };

  return (
    <div ref={containerRef} className="relative rounded-[22px] bg-white px-[18px] py-[12px] shadow-[0px_8px_18px_rgba(15,23,42,0.05)]">
      {/* Garis putus-putus dekoratif */}
      <div className="pointer-events-none absolute left-[29px] top-[40px] h-[38px] border-l border-dashed border-[#2d66d9]/45" />

      <div className="space-y-[10px]">
        {/* Baris Asal */}
        <LocationSelectRow 
          value={origin} 
          onClick={() => handleRowClick('origin')} 
          isOpen={activeDropdown === 'origin'}
        />
        
        <div className="ml-[38px] h-px bg-[#d8d8d8]" />
        
        {/* Baris Tujuan */}
        <LocationSelectRow 
          value={destination} 
          onClick={() => handleRowClick('destination')} 
          isOpen={activeDropdown === 'destination'}
        />
      </div>

      {/* Menu Popover Dropdown Pilihan Negara */}
      {activeDropdown && (
        <div className="absolute left-0 right-0 top-full mt-2 z-30 rounded-2xl border border-gray-100 bg-white p-2 shadow-xl max-h-60 overflow-y-auto">
          {locationOptions.map((location) => {
            // Berikan warna penanda berbeda jika opsi tersebut sedang aktif terpilih
            const isSelected = activeDropdown === 'origin' ? origin === location : destination === location;
            return (
              <button
                key={location}
                type="button"
                onClick={() => handleSelectLocation(location)}
                className={`flex w-full items-center justify-between rounded-xl px-4 py-2.5 text-sm font-medium transition-colors text-left ${
                  isSelected 
                    ? 'bg-[#2d66d9]/10 text-[#2d66d9]' 
                    : 'text-[#1c1c1c] hover:bg-gray-50'
                }`}
              >
                {location}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const CalculatorSection = () => {
  return (
    <section data-theme="light" className="py-24 bg-gray-50 relative overflow-hidden">
      {/* Background Image menggunakan image.kontener */}
      <div
        className="absolute inset-0 z-0 opacity-100 bg-cover bg-center"
        style={{ backgroundImage: `url(${image.kontener})` }}
      ></div>

      <div className="container mx-auto px-6 md:px-12 max-w-7xl relative z-10">
        <div className="bg-white rounded-xl p-8 md:p-16 shadow-xl flex flex-col lg:flex-row gap-12 lg:gap-24 items-center">

          {/* Left Column - Text Content */}
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

          {/* Right Column - Form */}
          <div className="lg:w-1/2 w-full">
            <div className="bg-[#F8F9FA] rounded-3xl p-6 md:p-8 border border-gray-100 shadow-inner">
              <div className="mb-8 flex items-center gap-3">
                <ShipmentDetailsIcon />
                <h3 className="text-[15px] font-medium text-[#5a5a5a]">Shipment Details</h3>
              </div>

              <form className="space-y-6">
                <LocationSelector />

                <div>
                  <label className="block text-xs text-gray-500 mb-2 font-medium">Type</label>
                  <div className="relative">
                    <select className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 appearance-none">
                      <option>Industrial Equipment</option>
                      <option>Electronics</option>
                      <option>Medical Supplies</option>
                    </select>
                    {/* Arrow custom untuk select option */}
                    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-gray-500">
                      <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                      </svg>
                    </div>
                  </div>
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