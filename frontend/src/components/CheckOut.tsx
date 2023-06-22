import React from 'react'
import Navbar2 from './Navbar2'
import Footer from './Footer';
import Delete from '../assets/delete.png'
import Delete2 from '../assets/delete2.png'
import image4 from '../assets/image(3).png'
import Check from './Check';

function CheckOut() {
  return (
    <div>
      <Navbar2 />
      <div >
        <div className="flex flex-col items-center h-screen ">
          <div className=" w-full mx-auto flex flex-row  items-center mt-10 ">
            <div className="items-center w-1/2 h-screen">
              <div className="flex flex-col h-full">
                <div className="items-center ">
                  <div style={{ borderTopRightRadius: '50px', borderBottomRightRadius: '50px' }}
                    className="flex flex-row items-center bg-[#A51910] w-full h-20 justify-around mb-4">
                    <p className="text-xl font-bold text-white">PRODUCT</p>
                    <p className="text-xl font-bold text-white"> QTY</p>
                    <p className="text-xl font-bold text-white"> PRICE</p>
                    <img src={Delete} alt="" />
                  </div>
                  {/* 1st item */}
                  <div className="flex flex-row items-center w-full h-20 justify-around my-4">
                    <img src={image4} alt="" className=" m-2" />
                    <div className="flex flex-row justify-between items-center bg-[#F4F4F4] rounded-full  p-2 mx-4">
                      <button className="text-[#A51910] font-bold mx-2">-</button>
                      <p className="text-[#A51910] font-bold mx-2">1</p>
                      <button className="text-[#A51910] font-bold mx-2">+</button>
                    </div>
                    <p className="text-xl font-bold text-[#A51910]"> Ksh 3,800</p>
                    <img src={Delete2} alt="" />
                  </div>
                  {/* 2nd item */}
                  <div className="flex flex-row items-center w-full h-20 justify-around my-4">
                    <img src={image4} alt="" className=" m-2" />
                    <div className="flex flex-row justify-between items-center bg-[#F4F4F4] rounded-full  p-2 mx-4">
                      <button className="text-[#A51910] font-bold mx-2">-</button>
                      <p className="text-[#A51910] font-bold mx-2">1</p>
                      <button className="text-[#A51910] font-bold mx-2">+</button>
                    </div>
                    <p className="text-xl font-bold text-[#A51910]"> Ksh 3,800</p>
                    <img src={Delete2} alt="" />
                  </div>
                  <div className="flex flex-col items-center  h-20 justify-around m-8">
                    <hr className="border-[#e1e0e0] border-2 w-full items-center mx-4" />
                    <div className="flex flex-row justify-between items-center w-full">
                      <p className="text-xl font-bold text-[#A51910]">TOTAL</p>
                      <p className="text-xl font-bold text-[#A51910]"> Ksh 3,800</p>
                    </div>
                    <hr className="border-[#e1e0e0] border-2 w-full items-center mx-4" />
                  </div>
                </div>
              </div>
            </div>

            {/* right side */}
            <div className="flex flex-col items-start w-2/3 text-start mx-6">
              <Check />
            </div>

          </div>
        </div>

        <Footer />
      </div>
    </div>
  )
}

export default CheckOut


// <div className=" w-full mx-auto flex flex-row justify-center items-center ">
//           <div className="items-center w-1/2">
//             <div 
//             style={{
//                borderTopRightRadius: '50px',
//                 borderBottomRightRadius: '50px',
//             }}
//             className="flex flex-row items-center bg-[#A51910] w-full h-20 justify-around ">
//               <p className="text-xl font-bold text-white">PRODUCT</p>
//               <p className="text-xl font-bold text-white"> QTY</p>
//               <p className="text-xl font-bold text-white"> PRICE</p>
//               <img src={Delete} alt="" />
//             </div>
//           </div>
//           <div className="flex flex-col items-start w-1/2 text-start mx-6">

//           </div>
//         </div>