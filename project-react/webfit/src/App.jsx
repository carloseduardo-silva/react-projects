//hooks
import { useState } from 'react'
import{BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import { onAuthStateChanged } from 'firebase/auth'

//css
import './App.css'

//pages
import {Home} from "./pages/Home/Home"
import {Login} from "./pages/Login/Login"
import {Register} from "./pages/Register/Register"
import {Shop} from "./pages/Shop/Shop"
import {CalculadoraIMC} from "./pages/CalculadoraIMC/CalculadoraIMC"
import {Sobre} from "./pages/Sobre/Sobre"
import {NotFound} from "./pages/NotFound/NotFound"
import { Blog } from './pages/Blog/Blog'
import { Diet } from './pages/Diet/Diet'

//components
import { NavBar } from './components/NavBar/NavBar'
import { useAuthentication } from './hooks/useAuthentication'
import { useEffect } from 'react'
import { AuthContextProvider } from './context/authContext'



function App() {

  const [user, setUser] = useState(null)
  const {auth} = useAuthentication()

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
    <div className='App'>   
   

        <AuthContextProvider value={user}> 
          <BrowserRouter>
            <NavBar/>
            <Routes>
              
              <Route path='/' element={<Home/>}></Route>
              <Route path='/login' element={!user ?<Login/> : <Navigate to={"/"}/>}></Route>
              <Route path='/register' element={!user ? <Register/> : <Navigate to={"/"}/>}></Route>
              <Route path='/shop' element={user && <Shop/>}></Route>
              <Route path='/dieta' element={user && <Diet/>}></Route>
              <Route path='/calculadoraimc' element={user && <CalculadoraIMC/>}></Route>
              <Route path='/sobre' element={<Sobre/>}></Route>
              <Route path='/blog' element={<Blog/>}></Route>
              <Route path='*' element={<NotFound/>}></Route>


            </Routes>
          
          
          
          </BrowserRouter>
        </AuthContextProvider>

    </div>
  )
}

export default App
