import Navbar2 from './Navbar2'
import beti from '../assets/beti.png'
import image1 from '../assets/images1.png'
import image2 from '../assets/images (2) 1.png'
import image3 from '../assets/images (1) 1.png'
import image4 from '../assets/image(3).png'
import RelativeProduct from './RelativeProduct'
import Footer from './Footer'
import { useLocation, useParams } from 'react-router-dom'
import { ProductData } from '../App'
import { useState } from 'react'

interface ProductProps {
    productData: ProductData[];
}


function Detail(props: ProductProps) {
    const { id } = useParams();
    const location = useLocation();
    const { productData } = location.state;
  
    // Get the product with the matching id from the URL
    const product = productData.find((p: { _id: string | undefined }) => p._id === id);
  
    // Throw error if product is not found
    if (!product) {
        throw new Error(`Product with id ${id} not found`);
    }
  const  image = product.image;
  const name = product.name;
  const price = product.price;
  const description = product.description;
  const category = product.category;
  const _id = product._id;
  
  const [quantity, setQuantity] = useState(1);

  const handleSubtract = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const handleAdd = () => {
    setQuantity(quantity + 1);
  };

// post data to cart
            const addToCart = () => {
                fetch('http://localhost:3001/api/cart/', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        productId: _id,
                        quantity: quantity,
                    }),
                })
                    .then((res) => res.json())
                    .then((json) => console.log(json))
                    .catch((err) => console.log(err));
            };






    // Render the product de
    return (

        <div>
            <Navbar2 />
            <div >
                <div className="flex flex-col items-center h-screen justify-center">
                    <div className=" w-2/3 mx-auto flex flex-row justify-center items-center mt-10 ">
                        <div className="items-center w-1/2">
                            <div className="flex flex-col ">
                                <img src={image}
                               alt="" className="" />
                                <div className="flex flex-row justify-between items-center  m-2 ">
                                    <img src={image1} alt="" className="h-2/3 w-2/3 mr-2" />
                                    <img src={image2} alt="" className="h-2/3 w-2/3 mr-2" />
                                    <img src={image3} alt="" className="h-2/3 w-2/3 mr-2" />
                                    <img src={image4} alt="" className="h-2/3 w-2/3" />
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col items-start w-1/2 text-start mx-6">
                            <p className="text-md font-bold">Home/{category}</p>
                            <p className="text-2xl font-bold">{name}</p>
                            <p className="text-md ">{description}</p>
                            {/* selecte size */}
                            <div className="" >
                                <select className="border-2 border-[#A51910] rounded-md p-2 mt-2">
                                    <option value="volvo">Select Size</option>
                                    <option value="saab">Small</option>
                                    <option value="opel">Medium</option>
                                    <option value="audi">Large</option>
                                </select>
                            </div>
                            {/* Product Detail */}
                            <div className="flex flex-col items-start mt-4">
                                <p className="text-md font-bold">Product Detail</p>
                                <p className="text-md ">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                            </div>

                            <div className="flex flex-row  items-center mt-4 justify-around" >
                            <div className="flex flex-row justify-between items-center bg-[#F4F4F4] rounded-full p-2 mx-4">
                             <button className="text-[#A51910] font-bold mx-2" onClick={handleSubtract}>
                               -
                             </button>
                             <p className="text-[#A51910] font-bold mx-2">{quantity}</p>
                             <button className="text-[#A51910] font-bold mx-2" onClick={handleAdd}>
                               +
                             </button>
                              </div>
                                <div>
                                    <button className="bg-[#A51910] text-white p-2 rounded-full items-center text-semibold shadow-2xl px-4 mx-4">
                                        Add to Cart
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <RelativeProduct />
                <Footer />
            </div>
        </div>

    )
}

export default Detail
