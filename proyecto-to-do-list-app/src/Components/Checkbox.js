import React from 'react'
import { Fragment } from 'react'

export const Checkbox = (props) => {
    const {
        onChange,
        data: {id, descripcion, done}
    } = props
  
    return (
    <Fragment>
      <label className="Nuevo_elemento">
        <input
          className="Nuevo_elemento_chbx"
          name={id}
          type="checkbox"
          defaultChecked={done}
          onChange={onChange}
        />
        <div className="Nuevo_elemento_txt">{descripcion}</div>
      </label>
    </Fragment>
  )
}
