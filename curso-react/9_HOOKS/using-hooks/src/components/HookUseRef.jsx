import React from 'react'
import { useEffect } from 'react'
import { useRef } from 'react'
import { useState } from 'react'

export const HookUseRef = () => {

    
    const [counter, setCounter] = useState(0)

    const [counterB, setCounterB] = useState(0)

    const number = useRef(0)

    const inputRef = useRef()

    useEffect(() =>{
        number.current = number.current + 1
        //useRef faz a função do state e evita um loop infito para setState dentro de um useEffect
        // setCounter(counter+1)
    })

  return (

    <div className='separate'>
         
        <h2>Hook: useRef</h2>

        <p>O componente renderizou {number.current} vezes</p>
        <p>Counter: {counter}</p>
        <button onClick={() => setCounter(counter+1)}>+1 no counter</button>
        <p>Counter Secundario: {counterB}</p>
        <button onClick={() => setCounterB(counterB+1)}>+1 no counter secundario</button>
        
        <label htmlFor="name">
            <span>Nome:</span>
            <input type="text" ref={inputRef} />
        </label>

        <button onClick={() => inputRef.current.focus()}>Focar no input</button>
    </div>
  )
}
