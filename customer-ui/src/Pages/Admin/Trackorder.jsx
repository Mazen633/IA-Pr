import React, { useEffect, useState } from 'react';

const Trackorder = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    fetch('/api/orders')
      .then(res => res.json())
      .then(data => setOrders(data));
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Track Orders</h1>
      <ul>
        {orders.map(order => (
          <li key={order.id}>{order.customerName} - {order.status}</li>
        ))}
      </ul>
    </div>
  );
};

export default Trackorder;