import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'top-0 py-2' : 'top-[44px]'} flex justify-center`}>
      <div className={`w-[1118px] max-w-[95%] rounded-[100px] flex justify-between items-center px-[24px] py-[18px] transition-all duration-300 ${
        isLight ? 'bg-white shadow-[0px_0px_24px_rgba(0,0,0,0.08)]' : 'backdrop-blur-[58px] bg-white/10 border border-white/20'
      } ${isScrolled && !isLight ? 'shadow-lg' : ''}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[16px]">
          <div className="w-[28px] h-[28.16px] bg-primary rounded-md flex items-center justify-center font-bold text-secondary italic">P</div>
          <span className={`${isLight ? 'text-black' : 'text-white'} font-semibold text-[24px] leading-[28.8px] font-sans`}>PrimeOrbit</span>
        </Link>

        {/* Desktop Menu */}
        <div className={`hidden lg:flex items-center gap-[46px] ${isLight ? 'text-black' : 'text-white'}`}>
          <Link to="/" className={`${location.pathname === '/' ? 'font-semibold' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Home</Link>
          <Link to="/services" className={`${location.pathname === '/services' ? 'font-semibold' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Services</Link>
          <Link to="/tracking" className={`${location.pathname === '/tracking' ? 'font-semibold' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Tracking</Link>
          <Link to="/global-network" className={`${location.pathname === '/global-network' ? 'font-semibold' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Global Network</Link>
          <Link to="/why-choose-us" className={`${location.pathname === '/why-choose-us' ? 'font-semibold' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Why Choose Us</Link>
        </div>

        {/* Contact Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className={`${isLight ? 'bg-[#2a2a7c] text-white hover:bg-[#2a2a7c]/90' : 'bg-white/15 border border-white/20 hover:bg-white/25 text-white'} px-[28px] py-[12px] rounded-[100px] text-[16px] leading-[19.2px] font-medium transition-all`}>
              Contact Us
            </button>
          </Link>
        </div>

        {/* Mobile Menu Button - simple for now */}
        <button className="lg:hidden text-white">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
