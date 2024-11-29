import { BrowserRouter as Router ,Routes,Route } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout';
import Dashboard from './components/Dashboard';
import Products from './components/Products';
import Customers from './Pages/Customers';
import Message from './Pages/Message';
import Tranjaction from './Pages/Tranjaction';
import Orders from './Pages/Orders';
import Setting from './Pages/Setting';
import Support from './Pages/Support';
import Register from './Auth/Register';
import LoginPage from './Auth/LoginPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard/>}></Route>
          <Route path='/products' element={<Products/>}></Route>
          <Route path='/customers' element={<Customers />} />
          <Route path='/messages' element={<Message />} />
          <Route path='/transactions' element={<Tranjaction />} />
          <Route path='/orders' element={<Orders />} />
          <Route path='/settings' element={<Setting />} />
          <Route path='/support' element={<Support />} />
        </Route>
          <Route path='/login' element={<LoginPage/>} />
          <Route path='/register' element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
