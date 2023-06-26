import Navbar from './Navbar'
import bg from '../assets/bglogin.png'
import Footer from './Footer'
import { UserAuthContext } from '../UserAuthContext';
import React, { useEffect, useRef, useContext } from 'react';


function Signup() {

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    const [name, setName] = React.useState<string>("");

    const { register } = useContext(UserAuthContext);

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        register(name, email, password);
    };

    return (

        <>
       
        <div className="font-sans">
        <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '80vh' }}>
            <Navbar />
            <div className="flex flex-col justify-center items-center  rounded-3xl bg-transparent w-1/3 mx-auto my-20 shadow-xl">
                <h1 className="text-4xl font-bold text-[#A51910]">Sign Up</h1>
                <form
 onSubmit={(e) => {
    handleRegister(e);

}}                 className="flex flex-col justify-center items-center">
                    <input 
                    onChange={(e) => {
                        setName(e.target.value);
                    }}
                    value={name}
                    type="text" placeholder="Name" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                    <input
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }
                    }
                    value={email}
                     type="text" placeholder="Email" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                    <input 
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    value={password}
                    type="password" placeholder="Password" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                    <button className="bg-[#A51910] text-white my-4 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl ">
                        Sign Up
                    </button>
                    {/* already have an acount */}
                    <p className="text-[#A51910]">Already have an account? <a href="/login" className="text-[#A51910]">Log in</a></p>
                    
                </form>
            </div>
        </div>
    </div>
        <Footer />  
 </>
    )
}

export default Signup
