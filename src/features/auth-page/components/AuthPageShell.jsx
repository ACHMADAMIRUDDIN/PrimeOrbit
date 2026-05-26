import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, LockKeyhole, Eye, ArrowRight, ChevronLeft } from 'lucide-react';
import image from '../../../assets/image';

const pageContent = {
  login: {
    heroTitle: 'Kelola Pengiriman Lebih Terarah.',
    heroDescription:
      'PrimeOrbit membantu Anda melakukan monitoring status pengiriman, rute ekspedisi, dan armada kargo secara real-time dari satu dashboard operasional.',
    formTitle: 'Selamat Datang Kembali',
    formDescription: 'Masuk ke akun operasional PrimeOrbit Anda',
    submitLabel: 'Masuk ke Dashboard',
    switchText: 'Belum punya akun?',
    switchLabel: 'Daftar Sekarang',
    switchPath: '/register',
    panelImage: image.containerStacks,
    fields: [
      {
        name: 'email',
        label: 'Alamat Email Kerja',
        placeholder: 'operations@primeorbit.com',
        type: 'email',
        autoComplete: 'email',
        Icon: Mail,
      },
      {
        name: 'password',
        label: 'Kata Sandi',
        placeholder: '********',
        type: 'password',
        autoComplete: 'current-password',
        Icon: LockKeyhole,
        isPassword: true,
      },
    ],
  },
  register: {
    heroTitle: 'Mulai Pantau Armada dengan Mudah.',
    heroDescription:
      'Bergabunglah bersama PrimeOrbit untuk mengoptimalkan manajemen logistik, touchpoint inventaris, dan kepuasan pengiriman pelanggan Anda.',
    formTitle: 'Daftar Akun Baru',
    formDescription: 'Lengkapi data untuk membuat ruang kerja PrimeOrbit Anda',
    submitLabel: 'Buat Akun Baru',
    switchText: 'Sudah punya akun?',
    switchLabel: 'Masuk Sekarang',
    switchPath: '/login',
    panelImage: image.cargoShipAerial,
    fields: [
      {
        name: 'email',
        label: 'Alamat Email Perusahaan',
        placeholder: 'team@primeorbit.com',
        type: 'email',
        autoComplete: 'email',
        Icon: Mail,
      },
      {
        name: 'password',
        label: 'Kata Sandi',
        placeholder: '********',
        type: 'password',
        autoComplete: 'new-password',
        Icon: LockKeyhole,
        isPassword: true,
      },
    ],
  },
};

