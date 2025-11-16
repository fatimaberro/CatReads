import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Features from './pages/Features';
import Contact from './pages/Contact';
import Cart from './components/Cart';
import booksData from './data/Books';

function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    if (!cart.some(item => item.id === book.id)) {
      setCart([...cart, book]);
    }
  };

  const removeFromCart = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  return (
    <Router>
      <Navbar cartCount={cart.length} />
      <div className="container my-4">
        <Routes>
          <Route path="/" element={<Home books={booksData} addToCart={addToCart} />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/contact" element={<Contact />} />
          
          <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart} />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;