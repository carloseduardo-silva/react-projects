import React from 'react'

export const Events = () => {

    const handleClickHere = (e) =>{
        window.alert('Clicaram no botão')
        console.log(e)
    }

    const conditionRender = (condition) =>{

        if(condition){
            return <h1> Top, a condição é verdadeira</h1>
        }
        else{
            return <h2>Caramba, a condição não é verdadeira.</h2>
        }

    }

  return (
    <div>

        <div>
            <button onClick={handleClickHere}>Clique aqui</button>
        </div>

        {conditionRender(true)}

    </div>
  )
}
