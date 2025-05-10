import React, { useState, useEffect } from 'react';

const Managerestaurants = () => {
  const [restaurants, setRestaurants] = useState([]);

  useEffect(() => {
    fetch('/api/restaurants')
      .then(res => res.json())
      .then(data => setRestaurants(data));
  }, []);

  const handleStatusChange = (id, status) => {
    fetch(`/api/restaurants/${id}/status`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ status })
    }).then(() => {
      setRestaurants(prev =>
        prev.map(r => r.id === id ? { ...r, status } : r)
      );
    });
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Manage Restaurants</h1>
      <table className="w-full border">
        <thead>
          <tr>
            <th className="border p-2">Name</th>
            <th className="border p-2">Status</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {restaurants.map(r => (
            <tr key={r.id}>
              <td className="border p-2">{r.name}</td>
              <td className="border p-2">{r.status}</td>
              <td className="border p-2">
                <button onClick={() => handleStatusChange(r.id, 'approved')} className="bg-green-500 text-white px-3 py-1 rounded mr-2">Approve</button>
                <button onClick={() => handleStatusChange(r.id, 'rejected')} className="bg-red-500 text-white px-3 py-1 rounded">Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Managerestaurants;