import React from 'react'
import styles from "./Myform.module.css"
import { useState } from 'react'

export const Myform = () => {

    const [name, setName] = useState()
    const [email, setEmail] = useState()

    const handleName = (e) => {
        console.log('mudou o nome')
        console.log(e.target.value)
        setName(e.target.value)
    }

    const showName = () =>{
        window.alert(name)
    }

    const showEmail = () =>{
        window.alert(email)
    }

  return (
    <div>

        <form>
            <div>

                <label htmlFor="name">
                    Nome:
                    <input type="text" name='name' placeholder='Digite seu Nome' onChange={handleName} />
                </label>

                <label htmlFor="email">
                    E-mail:
                    <input type="email" name="email" placeholder='Digite seu melhor e-mail' onChange={(e) =>{setEmail(e.target.value)}} />
                </label>
            </div>
            <button onClick={showName}> Mostrar nome</button>
            <button onClick={showEmail}> Mostrar email</button>
            <input type="submit" value="Enviar" />
        </form>

    </div>
  )
}
