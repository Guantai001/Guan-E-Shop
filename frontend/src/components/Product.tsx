import React, { useContext, useState } from 'react';
import Navbar2 from './Navbar2';
import { Layout, Menu } from 'antd';
import AllProduct from './AllProduct';
import Footer from './Footer';
import { UserAuthContext } from '../UserAuthContext';

const { Header, Content, Sider } = Layout;

const categories = [
  { key: 'all', icon: 'AppstoreOutlined', label: 'All' },
  { key: 'cloth', icon: 'UserOutlined', label: 'Cloths' },
  { key: 'shoe', icon: 'VideoCameraOutlined', label: 'Shoes' },
  { key: 'bag', icon: 'UploadOutlined', label: 'Bags' },
  { key: 'cosmetic', icon: 'BarChartOutlined', label: 'Cosmetics' },
  { key: 'wear', icon: 'CloudOutlined', label: 'Watches' },
];

interface ProductProps {
  productData: ProductData[];
}


function Product(props: ProductProps) {
  const { productData } = props;
  
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedSortOption, setSelectedSortOption] = useState('1');

  // used to handle category selection
  const handleCategorySelect = (categoryKey: string) => {
    setSelectedCategory(categoryKey);
  };

  // used to handle sort option selection
  const handleSortOptionSelect = (option: string) => {
    setSelectedSortOption(option);
  };

  // filter products based on category
  const filteredProducts = selectedCategory === 'all'
    ? productData
    : productData.filter((product) => product.category === selectedCategory);

  const sortedProducts = [...filteredProducts];

  if (selectedSortOption === '1') {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (selectedSortOption === '2') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  }

  return (
    <div className="bg-[#ffffff]">
      <Navbar2 />
      <Layout hasSider style={{ backgroundColor: '#fff' }}>
        <Sider
          style={{
            overflow: 'auto',
            position: 'fixed',
            left: 0,
            right: 0,
            top: '50%',
            transform: 'translateY(-60%)',
            backgroundColor: '#F4F4F4',
            borderTopRightRadius: '20%',
            borderBottomRightRadius: '30%',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
          }}
        >
          <div className="flex flex-col items-start ml-4">
            <h1 className="text-2xl font-bold">Categories</h1>
            <hr className="border-[#A51910] border-2 w-20 items-center" />
          </div>

          <Menu mode="inline" defaultSelectedKeys={[selectedCategory]} style={{ backgroundColor: '#F4F4F4', paddingLeft: '10px' }}>
            {categories.map((category) => (
              <Menu.Item
                key={category.key}
                style={{ backgroundColor: '#F4F4F4', color: (selectedCategory === category.key || (selectedCategory === '' && category.key === 'all')) ? '#A51910' : 'black' }}
                className='text-lg font-bold'
                onClick={() => handleCategorySelect(category.key)}
              >
                {category.label}
              </Menu.Item>
            ))}
          </Menu>
        </Sider>
        <Layout className="" style={{ marginLeft: 200, backgroundColor: '#fff' }}>
          <Header style={{ padding: 0, margin: 0, backgroundColor: '#fff' }} />
          <Content style={{ margin: '24px 16px 0', overflow: 'initial' }}>
            <div className="flex flex-col items-start ml-4 mt-8">
              <h1 className="text-2xl font-bold">All Product</h1>
              <hr className="border-[#A51910] border-2 w-20 items-center" />
            </div>

            {/* Select */}
            <div className="flex flex-row justify-end mr-10">
              <div className="flex flex-row items-center">
                <p className="text-lg font-bold">Sort By</p>
                <select
                  className="border-2 border-[#A51910] rounded-md ml-2 m-4"
                  value={selectedSortOption}
                  onChange={(e) => handleSortOptionSelect(e.target.value)}
                >
                  <option value="1">Price</option>
                  <option value="2">Name A-Z</option>
                </select>
              </div>
            </div>

            {/* Product */}
            <AllProduct productData={sortedProducts} />
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  );
}

export default Product;
