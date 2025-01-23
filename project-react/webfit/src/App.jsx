//hooks
import { useState } from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom"
//css
import './App.css'

//pages
import {Home} from "./pages/Home/Home"
import {Login} from "./pages/Login/Login"
import {Register} from "./pages/Register/Register"
import {Shop} from "./pages/Shop/Shop"
import {CalculadoraIMC} from "./pages/CalculadoraIMC/CalculadoraIMC"
import {Sobre} from "./pages/Sobre/Sobre"

//components
import { NavBar } from './components/NavBar/NavBar'

function App() {

  return (
    <div className='App'>   
   


        <BrowserRouter>
          <NavBar/>
          <Routes>
            
            <Route path='/' element={<Home/>}></Route>
            <Route path='/login' element={<Login/>}></Route>
            <Route path='/register' element={<Register/>}></Route>
            <Route path='/shop' element={<Shop/>}></Route>
            <Route path='/calculadoraimc' element={<CalculadoraIMC/>}></Route>
            <Route path='/sobre' element={<Sobre/>}></Route>





          </Routes>
        
        
        
        </BrowserRouter>


    </div>
  )
}

export default App
