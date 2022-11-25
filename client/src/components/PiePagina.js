import React from 'react'

export const PiePagina = ({email, ciudad, direccion}) => {
  return (
    <div>
        <hr />
        <p>{email}</p>
        <p>{ciudad}</p>
        <p>{direccion}</p>
    </div>
  )
}
