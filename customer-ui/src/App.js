import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './Pages/Home';
import MenuPage from './Pages/MenuPage';
import OrderPage from './Pages/OrderPage';
import ReviewPage from './Pages/ReviewPage';
import { Header } from './comments/shared/Header';
import Services from './comments/shared/Services';
import ServicesPage from './Pages/ServicesPage';
import CategoryMenu from './Pages/CategoryMenu';
import Recentorder from './Pages/Recentorder';
import OrderCard from './Pages/ordercard'; 
import TableCard from './Pages/TableCard'; 
import Table from './Pages/TablePage';
import AdminAccount from './Pages/AdminAccount';
import LoginPage from './Pages/LoginPage';

function App() {
  const isLoggedIn = localStorage.getItem('isLoggedIn') === 'true';
  const role = localStorage.getItem('role');

  return (
    <Router>
      {isLoggedIn && <Header />}
      <Routes>
        {/* Redirect to login if not logged in */}
        <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/login" />} />

        {/* Other pages */}
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/orders" element={<OrderPage />} />
        <Route path="/reviews" element={<ReviewPage />} />
        <Route path="/services" element={<Services />} /> 
        <Route path="/services-page" element={<ServicesPage />} />
        <Route path="/menu/:category" element={<CategoryMenu />} />
        <Route path="/recent-order" element={<Recentorder />} />
        <Route path="/order-card" element={<OrderCard />} /> 
        <Route path="/table" element={<Table />} />
        <Route path="/table-card" element={<TableCard />} />

        {/* Login page */}
        <Route path="/login" element={<LoginPage />} />

        {/* Admin Account page - only if admin */}
        <Route
          path="/admin/accounts"
          element={
            isLoggedIn && role === 'admin' ? (
              <AdminAccount />
            ) : (
              <Navigate to={isLoggedIn ? '/' : '/login'} />
            )
          }
        />
      </Routes>
    </Router>
  );
}

export default App;


