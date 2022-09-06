import React, { useEffect, useState } from 'react'

export const MovieApp = () => {
    const [value, setValue] = useState([])
    const add = () => {
        setValue(value +1)
    }

    useEffect(() => {
        console.log('I am only triggering once');
    }, [])

    useEffect(() =>  {
        console.log('Value changed', value)
    }, [value])
  return (
    <>
        {value.map(val=> <p>{val}</p>)}
        <button onClick={add}>Pls</button>
    </>
  )
}
