import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './Pages/Home';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import ReviewPage from './Pages/ReviewPage';
import {Header} from './comments/shared/Header';
import Services from './comments/shared/Services';
import ServicesPage from './Pages/ServicesPage';
import CategoryMenu from './Pages/CategoryMenu';



function App() {
  return (
    <Router>
        <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/services" component={ServicesPage} />
        <Route path="/menu/:category" element={<CategoryMenu />} />
   
      </Routes>
    </Router>
  );
}

export default App;

