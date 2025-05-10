import React, { useEffect, useState } from 'react';

const OrderCard = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const savedOrders = JSON.parse(localStorage.getItem('orders')) || [];
    setOrders(savedOrders.reverse()); // أحدث الطلبات أولاً
  }, []);

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <h1 className="text-2xl font-bold mb-4">Recent Orders</h1>
      {orders.length === 0 ? (
        <p>No orders found.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="bg-white rounded shadow p-4 mb-4">
            <h2 className="font-semibold text-lg mb-2">Order #{orders.length - index}</h2>
            <p><strong>Name:</strong> {order.customerInfo.name}</p>
            <p><strong>Phone:</strong> {order.customerInfo.phone}</p>
            <p><strong>Address:</strong> {order.customerInfo.address}</p>
            <p><strong>Notes:</strong> {order.customerInfo.notes}</p>
            <p className="text-sm text-gray-500 mb-2"><strong>Time:</strong> {order.timestamp}</p>
            <ul className="mb-2">
              {order.cart.map((item, i) => (
                <li key={i}>🛒 {item.name} × {item.quantity} — €{(item.price * item.quantity).toFixed(2)}</li>
              ))}
            </ul>
            <p className="font-bold">Total: €{order.total.toFixed(2)}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default OrderCard;
