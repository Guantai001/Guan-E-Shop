import React from 'react'
import { MailOutlined, PhoneOutlined, EnvironmentOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import facebook from '../assets/facebook.png'
import instagram from '../assets/ig.png'
import twitter from '../assets/twitter.png'
import youtube from '../assets/youtube.png'

function Footer() {
    return (
        <div>
            <div className="bg-[#2D2B2B] mt-10 w-full">
                <div className=" justify-center flex flex-row p-6">
                    <div className=" justify-around items-center p-6 w-1/4 ">
                        <h1 className="text-2xl font-bold text-[#A51910]">GUAN-E-SHOP</h1>
                        <p className="text-white mt-4">Specializes in providing high-quality, stylish products for your wardrobe</p>
                    </div>
                    <div className=" justify-around items-center p-6 w-1/4 ">
                        <h1 className="text-2xl font-bold text-white">Contact</h1>
                        <hr className="border-[#A51910] border-2 w-20 items-center" />
                        <div className="flex flex-row mt-2">
                            <MailOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                            <p className="text-white"> Email : jpguantai@gmail.com </p>
                        </div>
                        <div className="flex flex-row mt-2">
                            <PhoneOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                            <p className="text-white"> Phone : +254795070535 </p>
                        </div>
                        <div className="flex flex-row mt-2">
                            <EnvironmentOutlined style={{ fontSize: '20px', marginLeft: '2px' }} className="text-white mx-2" />
                            <p className="text-white"> Location : Ongata Rongai </p>
                        </div>

                    </div>
                    <div className=" justify-around items-center p-6 w-1/4  ">
                        <h1 className="text-2xl font-bold text-white">Quick Links</h1>
                        <hr className="border-[#A51910] border-2 w-20 items-center" />
                        <Link to="/">  <p className="text-white hover:text-[#A51910]">Home</p></Link>
                        <Link to="/about">  <p className="text-white hover:text-[#A51910]">About Us</p></Link>
                        <Link to="/contact">  <p className="text-white hover:text-[#A51910]">Contact Us</p></Link>
                        <Link to="/products">  <p className="text-white hover:text-[#A51910]">Products</p></Link>
                        <Link to="/cart">  <p className="text-white hover:text-[#A51910]">Cart</p></Link>

                    </div>
                    <div className=" justify-around items-center p-6 w-1/4 ">
                        <h1 className="text-2xl font-bold text-white">Follow Us</h1>
                        <hr className="border-[#A51910] border-2 w-20 items-center" />

                        <div className="flex flex-row mt-2">
                            <a href="https://www.facebook.com/your-facebook-link">
                                <img src={facebook} alt="facebook" className="w-8 h-8 mx-2" />
                            </a>
                            <a href="https://www.instagram.com/your-instagram-link">
                                <img src={instagram} alt="instagram" className="w-8 h-8 mx-2" />
                            </a>
                            <a href="https://www.twitter.com/your-twitter-link">
                                <img src={twitter} alt="twitter" className="w-8 h-8 mx-2" />
                            </a>
                            <a href="https://www.youtube.com/your-youtube-link">
                                <img src={youtube} alt="youtube" className="w-8 h-8 mx-2" />
                            </a>

                        </div>
                    </div>
                </div>

                <div className='justify-center items-center flex flex-col '>
                    <hr className="border-[#a2a1a1] border-2 w-full" />
                    <div className='flex flex-row text-center font-bold text-white my-2'>
                        <p className='text-center mx-auto'>
                            Copyright ©{new Date().getFullYear()}
                            <span className="text-md text-[#A51910]"> GUAN-E-SHOP </span>
                            . All rights reserved
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}

export default Footer
