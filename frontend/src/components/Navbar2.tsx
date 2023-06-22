import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import cart from '../assets/cart.png'
import profile from '../assets/profile.png'

function Navbar2() {


    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
      const handleScroll = () => {
        const scrollTop = window.pageYOffset;
        setIsScrolled(scrollTop > 0);
      };
  
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, []);

    return (
        <div className="font-sans fixed  w-full z-10 bg-white ">
            <div className="flex flex-row justify-around items-center p-6 shadow-lg rounded-2xl">
                <h1 className="text-2xl font-bold text-[#A51910]">GUAN-E-SHOP</h1>
                {/* inputfield */}
                <div className="flex items-center shadow-md rounded-lg">
                    <input type="bg-[#F4F4F4]" placeholder="Search" className="p-2 rounded-lg" />
                    <button className="bg-[#A51910] text-white p-2 rounded-lg">Search</button>
                </div>
                {/* links to home Product About contact  */}
                <div className="flex flex-row  items-center">
                    <Link to="/" className="p-2  hover:text-[#A51910]">HOME</Link>
                    <Link to="/product" className="p-2  hover:text-[#A51910]">PRODUCT</Link>
                    <Link to="/about" className="p-2  hover:text-[#A51910]">ABOUT</Link>
                    <Link to="/contact" className="p-2  hover:V">CONTACT</Link>
                    <Link to="/cart" className="p-2 mx-4 hover:text-[#A51910]">
                        <img src={cart} alt="cart" className=" w-8 h-8" />
                    </Link>                    <Link to="/profile" className="p-2  hover:text-[#A51910]">
                        <img src={profile} alt="profile" className="w-8 h-8" />
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default Navbar2
