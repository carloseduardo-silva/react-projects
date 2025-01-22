import { useState } from 'react'

import{BrowserRouter, Routes, Route, NavLink} from "react-router-dom"

import './App.css'
import { Home } from './pages/Home'
import { About } from './pages/About'

function App() {


  return (
    <>
     <div className='App'>
      <h1>React Hooks</h1>

      <BrowserRouter>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>

        <li>
          <NavLink to="/about">About</NavLink>
        </li>
      </ul>

      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
      </Routes>
      
      </BrowserRouter>
     </div>
    </>
  )
}

export default App
