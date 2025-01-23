import React from 'react'
import { useState } from 'react'
import { usePrevious } from '../hooks/usePrevious'

const HookusePrevious = () => {

    const [state, setState] = useState(0)
    const prevState = usePrevious(state)

  return (
    <div>
        <h2>hook: usePrevious (custom) </h2>
        <p>Atual: {state}</p>
        <p>Anterior: {prevState}</p>
        <button onClick={() => setState(Math.random())}>mudar estagio</button>
    </div>
  )
}

export default HookusePrevious