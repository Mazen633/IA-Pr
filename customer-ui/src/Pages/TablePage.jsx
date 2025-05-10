import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TablePage = () => {
  const [name, setName] = useState('');
  const [guests, setGuests] = useState(1);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !date || !time || guests < 1) {
      alert('Please fill out all fields correctly!');
      return;
    }

    const reservationData = { name, guests, date, time };
    navigate('/table-card', { state: reservationData });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4 py-10">
      <div className="w-full max-w-6xl bg-white rounded-xl shadow-lg flex flex-col md:flex-row overflow-hidden">
        
        {/* Left Side: Form */}
        <div className="md:w-1/2 p-8">
          <h2 className="text-3xl font-bold text-red-600 mb-6">Reserve a Table</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Your Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your name"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Number of Guests</label>
              <input
                type="number"
                value={guests}
                onChange={(e) => setGuests(Number(e.target.value))}
                min="1"
                placeholder="Number of guests"
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-4">
              <label className="block text-lg font-medium mb-1">Reservation Date</label>
              <input
                type="date"
                value={date}
                onChange={(e) => setDate(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <div className="mb-6">
              <label className="block text-lg font-medium mb-1">Reservation Time</label>
              <input
                type="time"
                value={time}
                onChange={(e) => setTime(e.target.value)}
                className="w-full p-3 border border-gray-300 rounded-lg"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-600 hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition"
            >
              Reserve Table
            </button>
          </form>
        </div>

        {/* Right Side: Image or Info */}
        <div className="md:w-1/2 bg-red-50 flex items-center justify-center p-8">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3075/3075977.png"
              alt="Reservation"
              className="w-48 h-48 mx-auto mb-4"
            />
            <h3 className="text-xl font-semibold text-red-700">We’re ready for you!</h3>
            <p className="text-gray-600 mt-2">Book your table now and enjoy an unforgettable dining experience.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TablePage;

;


