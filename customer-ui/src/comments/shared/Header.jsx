import React from 'react';
import { FaSearch, FaUserCircle, FaBell } from "react-icons/fa";
import { Link } from "react-router-dom";
import logo from "../../assests/images/logo.png";

export const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="Restro logo" /> 
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>

      <div className="flex items-center gap-4 bg-[#1f1f1f] rounded-[20px] px-5">
        <input
          type="text"
          placeholder="Search"
          className="bg-[#1f1f1f] outline-none text-[#f5f5f5]"
        />
        <FaSearch className="text-[#f5f5f5]" />
      </div>

      <div className="flex items-center gap-4">
        {/* Admin Dashboard Button */}
        <Link
          to="/admin"
          className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm font-semibold"
        >
          Admin Dashboard
        </Link>

        <div className="bg-[#1f1f1f] p-2 rounded-full">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>

        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className='flex flex-col items-start '>
            <h1 className='text-md text-[#f5f5f5] font-semibold'>Amrit Rag</h1>
            <h1 className='text-xs text-[#ababab] font-medium'>Admin</h1>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;

