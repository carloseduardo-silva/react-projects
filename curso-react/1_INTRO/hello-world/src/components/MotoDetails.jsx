import React from 'react'

export const MotoDetails = ({brand, color, model}) => {
  return (
    <div>

        
    <h2>Detalhes da moto</h2>

    <ul>
        <li>Marca: {brand}</li>
        <li>Modelo: {model}</li>            
        <li>Cor: {color}</li>
    </ul>

    </div>
  )
}
