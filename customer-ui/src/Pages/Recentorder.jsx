
import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const RecentOrder = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { order } = location.state || {};

  if (!order) {
    return (
      <div className="p-6">
        <h1 className="text-xl font-bold mb-4">No Order Found</h1>
        <button onClick={() => navigate('/order')} className="text-blue-600 underline">Go to Order Page</button>
      </div>
    );
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Thank You, {order.customerInfo.name}!</h1>
      <p className="mb-4 text-gray-600">Your order has been placed successfully.</p>

      <h2 className="text-xl font-semibold mb-2">Order Summary</h2>
      <ul className="mb-4 space-y-2">
        {order.cart.map((item, index) => (
          <li key={index} className="border p-2 rounded">
            <div className="flex justify-between">
              <span>{item.name} × {item.quantity}</span>
              <span>€{(item.price * item.quantity).toFixed(2)}</span>
            </div>
          </li>
        ))}
      </ul>

      <div className="font-bold flex justify-between">
        <span>Total:</span>
        <span>€{order.total.toFixed(2)}</span>
      </div>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-1">Delivery Info:</h3>
        <p><strong>Phone:</strong> {order.customerInfo.phone}</p>
        <p><strong>Address:</strong> {order.customerInfo.address}</p>
        {order.customerInfo.notes && <p><strong>Notes:</strong> {order.customerInfo.notes}</p>}
      </div>
    </div>
  );
};

export default RecentOrder;
