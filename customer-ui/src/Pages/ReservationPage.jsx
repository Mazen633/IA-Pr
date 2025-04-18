import React, { useState } from 'react';
import axios from 'axios';

const ReservationPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    guests: 1,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    const { name, phone, date, time, guests } = formData;
  
    if (!name || !phone || !date || !time) {
      setStatusMessage('Please fill in all fields.');
      return;
    }
  
    setIsSubmitting(true);
    try {
   
      console.log('Sending data:', { name, phone, date, time, guests });
  
    
      await axios.post('/api/reservations', {
        name,
        phone,
        date,
        time,
        guests
      });
  
      setStatusMessage('Reservation submitted successfully!');
      setFormData({
        name: '',
        phone: '',
        date: '',
        time: '',
        guests: 1,
      });
    } catch (error) {
      console.error('Reservation failed:', error);
      setStatusMessage('Failed to submit reservation. Try again later.');
    }
    setIsSubmitting(false);
  };
  

  return (
    <div className="p-6 min-h-screen bg-gray-100">
      <h1 className="text-3xl font-bold text-center mb-8">Table Reservation</h1>

      <div className="bg-white p-6 rounded-xl shadow-md max-w-xl mx-auto space-y-4">
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Your Name"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <input
          type="tel"
          name="phone"
          value={formData.phone}
          placeholder="Phone Number"
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <input
          type="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <input
          type="time"
          name="time"
          value={formData.time}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        />

        <select
          name="guests"
          value={formData.guests}
          onChange={handleChange}
          className="w-full p-3 rounded-lg border border-gray-300"
        >
          {[...Array(10)].map((_, i) => (
            <option key={i + 1} value={i + 1}>
              {i + 1} Guest{i > 0 && 's'}
            </option>
          ))}
        </select>

        <button
          onClick={handleSubmit}
          disabled={isSubmitting}
          className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-xl transition"
        >
          {isSubmitting ? 'Booking...' : 'Book Table'}
        </button>

        {statusMessage && (
          <p className="text-center mt-4 text-blue-600 font-medium">{statusMessage}</p>
        )}
      </div>
    </div>
  );
};

export default ReservationPage;
