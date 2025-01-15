import { useState } from 'react'

import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import './App.css'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'

function App() {
  

  return (
    <>


      <BrowserRouter>
      <NavBar/>
        <div className='container'>
          <Routes>
              <Route path='/' element={<Home/>}></Route>
              <Route path='/about' element={<About/>}></Route>
          </Routes>
        </div>
     <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
