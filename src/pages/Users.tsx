import React, { useState } from 'react'
import { CommonHeader, NotFound } from '../components';

const Users = () => {
  const [users, setUsers] = useState([]);
  return (
    <div className='w-full text-white'>
      <CommonHeader title='Users' />

      {
        !users.length
          ?
          <NotFound message='Users Not Found' />
          :
          null
      }
    </div>
  )
}

export default Users;