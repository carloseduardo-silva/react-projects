import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Myform } from './components/Myform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Formularios + React</h1>

      <Myform/>

    </>
  )
}

export default App
