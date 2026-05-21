import React, { useState } from 'react';
import image from '../../../assets/image';
import { Plus, Minus, ArrowUpRight } from 'lucide-react';

const TrackingFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: "What types of cargo can Primeorbit handle?",
      answer: "We handle general goods, bulk cargo, high-value items, fragile shipments, and more—via air, sea, and road."
    },
    {
      question: "Is there a minimum shipment size?",
      answer: "No, we handle shipments of all sizes, from small parcels to full container loads."
    },
    {
      question: "How do I book a shipment?",
      answer: "You can book directly through our online platform or contact our sales team for assistance."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 3-5 days in advance to ensure availability and best rates."
    }
  ];

  return (
    <section data-theme="light" className="w-full bg-white flex flex-col p-[40px] md:p-[100px_80px_105px] gap-[37px] text-[#2d2d2d] font-sans">
      
      {/* Title */}
      <div className="w-full flex flex-col md:flex-row md:items-center justify-between gap-[20px]">
        <h2 className="text-[36px] md:text-[48px] font-medium leading-[120%]">
          Frequently <br className="hidden md:block" />
          Asked Questions
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[132%] font-poppins max-w-[360px] opacity-80">
          Answers to your questions, every step of the way.
        </p>
      </div>

      {/* Content */}
      <div className="w-full flex flex-col lg:flex-row items-start gap-[46px] mt-8 text-[20px] text-[#292c31]">
        
        {/* FAQ Accordion List */}
        <div className="flex-1 flex flex-col gap-[20px] w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full bg-[#f5f5f5] rounded-[15px] p-[24px_30px] md:p-[30px_48px] flex flex-col gap-[18px] cursor-pointer hover:bg-gray-200 transition-colors"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between">
                  <span className="font-medium leading-[140%]">{faq.question}</span>
                  {isOpen ? <Minus size={24} className="text-gray-500 shrink-0" /> : <Plus size={24} className="text-gray-500 shrink-0" />}
                </div>
                {isOpen && (
                  <p className="text-[16px] md:text-[18px] leading-[120%] text-[#737c87] pr-[40px] animate-fade-in font-bold">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Card */}
        <div className="w-full lg:w-[535px] shrink-0 bg-[#ebebf5] rounded-[30px] p-[30px] md:p-[40px] flex flex-col gap-[24px]">
          <div className="flex flex-col gap-[24px]">
            <h3 className="text-[28px] md:text-[32px] font-medium leading-[120%]">Still need help?</h3>
            <p className="text-[16px] md:text-[18px] leading-[120%] text-[#4e5b72] font-bold">
              Click on the blue round button at the bottom right corner of this page. You can also email our support team at <br/>
              <span className="text-[#2a2a7c]">support@Primeorbit.com</span>
            </p>
          </div>
          
          {/* Image Placeholder */}
          <div className="w-full h-[200px] md:h-[240px] rounded-[24px] bg-gray-300 overflow-hidden relative">
            <img src={image.logisticsTeam} alt="Support Team" className="absolute w-full h-full object-cover opacity-70" />
          </div>

          <button className="w-full rounded-[100px] bg-[#2a2a7c] text-white flex items-center justify-center py-[18px] text-[20px] font-medium hover:bg-[#2a2a7c]/90 transition-colors">
            Contact Us
          </button>
        </div>

      </div>

    </section>
  );
};

export default TrackingFaq;
