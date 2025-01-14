import { useState } from 'react'

import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
//css
import './App.css'

//pages e componentes
import { Home } from './pages/Home'
import { About } from './pages/About'
import { NavBar } from './components/NavBar'
import { useFetch } from './hooks/useFetch'
import { Product } from './pages/Product'
import {Info} from "./pages/Info"
import { NotFound } from './pages/NotFound'
import { SearchForm } from './components/SearchForm'
import { Search } from './pages/Search'

function App() {

  const url = "http://localhost:3000/products"
  const {data, loading} = useFetch(url)

  return (
    <>
     <h1>React Router</h1>
     <BrowserRouter>
     <NavBar/>
     <SearchForm/>
      <Routes>
       
        <Route path='/' element={<Home products={data} loading={loading}/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/product/:id' element={<Product/>}></Route>
        <Route path='/product/:id/info' element={<Info/>}></Route>
        <Route path='/search' element={<Search/>}></Route>

        {/* redirecionamento de url -> ao acessar /company sera redirecionado para /about */}
        <Route path='/company' element={<Navigate to={"/about"}/>}></Route>

        {/* rotas não configuradas serão redirecionadas para pagina padrao de 'not found' */}
        <Route path='*' element={<NotFound/>}></Route>
      </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
