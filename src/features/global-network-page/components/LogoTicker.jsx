import React from "react";

const logos = [
  {
    name: "Cubekit",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
  },
  {
    name: "Elasticware",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path
          d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm0-2a8 8 0 100-16 8 8 0 000 16z"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          className="animate-pulse"
        />
        <path d="M12 6l-4 6h8l-4-6z" />
      </svg>
    ),
  },
  {
    name: "Ephemeral",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71" />
        <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71" />
      </svg>
    ),
  },
  {
    name: "Euphoria",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
      >
        <line x1="12" y1="2" x2="12" y2="6" />
        <line x1="12" y1="18" x2="12" y2="22" />
        <line x1="4.93" y1="4.93" x2="7.76" y2="7.76" />
        <line x1="16.24" y1="16.24" x2="19.07" y2="19.07" />
        <line x1="2" y1="12" x2="6" y2="12" />
        <line x1="18" y1="12" x2="22" y2="12" />
        <line x1="6.34" y1="17.66" x2="9.17" y2="14.83" />
        <line x1="14.83" y1="9.17" x2="17.66" y2="6.34" />
      </svg>
    ),
  },
  {
    name: "Foresight",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="currentColor"
      >
        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z" />
      </svg>
    ),
  },
  {
    name: "Frequencies",
    icon: (
      <svg
        className="w-6 h-6 text-white/60"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      >
        <path d="M3 12h3l3-9 4 18 3-13 3 4h3" />
      </svg>
    ),
  },
];

const LogoTicker = () => {
  const duplicatedLogos = [...logos, ...logos, ...logos];

  return (
    <div
      data-theme="dark"
      className="w-full bg-[#191919] py-8 overflow-hidden border-t border-white/5 relative"
    >
      <div className="absolute inset-y-0 left-0 w-20 bg-gradient-to-r from-[#191919] to-transparent z-10 pointer-events-none"></div>
      <div className="absolute inset-y-0 right-0 w-20 bg-gradient-to-l from-[#191919] to-transparent z-10 pointer-events-none"></div>

      <div className="flex w-max items-center gap-16 animate-infinite-scroll">
        {duplicatedLogos.map((logo, index) => (
          <div
            key={index}
            className="flex items-center gap-3 grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer"
          >
            {logo.icon}
            <span className="text-white text-lg font-medium tracking-tight font-sans">
              {logo.name}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoTicker;
