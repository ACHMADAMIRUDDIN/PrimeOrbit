import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import image from '../../assets/image';

// Custom PNG icons
import grid5 from '../../features/UI/adminicon/grid-5.png';
import mapPinArea from '../../features/UI/adminicon/MapPinArea.png';
import treasureChest from '../../features/UI/adminicon/TreasureChest.png';
import truckIcon from '../../features/UI/adminicon/Truck.png';
import chartDonut from '../../features/UI/adminicon/ChartDonut.png';
import scrollIcon from '../../features/UI/adminicon/Scroll.png';

const AdminSidebar = () => {
  const location = useLocation(); // Forces re-render on route changes to prevent state caching
  const navItems = [
    { path: '/admin/dashboard', icon: grid5, label: 'Dashboard' },
    { path: '/admin/tracking', icon: mapPinArea, label: 'Tracking' },
    { path: '/admin/inventory', icon: treasureChest, label: 'Inventory' },
    { path: '/admin/fleet', icon: truckIcon, label: 'Fleet & Driver' },
    { path: '/admin/analytics', icon: chartDonut, label: 'Analytics' },
    { path: '/admin/order', icon: scrollIcon, label: 'Order' },
  ];

  return (
    <aside className="w-[286px] shrink-0 bg-white border-r border-gray-100 flex flex-col h-full font-work p-[42px_32px_52px_30px] gap-[56px] overflow-y-auto">

      <div className="flex items-center gap-[11px] text-[24px] text-black font-semibold">
        <img
          src={image.navbarLogo}
          alt="PrimeOrbit"
          className="h-[36px] w-auto md:h-[37px] object-contain"
        />
        <span>PrimeOrbit</span>
      </div>

      <nav className="flex-1 flex flex-col gap-[12px] text-[18px] md:text-[20px]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-[12px] md:gap-[16px] p-[14px_16px] rounded-[50px] transition-all duration-300 font-medium ${
                isActive
                  ? 'bg-[#2a2a7c] text-white shadow-[0px_0px_24px_rgba(138,123,255,0.2)_inset]'
                  : 'text-[#9c9c9d] hover:bg-gray-50 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className="w-[24px] h-[24px] shrink-0 flex items-center justify-center transition-all duration-300 opacity-100">
                  <img 
                    src={item.icon} 
                    alt={item.label} 
                    className="w-full h-full object-contain" 
                    style={{ filter: isActive ? 'brightness(0) invert(1)' : 'none' }}
                  />
                </div>
                <span className="leading-[140%]">{item.label}</span>
              </>
            )}
          </NavLink>
        ))}
      </nav>

    </aside>
  );
};

export default AdminSidebar;
