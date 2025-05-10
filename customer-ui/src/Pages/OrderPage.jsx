import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const OrderPage = () => {
  const navigate = useNavigate();

  const [cart, setCart] = useState([]);
  const [customerInfo, setCustomerInfo] = useState({
    name: '',
    phone: '',
    address: '',
    notes: ''
  });
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [showSizeOptions, setShowSizeOptions] = useState(null);

  const menuItems = [
    { id: 1, name: 'House Burger', description: 'BEEF BURGER, CHEDDAR, LETTUCE, TOMATO, PICKLES, KETCHUP, MAYO, MUSTARD', price: 9.80, image: '/images/HouseBurger.jpg', category: 'Burgers' },
    { id: 2, name: 'Veggie Burger', description: 'FALAFEL BURGER, HUMMUS, ROCKET, TOMATO, ONIONS', price: 9.80, image: '/images/VeggieBurger.jpg', category: 'Burgers', vegetarian: true },
    { id: 3, name: 'Smash Burger', description: 'SMASHED GROUND BEEF, CHEDDAR, PICKLES, ONIONS, KETCHUP AND MUSTARD', price: 8.80, image: '/images/SmashBurger.jpg', category: 'Burgers' },
    { id: 4, name: 'Spaghetti Carbonara', description: 'CLASSIC ROMAN PASTA WITH EGG, PECORINO CHEESE, PANCETTA, AND BLACK PEPPER', price: 12.50, image: '/images/carbonara.jpg', category: 'Pasta' },
    { id: 5, name: 'Penne Arrabbiata', description: 'PENNE WITH SPICY TOMATO SAUCE, GARLIC, AND CHILI PEPPERS', price: 11.80, image: '/images/Arrabbiata.jpg', category: 'Pasta', spicy: true },
    {
      id: 6, name: 'Margherita', description: 'TOMATO SAUCE, MOZZARELLA, BASIL', price: 12.99, image: '/images/Margherita.jpg', category: 'Pizza', vegetarian: true,
      sizes: [
        { name: 'Small (10")', price: 10.99 },
        { name: 'Medium (12")', price: 12.99 },
        { name: 'Large (14")', price: 14.99 }
      ]
    },
    {
      id: 7, name: 'Pepperoni', description: 'TOMATO SAUCE, MOZZARELLA, PEPPERONI', price: 14.99, image: '/images/Pepperoni.jpg', category: 'Pizza', spicy: true,
      sizes: [
        { name: 'Small (10")', price: 12.99 },
        { name: 'Medium (12")', price: 14.99 },
        { name: 'Large (14")', price: 16.99 }
      ]
    },
    {
      id: 8, name: 'Vegetarian', description: 'TOMATO SAUCE, MOZZARELLA, BELL PEPPERS, MUSHROOMS, OLIVES', price: 13.99, image: '/images/Vegetarian.jpg', category: 'Pizza', vegetarian: true,
      sizes: [
        { name: 'Small (10")', price: 11.99 },
        { name: 'Medium (12")', price: 13.99 },
        { name: 'Large (14")', price: 15.99 }
      ]
    },
    { id: 9, name: 'Spicy Bag', description: 'CHILLI CHICKEN SHREDDERS, PEPPER, ONIONS, JALAPENO, SHREDDED CHEESE, CRISPY FRIES', price: 7.50, image: '/images/SpiceBag.jpg', category: 'Box Choice', spicy: true },
    { id: 10, name: 'Regular Fries', description: 'CLASSIC CRISPY FRIES', price: 4.50, image: '/images/RegularFries.jpg', category: 'Box Choice' },
    { id: 11, name: 'Sweet Potato Fries', description: 'CRISPY SWEET POTATO FRIES', price: 5.00, image: '/images/SweetFries.jpg', category: 'Box Choice', vegetarian: true },
    { id: 12, name: 'Loaded Fries', description: 'CRISPY FRIES TOPPED WITH MELTED CHEESE SAUCE, BACON BITS', price: 7.50, image: '/images/Loaded.jpg', category: 'Box Choice' }
  ];

  const categories = ['All', ...new Set(menuItems.map(item => item.category))];
  const filteredItems = selectedCategory === 'All' ? menuItems : menuItems.filter(item => item.category === selectedCategory);
  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const handleQuantityChange = (id, quantity) => {
    if (quantity < 1) return;
    setCart(cart.map(item => item.id === id ? { ...item, quantity } : item));
  };

  const removeItem = id => setCart(cart.filter(item => item.id !== id));

  const addToCart = (item, size = null) => {
    const price = size ? size.price : item.price;
    const itemId = size ? `${item.id}-${size.name}` : item.id;
    const existingItem = cart.find(ci => ci.id === itemId);

    if (existingItem) {
      handleQuantityChange(itemId, existingItem.quantity + 1);
    } else {
      setCart([
        ...cart,
        {
          ...item,
          id: itemId,
          name: size ? `${item.name} (${size.name})` : item.name,
          price,
          quantity: 1
        }
      ]);
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setCustomerInfo(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmitOrder = e => {
    e.preventDefault();

    const newOrder = {
      cart,
      customerInfo,
      total,
      timestamp: new Date().toLocaleString()
    };

    const existingOrders = JSON.parse(localStorage.getItem('orders')) || [];
    localStorage.setItem('orders', JSON.stringify([...existingOrders, newOrder]));

    setCart([]);
    setCustomerInfo({ name: '', phone: '', address: '', notes: '' });

    navigate('/order-card');
  };

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl font-bold mb-6">Order Food</h1>

      <div className="flex flex-wrap gap-2 mb-4">
        {categories.map(category => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-4 py-2 rounded-full text-sm ${selectedCategory === category ? 'bg-green-600 text-white' : 'bg-white border'}`}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="flex flex-col lg:flex-row gap-6 items-start">
        <div className="flex-1 space-y-4">
          {filteredItems.map(item => (
            <div key={item.id} className="bg-white rounded shadow-md p-4 flex">
              <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded mr-4" />
              <div>
                <h3 className="font-semibold">{item.name}</h3>
                <p className="text-sm text-gray-600">{item.description}</p>
                {item.sizes ? (
                  <button className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded" onClick={() => setShowSizeOptions(item)}>Choose Size</button>
                ) : (
                  <button className="mt-2 text-sm bg-green-600 text-white px-3 py-1 rounded" onClick={() => addToCart(item)}>Add to Order</button>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="w-full lg:w-1/3">
          <div className="bg-white p-4 rounded shadow-md">
            <h2 className="text-xl font-bold mb-4">Your Order</h2>
            {cart.length === 0 ? (
              <p className="text-gray-500">Cart is empty.</p>
            ) : (
              cart.map(item => (
                <div key={item.id} className="flex justify-between items-center border-b py-2">
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-gray-500">€{item.price.toFixed(2)} × {item.quantity}</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button onClick={() => handleQuantityChange(item.id, item.quantity - 1)}>-</button>
                    <span>{item.quantity}</span>
                    <button onClick={() => handleQuantityChange(item.id, item.quantity + 1)}>+</button>
                    <button className="text-red-500" onClick={() => removeItem(item.id)}>×</button>
                  </div>
                </div>
              ))
            )}
            <div className="mt-4 font-bold flex justify-between">
              <span>Total:</span>
              <span>€{total.toFixed(2)}</span>
            </div>

            <form onSubmit={handleSubmitOrder} className="mt-4 space-y-2">
              <input type="text" name="name" value={customerInfo.name} onChange={handleInputChange} required placeholder="Your Name" className="w-full p-2 border rounded" />
              <input type="tel" name="phone" value={customerInfo.phone} onChange={handleInputChange} required placeholder="Phone" className="w-full p-2 border rounded" />
              <input type="text" name="address" value={customerInfo.address} onChange={handleInputChange} required placeholder="Address" className="w-full p-2 border rounded" />
              <textarea name="notes" value={customerInfo.notes} onChange={handleInputChange} placeholder="Order Notes (optional)" rows={2} className="w-full p-2 border rounded" />
              <button type="submit" className="w-full bg-green-600 text-white py-2 rounded font-bold" disabled={cart.length === 0}>Place Order</button>
            </form>

            {/* زر الانتقال لصفحة الطلبات */}
            <button
              onClick={() => navigate('/order-card')}
              className="w-full bg-blue-600 text-white py-2 rounded font-bold mt-2"
            >
              Go to Order Card
            </button>
          </div>
        </div>
      </div>

      {showSizeOptions && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded shadow-lg w-80">
            <h3 className="text-lg font-bold mb-4">Choose Size</h3>
            {showSizeOptions.sizes.map(size => (
              <button
                key={size.name}
                className="w-full text-left px-4 py-2 mb-2 border rounded hover:bg-gray-100"
                onClick={() => {
                  addToCart(showSizeOptions, size);
                  setShowSizeOptions(null);
                }}
              >
                {size.name} - €{size.price.toFixed(2)}
              </button>
            ))}
            <button onClick={() => setShowSizeOptions(null)} className="w-full text-center text-red-500 mt-2">Cancel</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderPage;

