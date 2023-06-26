import React, { useEffect, useState } from 'react';
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
import Login from './components/Login';
import Signup from './components/Signup';
import UserAuthProvider from './UserAuthContext';

export interface ProductData {
  _id: string;
  name: string;
  price: number;
  image: string;
  description: string;
  category: string;
  __v: number;
}

export interface UserData{
  _id:string;
  name:string;
  email:string;
  picture:string 
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

// fectch logged in user 
const [usersData ,setUsersData] = React.useState<UserData[]>([]);
useEffect(() => {
  fetch('http://localhost:3001/api/user')
  .then(res => res.json())
  .then(json => setUsersData(json))
  .catch(err => console.log(err))
}, [])
// get the user data from the local storage or session storage

const [user, setUser] = useState(null);

useEffect(() => {
  fetch('http://localhost:3001/api/user/currentuser', {
    method: 'GET',
    credentials: 'include' // Include cookies
  })
    .then(response => response.json())
    .then(data => {
      setUser(data.user);
    })
    .catch(error => {
      console.error('Error:', error);
    });
}, []);

useEffect(() => {
  console.log("user", user);
}, [user]);

  return (

  <div className="App">
     
    <Router> 
      <UserAuthProvider>
      <Routes>
        <Route path="/" element={<Home productData={productData} />} />
        <Route path="/product" element={<Product productData={productData} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/detail/:id" element={[<Detail productData={productData} />]} />
        <Route path="/checkout" element={<CheckOut usersData = {usersData}/>} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      </UserAuthProvider>   
    </Router>
 
   
    </div>
  );
}

export default App;