import React, { useState } from 'react'

export const ShowUserName = (props) => {

    const[nome, setNome] = useState(props.name)

  return (
    
    <h2>O nome do usuário é: {nome} </h2>
  )
}
