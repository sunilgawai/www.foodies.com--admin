import React from 'react'

const Navigation = () => {
  return (
    <div className='container border border-white py-4 flex justify-between items-center'>
        <img src="/images/logo.png" alt="log" />
        <div className="flex justify-center items-center">
            <h2>User Name</h2>
        </div>
    </div>
  )
}

export default Navigation;