import React, { useState } from 'react'
import { CommonHeader, NotFound } from '../components';

const Orders = () => {
  const [Orders, setOrders] = useState([]);
  return (
    <div className='w-full text-white'>
      <CommonHeader title='Users' />

      {
        !Orders.length
          ?
          <NotFound message='Users Not Found' />
          :
          null
      }
    </div>
  )
}

export default Orders;