import React from 'react'
import styles from "./NavBar.module.css"
import { NavLink } from 'react-router-dom'

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
        <NavLink to="/" className={styles.brand}>
        Mini <span>Blog</span>

        </NavLink>

        <ul className={styles.links_list}>
            <li><NavLink to="/"  className={({isActive}) => {isActive ? styles.active : ""}}>Home </NavLink></li>

            <li><NavLink to="/about" className={({isActive}) => {isActive ? styles.active : ""}}>Sobre</NavLink></li>

            <li><NavLink to="/login" className={({isActive}) => {isActive ? styles.active : ""}}>Entrar</NavLink></li>
          
            <li><NavLink to="/register" className={({isActive}) => {isActive ? styles.active : ""}}>Criar Conta </NavLink></li>

        </ul>

    </nav>
  )
}
