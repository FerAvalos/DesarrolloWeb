import React from 'react'
import { useNavigate } from 'react-router-dom'

export const Login = () => {
  const navigate = useNavigate()
  const HandleLogin = () => {
    navigate('/Trending')
  }

  return (
    <div className='container mt-5'>
      <button className='btn btn-info' onClick={HandleLogin}>Login</button>
    </div>
  )
}
