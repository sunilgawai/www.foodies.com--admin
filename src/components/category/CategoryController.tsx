import React, { useState } from 'react';
import { AiFillDelete } from "react-icons/all";
import { Switch } from '@mui/material';
import { BASE_SERVER_URL } from '../../constants';
import { Categories as ICategories } from '../../typings';

interface Props {
    name: string
    isActive: boolean
    icon: string
    _id: string
    categories: ICategories
    setCategories: React.Dispatch<React.SetStateAction<ICategories>>
}

const CategoryController: React.FC<Props> = ({ name, isActive, icon, _id, categories, setCategories }) => {
    const [activeCategory, setActiveCategory] = useState<boolean>(isActive);
    const [isAddingCategory, setIsAddingCategory] = useState(true);

    const handleCategoryUpdate = (_id: string) => {
        console.log(_id);
        const categoryBody = {
            name: name,
            isActive: isActive ? false : true
        }
        console.log(categoryBody)

        fetch(`${BASE_SERVER_URL}/api/admin/category/${_id}`, {
            method: 'PUT',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(categoryBody)
        })
            .then((res) => {
                if (res.status) {
                    // notify user.
                    console.log("status changed");
                    return res.json();
                }
            })
            .then((results) => console.log(results))
            .catch((err) => console.log(err))
    }

    const handleCategoryDelete = (_id: string) => {

        fetch(`${BASE_SERVER_URL}/api/admin/category/${_id}`, {
            method: 'DELETE',
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((res) => {
                if (res.status) {
                    // notify user.
                    console.log("Product Deleted");
                    return res.json();
                }
            })
            .then((results) => console.log(results))
            .catch((err) => console.log(err))

        const _categories = categories.filter((category) => category._id !== _id);
        setCategories(_categories);
        // console.log('deleted', _categories)
    }

    return (
        <>
            <div className='flex justify-between items-center px-8 py-2 my-2'>
                <div className="flex justify-between items-center">
                    <img className="w-12 mr-12" src={icon} alt={icon} />
                    <ul>
                        <li className='text-base font-semibold italic underline underline-offset-4'>{name}</li>
                    </ul>
                </div>

                <div className="w-1/3 border border-white-dashed flex flex-row justify-around items-center">
                    {/* switch to toggle category status */}
                    <Switch onChange={() => {
                        handleCategoryUpdate(_id);
                        setActiveCategory(!activeCategory);
                    }} defaultChecked={isActive ? true : false} />

                    {/* delete button */}
                    <span
                        onClick={() => handleCategoryDelete(_id)}
                        className='font-semibold mx-2 cursor-pointer' >
                        <AiFillDelete />
                    </span>

                    {/* active & passive categories */}
                    <span className={`text-base font-semibold italic
                    px-2 py-1 bg-slate-700 border rounded-md 
                    ${activeCategory ? 'text-green-500 border border-green-400' : 'text-gray-400 border border-gray-400'}
                    `}>
                        {/* {isActive ? 'Active' : 'Disabled'} */}
                        {'Active'}
                    </span>
                </div>
            </div>
            <hr />
        </>
    )
}

export default CategoryController;