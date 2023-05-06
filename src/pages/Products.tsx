import React, { useEffect, useState } from 'react'
import { CommonHeader, Product } from '../components';
import { Product as IProduct } from '../typings';
import { BASE_SERVER_URL } from '../constants';

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
      <CommonHeader title='Products' />

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