const AuthPageShell = ({ variant = 'login' }) => {
  const config = pageContent[variant] ?? pageContent.login;

  return (
    <div className="min-h-screen bg-white font-sans flex flex-col lg:flex-row w-full overflow-x-hidden relative">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-35px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        .animate-fade-in-up {
          animation: fadeInUp 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1.5s cubic-bezier(0.16, 1, 0.3, 1) forwards;
          opacity: 0;
        }
      `}</style>

      {/* Tombol Kembali ke Landing Page di Sudut Kiri Atas */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 z-30 inline-flex items-center gap-1 rounded-full border border-white/15 bg-white/10 px-3.5 py-1.5 text-[12px] font-semibold text-white shadow-lg backdrop-blur-md transition-all duration-300 hover:bg-white/20 hover:border-white/30 hover:shadow-xl active:scale-[0.98] group animate-fade-in-left"
        style={{ animationDelay: '100ms' }}
      >
        <ChevronLeft size={14} className="transition-transform duration-300 group-hover:-translate-x-0.5" />
        <span>Kembali</span>
      </Link>

      {/* Main Container Split Screen (Full Screen, no surrounding space) */}
      <div className="w-full min-h-screen grid grid-cols-1 lg:grid-cols-2">
        
        {/* KIRI: Hero Section (Gradasi Indigo & Gambar Kontainer Kargo) */}
        <div className="relative p-8 md:p-16 flex flex-col justify-between overflow-hidden min-h-[450px] lg:min-h-screen">
          {/* Background Image Masking */}
          <div className="absolute inset-0">
            <img
              src={config.panelImage}
              alt="PrimeOrbit Logistics Network"
              className="h-full w-full object-cover"
            />
            {/* Overlay Gradasi Indigo Khas PrimeOrbit */}
            <div className="absolute inset-0 bg-gradient-to-br from-[#20236a]/90 via-[#2a2a7c]/85 to-[#0f0f12]/75 mix-blend-multiply" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
          </div>

          {/* Konten Hero */}
          <div className="relative z-10">
            {/* Badge Version */}
            <div className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-4 py-1.5 text-[13px] font-medium text-white/90 backdrop-blur-sm animate-fade-in-left" style={{ animationDelay: '150ms' }}>
              <span className="w-1.5 h-1.5 rounded-full bg-yellow-400 animate-pulse"></span>
              PrimeOrbit | Control Panel | v1.0.0
            </div>

            {/* Logo Brand */}
            <div className="mt-8 flex items-center gap-3 animate-fade-in-left" style={{ animationDelay: '300ms' }}>
              <div className="w-[52px] h-[52px] rounded-2xl bg-white flex items-center justify-center p-2 shadow-md">
                <img src={image.navbarLogo} alt="PrimeOrbit" className="w-full h-full object-contain" />
              </div>
              <div className="flex flex-col">
                <span className="text-[24px] font-bold tracking-tight text-white leading-none">PrimeOrbit</span>
                <span className="text-[10px] font-semibold tracking-[0.2em] text-[#ffdd80] uppercase mt-0.5">LOGISTICS NETWORK</span>
              </div>
            </div>
          </div>

          {/* Teks Hero Utama */}
          <div className="relative z-10 mt-auto pt-12">
            <h1 className="text-[40px] md:text-[48px] font-bold text-white leading-[115%] tracking-[-0.02em] animate-fade-in-left" style={{ animationDelay: '450ms' }}>
              {config.heroTitle.split(' ').map((word, i) => 
                word === 'Lebih' || word === 'Terarah.' || word === 'Mudah.' ? (
                  <span key={i} className="text-[#ffcd51] block sm:inline"> {word}</span>
                ) : (
                  <span key={i}> {word}</span>
                )
              )}
            </h1>
            <p className="mt-4 text-[15px] md:text-[16px] leading-[160%] text-white/80 max-w-[460px] animate-fade-in-left" style={{ animationDelay: '600ms' }}>
              {config.heroDescription}
            </p>
          </div>
        </div>

        {/* KANAN: Form Section (Background Abu-abu Lembut dengan Box Melayang) */}
        <div className="bg-[#f8fafc] p-6 md:p-12 flex flex-col justify-center items-center min-h-screen">
          
          {/* Box Putih untuk Form Login */}
          <div className="w-full max-w-[480px] bg-white rounded-[28px] p-8 md:p-10 shadow-[0px_20px_50px_rgba(15,23,42,0.04)] border border-gray-100/80 animate-fade-in-up">
            {/* Header Form */}
            <div className="text-center lg:text-left">
              {/* Mini Logo khusus Mobile */}
              <div className="flex lg:hidden items-center justify-center gap-2 mb-6">
                <img src={image.navbarLogo} alt="Logo" className="h-8 w-auto" />
                <span className="text-[18px] font-bold text-[#111827]">PrimeOrbit</span>
              </div>

              <h2 className="text-[26px] md:text-[28px] font-bold tracking-tight text-[#111827]">
                {config.formTitle}
              </h2>
              <p className="mt-1.5 text-[15px] text-gray-400">
                {config.formDescription}
              </p>
            </div>

            {/* Inputs Form */}
            <form className="mt-8 flex flex-col gap-5" onSubmit={(e) => e.preventDefault()}>
              {config.fields.map(({ name, label, placeholder, type, autoComplete, Icon, isPassword }) => (
                <div key={name} className="flex flex-col gap-2">
                  <label className="text-[14px] font-semibold text-gray-700">{label}</label>
                  <div className="flex items-center gap-3 rounded-[16px] border border-gray-100 bg-[#f9fafb] px-4 py-3.5 transition-all focus-within:border-[#20236a] focus-within:bg-white focus-within:ring-2 focus-within:ring-[#20236a]/10">
                    <Icon size={18} className="text-gray-400 shrink-0" />
                    <input
                      type={type}
                      name={name}
                      autoComplete={autoComplete}
                      placeholder={placeholder}
                      className="w-full border-none bg-transparent text-[15px] text-gray-900 placeholder:text-gray-400 focus:outline-none"
                    />
                    {isPassword && (
                      <button type="button" className="text-gray-400 hover:text-gray-600">
                        <Eye size={18} />
                      </button>
                    )}
                  </div>
                </div>
              ))}

              {/* Checkbox Ingat Saya */}
              {variant === 'login' && (
                <div className="flex items-center justify-between text-[14px] mt-1">
                  <label className="flex items-center gap-2.5 cursor-pointer text-gray-600 font-medium">
                    <input
                      type="checkbox"
                      className="h-4 w-4 rounded-md border-gray-300 text-[#20236a] focus:ring-[#20236a]"
                    />
                    <span>Ingat Saya</span>
                  </label>
                </div>
              )}

              {/* Tombol Gradient Submit Khas PrimeOrbit */}
              <button
                type="submit"
                className="mt-4 w-full flex items-center justify-center gap-2 rounded-[16px] bg-gradient-to-r from-[#20236a] to-[#2a2a7c] px-6 py-4 text-[16px] font-bold text-white shadow-[0px_8px_20px_rgba(32,35,106,0.25)] transition-all duration-300 hover:opacity-95 active:scale-[0.99] group"
              >
                <span>{config.submitLabel}</span>
                <ArrowRight size={18} className="transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </form>

            {/* Switch Mode / Footer Form */}
            <div className="mt-8 flex flex-col items-center gap-6">
              <div className="text-[14px] text-gray-500">
                <span>{config.switchText} </span>
                <Link 
                  to={config.switchPath} 
                  className="inline-flex items-center justify-center bg-[#dde1f9] text-[#20236a] font-semibold px-4 py-1.5 rounded-xl ml-1 border border-[#c5cdfa] hover:bg-[#c5cdfa] transition-colors"
                >
                  {config.switchLabel}
                </Link>
              </div>
            </div>

          </div>

          {/* Copyright di luar Box */}
          <span className="text-[12px] text-gray-400 tracking-wider font-medium uppercase mt-8">
            © 2026 PRIMEORBIT LOGISTICS
          </span>

        </div>

      </div>
    </div>
  );
};

export default AuthPageShell;
