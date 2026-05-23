import { Routes, Route } from 'react-router-dom';
import Home  from './pages/Home';
import Auth  from './pages/Auth';
import Checkout  from './pages/Checkout';
import Navbar from './Components/Navbar';
import './App.css';
import AuthProvider from './context/AuthContext';
import ProductDetails from './pages/ProductDetails';

function App() {
  return (
    <AuthProvider>
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/auth/signup" element={<Auth />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products/:id" element={<ProductDetails />} />
      </Routes>
    </div>
    </AuthProvider>
  );
}

export default App;