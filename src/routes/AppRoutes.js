import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '../components/shared/Layout';
import Products from '../components/Products';

import ComposeMessage from '../Pages/ComposeMessage';
import ProfileForm from '../Pages/ProfileForm';
import LoginPage from '../Auth/LoginPage';
import Register from '../Auth/Register';
import Support from '../Pages/Support';
import Setting from '../Pages/Setting';
import Orders from '../Pages/Orders';
import Customers from '../Pages/Customers';
import Messages from '../Pages/Message';
import Tranjaction from '../Pages/Tranjaction';
import PrivateRoute from './PrivateRoute';
import { useAuth } from '../Context/AuthContext';
import Dashboard from '../components/Dashboard';
import Company from '../Pages/Company';
import AddCompany from '../Pages/AddCompany';

function AppRoutes() {
  const {isLoggedIn} = useAuth();
  return (
    <Routes>
      {/* Public Routes */}
      <Route path='/login' element={<LoginPage />} />
      <Route path='/register' element={<Register />} />

      {/* Protected Routes (Requires Authentication) */}
      <Route path='/' element={<PrivateRoute isAuthenticated={isLoggedIn} element={<Layout/>} />}>
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/products' element={<Products />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/profileform' element={<ProfileForm />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/transactions' element={<Tranjaction />} />
        <Route path='/settings' element={<Setting />} />
        <Route path='/support' element={<Support />} />
        <Route path='/compose' element={<ComposeMessage />} />
        <Route path='/company' element={<Company/>} />
        <Route path='/addcompany' element={<AddCompany />} />
        {/* Default Route */}
        <Route path='*' element={<Navigate to='/dashboard' />} />
      </Route>
    </Routes>
  );
}

export default AppRoutes;

