import React from 'react';
import { Card } from 'antd';
import beti from '../assets/beti.png';
import { PlusOutlined } from '@ant-design/icons';
import SwiperCore, { Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const { Meta } = Card;

interface ProductData {
productData: {
name: string;
image: string;
description: string;
price: number;
}[];
}

function Featured(props: ProductData) {
const { productData } = props;

return (
    <div className="flex flex-col items-center justify-center">
      <div className="m-4 w-4/5">
        <div className="items-center justify-center">
          <h1 className="text-xl font-bold">Featured Products</h1>
          <hr className="border-[#A51910] border-2 w-20 items-center" />
        </div>
  
        <div className="m-4 flex overflow-x-auto items-center justify-center" style={{ width: '100%' }}>
          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            pagination={{ clickable: true }}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            breakpoints={{
              640: {
                slidesPerView: 1,
                spaceBetween: 10,
              },
              768: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 50,
              },
            }}
            className="mySwiper"
          >
            {productData.map((item) => (
              <SwiperSlide key={item.name}>
                <Card
                  hoverable
                  style={{ minWidth: 332, width: 332, borderRadius: 30, marginBottom: '30px' }}
                  cover={<img alt="example" src={item.image} />}
                >
                  <Meta
                    title={<p className="text-lg font-bold">{item.name}</p>}
                    description={<p className="text-md">{item.description}</p>}
                  />
                  <div className="flex flex-row justify-between items-center mt-4">
                    <p className="text-lg font-bold">
                      <span className="text-md text-[#A51910]">Ksh </span>
                      {item.price}
                    </p>
                    <button className="bg-[#A51910] text-white p-2 rounded-full items-center text-semibold shadow-2xl">
                      <PlusOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
                    </button>
                  </div>
                </Card>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
  
            }

export default Featured;