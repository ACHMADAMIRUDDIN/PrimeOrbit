import React, { useState } from 'react';
import image from '../../../assets/image';
import { ChevronDown, ChevronUp } from 'lucide-react';

const faqData = [
  {
    question: "What types of cargo can Primeorbit handle?",
    answer: "We handle general goods, bulk cargo, high-value items, fragile shipments, and more—via air, sea, and road."
  },
  {
    question: "Is there a minimum shipment size?",
    answer: "We accommodate shipments of all sizes. For very small parcels, we offer consolidated shipping options, while full containers are available for large volume cargo."
  },
  {
    question: "How do I book a shipment?",
    answer: "You can book directly through our platform by creating an account, selecting your route and cargo type, or by contacting our sales team for custom solutions."
  },
  {
    question: "How far in advance should I book?",
    answer: "We recommend booking at least 7-14 days in advance for sea freight and 3-5 days for air freight to ensure capacity and optimal pricing."
  }
];

const ContactUsFaq = () => {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section className="w-full bg-white flex flex-col p-[40px] lg:p-[100px_80px_105px] gap-[40px] font-sans text-black max-w-[1440px] mx-auto">
      
      {/* Title Area */}
      <div className="w-full flex flex-col md:flex-row md:items-end justify-between gap-[20px]">
        <h2 className="text-[36px] md:text-[48px] leading-[120%] font-medium">
          Frequently <br className="hidden md:block" />
          Asked Questions
        </h2>
        <p className="text-[18px] md:text-[20px] leading-[132%] font-poppins text-[#2d2d2d] max-w-[300px]">
          Answers to your questions, every step of the way.
        </p>
      </div>

      {/* Content Area */}
      <div className="w-full flex flex-col lg:flex-row items-stretch gap-[46px] mt-[20px]">
        
        {/* Left: Accordion List */}
        <div className="flex-1 flex flex-col gap-[20px]">
          {faqData.map((faq, index) => {
            const isOpen = openIndex === index;
            
            return (
              <div 
                key={index}
                onClick={() => toggleFaq(index)}
                className="w-full rounded-[15px] bg-[#f5f5f5] flex flex-col p-[24px_30px] md:p-[30px_48px] gap-[18px] cursor-pointer transition-all duration-300 hover:bg-gray-200"
              >
                <div className="flex items-center justify-between gap-[20px]">
                  <h3 className="text-[18px] md:text-[20px] leading-[140%] font-medium text-[#292c31]">
                    {faq.question}
                  </h3>
                  <div className="shrink-0 text-gray-500">
                    {isOpen ? <ChevronUp size={24} /> : <ChevronDown size={24} />}
                  </div>
                </div>
                
                {/* Answer content that expands */}
                <div className={`overflow-hidden transition-all duration-300 ${isOpen ? 'max-h-[200px] opacity-100' : 'max-h-0 opacity-0'}`}>
                  <p className="text-[16px] md:text-[18px] leading-[140%] text-[#737c87] pt-[10px]">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Right: Help Box */}
        <div className="w-full lg:w-[535px] rounded-[30px] bg-[#ebebf5] flex flex-col p-[30px] md:p-[40px] gap-[24px] shrink-0">
          
          <div className="flex flex-col gap-[24px]">
             <h3 className="text-[28px] md:text-[32px] leading-[120%] font-medium">
               Still need help?
             </h3>
             <p className="text-[16px] md:text-[18px] leading-[140%] text-[#4e5b72] font-medium">
               Click on the blue round button at the bottom right corner of this page. You can also email our support team at{' '}
               <a href="mailto:support@Primeorbit.com" className="text-[#2a2a7c] hover:underline">
                 support@Primeorbit.com
               </a>
             </p>
          </div>

          <div className="flex-1 min-h-[200px] rounded-[24px] bg-gray-300 relative overflow-hidden mt-[10px]">
             <img src={image.logisticsTeam} alt="Support Team" className="absolute w-full h-full object-cover" />
          </div>

          <button className="w-fit rounded-[100px] bg-[#2a2a7c] text-white p-[16px_36px] md:p-[18px_46px] text-[18px] md:text-[20px] font-sans hover:bg-[#2a2a7c]/90 transition-colors mt-[10px]">
             Contact Us
          </button>
          
        </div>

      </div>

    </section>
  );
};

export default ContactUsFaq;
