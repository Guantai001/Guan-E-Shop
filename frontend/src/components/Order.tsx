import React from 'react'
import order from '../assets/order.png'

function Order() {
    return (
        <>
            <div className="flex flex-row justify-between">
                <div className="flex flex-col items-start w-full text-start mx-6">
                    <h1 className="text-2xl font-bold ">ORDER</h1>
                    <hr className="border-[#A51910] border-2 w-10 items-center" />
                    <div className=" justify-center flex flex-col w-full h-full">
                        <div className="flex flex-row items-center w-full justify-around my-4">
                            <p className="text-xl font-bold "> No.</p>
                            <p className="text-xl font-bold ">Order ID</p>
                            <p className="text-xl font-bold "> Status </p>
                            <p className="text-xl font-bold "> Date</p>
                        </div>
                        <hr className="border-[#A51910]  border-l-2 w-full items-center" />
                        <div className="flex flex-row items-center w-full justify-around my-4">
                            <p className="text-xl font-bold "> 1</p>
                            <p className="text-xl font-bold ">1234567890</p>
                            <p className="text-lg font-semibold bg-[#A51910] rounded-full shadow-lg text-white p-2"> Ordered </p>
                            <p className="text-xl font-bold "> Date</p>
                        </div>
                        <hr className="border-[#A51910]  border-l-2 w-full items-center" />
                        <div className="flex flex-row items-center w-full justify-around my-4">
                            <p className="text-xl font-bold "> 2</p>
                            <p className="text-xl font-bold ">1234567890</p>
                            <p className="text-lg font-semibold bg-[#A51910] rounded-full shadow-lg text-white p-2"> Ordered </p>
                            <p className="text-xl font-bold "> Date</p>
                        </div>
                        <hr className="border-[#A51910]  border-l-2 w-full items-center" />
                        <div className="flex flex-row items-center w-full justify-around my-4">
                            <p className="text-xl font-bold "> 3</p>
                            <p className="text-xl font-bold ">1234567890</p>
                            <p className="text-lg font-semibold bg-[#A51910] rounded-full shadow-lg text-white p-2"> Ordered </p>
                            <p className="text-xl font-bold "> Date</p>
                        </div>
                        <hr className="border-[#A51910]  border-l-2 w-full items-center" />
                    </div>

                </div>
                <div className="flex flex-col items-start w-full text-start ml-6">
                    <img src={order} alt="person" className="w-96 h-96" />
                </div>
            </div>

        </>
    )
}

export default Order
