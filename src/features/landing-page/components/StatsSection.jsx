import React from 'react';
import image from '../../../assets/image';

const StatsSection = () => {
  return (
    <section id="about" data-theme="dark" className="w-full bg-[#191919] text-white py-[100px] flex justify-center items-center overflow-hidden">
      <div className="w-full max-w-[1320px] px-4 md:px-[60px] flex flex-col relative">
        
        {/* Header Row: Logo & Subtitle */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 w-full mb-16 lg:mb-24">
          <div className="lg:col-span-7 flex items-center">
            {/* Logo */}

            <div className="text-white">
              <svg className="w-[58px] h-[66px] text-white" viewBox="0 0 76 86" fill="currentColor">
                <path d="M75.17 0L60.5741 16.4533L60.6188 48.1305L35.7186 18.5547L23.7826 30.85L50.3369 61.2976L46.2911 66.104L16.6076 67.0205L0 86L53.265 82.9374L75.17 56.223V0Z" />
                <path d="M0 69.5955V2.54712H16.8073V56.614L0 69.5955Z" />
                <path d="M65.4532 1.76953L22.9927 1.76953L22.9927 14.1538L54.838 14.1538L65.4532 1.76953Z" />
              </svg>
            </div>
          </div>
          <div className="lg:col-span-5 flex items-center justify-start lg:justify-end mt-4 lg:mt-0">
            {/* Label Kanan Atas */}
            <span className="text-sm font-semibold uppercase tracking-[0.15em] text-gray-400 font-inter">
              WHAT MAKES US DIFFERENT
            </span>
          </div>
        </div>

        {/* Content Row: 2 Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          
          {/* KIRI: Konten Teks & Statistik */}
          <div className="lg:col-span-5 flex flex-col gap-16 lg:gap-20">
            
            {/* Angka Statistik Utama */}
            <div className="flex items-center gap-[40px] md:gap-[60px]">
              <div className="flex flex-col gap-2">
                <h2 className="text-[52px] md:text-[64px] font-medium tracking-tight leading-none text-white font-sans">
                  200+
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-inter font-semibold">
                  Global Partners
                </p>
              </div>
              
              {/* Garis Pembatas Vertikal */}
              <div className="w-[1px] h-[64px] bg-white/20"></div>

              <div className="flex flex-col gap-2">
                <h2 className="text-[52px] md:text-[64px] font-medium tracking-tight leading-none text-white font-sans">
                  1.2M
                </h2>
                <p className="text-sm md:text-base text-gray-400 font-inter font-semibold">
                  Successful Deliveries
                </p>
              </div>
            </div>

            {/* Deskripsi & Judul Pendek Bawah */}
            <div className="flex flex-col gap-6 max-w-[540px]">
              <h3 className="text-[36px] md:text-[44px] font-semibold leading-[1.2] tracking-tight font-sans text-white">
                Optimizing complex supply chains with digital precision
              </h3>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed font-inter font-normal">
                We provide end-to-end logistics solutions designed for the modern era. From intelligent warehousing to real-time fleet management, we streamline your operations for scalability.
              </p>
            </div>
          </div>

          {/* KANAN: Gambar Utama & Card Badge Terpisah */}
          <div className="lg:col-span-7 flex flex-col sm:flex-row items-end justify-center lg:justify-end gap-6 mt-12 lg:mt-0 w-full">
            
            {/* Card Badge Persentase Biru */}
            <div className="w-full sm:w-[200px] h-[270px] bg-[#20236a] rounded-[24px] p-6 flex flex-col justify-between shadow-lg hover:scale-[1.02] transition-transform duration-300 shrink-0">
              <p className="text-xs sm:text-sm font-medium text-white/90 leading-snug font-inter">
                On-time delivery rate across our global network
              </p>
              <h4 className="text-[36px] sm:text-[40px] font-semibold tracking-tight leading-none font-sans text-white">
                99.9%
              </h4>
            </div>

            {/* Bingkai Gambar Lebih Kecil */}
            <div className="w-full sm:w-[300px] md:w-[320px] lg:w-[310px] xl:w-[360px] h-[440px] sm:h-[480px] rounded-[24px] overflow-hidden shadow-lg shrink-0">
              <img 
                src={image.kontener || "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800"} 
                alt="Logistics Operations" 
                className="w-full h-full object-cover"
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default StatsSection;
