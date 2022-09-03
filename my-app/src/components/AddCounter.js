import React from 'react'
import propTypes from 'prop-types'

/* const onAddPress= () => {
  console.log('Hello')
} */

export const AddCounter = ({onAddPress}) => {
  return (
    <button 
    //onClick={(e) => onAddPress(e,'hola)}
    onClick={onAddPress}>
      +1
    </button>
  )
}

AddCounter.propTypes = {
  onAddPress: propTypes.func.isRequired 
}
