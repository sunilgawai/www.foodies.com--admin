import React from 'react'

const CategoryNotFound = () => {
    return (
        <div className='bg-gray-300 w-[100%] h-fit py-5 flex flex-col 
        justify-center items-center'>
            <img className='w-[60%] animate-bounce ease-in-out' 
            src="/images/not-found.png" alt="not-found" />
            <h2 className='font-semibold text-3xl text-gray-800 italic underline 
            underline-offset-4 '>
                Categories Not Found!
            </h2>
        </div>
    )
}

export default CategoryNotFound;