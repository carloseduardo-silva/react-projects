import React from 'react'
import "./CarDetails.css"

//Destructuring props
export const CarDetails = ({brand, km, color}) => {
  return (
    <div>

        <h2>Detalhes do carro</h2>

        <ul>
            <li>Marca: {brand}</li>
            <li className={km==0 ? "newCar": "oldCar"}>Km: {km}</li>            
            <li style={{color:color}}>Cor: {color}</li>
        </ul>

        {km == 0 ? <p style={{color:"blue"}}>Esse carro é novo!</p>: <p style={{color:"red"}}>Carro já rodado!</p>}

    </div>
  )
}
