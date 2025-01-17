import React, { useState } from 'react'
import styles from "./CreatePost.module.css"

export const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const[body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const[formError, setFormError] = useState("")

  const handlePostSubmit = (e) =>{
    e.preventDefault()
  }

  return (
    <div className={styles.create_post}>
      <h2>Criar Post</h2>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento!</p>
      <form onSubmit={handlePostSubmit}>

        <label htmlFor="title">
          <span>Título:</span>

          <input type="text" name='title' placeholder='Pense num bom titulo...' required value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label htmlFor="image">
          <span>Imagem:</span>

          <input type="text" name='image' placeholder='Insira uma imagem que representa o seu post' required value={image} onChange={(e) => setImage(e.target.value)} />
        </label>

        <label htmlFor="body">
          <span>Conteúdo:</span>

          <textarea type="text" name='body' placeholder='Insira o conteúdo do post' required value={body} onChange={(e) => setBody(e.target.value)} />
        </label>

        <label htmlFor="tags">
          <span>Tags:</span>

          <input type="text" name='tags' placeholder='Insira as tags separadas por vírgula' required value={tags} onChange={(e) => setTags(e.target.value)} />
        </label>


        <button className="btn" type='submit'>Criar post</button>

        {/* {!loading &&  <button className="btn" type='submit'>Criar conta</button> }
            {loading &&<button disabled className="btn" type='submit'>Aguarde...</button> }
            {error && <p className="error">{error}</p>} */}
      </form>
    </div>
  )
}
