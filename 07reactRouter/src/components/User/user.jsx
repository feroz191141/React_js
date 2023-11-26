import React from 'react'
import { useParams } from 'react-router-dom'

function User() {
    const {userinput} = useParams()
  return (
    <div className='bg-gray-600 text-white text-3xl p-4'>User: {userinput}</div>
  )
}

export default User