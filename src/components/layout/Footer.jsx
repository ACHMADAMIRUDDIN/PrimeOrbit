import React from 'react';
import { Mail } from 'lucide-react';

const MENU_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#tracking', label: 'Tracking' },
  { href: '#global-network', label: 'Global Network' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
];

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#18181A] text-white">
      <div className="mx-auto max-w-[1320px] px-4 pt-[68px] md:px-[60px] md:pt-[78px]">
        <div className="grid grid-cols-1 gap-y-[44px] md:grid-cols-2 md:gap-x-[36px] lg:grid-cols-[minmax(0,1.7fr)_170px_220px] lg:gap-x-[56px]">
          <div className="max-w-[520px] flex flex-col justify-between">
            <div>
              <h2 className="max-w-[440px] font-sans text-[22px] font-medium leading-[1.15] tracking-[-0.03em] text-[#FFCD51] md:text-[28px] lg:text-[32px]">
                Reliable Logistics Always On <br className="hidden md:block" /> Time Delivery
              </h2>
            </div>
            <p className="mt-16 md:mt-24 lg:mt-[105px] text-[11px] leading-none tracking-[-0.02em] text-white/72">
              © 2025 PrimeOrbit, All right reserved
            </p>
          </div>

          <div className="lg:pt-[4px]">
            <h4 className="mb-6 text-base font-semibold leading-none text-white">Menu</h4>
            <ul className="space-y-3 text-[11px] leading-[140%] text-white/68">
              {MENU_ITEMS.map(({ href, label }) => (
                <li key={label}>
                  <a className="transition-colors hover:text-primary" href={href}>
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:pt-[4px]">
            <h4 className="mb-6 text-base font-semibold leading-none text-white">Contact Us</h4>
            <ul className="space-y-3 text-[11px] leading-[140%] text-white/68">
              {/* Instagram link */}
              <li className="flex items-center gap-[9px]">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" className="shrink-0 text-white/82">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
                <span>@PrimeBit.for</span>
              </li>

              {/* Email Link */}
              <li className="flex items-center gap-[9px]">
                <Mail className="shrink-0 text-white/82" size={13} strokeWidth={1.8} />
                <span>PrimeBit@gmail.com</span>
              </li>

              {/* X Link with Custom Vector Logo */}
              <li className="flex items-center gap-[9px]">
                <svg viewBox="0 0 24 24" width="13" height="13" fill="currentColor" className="shrink-0 text-white/82">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
                <span>Primeorbit</span>
              </li>
            </ul>
          </div>
        </div>


        {/* Brand massive watermark at bottom */}
        <div className="mt-[58px] h-[72px] overflow-hidden border-white/10 pt-[2px] md:mt-[80px] md:h-[118px] md:pt-[4px] lg:h-[156px] lg:pt-[6px]">
          <p className="whitespace-nowrap font-interTight font-bold uppercase leading-none tracking-[-0.04em] text-white/[0.08] text-[76px] md:text-[148px] lg:text-[218px]">
            PRIMFORBIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
