import React from 'react'
import {Link, NavLink, useNavigate} from 'react-router-dom'

export const Navbar = () => {
  const navigate = useNavigate()
  const handleLogout = () => {
    navigate('/Login', {replace:true})
  }
  return (
    <>
        <nav class="navbar navbar-expand-lg bg-light">
        <div class="container-fluid">
          <Link className='navbar-brand' to='/'>MovieApp</Link>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div class="navbar-nav">
                <Link className='nav-link' to='/Home'>Home</Link>
                <Link className='nav-link' to='/Top10'>Top10</Link>
                <Link className='nav-link' to='/Trending'>Trending</Link>
            </div>
            </div>
            <ul className='navbar-collapse justify-content-end'>
              <Link className='nav-link' to='/Login' onClick={handleLogout}>Logout</Link>
            </ul>
        </div>
        </nav>
    </>
  )
}
