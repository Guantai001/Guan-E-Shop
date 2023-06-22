import React from 'react'
import { Tabs } from 'antd';
import TabPane from 'antd/es/tabs/TabPane';
import "../App.css"
function Check() {

  return (
    <>
      <p className="text-xl font-bold">Check Out</p>
      <div className="flex flex-row items-center w-full h-20 justify-evenly my-4">
        <p className="text-xl font-bold ">
          <span className="text-[#A51910]"> ID : </span> 123456</p>
        <p className="text-xl font-bold ">
          <span className="text-[#A51910]"> Date :</span> 12/3/23</p>
      </div>
      <Tabs
        defaultActiveKey="1"
        tabBarStyle={{ color: "#000", outline: 'none' }}

      >
        <TabPane
          tab={
            <span style={{ color: "#000" }}>
              <b>Delivery</b>
            </span>
          }
          key="1"
        >
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
          </div>
        </TabPane>
        <TabPane tab={
          <span style={{ color: "#000" }}>
            <b>
              Payment
            </b>
          </span>
        }
          key="2">
          <div className="flex flex-col items-start w-full text-start mx-6">
            <p className="text-xl font-bold">Payment Details</p>
            <div className="flex flex-row items-center w-full h-20 justify-around my-4">
              <p className="text-xl font-bold ">
                <span className="text-[#A51910]"> Name :</span>  John Doe</p>

            </div>
          </div>
        </TabPane>

      </Tabs>
      <button className="bg-[#A51910] text-white py-1 p-2 rounded-full mt-4 items-center text-semibold px-4 shadow-2xl">
        Proceed to Pay
      </button>
    </>
  )
}

export default Check
