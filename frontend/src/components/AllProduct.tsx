import React, { useState, useEffect } from 'react';
import { Card, Pagination } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

interface ProductData {
  _id: any;
  name: string;
  description: string;
  price: number;
  image: string;
}

interface ProductProps {
  productData: ProductData[];
}

function AllProduct(props: ProductProps) {
  const { productData } = props;
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);

  const handleChange = (page: number) => {
    setCurrentPage(page);
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = productData.slice(startIndex, startIndex + itemsPerPage);

  return (
    <>
      <div className="m-4 flex flex-wrap justify-center" style={{ zIndex: 1 }}>
        {currentItems.map((item) => (
          <Card
            key={item.name}
            hoverable
            style={{ width: 332, borderRadius: 30, margin: '10px' }}
            cover={<img alt="example" src={item.image} />}
          >
            <p className="text-lg font-bold">{item.name}</p>
            <p className="text-md">{item.description}</p>
            <div className="flex flex-row justify-between items-center mt-4">
              <p className="text-lg font-bold">
                <span className="text-md text-[#A51910]">Ksh </span>
                {item.price}
              </p>
              <Link to={`/detail/${item._id}`} state={{ productData }}>
  <button className="bg-[#A51910] text-white p-2 rounded-full items-center text-semibold shadow-2xl">
    <PlusOutlined style={{ fontSize: '20px', marginLeft: '2px' }} />
  </button>
</Link>
            </div>
          </Card>
        ))}
      </div>
      <Pagination
        className="my-4 flex justify-center"
        current={currentPage}
        onChange={handleChange}
        total={productData.length}
        pageSize={itemsPerPage}
      />
    </>
  );
}

export default AllProduct;
