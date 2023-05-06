import React, { useState, FC } from 'react';
import { Product as IProduct } from '../typings';
import { BASE_SERVER_URL } from '../constants';
import Noty from 'noty';

interface ProductProps {
    product: IProduct
    products: IProduct[]
    setProducts: React.Dispatch<React.SetStateAction<IProduct[]>>
}

const Product: FC<ProductProps> = ({ product, products, setProducts }) => {
    const { _id, name, price, size, images } = product;
    const [isDeleting, setIsDeleting] = useState(false);

    const handleDelete = (_id: string) => {
        console.log(_id, isDeleting);
        setIsDeleting(true);

        fetch(`${BASE_SERVER_URL}/api/admin/products/${_id}`, {
            method: 'DELETE'
        })
            .then(res => {
                if (res.status == 200) {
                    // Inform user that product is deleted.
                    console.log('product deleted.');
                    new Noty({
                        text: "Product is Deleted Succuessfuly."
                    }).show();
                    const _products = products.filter((_product) => _product._id !== _id);
                    setProducts(_products);
                    return res.json();
                }
            })
            .then(data => {
                console.log(data);
            })
            .catch(err => console.log(err))

        setTimeout(() => setIsDeleting(false), 1000);
    }

    return (
        // <Link to={`/product/${_id}`}>
        <div className='text-black italic border border-dashed
         border-opacity-25 border-orange-400 flex flex-col 
         justify-center items-center w-48 m-2 py-2'>
            <img
                className="w-32 mt-2"
                src={images[0]}
                alt="pizza" />

            <div className="text-center">
                <h2 className="text-lg font-bold py-2">{name}</h2>
                <span className="bg-gray-200 py-1 rounded-full text-sm px-4">{size}</span>
            </div>

            <div className="flex flex-row justify-between items-center font-semibold italic mt-4">
                <span className='font-semibold italic mr-4 text-white'>₹ {price}</span>
                <button
                    onClick={() => handleDelete(_id)}
                    disabled={isDeleting}
                    className={`${isDeleting ? 'bg-red-500' : 'bg-yellow-500'} 
                    py-1 px-4 rounded-full font-bold italic hover:bg-yellow-600`}>
                    Delet{isDeleting ? 'ing' : 'e'}
                </button>
            </div>
        </div>
        // </Link>
    )
}

export default Product;