import React from 'react'

export const UserDetails = ({nome, idade, profissao}) => {
  return (
    <div>
        <h4>Meu nome é {nome} e tenho {idade} anos, atualmente trabalho como {profissao}.</h4>
        {idade >= 18 ? <p>{nome} é maior de idade. </p>: <p>{nome} é menor de idade. </p>}

    </div>
  )
}
