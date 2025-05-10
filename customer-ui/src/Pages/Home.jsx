import React, { useEffect, useState } from 'react';
import { Link, useLocation} from 'react-router-dom';
import FooterNav from '../comments/shared/FooterNav';
import Services from '../comments/shared/Services';

const Home = () => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');

  const [reservation, setReservation] = useState({
    name: '',
    guests: 1,
    date: '',
    time: '',
  });

  const [reservationsList, setReservationsList] = useState([]);
  const [showReservations, setShowReservations] = useState(false);

  const handleReservation = (e) => {
    e.preventDefault();
    const { name, guests, date, time } = reservation;

    if (!name || !date || !time || guests < 1) {
      alert('Please fill out all fields correctly!');
      return;
    }

    const newReservation = { ...reservation };
    setReservationsList(prev => [...prev, newReservation]);
    setReservation({ name: '', guests: 1, date: '', time: '' });
    alert('Reservation submitted!');
  };

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

  const filteredItems = selectedCategory === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === selectedCategory);

  useEffect(() => {
    if (location.hash === '#contact') {
      const section = document.getElementById('contact-section');
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col relative">
      <div className="flex-grow flex flex-col items-center p-4">
        <h1 className="text-3xl font-bold text-center mb-8 text-red-600">
          PASTA, BURGER & PIZZA RESTAURANT
        </h1>

        {/* Hero Image */}
        <div className="w-full max-w-5xl mb-6 relative">
          <img src="/images/full.jpg" alt="Restaurant" className="rounded-3xl shadow-lg w-full h-auto object-cover max-h-[70vh]" />
          <div className="absolute bottom-4 right-4 p-6 bg-black bg-opacity-50 text-white rounded-lg">
            <h2 className="text-2xl font-bold mb-2">Delicious Pasta, Burgers & Pizza</h2>
            <p className="text-lg mb-4">Order now and enjoy mouth-watering dishes!</p>
            <Link to="/orders" className="bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded transition duration-200">
              Order Now
            </Link>
          </div>
        </div>

        {/* About Us */}
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
              <img src="/images/AboutAS.jpg" alt="About Us" className="w-full h-auto rounded-lg" />
            </div>
          </div>
        </div>

        {/* Menu Section */}
        <div className="w-full max-w-5xl mb-6 bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">🍽️ Our Menu</h2>
          <div className="mb-6 text-center flex flex-wrap justify-center gap-2">
            {['all', 'burger', 'pasta', 'pizza', 'Box Choice'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full border-2 transition-all duration-200 ${
                  selectedCategory === category
                    ? 'bg-red-600 text-white border-white'
                    : 'bg-white text-black border-white hover:bg-red-100'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>

          <div className="flex flex-col gap-4">
            {filteredItems.map((item, index) => (
              <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden flex flex-col sm:flex-row">
                <img src={item.image} alt={item.name} className="w-full sm:w-48 h-48 object-cover" />
                <div className="p-4 flex flex-col justify-between">
                  <h3 className="text-lg font-semibold text-gray-800">{item.name}</h3>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  <p className="text-md font-bold text-green-600 mt-2">{item.price} USD</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Reservation Form */}
        <div className="w-full max-w-5xl mb-6 bg-white shadow-lg p-6 rounded-xl">
          <h2 className="text-3xl font-bold text-center mb-6">🍽️ Table Reservation</h2>
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleReservation}>
            <div className="flex flex-col">
              <label className="text-lg font-medium mb-1">Full Name</label>
              <input
                type="text"
                placeholder="Enter your name"
                value={reservation.name}
                onChange={(e) => setReservation({ ...reservation, name: e.target.value })}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium mb-1">Number of Guests</label>
              <input
                type="number"
                min="1"
                value={reservation.guests}
                onChange={(e) => setReservation({ ...reservation, guests: Number(e.target.value) })}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium mb-1">Date</label>
              <input
                type="date"
                value={reservation.date}
                onChange={(e) => setReservation({ ...reservation, date: e.target.value })}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="flex flex-col">
              <label className="text-lg font-medium mb-1">Time</label>
              <input
                type="time"
                value={reservation.time}
                onChange={(e) => setReservation({ ...reservation, time: e.target.value })}
                className="p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
              />
            </div>
            <div className="md:col-span-2 text-center">
              <button
                type="submit"
                className="mt-4 bg-red-600 hover:bg-red-700 text-white font-semibold py-3 px-6 rounded-lg transition duration-200"
              >
                Reserve Table
              </button>
            </div>
          </form>

          {/* Show Reservations Button */}
          <div className="text-center mt-4">
            <button
              onClick={() => setShowReservations(!showReservations)}
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition duration-200"
            >
              {showReservations ? 'Hide Reservations' : 'Show Reservations'}
            </button>
          </div>

          {/* List of Reservations */}
          {showReservations && reservationsList.length > 0 && (
            <div className="mt-6 bg-gray-100 p-6 rounded-xl">
              <h3 className="text-2xl font-bold mb-4 text-center">📅 Your Reservations</h3>
              <ul className="space-y-4">
                {reservationsList.map((res, index) => (
                  <li key={index} className="bg-white p-4 rounded shadow">
                    <p><strong>Name:</strong> {res.name}</p>
                    <p><strong>Guests:</strong> {res.guests}</p>
                    <p><strong>Date:</strong> {res.date}</p>
                    <p><strong>Time:</strong> {res.time}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>

        {/* Call to Action */}
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

      <FooterNav />
      <Services />
    </div>
  );
};

export default Home;













