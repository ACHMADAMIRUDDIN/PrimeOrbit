import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const MENU_ITEMS = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#tracking', label: 'Tracking' },
  { href: '#global-network', label: 'Global Network' },
  { href: '#why-choose-us', label: 'Why Choose Us' },
];

const CONTACT_ITEMS = [
  {
    Icon: Mail,
    label: 'PrimeOrbit@gmail.com',
  },
  {
    Icon: Phone,
    label: '+101899120',
  },
  {
    Icon: MapPin,
    label: 'PrimeOrbit',
  },
];

const Footer = () => {
  return (
    <footer className="w-full overflow-hidden bg-[#1c1c1c] text-white">
      <div className="mx-auto max-w-[1320px] px-4 pt-[68px] md:px-[60px] md:pt-[78px]">
        <div className="grid grid-cols-1 gap-y-[44px] md:grid-cols-2 md:gap-x-[36px] lg:grid-cols-[minmax(0,1.7fr)_170px_220px] lg:gap-x-[56px]">
          <div className="max-w-[520px]">
            <h2 className="max-w-[470px] font-sans text-[34px] font-medium leading-[96%] tracking-[-0.04em] text-primary md:text-[46px] lg:text-[52px]">
              Reliable Logistics Always On Time Delivery
            </h2>
            <p className="mt-[54px] text-[11px] leading-none tracking-[-0.02em] text-white/72">
              © 2025 PRIMEORBIT, All right reserved
            </p>
          </div>

          <div className="lg:pt-[4px]">
            <h4 className="mb-[18px] text-[15px] font-medium leading-none text-white">Menu</h4>
            <ul className="space-y-[7px] text-[11px] leading-[140%] text-white/68">
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
            <h4 className="mb-[18px] text-[15px] font-medium leading-none text-white">Contact Us</h4>
            <ul className="space-y-[10px] text-[11px] leading-[140%] text-white/68">
              {CONTACT_ITEMS.map(({ Icon, label }) => (
                <li key={label} className="flex items-center gap-[9px]">
                  <Icon className="shrink-0 text-white/82" size={13} strokeWidth={1.8} />
                  <span>{label}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-[58px] h-[72px] overflow-hidden  border-white/10 pt-[18px] md:mt-[80px] md:h-[118px] md:pt-[22px] lg:h-[154px] lg:pt-[28px]">
          <p className="whitespace-nowrap font-geist text-[76px] font-medium leading-none tracking-[-0.08em] text-white/[0.14] md:text-[148px] lg:text-[218px]">
            PRIMEORBIT
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
