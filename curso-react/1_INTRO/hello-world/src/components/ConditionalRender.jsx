import React, { useState } from 'react'

export const ConditionalRender = () => {

    const [condition, setCondition] = useState(true); 

  return (
    <div>

        {condition && <p>A condição é verdadeira</p>}

        {condition ? 
        <p>Condição é verdadeira meus parceiro</p> : 
        <p>Condição é mitira meus parceiro</p>}

        <button onClick={() => {setCondition(false)}} >Mudar condição</button>
    </div>
  )
}
