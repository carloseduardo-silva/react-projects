import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { useLayoutEffect } from 'react'

export const HookUseLayoutEffect = () => {

    const[name, setName] = useState("Joao")

    useLayoutEffect(() =>{
      if( window.confirm("O nome é joao?")){
        console.log("não mudou")
      }
      else{
        setName("maria")
      }

    }, [])

  return (
    <div>
        <h2>hook: useLayoutEffect: {name}</h2>
    </div>
  )
}
