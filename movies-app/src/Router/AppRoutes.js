import React from 'react'
import { Navbar } from '../Components/Navbar'
import {Route, Routes} from 'react-router-dom'
import {Trending, Home, Top10, Login} from '../Pages'


export const AppRoutes = () => {
  return (
    <>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Trending' element={<Trending/>}/>
        <Route path='/Top10' element={<Top10/>}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/*' element={<Home/>}/>
      </Routes>
    </>
  )
}
