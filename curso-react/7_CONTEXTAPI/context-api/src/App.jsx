import { useState } from 'react'

import {BrowserRouter, Routes, Route} from "react-router-dom"

import './App.css'
import { Home } from './pages/Home'
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { NotFound } from './pages/NotFound'
import { NavBar } from './components/NavBar'

function App() {


  return (
    <div className='App'>
      <h1>Context API</h1>
      
    <BrowserRouter>
    <NavBar/>
      <Routes>

        <Route path="/" element={<Home/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/about" element ={<About/>}></Route>

        <Route path="*" element={<NotFound/>}></Route>
      </Routes>
    </BrowserRouter>

    </div>
  )
}

export default App
