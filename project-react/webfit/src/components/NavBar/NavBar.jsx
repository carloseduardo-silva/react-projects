import React from 'react'
import styles from "./NavBar.module.css"


import { NavLink} from "react-router-dom"
import { useAuthValue } from '../../context/authContext'
import { useAuthentication } from '../../hooks/useAuthentication'





export const NavBar = () => {

  //importar usuario do contexto -> dependendo se existir user ou não irá exibir um nav
  const user = useAuthValue()
  
  const {logout} = useAuthentication()

  return (
   <nav>
     
     <div className={styles.nav_container}>
        <div className={styles.logo_container}>
          <span>WEB </span>
                 <img className='logo' src="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg" alt="apple-image" />
          <span>FIT</span>
          </div>

        <div className={styles.nav_links}>
        <NavLink to="/"> INICIO </NavLink>
        <NavLink to="/sobre"> SOBRE </NavLink>
        <NavLink to="/blog"> BLOG </NavLink>
        {!user && <NavLink to="/login"> ENTRAR </NavLink> }
        {!user && <NavLink to="/register"> CRIAR CONTA </NavLink> }
        {user && <NavLink to="/shop"> LOJA </NavLink> }
        {user && <NavLink to="/calculadoraimc"> CALCULADORA IMC</NavLink>}
        {user && <a onClick={() => logout()}>SAIR</a>}
    
        
      </div>

     </div>

   </nav>
  )
}
