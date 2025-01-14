import { useState, useEffect  } from 'react'

//css
import './App.css'
import { useFetch } from './hooks/useFetch';


//components
const url =  "http://localhost:3000/products";
function App() {
  const[products, setProducts] = useState([]);

  const [name, setName] = useState();
  const[price, setPrice] = useState();

  const { data:items, httpRequisition, loading, error } = useFetch(url)


  //create new products
  const handleForm = async (e) =>{

    e.preventDefault()

    const product = {
      name,
      price,
    }

    httpRequisition(product, "POST")

    setName("")
    setPrice("")
  }

  return (
    <>
      <div className='App'>
        <h1> Lista de produtos </h1>

      {error && <p> {error}</p>}

      {loading && <p> Carregando dados...</p>}
      
      {!error &&  <ul>
        { items ? items.map(product => (
          <li> <p> {product.id}: {product.name} - R${product.price}</p> <button onClick={() => httpRequisition({id: product.id}, "DELETE")}> Excluir</button> </li>
        )): <p> Não foram encontrados nenhum produto</p>}
      </ul> }
     

      <form onSubmit={handleForm} >
        <h1>Criar Produtos</h1>
        <label htmlFor="name">
          Nome:
          <input type="text" name='name' value={name} onChange={(e) => {setName(e.target.value)}} />
        </label>

        <label htmlFor="price">
          Preço:
          <input type="number" name='price' value={price} onChange={(e) => {setPrice(e.target.value)}} />
        </label>

        {loading ? <button disabled className='disabled' type="submit">Criar Produto</button> : <button  type="submit">Criar Produto</button> }
        

      </form>

      </div>
    </>
  )
}

export default App
