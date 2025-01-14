import React from 'react'
import { Link } from 'react-router-dom'

import "./Home.css"

export const Home = ({products, loading}) => {
  return (
    <>
        <h1>Produtos</h1>
    
        <div className='products'>
      
            {products && products.map(product => (
              <li> <h3>{product.name}  </h3>
              <h3>R${product.price}</h3>
                <Link to={"/product/"+product.id}><button>Ver produto</button></Link>
              </li>
            
            ))}
        </div>
    </>
   
  )
}
