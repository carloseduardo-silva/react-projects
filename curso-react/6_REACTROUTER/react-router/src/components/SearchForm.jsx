import React from 'react'

import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

export const SearchForm = () => {

    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleQuerySubmit = (e) =>{
        e.preventDefault()

        navigate("/search?q=" + query);
    }

  return (
    <div>
        <form onSubmit={handleQuerySubmit}>

            <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
            <button type='submit'> Buscar </button>
        </form>

    </div>
  )
}
