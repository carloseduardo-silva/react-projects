import React from 'react'
import './Game.css'

export const Game = ({verifyLetter}) => {
  return (
    <div>
      <h1>Game</h1>
      <button onClick={verifyLetter}>FINALIZAR O GAME</button>
    </div>
  )
}
