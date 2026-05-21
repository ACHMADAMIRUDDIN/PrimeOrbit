import React from 'react';
import image from '../../../assets/image';
import { Mail, Phone } from 'lucide-react';

const ContactUsHero = () => {
  return (
    <section data-theme="dark" className="w-full relative min-h-[833px] overflow-hidden flex flex-col justify-center px-[20px] lg:px-[86px] pt-[150px] pb-[80px] font-sans text-white">
      
      {/* Background Image & Gradient */}
      <div className="absolute inset-0 z-0">
        <img src={image.logisticsTeam} alt="Contact Us Background" className="w-full h-full object-cover object-top filter brightness-50" />
        <div className="absolute bottom-0 left-0 w-full h-[355px] bg-gradient-to-t from-black/80 to-transparent"></div>
      </div>

      <div className="relative z-10 w-full max-w-[1320px] mx-auto flex flex-col lg:flex-row items-start justify-between gap-[60px] lg:gap-[40px]">
        
        {/* Left Side: Text and Contact Info */}
        <div className="w-full lg:w-[512px] flex flex-col gap-[60px] lg:gap-[150px]">
          
          <div className="flex flex-col gap-[20px] lg:gap-[34px]">
            <h1 className="text-[48px] md:text-[76px] tracking-[-0.05em] leading-[110%] md:leading-[140%] font-medium font-geist">
              Get in Touch
            </h1>
            <p className="text-[18px] md:text-[24px] tracking-[-0.02em] leading-[120%] opacity-90 max-w-[450px]">
              From global forwarding to local distribution <br className="hidden md:block" />
              we streamline your supply chain with precision and transparency.
            </p>
          </div>

          <div className="flex flex-col gap-[10px] md:gap-[6.5px] font-figtree">
            <div className="flex items-center gap-[12px]">
               <Phone className="opacity-70 hidden md:block" />
               <span className="text-[24px] md:text-[32.46px] leading-[128%]">+01 235 235-02-53</span>
            </div>
            <div className="flex items-center gap-[12px] font-sans">
               <Mail className="opacity-70 hidden md:block" />
               <span className="text-[24px] md:text-[32px] leading-[120%] font-medium text-primary">Primebit@gmail.com</span>
            </div>
          </div>

        </div>

        {/* Right Side: Contact Form (Glassmorphism) */}
        <div className="w-full max-w-[640px] rounded-[24px] bg-white/95 md:bg-white/80 backdrop-blur-[50px] p-[30px] md:p-[44px_47px_44px_43px] flex flex-col gap-[20px] shadow-2xl text-black font-plusJakarta">
          
          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold leading-[140%]">Name</label>
            <input 
              type="text" 
              placeholder="Your Name" 
              className="w-full rounded-[16px] bg-[#f5f5f5] p-[18px_24px] text-[16px] text-black placeholder:text-[#acacac] focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold leading-[140%]">Email</label>
            <input 
              type="email" 
              placeholder="admin@gmail.com" 
              className="w-full rounded-[16px] bg-[#f5f5f5] p-[18px_24px] text-[16px] text-black placeholder:text-[#acacac] focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all"
            />
          </div>

          <div className="flex flex-col gap-[16px]">
            <label className="font-semibold leading-[140%]">Message</label>
            <textarea 
              placeholder="Your message here.." 
              className="w-full h-[98px] rounded-[16px] bg-[#f5f5f5] p-[18px_24px] text-[16px] text-black placeholder:text-[#acacac] focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-all resize-none"
            ></textarea>
          </div>

          <button className="w-full rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center p-[20px_30px] text-[18px] md:text-[20px] font-sans hover:bg-[#2a2a7c]/90 transition-colors mt-[10px]">
            Submit
          </button>

        </div>

      </div>

    </section>
  );
};

export default ContactUsHero;
