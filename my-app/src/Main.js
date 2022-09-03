//rafc React Functional Component en es7+React
import { FirstComponents } from './components/FirstComponents';
import { ShowCounter } from './components/ShowCounter';
import { AddCounter } from './components/AddCounter';
import {RemoveCounter} from './components/RemoveCounter'
import React, {useState} from 'react'


import './styles.css'

//const myVariable = 'This is a var'

export const Main = () => {
    //Can only return one item
  const [number, setNumber] = useState(0)
  const onAdd = () => {
    setNumber(number+1)
    console.log('I added one')
  }
  const onRemove = () => {
    setNumber(number-1)
    console.log('I substracted one')
  }
  
  return (
    //
    <>
      <FirstComponents title='Mi titulo'/>
      <ShowCounter number={number}
        /* alias="Fer"
        active
        color="red" */
      />
      <AddCounter onAddPress={onAdd}/>
      <RemoveCounter onRemovePress={onRemove}/>
    </>
  )
}
