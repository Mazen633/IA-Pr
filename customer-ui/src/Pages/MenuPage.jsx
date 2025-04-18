import React, { useEffect, useState } from 'react';
import axios from 'axios';

const MenuPage = () => {
  const [menuItems, setMenuItems] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  useEffect(() => {
    fetchCategories();
    fetchMenuItems();
  }, []);

  const fetchCategories = async () => {
    try {
      const response = await axios.get('/api/categories'); 
      setCategories(response.data);
    } catch (error) {
      console.error('Error fetching categories:', error);
    }
  };

  const fetchMenuItems = async () => {
    try {
      const response = await axios.get('/api/menu');
      setMenuItems(response.data);
    } catch (error) {
      console.error('Error fetching menu:', error);
    }
  };

  const filteredItems = menuItems.filter((item) => {
    const matchesCategory = selectedCategory ? item.category === selectedCategory : true;
    const matchesSearch = item.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-center">Our Menu</h1>

      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3 gap-2">
        <input
          type="text"
          placeholder="Search for dishes..."
          className="px-2 py-2 rounded-xl border w-midum sm:w-1/1"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />

        <select
          className="px-4 py-2 rounded-xl border w-full sm:w-1/3"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">All Categories</option>
          {categories.map((cat) => (
            <option key={cat.id} value={cat.name}>
              {cat.name}
            </option>
          ))}
        </select>
      </div>

      {filteredItems.length === 0 ? (
        <p className="text-center text-gray-500">No items match your search.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((item) => (
            <div key={item.id} className="bg-white p-4 rounded-2xl shadow-md hover:shadow-lg transition">
              <h2 className="text-xl font-semibold">{item.name}</h2>
              <p className="text-gray-600 mb-2">{item.description}</p>
              <div className="text-lg font-bold text-green-600">${item.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default MenuPage;
