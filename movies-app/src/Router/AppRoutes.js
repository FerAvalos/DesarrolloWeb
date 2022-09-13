import React from 'react'
import {Route, Routes} from 'react-router-dom'
import { Login } from '../Pages'
import { MovieRoutes } from './MovieRoutes'
/* Con index.js no tenemos que importar cada uno por su cuenta */


export const AppRoutes = () => {
  return (
    <>
      <Routes>
          <Route path='/Login' element={<Login/>}/>
          <Route path='/*' element={<MovieRoutes/>}/>
      </Routes>
    </>
  )
}
