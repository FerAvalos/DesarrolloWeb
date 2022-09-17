import React, { useState } from 'react'

export const Form = (props) => {
    const {handleAddItem} = props
    const [descripcion, agregarDescripcion] = useState("");
    const handleSubmit = e => {
        e.preventDefault() //Evitar que se refresque la página
        console.log(descripcion)
        handleAddItem({
            done:false,
            id: (+new Date()).toString(),
            descripcion
        })
        agregarDescripcion("")
    }
    
  return (
    <form onSubmit={handleSubmit}>
        <div className="to-do-list">
          <input
            type="text"
            className="tarea"
            value={descripcion}
            onChange={e => agregarDescripcion(e.target.value)}
          />
          <button
            className="button_add"
            disabled={descripcion ? "" : "disabled"}
          >
            Agregar
          </button>
      </div>
    </form>
  )
}
