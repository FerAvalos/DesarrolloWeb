import React from 'react'
import propTypes from 'prop-types'

export const ShowCounter = ({number}) => {
  return (
    <span>{number}</span>
  )
}

/* export const ShowCounter = (props) => {
  const {number} = props;
  console.log('props', props)
  console.log('number', number)
  return (   
    <span>{props.number}</span>
  )
} */

ShowCounter.propTypes = {
  number: propTypes.number.isRequired //Necesitamos que envíen número
}
