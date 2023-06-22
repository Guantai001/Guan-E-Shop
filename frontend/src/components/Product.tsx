import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer';
import Navbar2 from './Navbar2'
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Link } from 'react-router-dom';

const { Header, Content, Sider } = Layout;

const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,

].map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `nav ${index + 1}`,
}));

function Product() {



  return (
    <div className="bg-[#ffffff]">
      <Navbar2 />
      <Layout hasSider style={{ backgroundColor: '#fff' }}
      >
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
            <h1 className="text-2xl font-bold ">Categories</h1>
            <hr className="border-[#A51910] border-2 w-20 items-center" />
          </div>

          <Menu mode="inline" defaultSelectedKeys={['4']} style={{ backgroundColor: '#F4F4F4', paddingLeft: "10px" }}>
            <Link to="/clothes">
              <Menu.Item key="1" icon={<UserOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Cloths</p>
              </Menu.Item>
            </Link>
            <Link to="/shoes">
              <Menu.Item key="2" icon={<VideoCameraOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Shoes</p>
              </Menu.Item>
            </Link>
            <Link to="/bags">
              <Menu.Item key="3" icon={<UploadOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Bags</p>
              </Menu.Item>
            </Link>
            <Link to="/glasss">
              <Menu.Item key="4" icon={<BarChartOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Glasses</p>
              </Menu.Item>
            </Link>
            <Link to="/watches">
              <Menu.Item key="5" icon={<CloudOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Watches</p>
              </Menu.Item>
            </Link>
            <Link to="/jewellery">
              <Menu.Item key="6" icon={<AppstoreOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Jewellery</p>
              </Menu.Item>
            </Link>
            <Link to="/cosmetics">
              <Menu.Item key="7" icon={<TeamOutlined />} style={{ backgroundColor: '#F4F4F4' }}>
                <p className="text-lg font-bold">Cosmetics</p>
              </Menu.Item>
            </Link>
          </Menu>
        </Sider>
        <Layout className="site-layout" style={{ marginLeft: 200, backgroundColor: '#fff', }}>
          <Header
            style={{
              padding: 0,
              backgroundColor: '#fff',
            }}
          />
          <Content
            style={{
              margin: '24px 16px 0',
              overflow: 'initial',
            }}
          >
            <div className="flex flex-col items-start ml-4 mt-8">
              <h1 className="text-2xl font-bold">All Product</h1>
              <hr className="border-[#A51910] border-2 w-20 items-center" />
            </div>

            {/* Select  */}
            <div className="flex flex-row justify-end mr-10">
              <div className="flex flex-row items-center">
                <p className="text-lg font-bold">Sort By</p>
                <select className="border-2 border-[#A51910] rounded-md ml-2 m-4">
                  <option value="volvo">Price</option>
                  <option value="saab">Name</option>
                  <option value="mercedes">Date</option>
                </select>
              </div>
            </div>

            {/* Product */}
            
           
          </Content>
        </Layout>
      </Layout>
      <Footer />
    </div>
  )
}

export default Product
