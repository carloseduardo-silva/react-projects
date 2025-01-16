import React from 'react'
import { useState } from 'react'
import { useAuthentication } from '../../hooks/useAuthentication'

export const Register = () => {

    const[displayName, setDisplayName] = useState()
    const[email, setEmail] = useState()
    const[password, setPassword] = useState()
    const[confirmPassword, setConfirmPassword] = useState()
    const[error, setError] = useState()

    const handleFormRegister = (e) =>{
        e.preventDefault()

        const user = {
            displayName,
            email,
            password
        }

        if(password != confirmPassword){
            setError('As senhas precisam ser iguais!')
            return;

            //create user function from hook auth requisition
        }
    }

  return (
    <div>
        <h1>Registre-se</h1>
        <form onSubmit={handleFormRegister}>

            <label htmlFor="name">
                <input type="text" placeholder='Nome do usuário' name='name' id='displayName' value={displayName} onChange={(e) => setDisplayName(e.target.value)} required />
            </label>

            <label htmlFor="email">
                <input type="email" placeholder='E-mail' name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
            </label>

            <label htmlFor="password">
                <input type="password" placeholder='Senha' name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            </label>

            <label htmlFor="confirmPassword">
                <input type="confirmPassword" placeholder='Confirme a sua senha' name="confirmPassword" id="confirmPassword" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
            </label>

            <button type='submit'>Registrar</button>
        </form>
    </div>
  )
}
