import React, { useState } from 'react'

export const ManageData = () => {

    //getter and setter para a variavel "number"
    const [number, setNumber] = useState(0);

  return (
    <div>
        
        <p>Valor = {number}</p>

        <button onClick={() => setNumber(12)}> Mudar o valor</button>

    </div>
  )
}
