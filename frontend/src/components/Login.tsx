import { Link } from 'react-router-dom';
import React, { useEffect, useRef, useContext } from 'react';
import Navbar from './Navbar'
import bg from '../assets/bglogin.png'
import Footer from './Footer'
import { UserAuthContext } from '../UserAuthContext';
import { useNavigate } from 'react-router-dom';

const handleGoogleLogin = () => {
  window.location.href = "http://localhost:3001/api/user/google";
};


function Login() {

    const navigate = useNavigate();

    const [email, setEmail] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");

    const { login } = useContext(UserAuthContext);

    const handleLogin = (userType: string) => { 
        login(email, password, userType);
    };

    // login with google once it logs in it will redirect to the home page
    useEffect(() => {
        if (window.location.pathname === "/google/callback") {
          // Call an endpoint on your backend to complete the authentication process
          fetch("http://localhost:3001/api/user/google/callback")
            .then((response) => {
              if (response.ok) {
                navigate('/');
              } else {
                // Handle authentication failure
                console.error('Authentication failed');
              }
            })
            .catch((error) => {
              console.error('Error during authentication', error);
            });
        }
      }, [navigate]);

    return (
        <>


            <div className="font-sans">
                <div style={{ backgroundImage: `url(${bg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', height: '80vh' }}>
                    <Navbar />
                    <div className="flex flex-col justify-center items-center  rounded-3xl bg-transparent w-1/3 mx-auto my-20 shadow-xl">
                        <h1 className="text-4xl font-bold text-[#A51910]">Login</h1>
                        <form 
                           onSubmit={(e) => {
                            e.preventDefault();
                            const userTypes = ["user", "admin"]; // Add any additional user types as needed
                            userTypes.forEach((userType) => {
                                handleLogin(userType);
                            });
                        }}

                        className="flex flex-col justify-center items-center">
                            <input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                             type="text" placeholder="Email" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                            <input
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                             type="password" placeholder="Password" className="border-2 border-[#A51910] rounded-full px-4 py-2 my-4 w-96" />
                            <button className="bg-[#A51910] text-white my-4 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl ">
                                Log in
                            </button>
                       </form>   
                         {/* google login */}
                            <button
                                onClick={handleGoogleLogin}
                            className="bg-[#A51910] text-white my-4 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl ">
                                Log in with Google
                            </button>
                        
                    </div>
                </div>
            </div>
                <Footer />
            </>

            )
}

            export default Login
