import { Categories as ICategories } from "../../typings";
import { BASE_SERVER_URL } from '../../constants';
import React, { useRef, useState } from 'react';
import { AiFillDelete } from 'react-icons/all';
import fruitsIcon from "/images/fruits.png";
import { getBase64 } from "../../helper";
import { Switch } from '@mui/material';
import axios from 'axios';

interface Props {
  isVisible: boolean
  categories: ICategories
  setCategories: React.Dispatch<React.SetStateAction<ICategories>>
}

const CreateCategory: React.FC<Props> = ({ isVisible, categories, setCategories }) => {
  const [iconString, setIconString] = useState<string | undefined>();
  // Category Form.
  const [icon, setIcon] = useState<File>();
  console.log('Icon File Selected', icon);
  const [name, setName] = useState<string>('');
  const [isActive, setIsActive] = useState<boolean>(true);

  const fileInputRef = useRef<HTMLInputElement>(null);


  const handleCategoryUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!icon) return;

    const form = new FormData();
    form.append('icon', icon);
    form.append('name', name);
    form.append('isActive', JSON.stringify(isActive));

    const { data, status, headers, config, } =
      await axios.post(`${BASE_SERVER_URL}/api/admin/category`, form);
    console.log(data, status, headers, config);

    if (status === 200) {
      // Set Categories.
      setCategories([...categories, data.category])
    }
  }

  const onIconSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!e.target.files) return;
    const base64 = await getBase64(e.target.files[0]) as string;
    setIconString(base64);
    setIcon(e.target.files[0]);
    const { files } = e.target;
    console.log({ file: e.target.files[0], icon, files })
  }

  return (
    <div
      className={`w-full h-16 pl-7 py-2 my-2 ${isVisible ? 'block' : 'hidden'}
    bg-purple-300 flex justify-between items-center`}>
      <form encType="application/x-www-form-urlencoded"
        onSubmit={(e) => handleCategoryUpload(e)} className='w-full flex justify-between items-center'>
        {/* Category image Input  */}
        <div className="icon flex justify-center py-4 w-fit">
          <label htmlFor="icon">
            <img
              className='w-12 h-12'
              src={iconString || fruitsIcon} alt="icon" />
            <p className={`absolute m-[5px] left-[22px] text-sm italic z-1 ${iconString ? 'hidden' : 'block'}`}>
              Choose Icon
            </p>
          </label>
          <input required={true}
            className='hidden' onChange={(e) => onIconSelect(e)}
            type="file" name="icon" id="icon" ref={fileInputRef} />
        </div>

        {/* Category name input  */}
        <input
          className="w-[235px] text-black font-semibold italic
            py-1 pl-3 border-none rounded-sm border-gray-700 
            outline-none focus:outline-green-900 focus-within:text-gray-600
            placeholder:underline"
          placeholder='Enter Category Name' required={true}
          onChange={(e) => setName(e.target.value)}
          type="input" name="name" id="name" value={name} />

        {/* Category Controller */}
        <div
          className="w-fit border border-white-dashed
      flex flex-row justify-around items-center
      pl-3 pr-1">
          {/* switch to toggle category status */}
          <Switch
            onChange={() => setIsActive(!isActive)}
            defaultChecked={isActive ? true : false} />

          {/* delete button */}
          <span
            className='font-semibold mx-2 cursor-pointer' >
            <AiFillDelete />
          </span>

          {/* active & passive categories */}
          <span
            className={`text-base font-semibold italic
          px-3 py-1 bg-slate-700 border rounded-md cursor-pointer
        ${isActive ? 'text-green-500 border border-green-400' : 'text-gray-400 border border-gray-400'}
        `}>
            <button type='submit'>{'Create'}</button>
          </span>
        </div>
        <hr />
      </form>
    </div>
  )
}

export default CreateCategory;