import React from 'react'
import { Card } from 'antd';
import beti from '../assets/beti.png'

import { PlusOutlined } from '@ant-design/icons';

const { Meta } = Card;



function Latest() {
    return (
        <div>
            <div className="m-4 w-2/3 ">
                <div className="items-center">
                    <h1 className="text-xl font-bold">Latest Products</h1>
                    <hr className="border-[#A51910] border-2 w-20 items-center" />
                </div>

                {/* card  */}
                <div className="m-4">
                    <Card
                        hoverable
                        style={{ width: 332, borderRadius: 24 }}
                        cover={<img alt="example" src={beti} />}
                    >
                        < p className="text-lg font-bold">CHANEL Mini flap bag</p>
                        <p className="text-md ">Lambskin & gold-tone metal, black</p>
                        <div className="flex flex-row justify-between items-center mt-4" >
                            <p className="text-lg font-bold"> <span className="text-md text-[#A51910]">Ksh </span>3,800 </p>
                            <button className="bg-[#A51910] text-white p-2 rounded-full items-center text-semibold shadow-2xl">
                                <PlusOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
                            </button>
                        </div>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default Latest
