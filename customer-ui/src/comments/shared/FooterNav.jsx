import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FiHome,
  FiShoppingCart,
  FiMenu,
  FiTool,
} from 'react-icons/fi'; 

const FooterNav = () => {
  const location = useLocation();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const isActive = (path) => location.pathname === path;

  return (
    <footer className="bg-gray-900 text-white py-2 fixed bottom-0 w-full max-w-md mx-auto left-0 right-0 rounded-t-lg shadow-lg z-50">
      <div className="container px-1">
        <nav className="flex justify-around items-center">
          {/* Home */}
          <Link
            to="/"
            onClick={scrollToTop}
            className={`flex flex-col items-center p-1 ${isActive('/') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
          >
            <FiHome className="text-sm" />
            <span className="text-[0.5rem] mt-0.5">Home</span>
          </Link>

          {/* Orders */}
          <Link
            to="/orders"
            onClick={scrollToTop}
            className={`flex flex-col items-center p-1 ${isActive('/orders') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
          >
            <FiShoppingCart className="text-sm" />
            <span className="text-[0.5rem] mt-0.5">Orders</span>
          </Link>

          {/* Menu */}
          <Link
            to="/menu"
            onClick={scrollToTop}
            className={`flex flex-col items-center p-1 ${isActive('/menu') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
          >
            <FiMenu className="text-sm" />
            <span className="text-[0.5rem] mt-0.5">Menu</span>
          </Link>

          {/* Services */}
          <Link
            to="/services"
            onClick={scrollToTop}
            className={`flex flex-col items-center p-1 ${isActive('/services') ? 'text-amber-400' : 'text-gray-300 hover:text-amber-400'}`}
          >
            <FiTool className="text-sm" />
            <span className="text-[0.5rem] mt-0.5">Services</span>
          </Link>

         
        </nav>
      </div>
    </footer>
  );
};

export default FooterNav;








