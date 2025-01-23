import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'

export const List = ({getItens}) => {

    const [list, setList] = useState()

    useEffect(() =>{
        console.log("Buscando itens no DB")

        setList(getItens)
    }, [getItens])
  return (
    <div>

        <h2>Lista:</h2>
        {list && list.map((item) =>(
            <p>- {item}</p>
        ))}

    </div>


  )
}
