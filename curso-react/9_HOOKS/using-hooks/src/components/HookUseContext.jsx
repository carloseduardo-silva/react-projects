import React from 'react'
import { useContext } from 'react'
import { FutevoleiContext } from '../context/futevoleiContext'


export const HookUseContext = () => {

    const {number, setNumber} = useContext(FutevoleiContext)

  return (
    <div className='separate'>
        <h2>HookUseContext</h2>
        <p>Número: {number}</p>
        <button onClick={() => setNumber(number+1)}>+1</button>
    </div>
  )
}
