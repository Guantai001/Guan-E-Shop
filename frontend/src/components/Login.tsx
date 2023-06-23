import React from 'react'
import Navbar from './Navbar'
import bg from '../assets/bglogin.png'
import Footer from './Footer'

function Login() {
    return (
        <>


            <div className="font-sans">
                <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '80vh' }}>
                    <Navbar />
                    <div className="flex flex-col justify-center items-center  rounded-3xl bg-transparent w-1/3 mx-auto my-20 shadow-xl">
                        <h1 className="text-4xl font-bold text-[#A51910]">Login</h1>
                        <div className="flex flex-col justify-center items-center">
                            <input type="text" placeholder="Email" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                            <input type="password" placeholder="Password" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                            <button className="bg-[#A51910] text-white my-4 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl ">
                                Log in
                            </button>
                        </div>
                    </div>
                </div>
            </div>
                <Footer />
            </>

            )
}

            export default Login
