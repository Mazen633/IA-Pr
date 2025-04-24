import React from 'react';
import { Link } from 'react-router-dom';
import { GiNoodles, GiHamburger, GiPizzaSlice } from 'react-icons/gi';

const Services = () => {
  const serviceList = [
    {
      id: 1,
      icon: <GiNoodles className="text-4xl mx-auto mb-4 text-amber-500" />,
      title: "Pasta Perfection",
      description: "Satisfy your pasta cravings with our delicious pasta dishes, prepared with rich sauces and premium ingredients.",
      link: "/menu/pasta",
      bgImage: "/images/Pastar.png"
    },
    {
      id: 2,
      icon: <GiHamburger className="text-4xl mx-auto mb-4 text-amber-500" />,
      title: "Gourmet Burgers",
      description: "Indulge in our juicy, flavorful burgers made with the finest ingredients and served with a side of crispy fries.",
      link: "/menu/burgers",
      bgImage: "/images/Burger.webp"
    },
    {
      id: 3,
      icon: <GiPizzaSlice className="text-4xl mx-auto mb-4 text-amber-500" />,
      title: "Pizza Passion",
      description: "Experience the ultimate pizza satisfaction with our handcrafted pizzas, loaded with fresh toppings and gooey cheese.",
      link: "/menu/pizza",
      bgImage: "/images/pizza.avif"
    }
  ];

  return (
    <section className="py-16 px-4 bg-white" id="services">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800 relative">
          Our Services
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {serviceList.map((service) => (
            <div 
              key={service.id}
              className="bg-gray-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-2 relative overflow-hidden group"
            >
              <div className="absolute inset-0 z-0 opacity-10 group-hover:opacity-20 transition-opacity duration-300">
                <img 
                  src={service.bgImage} 
                  alt={service.title} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="relative z-10 text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mt-4">{service.title}</h3>
                <p className="mt-2 text-gray-600">{service.description}</p>
                <Link 
                  to={service.link}
                  className="inline-block mt-4 bg-amber-500 text-white py-2 px-6 rounded-full hover:bg-amber-600 transition-colors duration-300"
                >
                  Explore
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
