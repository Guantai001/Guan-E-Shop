import React from 'react'

function Order() {
    return (
        <>
            <div className="flex flex-row items-center w-full h-20 justify-around my-4">
                <p className="text-xl font-bold ">
                    <span className="text-[#A51910]"> Name :</span>  John Doe</p>
                <button
                    className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6"
                    
                >
                    Back
                </button>
                <button
                    className="bg-[#A51910] text-white rounded-full shadow-2xl p-2 px-6"
                >
                    Order Now
                </button>
            </div>
        </>
    )
}

export default Order
