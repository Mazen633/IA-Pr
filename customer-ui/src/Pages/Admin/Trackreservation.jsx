import React, { useEffect, useState } from 'react';

const Trackreservation = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    fetch('/api/reservations')
      .then(res => res.json())
      .then(data => setReservations(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Track Reservations</h1>
      <ul>
        {reservations.map(res => (
          <li key={res.id}>{res.customerName} - {res.date} - {res.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trackreservation;
