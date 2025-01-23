import React from 'react'
import { useState } from 'react'
import { List } from './List'
import { useCallback } from 'react'

export const HookUseCallback = () => {

    const [counter, setCounter] = useState(0)

    const [counterSec, setCounterSec] = useState(0)

    const getItensFromDb = useCallback(() => {
        return ["a", "b", "c"]
    }, [counterSec])

  return (
    <div>
        <h2>Hook:useCallback</h2>
        <List getItens={getItensFromDb}></List>

        <div>
            <p>{counter}</p>
            <button onClick={() => setCounter(counter+1)}>+1</button>
        </div>

        <div>
            <p>{counterSec}</p>
            <button onClick={() => setCounterSec(counterSec+1)}>+1 sec</button>
        </div>

    </div>
  )
}
