import React from 'react'
import styles from "./Dashboard.module.css"

import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import {useAuthValue} from "../../context/authContext"
import {Link} from "react-router-dom"
import { useDeleteDoc } from '../../hooks/useDeleteDoc'

export const Dashboard = () => {

  const {user} = useAuthValue()
  const uid = user.udi;

  //posts
  const {documents:posts, loading, error} = useFetchDocuments("posts", null, uid)

  const {deleteDocument} = useDeleteDoc("posts");

  const deletePost = (id) =>{
    console.log(id)

    deleteDocument(id);
  }

  if(loading){
    return <p>Carregando...</p>
  }

  return (
    <div className={styles.dashboard}>
      <h2>Dashboard</h2>
      <p>Gerencie os seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Não foram encontrados posts</p>
          <Link to="/posts/create" className="btn"> Criar primeiro post </Link>
        </div>
      ) : (
        <div className={styles.post_header}>
          <span>Título</span>
          <span>Ações</span>
        </div>
      )}

          {loading && <p>Carregando dados...</p>}
          {posts && posts.map((post) => (
           <div className={styles.post_row} key={post.id}>
           <p>{post.title}</p>
           <div className={styles.actions}>
             <Link to={`/posts/${post.id}`} className="btn btn-outline">
               Ver
             </Link>
             <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">
               Editar
             </Link>
             <button
               onClick={() => deletePost(post.id)}
               className="btn btn-outline btn-danger"
             >
               Excluir
             </button>
           </div>
         </div>
          ))}
    </div>
  )
}
