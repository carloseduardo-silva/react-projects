import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CarDetails } from './components/CarDetails'

function App() {
  const [count, setCount] = useState(0)

  const cars= [
    {brand: "BMW", color:"White", km:"0"},
    {brand: "Mercedes", color:"Green", km:"865765"},
    {brand: "Gol", color:"Red", km:"13"},
    {brand: "Lamborghini", color:"Black", km:"0"}
  ]

  return (
    <>
      <h1>Guto Ferrari Motors</h1>

      {
        cars.map(car =>(
          <CarDetails brand={car.brand} color={car.color} km={car.km}/>
        ))
      }
    </>
  )
}

export default App
