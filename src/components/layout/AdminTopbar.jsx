import React from 'react';
import { Search, Bell } from 'lucide-react';

const AdminTopbar = () => {
  return (
    <header className="w-full h-[97px] bg-white/90 backdrop-blur-[12px] border-b border-gray-100 flex items-center justify-between px-[34px] py-[24px] shrink-0 font-inter text-[#64748b]">
      
      {/* Search Bar */}
      <div className="w-[300px] md:w-[558px] h-[48px] rounded-[99px] bg-[#f5f5f5] flex items-center px-[24px] gap-[8px]">
        <Search size={24} className="text-gray-400" />
        <input 
          type="text" 
          placeholder="Search data, participants, or tasks..." 
          className="bg-transparent border-none outline-none w-full text-[14px] text-black placeholder:text-gray-400"
        />
      </div>

      {/* Right Side: Notif & Avatar */}
      <div className="flex items-center gap-[14px]">
        <button className="w-[48px] h-[48px] rounded-full bg-[#f5f5f5] flex items-center justify-center text-gray-600 hover:bg-gray-200 transition-colors">
          <Bell size={20} />
        </button>
        <img 
          src="https://i.pravatar.cc/150?img=11" 
          alt="Avatar" 
          className="w-[48px] h-[48px] rounded-full object-cover border border-gray-200"
        />
      </div>

    </header>
  );
};

export default AdminTopbar;
