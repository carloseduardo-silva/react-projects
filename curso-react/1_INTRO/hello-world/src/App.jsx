//hooks
import { useState } from 'react'

//styles
import './App.css'

//componentes
import { ManageData } from './components/ManageData'
import { ShowUserName } from './components/ShowUserName'
import { CarDetails } from './components/CarDetails'
import { MotoDetails } from './components/MotoDetails'
import { Container } from './components/Container'
import { ExecuteFunction } from './components/ExecuteFunction'
import { UserDetails } from './components/UserDetails'
import { Title } from './components/Title'



function App() {
  const [count, setCount] = useState(0)

  const motos = [
    {id:1, brand: 'BMW', color: 'white', model: 'GS310'},
    {id:2, brand: 'Honda', color: 'black', model: 'FAN160'},
    {id:3, brand: 'Yamaha', color: 'red', model: 'FACTOR150'}
  ]

  const usuarios = [
    {id:1, nome: 'Carlos', idade: '18', profissao: 'Programador'},
    {id:2, nome: 'Maria', idade: '15', profissao: 'Modelo'},
    {id:3, nome: 'José', idade: '23', profissao: 'Carpinteiro'}
  ]

  const showMessage = (msg) =>{
    window.alert(msg)
  }

  return (
    <>
      <div>
        <h1> Hello Word em React.jsx</h1>
      </div>
      
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          Contador: {count}
        </button>
     
     <Title/>

      <Container>
        <p className='newCar'> esse titulo é do children</p>
        <h3>teste</h3>
      </Container>

      {/*STATE LIFT: ativação de função presente no componente pai através do componente filho*/}
      <ExecuteFunction myFunction={showMessage}/>

      {
        usuarios.map( user => (
          <UserDetails nome={user.nome} idade={user.idade} profissao={user.profissao}/>

        ))
      }

      {/*Teste css e classes inline dinamico ou não */}
      <CarDetails brand="BMW" km={0} color="Red"/>     
      <CarDetails brand="Mercedes" km={10} color="Green"/>
      
      {
        //LOOP + RENDERIZAÇÃO DE LISTA + PROPS + COMPONENTS
        motos.map(moto =>(
          
          <MotoDetails key={moto.id} brand={moto.brand} color={moto.color} model={moto.model} />

        ))
      }

      </div>
    
    </>
  )
}

export default App

