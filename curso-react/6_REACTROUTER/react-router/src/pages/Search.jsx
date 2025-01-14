import React from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'

export const Search = () => {

    const [searchParams] = useSearchParams()

    const url = "http://localhost:3000/products?" + searchParams;

    const {data: products, loading} = useFetch(url)

  return (
    <div>
        <h1>Resultados Disponiveis:</h1>
        {loading && <p> Carregando dados...</p>}
        <div className='products'>
              
            {products && products.map(product => (
                <li> <h3>{product.name}  </h3>
                <h3>R${product.price}</h3>
                <Link to={"/product/"+product.id}><button>Ver produto</button></Link>
                </li>
            
            ))}
        </div>
    </div>
  )
}
