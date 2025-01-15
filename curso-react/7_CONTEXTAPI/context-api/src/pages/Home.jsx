import React from 'react'

import { useContext } from 'react'
import { CounterContext } from '../context/CounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'


export const Home = () => {
    const {color, dispatch} = useTitleColorContext()
    const {counter, setCounter} = useContext(CounterContext)

    const setTitleColor = (color) =>{
        dispatch({type: color})
    }

  return (
    <div>
        <h1 style={{color:color}}>Home</h1>
        <h2>Valor do contador: {counter}</h2>

        <button onClick={() => setCounter(counter+1)}>+1 no valor</button>
        <button onClick={() => setTitleColor("GREEN")}>Titulo Verde</button>
        <button onClick={() => setTitleColor("RED")}>Titulo Vermelho</button>
    </div>

  )
}
