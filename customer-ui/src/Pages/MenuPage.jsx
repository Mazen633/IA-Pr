import React, { useState } from 'react';


const categories = [
  { 
    name: 'Burgers', 
    dishes: [
      { 
        name: 'House Burger', 
        description: 'BEEF BURGER, CHEDDAR, LETTUCE, TOMATO, PICKLES, KETCHUP, MAYO, MUSTARD',
        price: 9.80, 
        image: '/images/HouseBurger.jpg' 
      },
      { 
        name: 'Veggie Burger', 
        description: 'FALAFEL BURGER, HUMMUS, ROCKET, TOMATO, ONIONS',
        price: 9.80, 
        image: '/images/VeggieBurger.jpg' 
      },
      { 
        name: 'Smash Burger', 
        description: 'SMASHED GROUND BEEF, CHEDDAR, PICKLES, ONIONS, KETCHUP AND MUSTARD',
        price: 8.80, 
        image: '/images/SmashBurger.jpg' 
      }
    ]
  },
  { 
    name: 'Pasta', 
    dishes: [
      { 
        name: 'Spaghetti Carbonara', 
        description: 'CLASSIC ROMAN PASTA WITH EGG, PECORINO CHEESE, PANCETTA, AND BLACK PEPPER',
        price: 12.50, 
        image: '/images/carbonara.jpg' 
      },
      { 
        name: 'Penne Arrabbiata', 
        description: 'PENNE WITH SPICY TOMATO SAUCE, GARLIC, AND CHILI PEPPERS',
        price: 11.80, 
        image: '/images/Arrabbiata.jpg' 
      }
    ]
  },
  { 
    name: 'Pizza', 
    dishes: [
      { 
        name: 'Margherita', 
        description: 'TOMATO SAUCE, MOZZARELLA, BASIL',
        price: 12.99,
        image: '/images/Margherita.jpg',
        sizes: [
          { name: 'Small (10")', price: 10.99 },
          { name: 'Medium (12")', price: 12.99 },
          { name: 'Large (14")', price: 14.99 }
        ]
      },
      { 
        name: 'Pepperoni', 
        description: 'TOMATO SAUCE, MOZZARELLA, PEPPERONI',
        price: 14.99,
        image: '/images/Pepperoni.jpg',
        sizes: [
          { name: 'Small (10")', price: 12.99 },
          { name: 'Medium (12")', price: 14.99 },
          { name: 'Large (14")', price: 16.99 }
        ],
        spicy: true
      },
      { 
        name: 'Vegetarian', 
        description: 'TOMATO SAUCE, MOZZARELLA, BELL PEPPERS, MUSHROOMS, OLIVES',
        price: 13.99,
        image: '/images/Vegetarian.jpg',
        sizes: [
          { name: 'Small (10")', price: 11.99 },
          { name: 'Medium (12")', price: 13.99 },
          { name: 'Large (14")', price: 15.99 }
        ],
        vegetarian: true
      }
    ]
  },
  { 
    name: 'Box Choice', 
    dishes: [
      { 
        name: 'Loaded Fries', 
        description: 'CRISPY FRIES TOPPED WITH MELTED CHEESE SAUCE, BACON BITS',
        price: 7.50, 
        image: '/images/Loaded.jpg' 
      },
      { 
        name: 'Spicy Bag', 
        description: 'CHILLI CHICKEN SHREDDERS, PEPPER, ONIONS, JALAPENO, SHREDDED CHEESE, CRISPY FRIES',
        price: 7.50, 
        image: '/images/SpiceBag.jpg',
        spicy: true
      },
      { 
        name: 'Regular Fries', 
        description: 'CLASSIC CRISPY FRIES',
        price: 4.50, 
        image: '/images/RegularFries.jpg' 
      },
      { 
        name: 'Sweet Potato Fries', 
        description: 'CRISPY SWEET POTATO FRIES',
        price: 5.00, 
        image: '/images/SweetFries.jpg' 
      }
    ]
  }
];

const MenuPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Our Menu</h1>

      <div className="flex justify-center gap-4 mb-8 flex-wrap">
        {categories.map((cat) => (
          <button
            key={cat.name}
            onClick={() => setSelectedCategory(cat.name === selectedCategory ? '' : cat.name)}
            className={`px-6 py-2 rounded-full text-lg font-semibold transition-colors ${
              selectedCategory === cat.name
                ? 'bg-green-500 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {cat.name}
          </button>
        ))}
      </div>

      {selectedCategory && (
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-center mb-4">{selectedCategory}</h2>
          <div className="space-y-6">
            {categories
              .find((cat) => cat.name === selectedCategory)
              .dishes
              .map((dish, index) => (
                <div key={index} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition flex gap-4">
                  <img 
                    src={dish.image} 
                    alt={dish.name} 
                    className="w-32 h-32 object-cover rounded-lg" 
                  />
                  <div className="flex-1">
                    <div className="flex justify-between items-start">
                      <h3 className="text-xl font-semibold">{dish.name}</h3>
                      <span className="text-lg font-bold text-green-600">
                        {dish.price.toFixed(2)}€
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2 text-sm">{dish.description}</p>

                    {dish.sizes && (
                      <div className="mb-2">
                        <p className="text-sm text-gray-500">
                          {dish.sizes.map(s => `${s.name}: ${s.price.toFixed(2)}€`).join(' • ')}
                        </p>
                      </div>
                    )}

                    <div className="flex gap-2">
                      {dish.spicy && (
                        <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                          SPICY
                        </span>
                      )}
                      {dish.vegetarian && (
                        <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                          VEGETARIAN
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default MenuPage;
