import React from 'react';

const DEFAULT_LOCATIONS = [
  {
    city: 'Tianshui, China',
    className: 'left-[15%] top-[14%] hidden md:flex',
    name: 'East Asia Route',
  },
  {
    city: 'Jakarta, Indonesia',
    className: 'left-[73%] top-[24%] hidden md:flex',
    name: 'Southeast Asia',
  },
  {
    city: 'Madrid, Spain',
    className: 'left-1/2 top-[40%] z-20',
    dark: true,
    name: 'Europe Gateway',
  },
  {
    city: 'Jeddah, Arab',
    className: 'left-[86%] top-[50%] hidden md:flex',
    name: 'Middle East Point',
  },
  {
    city: 'Brasilia, Brazil',
    className: 'left-[21%] top-[68%] hidden md:flex',
    name: 'South America Supply',
  },
];

const MarkerIcon = ({ dark = false }) => (
  <span
    className={`relative flex h-[28px] w-[28px] shrink-0 items-center justify-center rounded-full ${
      dark ? 'bg-white/12' : 'bg-[#eef5ff]'
    }`}
  >
    <span
      className={`h-[14px] w-[14px] rounded-full border-2 ${
        dark ? 'border-white bg-[#7fb0ff]' : 'border-[#5a91e5] bg-white'
      }`}
    />
    <span className="absolute h-[4px] w-[4px] rounded-full bg-[#5a91e5]" />
  </span>
);

const LocationBadge = ({ city, className, dark = false, name }) => (
  <div
    className={`absolute flex -translate-x-1/2 -translate-y-1/2 items-center gap-[10px] rounded-full px-[14px] py-[10px] font-inter shadow-[0px_12px_24px_rgba(24,39,75,0.08),0px_2px_6px_rgba(24,39,75,0.08)] ${
      dark
        ? 'bg-[#191919] text-white'
        : 'border border-[#d9e4f7] bg-white text-[#191919]'
    } ${className}`}
  >
    <MarkerIcon dark={dark} />
    <div className="flex flex-col whitespace-nowrap">
      <span className={`text-[13px] font-medium leading-[120%] ${dark ? 'text-white' : 'text-[#222]'}`}>
        {name}
      </span>
      <span className={`text-[10px] leading-[120%] ${dark ? 'text-white/60' : 'text-[#9aa3b2]'}`}>
        {city}
      </span>
    </div>
  </div>
);

const WorldMapGraphic = () => (
  <svg
    aria-hidden="true"
    className="absolute inset-0 h-full w-full"
    fill="none"
    preserveAspectRatio="xMidYMid meet"
    viewBox="0 0 1200 560"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <pattern height="14" id="map-dots-gray" patternUnits="userSpaceOnUse" width="14">
        <circle cx="4" cy="4" fill="#d9dde5" r="2.2" />
      </pattern>
      <pattern height="14" id="map-dots-blue" patternUnits="userSpaceOnUse" width="14">
        <circle cx="4" cy="4" fill="#9fc2ff" r="2.2" />
      </pattern>
    </defs>

    <g opacity="0.9">
      <path
        d="M66 136C87 102 124 74 174 63C204 56 240 57 270 70C289 48 315 34 348 31C375 28 402 38 419 62C395 79 382 100 376 122C369 148 355 163 333 175C316 184 296 188 273 190C256 192 241 190 223 184C196 193 164 191 133 182C109 175 82 160 66 136Z"
        fill="url(#map-dots-gray)"
      />
      <path
        d="M164 255C186 234 221 231 242 244C265 258 274 289 271 320C268 354 257 391 241 424C223 459 198 492 173 510C154 486 145 452 145 419C145 389 136 358 140 326C144 296 149 271 164 255Z"
        fill="url(#map-dots-gray)"
      />
      <path
        d="M460 82C504 58 569 45 639 48C691 50 741 59 790 67C836 58 886 59 945 74C1010 90 1066 117 1114 153C1086 170 1047 179 1002 181C980 203 948 213 909 212C878 230 838 233 798 223C767 236 727 239 687 233C650 235 612 229 580 215C541 197 497 164 472 127C465 117 462 101 460 82Z"
        fill="url(#map-dots-gray)"
      />
      <path
        d="M898 344C923 327 959 326 990 334C1021 342 1047 363 1072 391C1084 404 1090 422 1085 438C1053 448 1021 452 987 452C953 452 918 448 894 434C876 423 870 404 874 383C878 367 885 354 898 344Z"
        fill="url(#map-dots-gray)"
      />
      <path
        d="M735 240C759 229 789 231 807 246C821 258 832 278 834 299C813 295 790 293 769 289C757 273 744 257 735 240Z"
        fill="url(#map-dots-gray)"
      />
      <path
        d="M1002 208C1019 201 1040 204 1055 216C1035 222 1019 223 1002 208Z"
        fill="url(#map-dots-gray)"
      />
    </g>

    <g>
      <path
        d="M542 167C569 157 599 159 621 171C643 183 658 205 661 228C663 248 663 271 665 293C670 328 670 364 662 397C653 438 634 474 607 505C579 488 560 454 548 418C537 381 530 345 525 307C521 274 520 242 526 214C529 196 533 178 542 167Z"
        fill="url(#map-dots-blue)"
      />
      <path
        d="M494 158C516 146 542 142 567 144C582 145 597 147 611 153C627 161 643 173 651 189C625 191 605 186 585 175C570 169 555 169 539 172C523 175 509 171 494 158Z"
        fill="url(#map-dots-blue)"
      />
      <path
        d="M453 188C470 179 488 178 505 184C490 202 479 221 474 242C469 258 465 276 463 294C445 281 439 255 441 234C443 218 445 201 453 188Z"
        fill="url(#map-dots-blue)"
      />
    </g>
  </svg>
);

const GlobalFootprintMap = ({ className = '', locations = DEFAULT_LOCATIONS }) => {
  return (
    <div className={`relative w-full overflow-hidden bg-white font-inter ${className}`}>
      <WorldMapGraphic />

      {locations.map((location) => (
        <LocationBadge key={location.name} {...location} />
      ))}
    </div>
  );
};

export default GlobalFootprintMap;
