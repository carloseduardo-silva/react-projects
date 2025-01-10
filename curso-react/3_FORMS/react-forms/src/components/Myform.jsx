import React from 'react'
import styles from "./Myform.module.css"
import { useState } from 'react'

export const Myform = ({user}) => {

    const [name, setName] = useState(user ? user.name : "")
    const [email, setEmail] = useState(user? user.email : "")
    const[desc, setDesc] = useState(user ? user.desc : "")
    const [sex, setSex] = useState(user ? user.sex : "")

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

    const handleForm = (e) =>{

        //evitar envio/reload da pag automatico
        e.preventDefault();
        console.log(name);
        console.log(email);
        console.log(desc);
        console.log(sex)

        //VALIDAÇOES PRÉ ENVIO 

        //LIMPAR FORM
        setName("")
        setEmail("")
        setDesc("")
        setSex("")
    }

  return (
    <div>

        <form onSubmit={handleForm}>
            <div>

                <label htmlFor="name">
                    Nome:
                    <input type="text" name='name' placeholder='Digite seu Nome' onChange={handleName} value={name} />
                </label>

                <label htmlFor="email">
                    E-mail:
                    <input type="email" name="email" placeholder='Digite seu melhor e-mail' onChange={(e) =>{setEmail(e.target.value)}} value={email} />
                </label>

                <label htmlFor="desc">
                    Descrição
                    <textarea placeholder='Descrição' onChange={(e) => (setDesc(e.target.value))} name="desc"  value={desc}>

                    </textarea>
                </label>

                <label htmlFor="sex">
                    Genero:
                    <select name="sex" value={sex} onChange={(e)=>{setSex(e.target.value)}} >
                        <option value="Feminino">Feminino</option>
                        <option value="Masculino">Masculino</option>
                        
                    </select>
                </label>

            </div>
           
            <input type="submit" value="Enviar" />
        </form>
        <button onClick={showName}> Mostrar nome</button>
        <button onClick={showEmail}> Mostrar email</button>
    </div>
  )
}
