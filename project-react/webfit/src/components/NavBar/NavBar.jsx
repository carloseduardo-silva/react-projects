import React from 'react'
import styles from "./NavBar.module.css"


import { NavLink} from "react-router-dom"


//importar usuario do contexto -> dependendo se existir user ou não irá exibir um nav

export const NavBar = () => {
  return (
   <nav>
     
     <div className={styles.nav_container}>
        <div className={styles.logo_container}>
          <span>WEB </span>
                 <img className='logo' src="https://t4.ftcdn.net/jpg/02/52/93/81/360_F_252938192_JQQL8VoqyQVwVB98oRnZl83epseTVaHe.jpg" alt="apple-image" />
          <span>FIT</span>
          </div>

        <div className={styles.nav_links}>
        <NavLink to="/"> HOME </NavLink>
        <NavLink to="/login"> LOGIN </NavLink>
        <NavLink to="/register"> REGISTER </NavLink>
        <NavLink to="/sobre"> ABOUT </NavLink>
        <NavLink to="/shop"> SHOP </NavLink>
        <NavLink to="/calculadoraimc"> CALCULADORA IMC</NavLink>
      </div>

     </div>

   </nav>
  )
}
