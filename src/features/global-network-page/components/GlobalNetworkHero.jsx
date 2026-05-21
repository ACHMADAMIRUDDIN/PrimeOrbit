import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import image from '../../../assets/image';

const MAP_BADGES = [
  {
    city: 'Brasilia, Brazil',
    className: 'bottom-[72px] left-[27%] hidden md:flex',
    name: 'South America Supply',
  },
  {
    city: 'Jakarta, Indonesia',
    className: 'bottom-[112px] left-[58%] hidden md:flex',
    name: 'Movein',
  },
  {
    city: 'Jeddah, Arab',
    className: 'bottom-[104px] right-[4%] hidden lg:flex',
    name: 'Middle East Point',
  },
];

const LocationBadge = ({ city, className, name }) => (
  <div
    className={`absolute z-20 flex items-center gap-[12px] rounded-full border border-[#b9cff5] bg-white px-[16px] py-[11px] shadow-[0px_10px_24px_rgba(15,23,42,0.08)] ${className}`}
  >
    <span className="flex h-[24px] w-[24px] items-center justify-center rounded-full bg-[#edf4ff]">
      <MapPin className="text-[#5b8fdb]" size={13} strokeWidth={2.6} />
    </span>
    <div className="flex flex-col whitespace-nowrap">
      <span className="font-inter text-[14px] font-medium leading-[115%] text-[#171717]">{name}</span>
      <span className="font-inter text-[10px] leading-[115%] text-[#9a9fa8]">{city}</span>
    </div>
  </div>
);

const MapFogBackground = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-y-[-9%] inset-x-[-14%] h-[118%] w-[128%] max-w-none"
    fill="none"
    preserveAspectRatio="xMidYMid slice"
    viewBox="0 0 1320 760"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient id="global-map-base" x1="660" x2="660" y1="0" y2="760">
        <stop offset="0%" stopColor="#fbfaf7" />
        <stop offset="100%" stopColor="#f4f2ec" />
      </linearGradient>
      <linearGradient id="global-map-stroke" x1="0" x2="1320" y1="0" y2="760">
        <stop offset="0%" stopColor="#ebe8e0" stopOpacity="0.45" />
        <stop offset="100%" stopColor="#d8d4cb" stopOpacity="0.3" />
      </linearGradient>
      <radialGradient id="global-fog-1" cx="0" cy="0" gradientTransform="translate(356 148) rotate(44.8) scale(382.527 233.478)" gradientUnits="userSpaceOnUse" r="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.96" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="global-fog-2" cx="0" cy="0" gradientTransform="translate(1010 194) rotate(128.5) scale(421.903 244.962)" gradientUnits="userSpaceOnUse" r="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.92" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <radialGradient id="global-fog-3" cx="0" cy="0" gradientTransform="translate(651 539) rotate(90) scale(236 505)" gradientUnits="userSpaceOnUse" r="1">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.48" />
        <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
      </radialGradient>
      <filter id="global-map-blur" colorInterpolationFilters="sRGB" filterUnits="userSpaceOnUse" height="920" width="1480" x="-80" y="-80">
        <feGaussianBlur stdDeviation="22" />
      </filter>
    </defs>

    <rect fill="url(#global-map-base)" height="760" width="1320" />

    <g opacity="0.75" stroke="url(#global-map-stroke)" strokeLinecap="round" strokeLinejoin="round">
      <path d="M31 212C122 146 191 113 271 93C389 64 497 98 610 119C705 137 769 139 865 112C983 79 1074 50 1196 83C1262 101 1319 128 1360 165" strokeWidth="2.2" />
      <path d="M-18 289C93 257 171 245 252 253C373 266 460 314 563 320C689 327 794 277 903 267C1014 257 1113 287 1239 315C1288 326 1330 327 1372 321" strokeWidth="1.9" />
      <path d="M23 369C128 399 191 449 291 466C409 486 516 443 635 430C723 420 810 438 901 451C1023 469 1146 433 1326 407" strokeWidth="1.9" />
      <path d="M117 577C198 534 303 519 395 524C481 529 535 565 622 579C731 596 858 585 961 545C1058 507 1177 471 1332 489" strokeWidth="2.2" />
      <path d="M176 86C144 164 137 230 154 300C173 377 227 428 238 500C245 549 233 604 208 664" strokeWidth="1.65" />
      <path d="M432 40C410 116 402 172 426 239C446 295 493 334 504 392C518 462 486 540 487 637" strokeWidth="1.55" />
      <path d="M667 36C661 111 646 187 665 252C687 327 733 390 743 450C757 533 731 598 711 697" strokeWidth="1.65" />
      <path d="M930 63C893 153 891 243 930 323C954 372 1006 416 1020 475C1038 551 1016 612 978 688" strokeWidth="1.55" />
      <path d="M1112 104C1087 170 1084 242 1101 299C1126 381 1186 436 1198 505C1210 569 1196 627 1160 695" strokeWidth="1.6" />
      <path d="M92 162C210 174 325 204 435 252C503 281 571 316 648 325C734 335 802 303 878 278C986 242 1128 231 1270 259" strokeWidth="1.3" />
      <path d="M87 504C181 476 286 445 385 445C495 445 587 505 694 516C790 526 876 488 968 471C1051 457 1148 461 1257 514" strokeWidth="1.3" />
      <path d="M282 106C341 146 381 205 416 255C446 298 472 337 531 361C594 386 660 376 722 362C774 350 819 333 871 339C932 346 983 382 1033 399" strokeWidth="1.25" />
      <path d="M197 327C238 344 269 371 305 397C349 428 395 458 449 463C503 469 549 440 599 430C663 417 736 430 789 448" strokeWidth="1.2" />
    </g>

    <g opacity="0.3">
      <circle cx="329" cy="233" fill="#e6e2db" r="7" />
      <circle cx="487" cy="178" fill="#e4e0d8" r="5.5" />
      <circle cx="697" cy="321" fill="#e6e1da" r="6.2" />
      <circle cx="888" cy="252" fill="#e6e2db" r="8.2" />
      <circle cx="1038" cy="484" fill="#e6e2db" r="6" />
      <circle cx="772" cy="560" fill="#e6e2db" r="5" />
      <circle cx="449" cy="548" fill="#e6e2db" r="7" />
      <circle cx="1088" cy="170" fill="#e8e4dc" r="6.5" />
    </g>

    <g fill="#d8d4ca" fontFamily="Inter, sans-serif" fontSize="16" fontWeight="500" opacity="0.55">
      <text x="211" y="194">Scaggsville</text>
      <text x="385" y="376">Laurel</text>
      <text x="566" y="652">Greenbelt</text>
      <text x="979" y="121">Odenton</text>
      <text x="1019" y="352">Odenton</text>
      <text x="744" y="514">Patuxent</text>
      <text x="712" y="538">Research</text>
      <text x="826" y="279">Meade</text>
      <text x="963" y="208">Open</text>
      <text x="742" y="639">Bowie</text>
    </g>

    <g filter="url(#global-map-blur)">
      <ellipse cx="356" cy="148" fill="url(#global-fog-1)" rx="274" ry="167" />
      <ellipse cx="1010" cy="194" fill="url(#global-fog-2)" rx="304" ry="176" />
      <ellipse cx="651" cy="539" fill="url(#global-fog-3)" rx="320" ry="148" />
    </g>
  </svg>
);

