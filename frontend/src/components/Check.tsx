
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import "../App.css"
import { useState, useEffect } from "react";
function Check() {

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
    <>
      <p className="text-xl font-bold">Check Out</p>
      <div className="flex flex-row items-center w-full h-20 justify-evenly my-4">
        <p className="text-xl font-bold ">
          <span className="text-[#A51910]"> ID : </span> 123456</p>
        <p className="text-xl font-bold ">
          <span className="text-[#A51910]"> Date :</span> 12/3/23</p>
      </div>

        <div className="flex flex-row mt-4 ml-8">
          <p
            className={` p-2 font-semibold ${activeButton === 1 ? ' text-[#A51910]' : ' text-black'
              }`}

          >
            Delivery
          </p>
          <p className={` p-2  font-semibold ${activeButton === 2 ? ' text-[#A51910]' : ' text-black'
            }`}

          >
            PayMent
            <p />

          </p>
        </div>

        <div className="flex flex-col mx-8 justify-center ">
         
            {page === 1 && (
              <div className="flex flex-col items-start w-full text-start mx-6">
                <div className="flex flex-row w-full justify-around my-4">
                  <p className="text-xl font-bold "> Name :</p>
                  <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-2xl p-2"
                    placeholder="Enter your name"
                  />
                </div>
                <div className="flex flex-row w-full justify-around my-4">
                  <p className="text-xl font-bold "> Phone No : </p>
                  <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-2xl p-2"
                    placeholder="Enter your phone number"
                  />
                </div>
                <div className="flex flex-row w-full justify-around my-4">
                  <p className="text-xl font-bold "> Address </p>
                  <input type="text" className="text-xl rounded-full bg-[#F4F4F4] shadow-2xl p-2"
                    placeholder="Enter your address"
                  />
                </div>
                <button
                  className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6"
                  onClick={handleClick}
                >
                  Proceed to Pay
                </button>
              </div>
            )}

            {page === 2 && (

              <div className="flex flex-col items-start w-full text-start mx-6">
                <p className="text-xl font-bold">Payment Details</p>
                <div className="flex flex-row items-center w-full h-20 justify-around my-4">
                  <p className="text-xl font-bold ">
                    <span className="text-[#A51910]"> Name :</span>  John Doe</p>
                  <button
                    className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6"
                    onClick={handleClick1}
                  >
                    Back
                  </button>
                  <button
                    className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6"
                  >
                    Order Now
                  </button>
                </div>
              </div>

            )}
         
        </div>
     


    </>
  )
}

export default Check
