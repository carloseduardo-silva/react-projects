import React, { useState } from 'react'


export const ListRender = () => {

    const[list] = useState(["Matheus", "Lucas", "Fernanda", "Jorge"]);

    const [users, setUsers] = useState([
        {id: 1, name:'Carlos Eduardo', age:20},
        {id: 2, name:'Maria Eduarda', age:14},
        {id: 3, name:'Julio Oliveira', age:29}
    ])

    //hook de deleção de usuários do array de objetos denominado por USERS no useState acima
    const deleteRandom = () =>{

        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) =>{
            console.log(prevUsers);
            return prevUsers.filter((user) => randomNumber !== user.id);
        });

    }

  return (
    <div>
        <ul>
            {list.map((item, i) =>(

                <li key={i} >{item}</li>

            ))}
        </ul>

        <ul>
            {users.map(user =>(
                <li id={user.id}> {user.name}</li>
            ) )}
        </ul>

        <button onClick={deleteRandom}>Deletar usuario aletório</button>
    </div>
  )
}
