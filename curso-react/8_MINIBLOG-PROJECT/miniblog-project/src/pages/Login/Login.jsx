import React, { useState } from 'react'
import styles from "./Login.module.css"


export const Login = () => {


    const [email, setEmail] = useState()
    const[password, setPassword] = useState()
    const [error, setError] = useState()

    const handleLoginForm = (e) =>{
        e.preventDefault()
    }

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>

        <form onSubmit={handleLoginForm}>

            <label htmlFor="email">
                <span>Email:</span>
                <input type="email" placeholder='E-mail' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <label htmlFor="password">
                <span>Senha:</span>
                <input type="password" placeholder='Senha' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>


            <button type="submit">Entrar</button>
        </form>
    </div>
  )
}
