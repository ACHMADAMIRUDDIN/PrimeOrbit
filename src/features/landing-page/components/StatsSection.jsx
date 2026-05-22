import React from 'react';
import image from '../../../assets/image';

const StatsSection = () => {
  return (
    <section id="about" className="w-full bg-[#191919] text-white py-[100px] flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1320px] px-4 md:px-[60px] flex flex-col relative">
        
        {/* Header Row: Logo & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-16 lg:mb-24">
          <div className="lg:col-span-7 flex items-center">
            {/* Logo */}
            <img
              src={image.wordmarkLogo}
              alt="PrimeOrbit logo"
              className="h-[58px] w-auto md:h-[70px]"
            />
          </div>
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end mt-4 lg:mt-0">
            {/* Label Kanan Atas */}
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400">
              WHAT MAKES US DIFFERENT
            </span>
          </div>
        </div>

        {/* Content Row: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* KIRI: Konten Teks & Statistik */}
          <div className="lg:col-span-7 flex flex-col gap-20">
            
            {/* Angka Statistik Utama */}
            <div className="flex items-center gap-[40px] md:gap-[60px]">
              <div className="flex flex-col gap-3">
                <h2 className="text-[52px] md:text-[64px] font-medium tracking-tight leading-none font-sans">
                  200+
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-inter font-semibold">
                  Global Partners
                </p>
              </div>
              
              {/* Garis Pembatas Vertikal */}
              <div className="w-[2px] h-[70px] bg-gray-500/30"></div>

              <div className="flex flex-col gap-3">
                <h2 className="text-[52px] md:text-[64px] font-medium tracking-tight leading-none font-sans">
                  1.2M
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-inter font-semibold">
                  Successful Deliveries
                </p>
              </div>
            </div>

            {/* Deskripsi & Judul Pendek Bawah */}
            <div className="flex flex-col gap-6 max-w-[540px]">
              <h3 className="text-[32px] md:text-[40px] font-medium leading-[1.2] tracking-tight font-sans">
                Optimizing complex supply chains with digital precision
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-inter font-semibold">
                We provide end-to-end logistics solutions designed for the modern era. From intelligent warehousing to real-time fleet management, we streamline your operations for scalability.
              </p>
            </div>
          </div>

          {/* KANAN: Gambar Utama & Card Badge Tumpang Tindih */}
          <div className="lg:col-span-5 relative flex items-center justify-center lg:justify-end mt-16 lg:mt-0">
            
            {/* Bingkai Gambar Besar */}
            <div className="w-full max-w-[480px] h-[540px] rounded-[32px] overflow-hidden relative z-0">
              <img 
                src={image.roadTruck || image.cargoShipAerial || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"} 
                alt="Logistics Operations" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Card Badge Persentase Biru (Tumpang Tindih / Absolute) */}
            <div className="absolute -left-4 lg:-left-16 bottom-16 z-10 w-[220px] h-[220px] bg-[#2A2A7C] rounded-[24px] p-6 flex flex-col justify-between shadow-2xl">
              <p className="text-sm font-medium text-white/90 leading-snug font-inter">
                On-time delivery rate across our global network
              </p>
              <h4 className="text-[44px] md:text-[48px] font-medium tracking-tight leading-none font-sans text-white">
                99.9%
              </h4>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
