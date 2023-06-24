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
import Login from './components/Login';
import Signup from './components/Signup';

export interface productData {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string; 
}



function App() {
const [productData ,setProductData] = React.useState<productData[]>([]); 

// be able to fecth error  if the data is not fetched
React.useEffect(() => {
  fetch('http://localhost:3001/api/products/')
  .then(res => res.json())
  .then(json => setProductData(json))
  .catch(err => console.log(err))
}, [])






  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/product" element={<Product productData={productData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail" element={[<Detail />]} />
        <Route path="/checkout" element={<CheckOut />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
   
    </div>
  );
}

export default App;