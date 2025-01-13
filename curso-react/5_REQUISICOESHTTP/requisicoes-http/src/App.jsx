import { useState, useEffect  } from 'react'

//css
import './App.css'


//components
const url =  "http://localhost:3000/products";
function App() {
  const[products, setProducts] = useState([]);

  useEffect(() =>{

    async function fetchData(){

      const res = await fetch(url)

      const data = await res.json()
      setProducts(data)
    }

    fetchData()

  }, [])


  return (
    <>
      <div className='App'>
        <h1> Lista de produtos </h1>

      <ul>
        {products.map(product => (
          <li>{product.id}: {product.name} - R${product.price}</li>
        ))}
      </ul>

      </div>
    </>
  )
}

export default App