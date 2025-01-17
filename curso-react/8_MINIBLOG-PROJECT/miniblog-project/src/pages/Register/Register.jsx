import React, { useEffect } from 'react'
import { useState } from 'react'

import {useAuthentication} from "../../hooks/useAuthentication"

import styles from "./Register.module.css"

export const Register = () => {

    const[displayName, setDisplayName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[confirmPassword, setConfirmPassword] = useState()
    const[error, setError] = useState()

    const {createUser, error: authError, loading} = useAuthentication()

    const handleFormRegister = async (e) =>{
        e.preventDefault()

        const user = {
            displayName,
            email,
            password
        }

        if(password != confirmPassword){
            setError('As senhas precisam ser iguais!')
            return;   
        }

        //create user function from hook auth requisition
        const res = await createUser(user)

        console.log(res)
        setError("")
    }

    useEffect(() =>{

        if(authError){
            setError(authError)
        }

    }, [authError])


  return (
    <div className={styles.register}>
        <h1>Crie sua conta</h1>
        <p>Crie seu usuário e compartilhe sua histórias</p>
        <form onSubmit={handleFormRegister}>
            <label htmlFor="name">
            <span>Nome:</span>
                <input type="text" placeholder='Nome do usuário' name='name' id='displayName' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
            </label>

            <label htmlFor="email">
            <span>Email:</span>
                <input type="email" placeholder='E-mail' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <label htmlFor="password">
            <span>Senha:</span>
                <input type="password" placeholder='Senha' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <label htmlFor="confirmPassword">
            <span>Confirme a sua senha:</span>
                <input type="confirmPassword" placeholder='Confirme a sua senha' name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>

           
            {!loading &&  <button className="btn" type='submit'>Criar conta</button> }
            {loading &&<button disabled className="btn" type='submit'>Aguarde...</button> }
            {error && <p className="error">{error}</p>}
        </form>
      
    </div>
  )
}
