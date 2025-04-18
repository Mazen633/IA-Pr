import React, { useState, useEffect } from 'react';
import axios from 'axios';

const OrderPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPlacingOrder, setIsPlacingOrder] = useState(false);
  const [orderStatus, setOrderStatus] = useState(null);

  useEffect(() => {
    
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const updateQuantity = (id, newQty) => {
    const updated = cartItems.map(item =>
      item.id === id ? { ...item, quantity: newQty } : item
    );
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const removeItem = (id) => {
    const updated = cartItems.filter(item => item.id !== id);
    setCartItems(updated);
    localStorage.setItem('cart', JSON.stringify(updated));
  };

  const handlePlaceOrder = async () => {
    setIsPlacingOrder(true);
    try {
      const response = await axios.post('/api/orders', {
        items: cartItems.map(item => ({
          menuItemId: item.id,
          quantity: item.quantity,
        })),
      });

      setOrderStatus(response.data.status || 'Order Placed');
      setCartItems([]);
      localStorage.removeItem('cart');
    } catch (error) {
      console.error('Order failed:', error);
      setOrderStatus('Failed to place order');
    }
    setIsPlacingOrder(false);
  };

  const totalPrice = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Your Order</h1>

      {cartItems.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <>
          <div className="space-y-4 mb-6">
            {cartItems.map(item => (
              <div key={item.id} className="flex justify-between items-center bg-white p-4 rounded-xl shadow">
                <div>
                  <h2 className="font-semibold text-lg">{item.name}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)} × {item.quantity}</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    type="number"
                    min="1"
                    className="w-16 px-2 py-1 rounded border"
                    value={item.quantity}
                    onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                  />
                  <button
                    onClick={() => removeItem(item.id)}
                    className="text-red-500 hover:underline"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="text-right font-semibold text-xl mb-6">
            Total: ${totalPrice.toFixed(2)}
          </div>

          <button
            onClick={handlePlaceOrder}
            disabled={isPlacingOrder}
            className="w-full sm:w-auto bg-green-600 hover:bg-green-700 text-white py-2 px-6 rounded-xl transition"
          >
            {isPlacingOrder ? 'Placing Order...' : 'Place Order'}
          </button>
        </>
      )}

      {orderStatus && (
        <div className="mt-6 text-center text-lg font-medium text-blue-600">
          {orderStatus}
        </div>
      )}
    </div>
  );
};

export default OrderPage;
