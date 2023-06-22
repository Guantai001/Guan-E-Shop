import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import Product from './components/Product';
import 'typeface-poppins';
import About from './components/About';
import Contact from './components/contact';
import Profile from './components/Profile';
import Detail from './components/Detail';
import CheckOut from './components/CheckOut';
import './App.css';
import Footer from './components/Footer';


function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={[<Detail />]} />
        <Route path="/checkout" element={<CheckOut />} />
      </Routes>
      
    </Router>
   
    </div>
  );
}

export default App;