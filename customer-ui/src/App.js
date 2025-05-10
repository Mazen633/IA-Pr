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
import Recentorder from './Pages/Recentorder';
import OrderCard from './Pages/ordercard'; // حسب مسارك
import TableCard from './Pages/TableCard'; // تأكد من المسار الصحيح
import Table from './Pages/TablePage';



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
    ``   <Route path="/recent-order" element={<Recentorder />} />
         <Route path="/order-card" element={<OrderCard />} /> 
         <Route path="/table" element={<Table />} />
         <Route path="/table-card" element={<TableCard />} />
      </Routes>
    </Router>
  );
}

export default App;

