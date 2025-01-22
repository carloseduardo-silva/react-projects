import React from 'react'
import { useState } from 'react'

import { useReducer } from 'react'

export const HookReducer = () => {

    const [task, setTask] = useState()

    const titleColorReducer = (state, action) =>{
        switch(action.type){
            case"red":
                return{...state, color: "red"};

            case"green":
                return{...state, color: "green"};

            case"blue":
                return{...state, color: "blue"};

            default:
                return state;

        }
    }

    const [state, dispatch] = useReducer(titleColorReducer, {color:"red"})

    const [number, dispatchCount] = useReducer((state, action) =>{
        return Math.random(state);
    }, 10)

    const initialTaskList = [
        {id: 1, desc: "Limpar o quarto"},
        {id: 2, desc: "Limpar a Sala"},
        {id: 3, desc: "Lavar o banheiro"}

    ]

    const taskListActionReducer = (state, action) => {
        switch(action.type){

            case "ADD":
               let newId = Math.random(1)

               const newTask = {
                id: newId,
                desc:task,
               }

               setTask("")
               
               return [...state, newTask];

            case "DELETE":
                return state.filter((task) => task.id !== action.id);


            default:
                return state;

        }
    }

    const [taskList, dispatchTaskAction] = useReducer(taskListActionReducer, initialTaskList);



  return (
   <>
     <div className='separate'>
        <h2> useReducer</h2>
        <h3 style={{color:state.color}}>Titulo com cores diferentes, agora esta: {state.color}</h3>
        <div>
            <button style={{color:"red"}} onClick={() => dispatch({type: "red"})}>red</button>
            <button style={{color:"blue"}} onClick={() => dispatch({type: "blue"})}>blue</button>
            <button style={{color:"green"}} onClick={() => dispatch({type: "green"})}>green</button>
        </div>
    </div>

    <div className='separate'>
        <h3>Numero: {number}</h3>
        <button onClick={() => dispatchCount()}>random number</button>
    </div>

    <div className='separate'>
        <h2>Lista de tarefas</h2>

       
            <input type="text" value={task} onChange={(e) => setTask(e.target.value)} />
            <button onClick={() => dispatchTaskAction({type:"ADD"}) }>Adicionar tarefa</button>
        
        <ul>
            {taskList && taskList.map((task) =>(
                <li>
                    <div style={{display:"flex", alignItems:"center", gap:"20px", justifyContent:"center"}}>
                        <h4>{task.desc}</h4>
                        <button onClick={() => dispatchTaskAction({type:"DELETE", id:task.id})}>Done</button>
                    </div>
                </li>
            ))}
        </ul>
    </div>
   </>
  )
}
