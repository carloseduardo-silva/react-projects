import styles from "./Home.module.css"
import React, { useState } from 'react'

import { Link, useNavigate } from "react-router-dom"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { PostDetail } from "../../components/PostDetail/PostDetail"

export const Home = () => {

  const[query, setQuery] = useState()

  const {documents:posts, error, loading } = useFetchDocuments("posts")

  const navigate = useNavigate()
  
  const handleQuery = (e) =>{
    e.preventDefault()
    
    if(query){
      return navigate(`/search?q=${query}`)
    }


  }

  return (
    <div className={styles.home}>
        <h1>Veja os nossos posts mais recentes</h1>

        <form className={styles.serach_form} onSubmit={handleQuery}>

          <input value={query} onChange={(e) => setQuery(e.target.value)} type="text" placeholder='Ou busque por tags...' />
          <button type="submit" className='btn btn-dark'>Pesquisar</button>
        </form>
        <h1>Feed</h1>
        {loading && <p>Carregando posts...</p>}

        {posts && posts.map((post) => (
         <PostDetail key={post.id} post={post}></PostDetail>
        ))}

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to={"/posts/create"}> 
              <button className="btn">Criar post</button>
            </Link>

          </div>
        )}

    </div>
  )
}
