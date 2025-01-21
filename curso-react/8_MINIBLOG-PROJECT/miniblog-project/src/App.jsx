import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom"

import { onAuthStateChanged } from 'firebase/auth'
import { useState, useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

import { AuthContextProvider } from './context/authContext'

import './App.css'
import { Home } from './pages/Home/Home'
import { About } from './pages/About/About'
import { Register } from './pages/Register/Register'
import { NavBar } from './components/NavBar/NavBar'
import { Footer } from './components/Footer/Footer'
import { Login } from './pages/Login/Login'
import { CreatePost } from './pages/CreatePost/CreatePost'
import { Dashboard } from './pages/Dashboard/Dashboard'
import { Search } from "./pages/Search/Search"

function App() {
  
  const [user, setUser] = useState(null)
  const { auth } = useAuthentication()

  const loadingUser = user === undefined;

  if(loadingUser){
    return <p>Carregando...</p>
  }


  useEffect(() =>{
      onAuthStateChanged(auth, (user) =>{
        setUser(user)
      })

  }, [auth])



  return (
    <>
      <AuthContextProvider value={{user}}>
        <BrowserRouter>
          <NavBar/>
          <div className='container'>
            <Routes>
                <Route path='/' element={<Home/>}></Route>
                <Route path='/about' element={<About/>}></Route>
                <Route path='/search' element={<Search/>}></Route>
                <Route path='/login' element={!user ?<Login/> : <Navigate to="/"></Navigate> }></Route>
                <Route path='/register' element={!user ? <Register/> : <Navigate to="/"></Navigate>}></Route>
                <Route path='/posts/create' element={user ?  <CreatePost/> :   <Navigate to="/"></Navigate>} ></Route>
                <Route path="/dashboard" element={user ? <Dashboard/> : <Navigate to="/"></Navigate> }> </Route>
                
            </Routes>
          </div>
        <Footer/>
        </BrowserRouter>
      </AuthContextProvider>
    </>
  )
}

export default App
