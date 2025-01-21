import React, { useState } from 'react'
import styles from "./CreatePost.module.css"
import { useInsertDocuments } from '../../hooks/useInsertDocuments'
import { useAuthValue } from '../../context/authContext'
import { useNavigate } from 'react-router-dom'

export const CreatePost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const[body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const[formError, setFormError] = useState("")


  const {insertDocument, response} = useInsertDocuments("posts")
  const {user} = useAuthValue()
  const navigate  = useNavigate()

  const handlePostSubmit = (e) =>{
    e.preventDefault()

    setFormError("")

    //validate image URL
    try {
      new URL(image)
    } catch (error) {
      return setFormError("A imagem precisa ser uma URL")
    }

    //create tag array
    const tagArr = tags.split(",").map(tag => (tag.trim().toLowerCase()))

    //check all values
    if(!title || !body || !tags){
      return setFormError("Por favor, preencha todos os campos corretamente")
    }

    const post = {
      title,
      image,
      body,
      tags: tagArr,
      uid: user.uid,
      createdBy: user.displayName

    }

    if(formError){
      return
    }
    
    console.log(post)
    insertDocument(post)
    navigate("/")

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


        {/* <button className="btn" type='submit'>Criar post</button> */}

         {!response.loading &&  <button className="btn" type='submit'>Criar post</button> }
            {response.loading &&<button disabled className="btn" type='submit'>Aguarde...</button> }
            {(response.error || formError) && <p className="error">{response.error || formError}</p>} 
      </form>
    </div>
  )
}
