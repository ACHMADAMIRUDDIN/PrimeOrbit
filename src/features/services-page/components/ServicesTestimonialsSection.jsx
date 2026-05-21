import React from 'react';
import image from '../../../assets/image';

const ServicesTestimonialsSection = () => {
  return (
    <section className="w-full bg-white flex flex-col p-[40px] md:p-[106px_80px] gap-[75px] text-[#2d2d2d] font-sans">
      
      {/* Title */}
      <div className="w-full max-w-[1317px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-[20px]">
        <h2 className="text-[36px] md:text-[48px] font-medium leading-[120%] max-w-[583px]">
          Smarter Routes, <br className="hidden md:block" />
          Faster Delivery
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[132%] font-poppins max-w-[360px] opacity-80">
          Accelerate your operations with Transvora's advanced logistics infrastructure designed
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1317px] mx-auto flex flex-wrap gap-[19px] md:gap-[23px_19px] justify-center md:justify-start font-poppins text-[20px] text-[#656565]">
        
        {/* Testimonial Card 1 */}
        <div className="w-full md:w-[412px] h-[294px] bg-[#ebebf5] rounded-[20px] p-[27px_18px_34px_25px] flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div className="flex flex-col gap-[31px]">
             <img src={image.clientPortraitWoman} alt="Profile" className="w-[40px] h-[40px] rounded-full object-cover object-top" />
             <p className="leading-[132%] text-[#2d2d2d]">Completely always transformed our shipping process.</p>
          </div>
          <div className="flex flex-col gap-[10px]">
             <span className="font-bold text-[#2d2d2d]">Meida Angelic</span>
             <span className="text-[16px] leading-[132%]">Supply Chain Manager</span>
          </div>
        </div>

        {/* Statistic Card */}
        <div className="w-full md:w-[412px] h-[294px] bg-[#2d2d2d] rounded-[20px] p-[24px_31px_34px] flex flex-col justify-between text-white hover:scale-[1.02] transition-transform">
          <div className="flex flex-col gap-[24px]">
             <span className="text-[48px] font-medium leading-[132%]">11.23T+</span>
             <span className="text-[20px] leading-[132%] max-w-[200px]">Global Logistics Market Value</span>
          </div>
          <button className="self-start rounded-[100px] bg-[#2a2a7c] text-white px-[20px] py-[18px] text-[16px] font-sans font-medium hover:bg-[#2a2a7c]/90">
             Learn More
          </button>
        </div>

        {/* Testimonial Card 2 */}
        <div className="w-full md:w-[412px] h-[294px] bg-[#ebebf5] rounded-[20px] p-[27px_18px_34px_25px] flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div className="flex flex-col gap-[31px]">
             <img src={image.clientPortraitWoman} alt="Profile" className="w-[40px] h-[40px] rounded-full object-cover object-top" />
             <p className="leading-[132%] text-[#2d2d2d]">We trust Transvora for all our international shipments</p>
          </div>
          <div className="flex flex-col gap-[10px]">
             <span className="font-bold text-[#2d2d2d]">Sophia Nguyen</span>
             <span className="text-[16px] leading-[132%]">Operations Director</span>
          </div>
        </div>

        {/* Image Profile Card 1 */}
        <div className="w-full md:w-[412px] h-[294px] rounded-[20px] relative overflow-hidden flex flex-col justify-end p-[34px_25px] text-white hover:scale-[1.02] transition-transform">
          <img src={image.clientPortraitWoman} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover object-top z-0 opacity-80 bg-gray-800" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          <div className="flex flex-col gap-[10px] z-10">
             <span className="font-bold leading-[132%]">Olivia Martinez</span>
             <span className="text-[16px] leading-[132%] opacity-80">Business Owner</span>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="w-full md:w-[412px] h-[294px] bg-[#ebebf5] rounded-[20px] p-[27px_18px_34px_25px] flex flex-col justify-between hover:scale-[1.02] transition-transform">
          <div className="flex flex-col gap-[31px]">
             <img src={image.clientPortraitMan} alt="Profile" className="w-[40px] h-[40px] rounded-full object-cover object-top" />
             <p className="leading-[132%] text-[#2d2d2d]">Highly recommended for growing businesses</p>
          </div>
          <div className="flex flex-col gap-[10px]">
             <span className="font-bold text-[#2d2d2d]">Ryan Patel</span>
             <span className="text-[16px] leading-[132%]">Startup Founder</span>
          </div>
        </div>

        {/* Image Profile Card 2 */}
        <div className="w-full md:w-[412px] h-[294px] rounded-[20px] relative overflow-hidden flex flex-col justify-end p-[34px_25px] text-white hover:scale-[1.02] transition-transform">
          <img src={image.clientPortraitMan} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover object-top z-0 opacity-80 bg-gray-800" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          <div className="flex flex-col gap-[10px] z-10">
             <span className="font-bold leading-[132%]">Ethan Walker</span>
             <span className="text-[16px] leading-[132%] opacity-80">Logistics Coordinator</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ServicesTestimonialsSection;
