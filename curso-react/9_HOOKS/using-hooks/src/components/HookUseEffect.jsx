import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

export const HookUseEffect = () => {

    const [number, setNumber] = useState(1)

    useEffect(() =>{
        console.log("Fui executado")

     if(number < 5){
        setTimeout(() =>{
            setNumber(number+1)
        }, 2000)
     }

        
    }, [number])

  return (
    <div className='separate'>
        <h2>Hook: useEffect</h2>
        <p>Numero: {number}</p>
    </div>
  )
}
