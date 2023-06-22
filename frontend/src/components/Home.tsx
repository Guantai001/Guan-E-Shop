import React from 'react'
import Navbar from './Navbar'
import bg from '../assets/bg.png'
import photo from '../assets/bg photo.png'
import { ArrowRightOutlined } from '@ant-design/icons';

function Home() {
    return (
        <div className="font-sans">
            <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '100vh' }}>
                <Navbar />
                <div className=" w-2/3 mx-auto flex flex-row justify-around items-center ">
                    <div className="w-2/3 ">
                        <h1 className="text-4xl font-bold">Shop Smarter, Not Harder!</h1>
                        <p className="text-lg my-4">
                            Success isn't always about greatness. It's about consistency.
                            Consistent hard work gains success. Greatness will come.
                        </p>
                        <button className="bg-[#A51910] text-white py-1 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl">
                            Explore Now <ArrowRightOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
                        </button>
                    </div>
                    <div className=" m-6">
                        <img src={photo} alt="photo" className="w-96 h-200" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home
