import React, { useState } from 'react'
import { CommonHeader, NotFound } from '../components';

const History = () => {
  const [History, setHistory] = useState([]);
  return (
    <div className='w-full text-white'>
      <CommonHeader title='Users' />

      {
        !History.length
          ?
          <NotFound message='History Not Found' />
          :
          null
      }
    </div>
  )
}

export default History;