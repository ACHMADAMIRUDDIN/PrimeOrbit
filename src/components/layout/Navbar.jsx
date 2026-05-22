import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import image from '../../assets/image';

const Navbar = ({ theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isLight = theme === 'light';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navPositionClass = isScrolled
    ? 'top-0 px-0'
    : 'top-[44px] px-4 md:px-6';

  const containerClass = isScrolled
    ? `w-full rounded-none px-4 py-[16px] md:px-[40px] lg:px-[60px] ${
        isLight
          ? 'bg-white/96 shadow-[0px_12px_40px_rgba(15,23,42,0.12)]'
          : 'border-b border-white/10 bg-[#191919]/92 shadow-[0px_12px_40px_rgba(0,0,0,0.28)] backdrop-blur-[28px]'
      }`
    : `w-[1118px] max-w-[95%] rounded-[100px] px-[24px] py-[18px] ${
        isLight
          ? 'bg-white shadow-[0px_0px_24px_rgba(0,0,0,0.08)]'
          : 'border border-white/20 bg-white/10 backdrop-blur-[58px]'
      }`;

  return (
    <nav className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${navPositionClass}`}>
      <div className={`flex w-full items-center justify-between transition-all duration-300 ${containerClass}`}>
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[16px]">
          <img
            src={image.navbarLogo}
            alt="PrimeOrbit"
            className="h-[36px] w-auto md:h-[37px]"
          />
          <span className={`${isLight ? 'text-black' : 'text-white'} font-semibold text-[24px] leading-[28.8px] font-sans`}>
            PrimeOrbit
          </span>
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
        <button className={`lg:hidden ${isLight ? 'text-black' : 'text-white'}`}>
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
