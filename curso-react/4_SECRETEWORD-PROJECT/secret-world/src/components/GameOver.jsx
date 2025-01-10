import React from 'react'
import './GameOver.css'

export const GameOver = ({restartGame}) => {
  return (
    <div>
      <h1>GameOver</h1>
      <button onClick={restartGame}>Voltar ao Inicio</button>
    </div>
  )
}
