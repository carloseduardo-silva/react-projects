import React from 'react'
import SomeComponent from './SomeComponent'

import { useRef } from 'react'

export const HookUseImperativeHandle = () => {

    //fazendo referencia a um componente, logo podemos acessar funções do componente através de inputRef.current 
    const componentRef = useRef()

  return (
    <div className='separate'>
        <h2>hook: useImperativeHandle</h2>

        <SomeComponent ref={componentRef}></SomeComponent>
        <button onClick={() => componentRef.current.validate()}>Validar caracteres</button>
    </div>
  )
}
