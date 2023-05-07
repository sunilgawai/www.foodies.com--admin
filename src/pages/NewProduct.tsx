import React from 'react'

const NewProduct = () => {

  return (
    <div className='w-full h-screen'>
      {/* Common Header  */}
      <div className="flex justify-between items-center">
        <h2 className='text-xl font-semibold italic mb-2 '>{'Create New Product.'}</h2>
      </div>
      <hr />

      {/* Products Form  */}
      <div className="flex items-center">
        <form 
        className='flex flex-col justify-center items-center'>

        </form>
      </div>
      <h2>New Product..</h2>
    </div>
  )
}

export default NewProduct;