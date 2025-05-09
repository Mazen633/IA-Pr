import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import FooterNav from '../comments/shared/FooterNav';
import Services from '../comments/shared/Services';

const Home = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const menuItems = [
    { name: 'House Burger', description: 'BEEF BURGER, CHEDDAR, LETTUCE, TOMATO, PICKLES, KETCHUP, MAYO, MUSTARD', price: 9.80, image: '/images/HouseBurger.jpg', category: 'burger' },
    { name: 'Veggie Burger', description: 'FALAFEL BURGER, HUMMUS, ROCKET, TOMATO, ONIONS', price: 9.80, image: '/images/VeggieBurger.jpg', category: 'burger' },
    { name: 'Smash Burger', description: 'SMASHED GROUND BEEF, CHEDDAR, PICKLES, ONIONS, KETCHUP AND MUSTARD', price: 8.80, image: '/images/SmashBurger.jpg', category: 'burger' },
    { name: 'Spaghetti Carbonara', description: 'CLASSIC ROMAN PASTA WITH EGG, PECORINO CHEESE, PANCETTA, AND BLACK PEPPER', price: 12.50, image: '/images/carbonara.jpg', category: 'pasta' },
    { name: 'Penne Arrabbiata', description: 'PENNE WITH SPICY TOMATO SAUCE, GARLIC, AND CHILI PEPPERS', price: 11.80, image: '/images/Arrabbiata.jpg', category: 'pasta' },
    { name: 'Margherita', description: 'TOMATO SAUCE, MOZZARELLA, BASIL', price: 12.99, image: '/images/Margherita.jpg', category: 'pizza' },
    { name: 'Pepperoni', description: 'TOMATO SAUCE, MOZZARELLA, PEPPERONI', price: 14.99, image: '/images/Pepperoni.jpg', category: 'pizza' },
    { name: 'Vegetarian', description: 'TOMATO SAUCE, MOZZARELLA, BELL PEPPERS, MUSHROOMS, OLIVES', price: 13.99, image: '/images/Vegetarian.jpg', category: 'pizza' },
    { name: 'Loaded Fries', description: 'CRISPY FRIES TOPPED WITH MELTED CHEESE SAUCE, BACON BITS', price: 7.50, image: '/images/Loaded.jpg', category: 'Box Choice' },
    { name: 'Spicy Bag', description: 'CHILLI CHICKEN SHREDDERS, PEPPER, ONIONS, JALAPENO, SHREDDED CHEESE, CRISPY FRIES', price: 7.50, image: '/images/SpiceBag.jpg', category: 'Box Choice' },
    { name: 'Regular Fries', description: 'CLASSIC CRISPY FRIES', price: 4.50, image: '/images/RegularFries.jpg', category: 'Box Choice' },
    { name: 'Sweet Potato Fries', description: 'CRISPY SWEET POTATO FRIES', price: 5.00, image: '/images/SweetFries.jpg', category: 'Box Choice' }
  ];

  const filteredItems = selectedCategory === 'all' ? menuItems : menuItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    if (location.hash === '#contact') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <div className="flex-grow flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
          PASTA, BURGER & PIZZA RESTAURANT
        </h1>

        <div className="w-full max-w-5xl mb-6 relative">
  <img
    src="/images/full.jpg"
    alt="Restaurant"
    className="rounded-3xl shadow-lg w-full h-auto object-cover max-h-[70vh]"
  />
  {/* Order Now Button at Bottom Right */}
  <div className="absolute bottom-4 right-4 p-6 bg-black bg-opacity-50 text-white rounded-lg">
    <h2 className="text-2xl font-bold mb-2">Delicious Pasta, Burgers & Pizza</h2>
    <p className="text-lg mb-4">Order now and enjoy mouth-watering dishes!</p>
    <Link
      to="/orders"
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition duration-200"
    >
      Order Now
    </Link>
  </div>
</div>

  
      {/* About Us Section */}
      <div className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden bg-white bg-opacity-90">
          <div className="flex justify-between items-center p-10">
            <div className="text-left text-black w-1/2 pr-6">
              <h2 className="text-4xl font-bold mb-4 bg-red-600 text-white px-6 py-2 inline-block rounded-lg">
                About Us
              </h2>
              <p className="text-2xl font-medium">
                At our restaurant, we serve the best pasta, burgers, and pizzas made with love and fresh ingredients.
                Our mission is to provide a memorable dining experience for every guest.
              </p>
            </div>
            <div className="w-1/2">
              <img
                src="/images/AboutAS.jpg"
                alt="About Us"
                className="w-full h-auto rounded-lg"
              />
            </div>
          </div>
        </div>


    {/* Menu Section */}
<div className="w-full max-w-5xl mb-6 bg-white shadow-lg p-6 rounded-xl">
  <h2 className="text-3xl font-bold text-center mb-6">🍽️ Our Menu</h2>

  {/* Filter Buttons */}
  <div className="mb-6 text-center flex flex-wrap justify-center gap-2">
    {['burger', 'pasta', 'pizza', 'Box Choice'].map((category) => (
      <button
        key={category}
        onClick={() => setSelectedCategory(category)}
        className={`px-6 py-2 rounded-full border-2 transition-all duration-200 ${
          selectedCategory === category
            ? 'bg-red-600 text-white border-white'
            : 'bg-white text-600 border-white hover:bg-red-100'
        }`}
      >
        {category === 'all' ? 'All' : category.charAt(0).toUpperCase() + category.slice(1)}
      </button>
    ))}
  </div>




          {/* Vertical Menu Cards */}
          <div className="flex flex-col gap-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full sm:w-48 h-48 object-cover"
                />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-md font-bold text-green-600 mt-2">{item.price} USD</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Section */}
        <div
          className="w-full max-w-5xl mb-6 relative rounded-3xl overflow-hidden"
          style={{
            backgroundImage: "url('/images/Pastar.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="bg-black bg-opacity-50 p-10 text-center text-white">
            <h2 className="text-4xl font-bold mb-4">Ready For Mouth Watering Gourmet Pasta's, Burgers & Pizza?</h2>
            <Link
              to="/orders"
              className="bg-red-700 hover:bg-red-800 text-white font-semibold py-3 px-6 rounded transition duration-200"
            >
              VIEW ORDERS
            </Link>
          </div>
        </div>
      </div>

      {/* Footer and Services */}
      <FooterNav />
      <Services />
    </div>
  );
};

export default Home;













