import React from 'react'
import { useState } from 'react'

import { useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export const Product = () => {

    const { id } = useParams()

    const url = `http://localhost:3000/products/${id}`
    const {data: product, loading, httpRequisition} = useFetch(url)

    console.log(product)
  return (
    <div>

        <h2>Product: {id}</h2>
        {loading && <p>Carregando os dados...</p>}
        {product && (
            <div>
                <h3>{product.name}</h3>
                <p>R${product.price}</p>
                <Link to={`/product/${product.id}/info`}>Mais Informações</Link>
            </div>
        )}
    </div>
  )
}
