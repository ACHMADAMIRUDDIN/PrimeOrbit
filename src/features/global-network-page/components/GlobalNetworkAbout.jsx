import React, { useState } from "react";
import image from "../../../assets/image";
import { ArrowRight, Cpu, LineChart } from "lucide-react";

const DATA_ITEMS = [
  {
    id: "01",
    title: "Top 3 Global Shipping Company",
    shortDesc:
      "Recognized as one of the world's largest integrated logistics providers by container volume and global presence.",
    detailTitle: "Integrated Logistics, Global Network",
    detailDesc:
      "Expanding horizons by connecting major trade lanes seamlessly, ensuring high capacity and dependable ocean freight operations worldwide.",
    imgAsset: image.warehouseOperations,
    features: [
      { Icon: Cpu, text: "Automated Container Allocations" },
      { Icon: LineChart, text: "High-Volume Capacity Forecasting" },
    ],
  },
  {
    id: "02",
    title: "Smart Logistics Pioneer",
    shortDesc:
      "Among the first to implement AI-driven route optimization and blockchain-enabled cargo tracking.",
    detailTitle: "Smart Logistics, Smarter Future",
    detailDesc:
      "At PrimeOrbit, technology isn't an add-on it's the core of how we move faster, safer, and smarter. From AI to blockchain, we continuously evolve to lead the future of global logistics.",
    imgAsset: image.containerStacks,
    features: [
      { Icon: Cpu, text: "AI-Powered Route Optimization" },
      { Icon: LineChart, text: "Predictive Analytics for Demand Forecasting" },
    ],
  },
  {
    id: "03",
    title: "21 Million+ TEUs Handled Annually",
    shortDesc:
      "Efficiently moving millions of containers across seas and borders, fueling international trade.",
    detailTitle: "Massive Scale Container Operations",
    detailDesc:
      "Streamlining large-scale port operations with ultra-precise scheduling and high-throughput terminal logistics management.",
    imgAsset: image.containerSupervisor,
    features: [
      { Icon: Cpu, text: "Smart Terminal Automated Routing" },
      { Icon: LineChart, text: "Real-time Throughput Monitoring" },
    ],
  },
  {
    id: "04",
    title: "Sustainability Leadership",
    shortDesc:
      "Awarded for green shipping initiatives and fleet upgrades aimed at reducing carbon emissions.",
    detailTitle: "Eco-Friendly Modern Fleet",
    detailDesc:
      "Committing to sustainable supply chains by deploying energy-efficient maritime transport vessels and smart carbon auditing metrics.",
    imgAsset: image.warehouseOperations,
    features: [
      { Icon: Cpu, text: "Carbon Emission Analytics" },
      { Icon: LineChart, text: "Renewable Fleet Energy Planning" },
    ],
  },
];

const GlobalNetworkAbout = () => {
  const [activeIndex, setActiveIndex] = useState("02");

  const toggleAccordion = (id) => {
    setActiveIndex(activeIndex === id ? null : id);
  };

  return (
    <section
      data-theme="light"
      className="w-full bg-white flex flex-col items-center py-24 px-6 md:px-12 font-inter antialiased text-black"
    >
      <div className="w-full max-w-[1240px] mb-16">
        <h2 className="text-[24px] md:text-[32px] leading-[1.3] font-medium max-w-[840px] tracking-tight">
          We operate multiple branch offices to support smooth and efficient
          business operations for our partners.
        </h2>
      </div>

      <div className="w-full max-w-[1240px] flex flex-col border-t border-black/10">
        {DATA_ITEMS.map((item) => {
          const isOpen = activeIndex === item.id;

          return (
            <div
              key={item.id}
              className="w-full border-b border-black/10 flex flex-col transition-all duration-500 ease-in-out overflow-hidden"
            >
              <div
                onClick={() => toggleAccordion(item.id)}
                className="w-full flex flex-col md:flex-row items-start md:items-center py-8 gap-5 md:gap-10 cursor-pointer select-none group"
              >
                <span className="text-[20px] md:text-[26px] font-medium leading-none shrink-0 text-gray-400 group-hover:text-black transition-colors min-w-[40px]">
                  {item.id}
                </span>

                <div className="flex-1 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 md:gap-10 relative">
                  <h3 className="text-[20px] md:text-[24px] font-semibold leading-[1.2] tracking-tight md:w-[38%] shrink-0">
                    {item.title}
                  </h3>

                  <p
                    className={`w-full md:max-w-[536px] text-[14px] md:text-[16px] leading-[1.5] font-normal transition-all duration-500 pr-[10px] md:pr-[40px] ${
                      isOpen
                        ? "text-black md:-translate-x-10 font-medium"
                        : "text-gray-500 translate-x-0"
                    }`}
                  >
                    {item.shortDesc}
                  </p>

                  <div
                    className={`hidden lg:flex items-center justify-center shrink-0 transition-all duration-500 ${
                      isOpen
                        ? "bg-[#2a2a7c] text-white w-11 h-11 rounded-full rotate-[-45deg]" // ON: Bulatan Biru + ↗
                        : "bg-transparent text-black/40 group-hover:text-black w-11 h-11 rotate-0" // OFF: Murni Icon + -> (Lebar tetap dikunci 11 agar posisi alignment teks konstan)
                    }`}
                  >
                    <ArrowRight size={22} className="stroke-[2.5]" />
                  </div>
                </div>
              </div>

              <div
                className={`transition-all duration-500 ease-in-out ${
                  isOpen
                    ? "max-h-[640px] opacity-100 pb-10"
                    : "max-h-0 opacity-0 pointer-events-none"
                }`}
              >
                <div className="w-full h-[420px] md:h-[520px] rounded-[32px] relative overflow-hidden bg-gray-100 shadow-sm">
                  <img
                    src={
                      item.imgAsset ||
                      "https://images.unsplash.com/photo-1578574437130-527eed3abbec?auto=format&fit=crop&q=80&w=1200"
                    }
                    alt={item.title}
                    className="absolute inset-0 w-full h-full object-cover"
                  />

                  <div className="absolute top-6 md:top-10 left-6 md:left-10 w-[90%] md:w-[460px] bg-white rounded-[24px] p-6 md:p-8 flex flex-col gap-6 md:gap-8 shadow-xl border border-white/20">
                    <div className="flex flex-col gap-3">
                      <h4 className="text-[22px] md:text-[26px] leading-[1.2] font-bold tracking-tight text-[#191919]">
                        {item.detailTitle}
                      </h4>
                      <p className="text-[12px] md:text-[13px] leading-[1.6] text-gray-500 font-normal">
                        {item.detailDesc}
                      </p>
                    </div>

                    <div className="flex flex-col gap-4 text-[13px] md:text-[14px] text-[#191919]">
                      {item.features.map((feat, idx) => {
                        const IconComponent = feat.Icon;
                        return (
                          <div key={idx} className="flex items-center gap-3">
                            <span className="flex h-[18px] w-[18px] items-center justify-center rounded-[5px] bg-[#3B82F6]/15 shrink-0">
                              <IconComponent
                                size={11}
                                className="text-[#2a2a7c] stroke-[2.5]"
                              />
                            </span>
                            <span className="font-semibold leading-none tracking-tight">
                              {feat.text}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default GlobalNetworkAbout;
