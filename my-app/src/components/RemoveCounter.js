import React from 'react'
import propTypes from 'prop-types'

export const RemoveCounter = ({onRemovePress}) => {
  return (
    <button 
    onClick={onRemovePress}>
      -1
    </button>
  )
}

RemoveCounter.propTypes = {
    onRemovePress: propTypes.func.isRequired
}
