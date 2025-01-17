import React, { useEffect, useState } from 'react'
import styles from "./Login.module.css"
import { useAuthentication } from '../../hooks/useAuthentication'


export const Login = () => {


    const [email, setEmail] = useState()
    const[password, setPassword] = useState()
    const [error, setError] = useState()

    const {loading, error:authError, login} = useAuthentication()

    const handleLoginForm = async (e) =>{
        e.preventDefault()

        const user = {
            email,
            password
        }

        const res = await login(user)

        console.log(res)

        setError("")
    }

    useEffect(() =>{

        setError(authError)

    }, [authError])

  return (
    <div className={styles.login}>
        <h1>Entrar</h1>
        <p>Faça o login para utilizar o sitema.</p>

        <form onSubmit={handleLoginForm}>

            <label htmlFor="email">
                <span>Email:</span>
                <input type="email" placeholder='E-mail' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <label htmlFor="password">
                <span>Senha:</span>
                <input type="password" placeholder='Senha' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>


            {!loading &&  <button className="btn" type='submit'>Criar conta</button> }
            {loading &&<button disabled className="btn" type='submit'>Aguarde...</button> }
            {error && <p className="error">{error}</p>}
        </form>
    </div>
  )
}
