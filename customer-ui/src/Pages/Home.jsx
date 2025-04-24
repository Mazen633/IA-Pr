import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterNav from '../comments/shared/FooterNav';
import Services from '../comments/shared/Services';

const Home = () => {
  const location = useLocation();

  useEffect(() => {
    if (location.hash === '#contact') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div id="top-of-page" className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-center mb-8">PASTA  , BURGER  & PIZZA RESTAURANT</h1>

       
        <div className="w-full max-w-5xl mb-6">
          <img
            src="/images/Pasters.jpg"
            alt="Restaurant"
            className="rounded-3xl shadow-lg w-full h-auto object-cover max-h-[70vh]"
          />
        </div>

     

       
        <div
          className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/Menue.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">🍽️ Explore Our Delicious Menu</h2>
            <Link
              to="/menu"
              className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
            >
              Go to Menu
            </Link>
          </div>
        </div>

        <div className="w-full max-w-5xl mb-6">
          <img
            src="/images/Burgere.jpg"
            alt="Pasta"
            className="rounded-3xl shadow-lg w-full h-auto object-cover max-h-[70vh]"
          />
        </div>

       
        <div
          className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/Tables.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">📅 Reserve or View Your Table Bookings</h2>
            <div className="flex flex-col sm:flex-row justify-center gap-6 flex-wrap">
              <Link
                to="/reservation"
                className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
              >
                Reserve Table
              </Link>
              <Link
                to="/tables"
                className="bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
              >
                View Reservations
              </Link>
            </div>
          </div>
        </div>

        
        <div
          className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/review.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">⭐ See What Others Say About Us</h2>
            <Link
              to="/reviews"
              className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold py-3 px-6 rounded transition duration-200"
            >
              Read Reviews
            </Link>
          </div>
        </div>

       
        <div
          className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/Pastar.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready For Mouth Watering Gourmet Pasta's , Burgers & Pizza?</h2>
            <Link
              to="/orders"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition duration-200"
            >
              VIEW ORDERS
            </Link>
          </div>
        </div>
      </div>

      {/* Footer */}
      <FooterNav />
      <Services />
    </div>
  );
};

export default Home;




