import React from 'react'
import './../Cabecera.css';
export const Cabeceras = ({titulo1, titulo2, titulo3}) => {
  return (
    <div>
        <h1>{titulo1}</h1>
        <h2>{titulo2}</h2>
        <h3>{titulo3}</h3>
        <hr/>
    </div>
  )
}
