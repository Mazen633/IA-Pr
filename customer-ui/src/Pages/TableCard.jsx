import React from 'react';
import { useLocation } from 'react-router-dom';

const TableCard = () => {
  
  const location = useLocation();
  const { name, guests, date, time } = location.state || {};

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center p-6">
      <div className="bg-white shadow-lg p-8 rounded-xl w-full max-w-4xl">
        <h2 className="text-3xl font-bold text-center mb-6 text-red-600">🍽️ Table Reservation Details</h2>
        
        
        <div className="mb-6">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Reservation Details</h3>
          <div className="text-lg text-gray-700 mb-4">
            <p><strong>Name:</strong> {name}</p>
            <p><strong>Number of Guests:</strong> {guests}</p>
            <p><strong>Date:</strong> {date}</p>
            <p><strong>Time:</strong> {time}</p>
          </div>
        </div>

        
       
      </div>
    </div>
  );
};

export default TableCard;


