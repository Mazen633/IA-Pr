// src/pages/Contact.jsx

import React from 'react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-8">CONTACT</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {/* نموذج الاتصال */}
        <div className="space-y-4">
          <input 
            type="text" 
            placeholder="Name" 
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input 
            type="tel" 
            placeholder="Phone" 
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <input 
            type="email" 
            placeholder="Email address" 
            className="w-full p-3 border border-gray-300 rounded-lg"
          />
          <button className="bg-amber-500 hover:bg-amber-600 text-white font-bold py-3 px-6 rounded-lg transition duration-200">
            CONTACT US
          </button>
        </div>

        {/* معلومات الموقع */}
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
  );
};

export default Contact;
