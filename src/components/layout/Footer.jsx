import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1C1C1C] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="lg:col-span-2">
            <h2 className="text-3xl font-bold text-primary mb-4">Reliable Logistics Always On Time Delivery</h2>
            <p className="text-gray-400 mt-8 text-sm">© 2025 PrimeOrbit. All right reserved</p>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Menu</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Services</a></li>
              <li><a href="#tracking" className="hover:text-primary transition-colors">Tracking</a></li>
              <li><a href="#global-network" className="hover:text-primary transition-colors">Global Network</a></li>
              <li><a href="#why-choose-us" className="hover:text-primary transition-colors">Why Choose Us</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-6">Contact Us</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-primary shrink-0 mt-0.5" />
                <span>89th world St.</span>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-primary shrink-0" />
                <span>PrimeOrbit@gmail.com</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-primary shrink-0" />
                <span>+101899120</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Big Background Text */}
        <div className="w-full overflow-hidden flex justify-center border-t border-gray-800 pt-8 opacity-20">
          <h1 className="text-[10vw] font-bold tracking-tighter leading-none text-gray-600">PRIMEORBIT</h1>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
