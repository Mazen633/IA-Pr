import React from 'react';
import {  FaUserCircle, FaBell } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assests/images/logo.png";

export const Header = () => {
  const navigate = useNavigate();

  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('role');
  const email = localStorage.getItem('email');

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('role');
    localStorage.removeItem('email');
    navigate('/login');
  };

  return (
    <header className="flex justify-between items-center py-4 px-8 bg-[#1a1a1a]">
      
      {/* Logo and Title */}
      <div className="flex items-center gap-2">
        <img src={logo} className="h-8 w-8" alt="Restro logo" />
        <h1 className="text-lg font-semibold text-[#f5f5f5]">Restro</h1>
      </div>


      {/* Right Side - Actions */}
      <div className="flex items-center gap-4">
        
        {/* Admin Dashboard - يظهر فقط لو admin */}
        {isLoggedIn && role === 'admin' && (
          <Link
            to="/admin/accounts"
            className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 text-sm font-semibold"
          >
            Admin Dashboard
          </Link>
        )}

        {/* Notification Icon */}
        <div className="bg-[#1f1f1f] p-2 rounded-full">
          <FaBell className="text-[#f5f5f5] text-2xl" />
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 cursor-pointer">
          <FaUserCircle className="text-[#f5f5f5] text-4xl" />
          <div className="flex flex-col items-start">
            <h1 className="text-md text-[#f5f5f5] font-semibold">
              {email || 'Guest'}
            </h1>
            <h1 className="text-xs text-[#ababab] font-medium">
              {role || 'Not logged in'}
            </h1>
          </div>
        </div>

        {/* Logout Button - يظهر فقط لو المستخدم داخل */}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 text-sm"
          >
            Logout
          </button>
        )}
      </div>
    </header>
  );
};

export default Header;
