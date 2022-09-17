import React, { useState } from 'react'
import { Form } from './Form'
import { TaskList } from './TaskList'

export const Container = () => {
    const [list, setList] = useState([])
    const handleAddItem = addItem => {
        setList([...list, addItem])
    }
  return (
    <div className='Contenedor'>
        <div className='Titulo'>
          To do list
        </div>
        <Form handleAddItem={handleAddItem}/>
        <TaskList list={list} setList={setList}/>
    </div>
  )
}
