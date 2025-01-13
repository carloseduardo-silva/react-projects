//css
import './App.css'

//react
import { useCallback, useEffect, useState } from 'react'

//data
import {wordsList} from "./data/words"

//components
import { StartScreen } from './components/StartScreen'
import {Game} from './components/Game'
import {GameOver} from './components/GameOver'

const stages = [
  {id:1, name: "start"},
  {id:2, name: "game"},
  {id:3, name: "end"}
]


function App() {

  const [gameStage, setGameStage] = useState(stages[0].name)
  const [words] = useState(wordsList)

  const [pickedWord, setPickedWord] = useState("")
  const [pickedCategory, setPickedCategory] = useState("")
  const [letters, setLetters] = useState([])


  const pickWordAndCategory = () =>{

    //get category
    const categories = Object.keys(words);
    var randonCategoryIndex = Math.floor(Math.random() * 6);
    var category = categories[randonCategoryIndex];
    setPickedCategory(category)

    //get word
    var wordsCategory = words[category]
    var randonWordIndex = Math.floor(Math.random() * wordsCategory.length);
    var word = wordsCategory[randonWordIndex]
    setPickedWord(word)
    
    //get letters
    var lettersArr = word.split("");
    setLetters(lettersArr)

  }

  //start the game
  const startGame = () =>{

    //pick word and category
    pickWordAndCategory()

    setGameStage(stages[1].name)
  }

  // process the letter input
  const loseGame = () =>{
    setGameStage(stages[2].name)
  }

  //retry the game
  const restartGame = () => {
    setGameStage(stages[0].name)
  }

  return (
    <>
      <div className='App'>
        {gameStage == 'start' && <StartScreen startGame={startGame}/>}
        {gameStage == 'game' && <Game startGame={startGame} word={pickedWord} category={pickedCategory} letters={letters} loseGame={loseGame}/>}
        {gameStage == 'end' && <GameOver restartGame={restartGame}/>}
      </div>
    </>
  )
}

export default App
