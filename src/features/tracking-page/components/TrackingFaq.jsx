import React, { useState } from 'react';
import image from '../../../assets/image';
import { Plus, Minus } from 'lucide-react';

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
      <div className="w-full flex flex-col md:flex-row md:items-start justify-between gap-[20px]">
        <h2 className="text-[36px] md:text-[54px] font-sans font-semibold tracking-[-0.04em] text-black leading-[110%]">
          Frequently <br className="hidden md:block" />
          Asked Questions
        </h2>
        <p className="text-[16px] md:text-[18px] leading-[150%] text-[#5a6472] whitespace-nowrap md:text-right pt-[12px] font-sans">
          Answers to your questions, every step of the way.
        </p>
      </div>

      {/* Content */}
      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-[40px] lg:gap-[64px] mt-8">
        
        {/* FAQ Accordion List (Left Column) */}
        <div className="lg:col-span-7 flex flex-col gap-[20px] w-full">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="w-full bg-[#f4f5f6] rounded-[20px] p-[28px_32px] md:p-[32px_40px] flex flex-col gap-[16px] cursor-pointer hover:bg-[#ededf0] transition-all duration-300"
                onClick={() => setOpenIndex(isOpen ? -1 : index)}
              >
                <div className="flex items-center justify-between gap-[24px]">
                  <span className="font-sans font-semibold text-[18px] md:text-[22px] text-[#1c1c1c] tracking-tight leading-[130%]">{faq.question}</span>
                  {isOpen ? <Minus size={24} className="text-[#1c1c1c] shrink-0" /> : <Plus size={24} className="text-[#1c1c1c] shrink-0" />}
                </div>
                {isOpen && (
                  <p className="text-[16px] md:text-[18px] leading-[150%] text-[#5a6472] pr-[40px] animate-fade-in font-normal">
                    {faq.answer}
                  </p>
                )}
              </div>
            );
          })}
        </div>

        {/* Help Card (Right Column) */}
        <div className="lg:col-span-5 w-full bg-[#ebebf5] rounded-[32px] p-[32px_32px_48px_32px] md:p-[40px_40px_48px_40px] flex flex-col gap-[28px]">
          <div className="flex flex-col gap-[16px]">
            <h3 className="text-[28px] md:text-[34px] font-sans font-semibold text-[#1c1c1c] tracking-tight leading-[120%]">Still need help?</h3>
            <p className="text-[16px] md:text-[18px] leading-[150%] text-[#4e5b72] font-sans font-normal">
              Click on the blue round button at the bottom right corner of this page. You can also email our support team at{' '}
              <span className="text-[#21287c] font-bold">support@Primeorbit.com</span>
            </p>
          </div>
          
          {/* Airplane Image */}
          <div className="w-full h-[220px] rounded-[20px] overflow-hidden relative shadow-sm">
            <img src={image.airCargoPlane} alt="Air Cargo Plane" className="absolute w-full h-full object-cover" />
          </div>

          <button className="w-fit rounded-[100px] bg-[#21287c] text-white flex items-center justify-center px-[40px] py-[16px] text-[18px] font-sans font-medium hover:bg-[#1a2063] transition-colors shadow-sm">
            Contact Us
          </button>
        </div>

      </div>

    </section>
  );
};

export default TrackingFaq;
