import React from 'react';
import { useParams } from 'react-router-dom';

const dishesData = {
  pasta: ['Spaghetti', 'Fettuccine Alfredo', 'Penne Arrabiata'],
  pizza: ['Margherita', 'Pepperoni', 'Vegetarian'],
  burger: ['Beef Burger', 'Chicken Burger', 'Veggie Burger'],
};

const CategoryMenu = () => {
  const { category } = useParams();
  const dishes = dishesData[category] || [];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h2 className="text-3xl font-bold text-center mb-6 capitalize">{category} Dishes</h2>
      <ul className="max-w-xl mx-auto space-y-4">
        {dishes.map((dish, i) => (
          <li key={i} className="p-4 bg-white shadow rounded-lg text-center text-lg">
            {dish}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryMenu;
