import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar = ({ theme = 'dark' }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTheme, setCurrentTheme] = useState(theme);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Synchronize initial prop
    setCurrentTheme(theme);
  }, [theme]);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  // Handle body scroll locking when mobile menu is active
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleScrollAndDetectTheme = () => {
      // 1. Handle scrolled state
      setIsScrolled(window.scrollY > 20);

      // 2. Detect which section is under the navbar (at y = 60px from top of viewport)
      const navbarY = window.scrollY + 60;
      const sections = document.querySelectorAll('section, header, footer, [data-theme]');
      
      let detectedTheme = theme; // Fallback to prop theme

      for (let i = 0; i < sections.length; i++) {
        const sec = sections[i];
        const rect = sec.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const height = rect.height;
        
        if (navbarY >= top && navbarY < top + height) {
          const secTheme = sec.getAttribute('data-theme');
          if (secTheme === 'dark' || secTheme === 'light') {
            detectedTheme = secTheme;
            break;
          }
        }
      }
      
      setCurrentTheme(detectedTheme);
    };

    handleScrollAndDetectTheme();
    window.addEventListener('scroll', handleScrollAndDetectTheme);
    window.addEventListener('resize', handleScrollAndDetectTheme);

    return () => {
      window.removeEventListener('scroll', handleScrollAndDetectTheme);
      window.removeEventListener('resize', handleScrollAndDetectTheme);
    };
  }, [theme, location.pathname]);

  const isLight = currentTheme === 'light';

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
    <>
      <nav className={`fixed inset-x-0 z-50 flex justify-center transition-all duration-300 ${navPositionClass}`}>
        <div className={`flex w-full items-center justify-between transition-all duration-300 ${containerClass}`}>
          
          {/* Logo */}
          <Link to="/" className="flex items-center gap-[16px] relative z-[60]">
            <div className="w-[28px] h-[28.16px] bg-primary rounded-md flex items-center justify-center font-bold text-secondary italic">P</div>
            <span className={`${isLight ? 'text-black' : 'text-white'} font-semibold text-[24px] leading-[28.8px] font-sans transition-colors duration-300`}>PrimeOrbit</span>
          </Link>

          {/* Desktop Menu */}
          <div className={`hidden lg:flex items-center gap-[46px] ${isLight ? 'text-black' : 'text-white'} transition-colors duration-300`}>
            <Link to="/" className={`${location.pathname === '/' ? 'font-semibold text-primary' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Home</Link>
            <Link to="/services" className={`${location.pathname === '/services' ? 'font-semibold text-primary' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Services</Link>
            <Link to="/tracking" className={`${location.pathname === '/tracking' ? 'font-semibold text-primary' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Tracking</Link>
            <Link to="/global-network" className={`${location.pathname === '/global-network' ? 'font-semibold text-primary' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Global Network</Link>
            <Link to="/why-choose-us" className={`${location.pathname === '/why-choose-us' ? 'font-semibold text-primary' : ''} hover:text-primary transition-colors text-[16px] leading-[19.2px] font-inter`}>Why Choose Us</Link>
          </div>

          {/* Contact Button */}
          <div className="hidden md:block relative z-[60]">
            <Link to="/contact">
              <button className="bg-secondary text-white hover:bg-secondary/90 px-[28px] py-[12px] rounded-[100px] text-[16px] leading-[19.2px] font-medium transition-all shadow-sm">
                Contact Us
              </button>
            </Link>
          </div>

          {/* Mobile Menu Toggle Button */}
          <button 
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className={`lg:hidden relative z-[60] focus:outline-none ${
              isLight || isMobileMenuOpen ? 'text-black' : 'text-white'
            } transition-colors duration-300 p-2`}
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer Overlay */}
      <div 
        className={`fixed inset-0 z-40 lg:hidden flex flex-col justify-between pt-[140px] pb-[60px] px-6 backdrop-blur-[24px] transition-all duration-500 ease-in-out ${
          isMobileMenuOpen 
            ? 'opacity-100 translate-y-0 pointer-events-auto' 
            : 'opacity-0 -translate-y-full pointer-events-none'
        } ${
          isLight 
            ? 'bg-white/98 text-black shadow-2xl' 
            : 'bg-[#191919]/98 text-white shadow-2xl'
        }`}
      >
        <div className="flex flex-col gap-[36px] items-center">
          <Link 
            to="/" 
            className={`text-[22px] font-medium transition-colors duration-300 ${location.pathname === '/' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Home
          </Link>
          <Link 
            to="/services" 
            className={`text-[22px] font-medium transition-colors duration-300 ${location.pathname === '/services' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Services
          </Link>
          <Link 
            to="/tracking" 
            className={`text-[22px] font-medium transition-colors duration-300 ${location.pathname === '/tracking' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Tracking
          </Link>
          <Link 
            to="/global-network" 
            className={`text-[22px] font-medium transition-colors duration-300 ${location.pathname === '/global-network' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Global Network
          </Link>
          <Link 
            to="/why-choose-us" 
            className={`text-[22px] font-medium transition-colors duration-300 ${location.pathname === '/why-choose-us' ? 'font-bold text-primary' : 'hover:text-primary'}`}
          >
            Why Choose Us
          </Link>
        </div>

        {/* Mobile Contact Button */}
        <div className="w-full flex justify-center">
          <Link to="/contact" className="w-[85%] max-w-[340px]">
            <button className="w-full bg-secondary text-white hover:bg-secondary/90 py-[16px] rounded-[100px] text-[18px] font-medium transition-all shadow-md">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;
