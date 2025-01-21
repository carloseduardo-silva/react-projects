import React from 'react'
import styles from "./Search.module.css"
import { Link } from "react-router-dom"


import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useQuery } from '../../hooks/useQuery'


import { PostDetail } from "../../components/PostDetail/PostDetail"

export const Search = () => {

    const query = useQuery()
    const search = query.get("q")

    const {documents:posts} = useFetchDocuments("posts", search)


  return (
    <div className={styles.search_container}>
        <h2>Pesquisa: {search} </h2>

        <div>

        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts partir da sua busca...</p>
            <Link to={"/posts/create"}> 
              <button className="btn">Voltar</button>
            </Link>

          </div>
        )}

             {posts && posts.map((post) => (<PostDetail key={post.id} post={post}></PostDetail>))}
            
        </div>
    </div>
  )
}
