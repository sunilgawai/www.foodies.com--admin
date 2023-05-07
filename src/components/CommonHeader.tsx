import { FC } from 'react';
import { AiFillPlusSquare } from 'react-icons/ai';

const CommonHeader: FC<{ title: string, toggleModel: () => void }> = ({ title, toggleModel }) => {
    return (
        <>
            <div className="flex justify-between items-center">
                <h2 className='text-xl font-semibold italic mb-2 '>{title}</h2>

                <button className="shadow-lg bg-gray-800 
                text-green-500 hover:bg-green-500 hover:text-white
                rounded-md hover:rounded-xl transition-all duration-300
                ease-in cursor-pointer w-20 flex justify-center items-center
                border border-green-700 px-3 py-2 mb-2"
                onClick={()=> toggleModel()}>
                    <AiFillPlusSquare />
                    <span className="font-semibold italic ml-3">Add</span>
                </button>
            </div>
            <hr />
        </>
    )
}

export default CommonHeader;