const GlobalNetworkHero = () => {
  return (
    <section className="w-full bg-white pb-[26px] pt-[22px] md:pb-[34px]">
      <div className="w-full">
        <div className="relative min-h-[640px] overflow-hidden bg-[#faf9f6] md:min-h-[734px]">
          <MapFogBackground />

          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.92),rgba(255,255,255,0)_42%)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_65%,rgba(255,255,255,0.22),rgba(255,255,255,0)_48%)]" />

          <div className="relative flex min-h-[640px] flex-col items-center px-[24px] pb-[44px] pt-[152px] md:min-h-[734px] md:px-[44px] md:pb-[58px] md:pt-[168px]">
            <div className="flex w-full max-w-[973px] flex-col items-center gap-[34px] text-center md:gap-[42px]">
              <h1 className="font-geist text-[48px] font-medium leading-[96%] tracking-[-0.065em] text-[#0c0c0c] md:text-[76px]">
                Integrated
                <br />
                Logistics Solutions Tailored
              </h1>

              <div className="flex flex-col items-center gap-[8px] text-[18px] text-[#0a0a0a] md:text-[24px]">
                <div className="flex flex-col items-center gap-[8px] md:flex-row">
                  <span className="leading-[120%] tracking-[-0.02em]">From global forwarding</span>
                  <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#2a2a7c] p-[8px] text-white">
                    <ArrowRight size={16} />
                  </div>
                  <span className="leading-[120%] tracking-[-0.02em]">to local distribution</span>
                </div>
                <span className="leading-[120%] tracking-[-0.02em]">
                  we streamline your supply chain with precision and transparency.
                </span>
              </div>

              <div className="flex flex-col items-center gap-[14px] pt-[8px] font-sans text-[18px] md:flex-row md:gap-[8px] md:text-[20px]">
                <button className="rounded-[100px] bg-[#2a2a7c] px-[34px] py-[18px] text-white transition-colors hover:bg-[#2a2a7c]/90">
                  View Route Capacity
                </button>
                <button className="rounded-[100px] bg-[#ffcd51] px-[34px] py-[18px] text-black transition-colors hover:bg-[#ffcd51]/90 md:min-w-[261px]">
                  Find Nearest Hub
                </button>
              </div>
            </div>
          </div>

          <div className="absolute inset-0 hidden md:block">
            <div className="absolute bottom-[112px] left-[5%] z-20 w-[214px] rounded-[20px] bg-[#151515] p-[12px] text-white shadow-[0px_20px_50px_rgba(0,0,0,0.22)]">
              <div className="absolute right-[14px] top-[12px] rounded-full bg-[#2a2a7c] px-[10px] py-[5px] font-inter text-[9px] leading-none text-white">
                Status: Available
              </div>

              <div className="overflow-hidden rounded-[14px] bg-white">
                <img
                  src={image.sideBoxTruck}
                  alt="Heavy-duty wingbox"
                  className="h-[110px] w-full object-cover"
                />
              </div>

              <div className="mt-[12px] flex items-center gap-[10px]">
                <span className="flex h-[26px] w-[26px] items-center justify-center rounded-full bg-white text-[#2a2a7c]">
                  <MapPin size={14} strokeWidth={2.4} />
                </span>
                <div className="flex flex-col">
                  <span className="font-inter text-[14px] font-medium leading-[118%]">Heavy-Duty Wingbox</span>
                  <span className="font-inter text-[11px] leading-[118%] text-white/62">Singapore</span>
                </div>
              </div>

              <div className="absolute bottom-[-8px] left-[74px] h-[18px] w-[18px] rotate-45 bg-[#151515]" />
            </div>

            {MAP_BADGES.map((badge) => (
              <LocationBadge key={badge.name} {...badge} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalNetworkHero;
