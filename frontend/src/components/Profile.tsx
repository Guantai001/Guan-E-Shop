import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Person from '../assets/person.png'
import Order from './Order';

function Profile() {



  const [page, setPage] = useState(1);
  const [activeButton, setActiveButton] = useState(1);

  const [loading, setLoading] = useState<boolean>(true);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    // Simulate data loading delay
    setLoading(true); // Set loading state to true when the page changes

    setTimeout(() => {
      setLoading(false); // Set loading state to false after data has been loaded
    }, 500);
  }, [page]); // Add page as a dependency

  const handleClick1 = () => {
    setLoading(true)
    setPage(1);
    setActiveButton(1);
  };

  const handleClick = () => {
    setLoading(true)
    setPage(2);
    setActiveButton(2);
  };


  return (
    <div>
      <Navbar2 />
      <div >
        <div className="flex flex-col  items-center ">
          <div className=" w-full mx-auto flex flex-row h-screen ">
            <div className="flex flex-col  w-1/6 h-full ">

              <div className=" justify-center flex flex-col w-full h-full">

                <div className="flex flex-col mt-4 pr-4">
                  <div
                    style={{
                      borderTopRightRadius: '50px',
                      borderBottomRightRadius: '50px',
                      marginRight: '10px',

                    }}
                    className={` p-2 font-semibold shadow-lg  ${activeButton === 1 ? ' bg-[#560A05]' : 'bg-[#A51910]'
                      }`}
                  >
                    <p
                      className={` p-2 font-semibold shadow-lg ${activeButton === 1 ? ' text-white' : ' text-white'
                        }`}
                      onClick={handleClick1}
                    >
                      Profile
                    </p>
                  </div>
                  <div
                    style={{
                      borderTopRightRadius: '50px',
                      borderBottomRightRadius: '50px',
                      marginRight: '10px',
                    }}
                    className={` p-2  font-semibold ${activeButton === 2 ? ' bg-[#560A05]' : 'bg-[#A51910] '
                      }`}
                  >
                    <p className={` p-2  font-semibold ${activeButton === 2 ? ' text-white' : ' text-white'
                      }`}
                      onClick={handleClick}
                    >
                      Order History
                      <p />
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col 5/6  h-full justify-center ml-8">
              <div className="flex flex-col mx-8 justify-center ">

                {page === 1 && (

                  <div className="flex flex-row ">
                    <div className="flex flex-col items-start w-full text-start mx-6">
                      <h1 className="text-2xl font-bold ">PROFILE</h1>
                      <hr className="border-[#A51910] border-2 w-20 items-center" />

                      <div className="flex flex-row w-full justify-around my-4">
                        <p className="text-xl font-bold text-start"> Name :</p>
                        <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-xl p-2"

                        />
                      </div>
                      <div className="flex flex-row w-full justify-around my-4">
                        <p className="text-xl font-bold text-start"> Phone No : </p>
                        <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-xl p-2"
                        />
                      </div>
                      <div className="flex flex-row w-full justify-around my-4">
                        <p className="text-xl font-bold "> Email : </p>
                        <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-xl p-2"
                        />
                      </div>
                      <div className="flex flex-row w-full justify-around my-4">
                        <p className="text-xl font-bold "> Address </p>
                        <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-xl p-2"
                        />
                      </div>
                      <div className="flex flex-row w-full justify-around my-4">
                        <button
                          className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6 my-2"
                        >
                          Save Profile
                        </button>
                        <button
                          className=" text-[#A51910] rounded-full  shadow-2xl p-2 px-6 my-2
                      border-2 border-[#A51910]
                      "
                        >
                          Log Out
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col items-start w-full text-start ml-6">
                      <img src={Person} alt="person" className="w-96 h-96" />
                    </div>
                  </div>
                )}

                {page === 2 && (
                  <Order />
                )}
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default Profile
