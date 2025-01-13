import React, { useState } from 'react'
import './Game.css'

export const Game = ({word, category, letters, loseGame, startGame}) => {

  const [score, setScore] = useState(0)
  const [tries, setTries] = useState(3)
  const [lettersTried, setLettersTried] = useState([])
  const [letterInput, setLetterInput] = useState()

  const verifyLetter = (letter) =>{

    if(lettersTried.includes(letter)){
      var inputLetter = document.querySelector("#inputLetter");
      window.alert('Tente novamente com uma nova letra!')
      inputLetter.value = "";
      inputLetter.focus()
      setLetterInput()
  
      return false
    }
    else{
      if(word.toUpperCase().includes(letter)){
        return true
      }
      else{
        return false
      }
    }


  }

  //verify if the word was found
  const checkSucess = () =>{
    var inputs = document.querySelectorAll(".wordContainer input");
    var inputCheckValue = []

    inputs.forEach(input =>{
      if(input.value == ""){
        inputCheckValue.push("empty");
      }else{
        inputCheckValue.push("full");
      }
    })

    if(inputCheckValue.includes("empty")){
      return
    }
    else{
      newWord()
    }

  }

  //restarts with a new word
  const newWord = () =>{

    var inputs = document.querySelectorAll(".wordContainer input");

    inputs.forEach(input =>{
      input.value = "";
    })

    setLettersTried([])
    setScore(score + 100);
    startGame();
  }

  const handleLetter = (e) =>{
    e.preventDefault();
    
    //verify if the letter exists in the word picked
    if(verifyLetter(letterInput)){

      //position the letter in the word
      let indices = [];
      let index = word.toUpperCase().indexOf(letterInput);

      while (index !== -1) {
          indices.push(index);
          index = word.toUpperCase().indexOf(letterInput, index + 1);}
      
        indices.map(i => {
          document.getElementById(`${i}`).value = letterInput;
        })


      //check if the word are completed or not
      if(checkSucess()){
        console.log("Nova palavra")
        return startGame()
      }

    }
    else{

      if(lettersTried.includes(letterInput)){
        return
      }
      else{
        setTries(tries-1)
        if(tries == 1){
          //gameover
          loseGame()
        }
        else{
          var letterTriedArr = lettersTried;
          letterTriedArr.push(letterInput);
          setLettersTried(letterTriedArr);
        }
       
      }
    }

    var inputLetter = document.querySelector("#inputLetter");
    inputLetter.value = "";
    inputLetter.focus()
    setLetterInput()

  }

  const inputLetterChange = (e) =>{

    var letter = e.target.value
    e.target.value = letter.toUpperCase()
    setLetterInput(letter.toUpperCase())
    
  }

  return (
    <div className='gameContainer'>
      
      <h3>Pontuação: <span className='lighter'>{score}</span></h3>
      <h1>Advinhe a palavra:</h1>
      <h2>Dica sobre a palavra: <span className='yellow'>{category}</span></h2>
      <p> Você ainda tem {tries} tentativa(s).</p>

      <div className='wordContainer'>
          {
            letters.map((letter, index) => (
              <input id={index} type='text' ></input>
            ))
          }

      </div>

      <p> Tente advinhar uma letra da palavra:</p>

      <form onSubmit={handleLetter}>
        <input id='inputLetter' onChange={inputLetterChange} type="text" />
        <button>Jogar!</button>

      </form>

      <div>
      <p>Letras já utilizadas:</p>
      <span>
        {lettersTried && lettersTried.map(letter =>(
          <p style={{display:'inline'}}> {letter} - </p>
      ))}
      </span>
      </div>

    </div>
  )
}
