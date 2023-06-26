import React, { useContext } from 'react'
import Navbar from './Navbar'
import bg from '../assets/bg.png'
import photo from '../assets/bg photo.png'
import { ArrowRightOutlined } from '@ant-design/icons';
import Featured from './Featured';
import rectangle from '../assets/rectangle.png';
import Latest from './Latest';
import Footer from './Footer';
import { Link } from 'react-router-dom';
import UserAuthContext from '../UserAuthContext';

interface ProductData {
    productData : ProductData[]
}


function Home(props : ProductData) {





    const {productData} = props
    // console.log(productData)

    return (
        <div className="font-sans">
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <Navbar />
                <div className=" w-2/3 mx-auto flex flex-row justify-center items-center mt-10 ">
                    <div className="w-2/3 ">
                        <h1 className="text-4xl font-bold">Shop Smarter, Not Harder!</h1>
                        <p className="text-lg my-4">
                            Success isn't always about greatness. It's about consistency.
                            Consistent hard work gains success. Greatness will come.
                        </p>
                        <Link to="/product">
                        <button className="bg-[#A51910] text-white py-1 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl">
                            Explore Now <ArrowRightOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
                        </button>
                        </Link>
                    </div>
                    <div className=" m-6">
                        <img src={photo} alt="photo" className="w-96 h-200" />
                    </div>
                </div>
            </div>
            <Featured productData={productData} />
         
            <div className=" my-6 flex items-center" style={{ backgroundImage: `url(${rectangle})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: 400 }}>
                <div className="flex flex-col w-1/3 ml-10 items-start mt-4">
                    <h1 className="text-xl font-bold text-white">Limited Offers</h1>
                    <h1 className="text-4xl my-4 semibold">
                        <span className="text-[#A51910]">35%!</span>
                        Off only this Friday and get a special gift
                    </h1>
                    {/* <Link to="/products"> */}
                    <button className="bg-[#A51910] text-white py-1 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl">
                        Grab It Now <ArrowRightOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
                    </button>
                    {/* </Link> */}
                </div>
            </div>
            <Latest productData={productData}/>
            <Footer />
        </div>
    )
}

export default Home
