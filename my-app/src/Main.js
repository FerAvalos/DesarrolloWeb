//rafc React Functional Component en es7+React
import React from 'react';
import { FirstComponents } from './components/FirstComponents';
import { ShowCounter } from './components/ShowCounter';
import { AddCounter } from './components/AddCounter';


import './styles.css'

const myVariable = 'This is a var'
export const Main = () => {
    //Can only return one item
  return (
    //
    <>
      <FirstComponents title='Mi titulo'/>
      <ShowCounter number={5}/>
      <AddCounter/>
    </>
  )
}
