import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterNav from '../comments/shared/FooterNav';
 

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
      
        <h1 className="text-3xl font-bold text-center mb-8">PASTA & BURGER RESTURANT</h1>

        
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
    <div className="flex justify-center gap-6 flex-wrap">
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
            <h2 className="text-4xl font-bold mb-4">Ready For Mouth Watering Gourmet Pasta's & Burgers?</h2>
            <Link
              to="/orders"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition duration-200"
            >
              VIEW ORDERS
            </Link>
          </div>
        </div>

    
        <section id="contact-section" className="w-full bg-white py-12 px-4 md:px-8">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-center mb-8">CONTACT</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      
              <div className="space-y-4">
                <input type="text" placeholder="Name" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="tel" placeholder="Phone" className="w-full p-3 border border-gray-300 rounded-lg" />
                <input type="email" placeholder="Email address" className="w-full p-3 border border-gray-300 rounded-lg" />
                <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
                  CONTACT US
                </button>
              </div>

            
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-2">D03 E2P1</h3>
                  <p className="text-gray-600">North Wall, Dublin, Ireland</p>
                  <a
                    href="https://maps.google.com/?q=D03+E2P1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-500 hover:underline"
                  >
                    View larger map
                  </a>
                  <p className="font-medium mt-1">Museum & Tours</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <h4 className="font-semibold">IRVIEW</h4>
                    <p className="text-gray-600">Directions</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Contar! Road</h4>
                    <p className="text-gray-600">Fairview Park</p>
                  </div>
                  <div>
                    <h4 className="font-semibold">Lotts & Co</h4>
                    <p className="text-gray-600">The Vac and Rest</p>
                  </div>
                </div>

                <div className="pt-4 border-t border-gray-200">
                  <p className="text-gray-600">Eastpoint Business Park, North Dock, Dublin, D03 E2P1, Ireland</p>
                  <p className="mt-2">+353-899447325</p>
                  <p>pastaburgerhousel@gmail.com</p>
                  <p className="mt-2">Mon-Fri - 11:00-14:00</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer Navigation */}
      <FooterNav />
    </div>
  );
};

export default Home;




