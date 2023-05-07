import { useEffect, useState } from 'react'
import { Product } from '../components';
import { Product as IProduct } from '../typings';
import { BASE_SERVER_URL } from '../constants';
import { AiFillPlusSquare } from 'react-icons/ai';
import { Link } from 'react-router-dom';

const Products = () => {
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    const getProducts = () => {
      fetch(`${BASE_SERVER_URL}/api/admin/products`)
        .then(res => res.json())
        .then(data => setProducts(data.products))
        .catch(err => console.log(err))
    }

    getProducts();
  }, []);

  return (
    <div className='text-white h-full'>
      {/* Common Header  */}
      <div className="flex justify-between items-center">
        <h2 className='text-xl font-semibold italic mb-2 '>{'Products'}</h2>

        <Link to="/products/new">
          <button className="shadow-lg bg-gray-800 
                text-green-500 hover:bg-green-500 hover:text-white
                rounded-md hover:rounded-xl transition-all duration-300
                ease-in cursor-pointer w-20 flex justify-center items-center
                border border-green-700 px-3 py-2 mb-2">
            <AiFillPlusSquare />

            <span className="font-semibold italic ml-3">Add</span>
          </button>
        </Link>
      </div>
      <hr />

      {/* Products List  */}
      <div className="grid grid-cols-3">
        {
          products.map(product => {
            return <Product products={products} setProducts={setProducts} product={product} key={product._id} />
          })
        }
      </div>
    </div>
  )
}

export default Products;