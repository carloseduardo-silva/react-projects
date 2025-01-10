import React from 'react'

export const ExecuteFunction = ({myFunction}) => {
  return (
    <div>

        <button onClick={() => myFunction("agora a msg é dinamica meus amigo")}>Executar função</button>

        <button onClick={() => myFunction("eu avisei agora sua mae é minha")}>não clique</button>

    </div>
  )
}
