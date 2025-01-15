import React from 'react'

import { useCounterContext } from '../hooks/useCounterContext'
import { useTitleColorContext } from '../hooks/useTitleColorContext'

export const Contact = () => {

  const {counter, setCounter} = useCounterContext()

  const {color, dispatch} = useTitleColorContext()

  const setTitleColor = (color) =>{
    dispatch({type: color})
}

  return (
    <div>
      <h1 style={{color: color}}>Contact</h1>
      <h2>Valor do contador nessa pagina: {counter}</h2>
      <button onClick={() => setCounter(counter-1)}>-1 no valor</button>
      <button onClick={() => setTitleColor("BLUE")}>Titulo Azul</button>
    </div>
  )
}
