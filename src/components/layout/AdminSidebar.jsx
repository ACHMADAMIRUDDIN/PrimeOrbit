import React from 'react';
import { NavLink } from 'react-router-dom';
import { LayoutDashboard, Map, Package, Truck, PieChart, ShoppingCart } from 'lucide-react';
import image from '../../assets/image';

const AdminSidebar = () => {
  const navItems = [
    { path: '/admin/dashboard', icon: <LayoutDashboard size={24} />, label: 'Dashboard' },
    { path: '/admin/tracking', icon: <Map size={24} />, label: 'Tracking' },
    { path: '/admin/inventory', icon: <Package size={24} />, label: 'Inventory' },
    { path: '/admin/fleet', icon: <Truck size={24} />, label: 'Fleet & Driver' },
    { path: '/admin/analytics', icon: <PieChart size={24} />, label: 'Analytics' },
    { path: '/admin/order', icon: <ShoppingCart size={24} />, label: 'Order' },
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

      <nav className="flex-1 flex flex-col gap-[12px] text-[18px] md:text-[20px] text-[#9c9c9d]">
        {navItems.map((item) => (
          <NavLink
            key={item.path}
            to={item.path}
            className={({ isActive }) =>
              `flex items-center gap-[12px] md:gap-[16px] p-[14px_16px] rounded-[24px] transition-all duration-300 ${
                isActive 
                  ? 'bg-[#2a2a7c] text-white shadow-[0px_0px_24px_rgba(138,123,255,0.2)_inset]' 
                  : 'hover:bg-gray-50 hover:text-gray-600'
              }`
            }
          >
            {({ isActive }) => (
              <>
                <div className={`${!isActive ? 'opacity-40' : 'opacity-100'}`}>
                  {item.icon}
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
