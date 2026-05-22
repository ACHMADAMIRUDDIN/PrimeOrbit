import React from 'react';
import image from '../../../assets/image';

const ServicesTestimonialsSection = () => {
  return (
    <section className="w-full bg-white flex flex-col gap-[48px] px-4 py-[72px] text-[#2d2d2d] font-sans sm:px-6 md:px-[40px] md:py-[88px] lg:px-[60px] xl:px-[80px] xl:py-[106px]">
      
      {/* Title */}
      <div className="w-full max-w-[1317px] mx-auto flex flex-col md:flex-row items-start md:items-start justify-between gap-[20px]">
        <h2 className="max-w-[583px] text-[32px] font-medium leading-[115%] md:text-[42px] xl:text-[48px]">
          Smarter Routes, <br />
          Faster Delivery
        </h2>
        <p className="max-w-[360px] text-[16px] leading-[132%] font-poppins opacity-80 md:text-[18px] xl:text-[20px]">
          Accelerate your operations with Transvora's advanced logistics infrastructure designed
        </p>
      </div>

      {/* Cards Grid */}
      <div className="w-full max-w-[1317px] mx-auto grid grid-cols-1 gap-[12px] min-[720px]:grid-cols-3 lg:gap-[19px] font-poppins text-[#656565]">
        
        {/* Testimonial Card 1 */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] bg-[#ebebf5] p-[20px] flex flex-col justify-between lg:p-[27px_18px_34px_25px]">
          <div className="flex flex-col gap-[18px] lg:gap-[31px]">
             <img src={image.clientPortraitWoman} alt="Profile" className="h-[30px] w-[30px] rounded-full object-cover object-top lg:h-[40px] lg:w-[40px]" />
             <p className="text-[14px] leading-[132%] text-[#2d2d2d] md:text-[16px] xl:text-[20px]">Completely always transformed our shipping process.</p>
          </div>
          <div className="flex flex-col gap-[6px] lg:gap-[10px]">
             <span className="text-[14px] font-bold text-[#2d2d2d] md:text-[16px] xl:text-[18px]">Meida Angelic</span>
             <span className="text-[12px] leading-[132%] md:text-[13px] xl:text-[16px]">Supply Chain Manager</span>
          </div>
        </div>

        {/* Statistic Card */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] bg-[#2d2d2d] p-[20px] flex flex-col justify-between text-white lg:p-[24px_31px_34px]">
          <div className="flex flex-col gap-[16px] lg:gap-[24px]">
             <span className="text-[28px] font-medium leading-[110%] md:text-[34px] xl:text-[48px]">11.23T+</span>
             <span className="max-w-[220px] text-[14px] leading-[132%] md:text-[16px] xl:text-[20px]">Global Logistics Market Value</span>
          </div>
          <button className="self-start rounded-[100px] bg-[#2a2a7c] text-white px-[16px] py-[11px] text-[12px] font-sans font-medium transition-colors hover:bg-[#2a2a7c]/90 md:px-[18px] md:py-[13px] md:text-[13px] xl:px-[20px] xl:py-[18px] xl:text-[16px]">
             Learn More
          </button>
        </div>

        {/* Testimonial Card 2 */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] bg-[#ebebf5] p-[20px] flex flex-col justify-between lg:p-[27px_18px_34px_25px]">
          <div className="flex flex-col gap-[18px] lg:gap-[31px]">
             <img src={image.clientPortraitWoman} alt="Profile" className="h-[30px] w-[30px] rounded-full object-cover object-top lg:h-[40px] lg:w-[40px]" />
             <p className="text-[14px] leading-[132%] text-[#2d2d2d] md:text-[16px] xl:text-[20px]">We trust Transvora for all our international shipments</p>
          </div>
          <div className="flex flex-col gap-[6px] lg:gap-[10px]">
             <span className="text-[14px] font-bold text-[#2d2d2d] md:text-[16px] xl:text-[18px]">Sophia Nguyen</span>
             <span className="text-[12px] leading-[132%] md:text-[13px] xl:text-[16px]">Operations Director</span>
          </div>
        </div>

        {/* Image Profile Card 1 */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] relative overflow-hidden flex flex-col justify-end p-[20px] text-white lg:p-[34px_25px]">
          <img src={image.clientPortraitWoman} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover object-top z-0 opacity-80 bg-gray-800" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          <div className="flex flex-col gap-[6px] lg:gap-[10px] z-10">
             <span className="text-[14px] font-bold leading-[132%] md:text-[16px] xl:text-[18px]">Olivia Martinez</span>
             <span className="text-[12px] leading-[132%] opacity-80 md:text-[13px] xl:text-[16px]">Business Owner</span>
          </div>
        </div>

        {/* Testimonial Card 3 */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] bg-[#ebebf5] p-[20px] flex flex-col justify-between lg:p-[27px_18px_34px_25px]">
          <div className="flex flex-col gap-[18px] lg:gap-[31px]">
             <img src={image.clientPortraitMan} alt="Profile" className="h-[30px] w-[30px] rounded-full object-cover object-top lg:h-[40px] lg:w-[40px]" />
             <p className="text-[14px] leading-[132%] text-[#2d2d2d] md:text-[16px] xl:text-[20px]">Highly recommended for growing businesses</p>
          </div>
          <div className="flex flex-col gap-[6px] lg:gap-[10px]">
             <span className="text-[14px] font-bold text-[#2d2d2d] md:text-[16px] xl:text-[18px]">Ryan Patel</span>
             <span className="text-[12px] leading-[132%] md:text-[13px] xl:text-[16px]">Startup Founder</span>
          </div>
        </div>

        {/* Image Profile Card 2 */}
        <div className="aspect-[1.4/1] w-full rounded-[20px] relative overflow-hidden flex flex-col justify-end p-[20px] text-white lg:p-[34px_25px]">
          <img src={image.clientPortraitMan} alt="Background" className="absolute top-0 left-0 w-full h-full object-cover object-top z-0 opacity-80 bg-gray-800" />
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black/80 to-transparent z-0"></div>
          <div className="flex flex-col gap-[6px] lg:gap-[10px] z-10">
             <span className="text-[14px] font-bold leading-[132%] md:text-[16px] xl:text-[18px]">Ethan Walker</span>
             <span className="text-[12px] leading-[132%] opacity-80 md:text-[13px] xl:text-[16px]">Logistics Coordinator</span>
          </div>
        </div>

      </div>

    </section>
  );
};

export default ServicesTestimonialsSection;
