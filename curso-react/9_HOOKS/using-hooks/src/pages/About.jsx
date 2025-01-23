import React from 'react'
import { useContext } from 'react'
import { FutevoleiContext } from '../context/futevoleiContext'
import { HookUseLayoutEffect } from '../components/HookUseLayoutEffect'


export const About = () => {

  const {number} = useContext(FutevoleiContext)

  return (
    <div>
      <h1>About</h1>
      <p>{number} = valor proveniente do contexto</p>

      <HookUseLayoutEffect></HookUseLayoutEffect>
    </div>
  )
}
