import React, { useEffect, useState } from 'react'
import styles from "./Edit.module.css"
import { useFetchDoc } from '../../hooks/useFetchDoc'
import { useAuthValue } from '../../context/authContext'
import { useParams, useNavigate } from 'react-router-dom'
import { useEditDoc } from '../../hooks/useEditDoc'

export const Edit = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const[body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const[formError, setFormError] = useState("")

  const navigate = useNavigate()
  const {user} = useAuthValue()
  const {id} = useParams()
  const {document: post} = useFetchDoc("posts", id)

  const {editDocument, response} = useEditDoc("posts")


  useEffect(() =>{

    if(post){
      setTitle(post.title)
      setImage(post.image)
      setBody(post.body)
      
      const textTags = post.tags.join(", ")

      setTags(textTags)
    }

  }, [post])

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

    editDocument(id, post)
    navigate("/dashboard")
    

  }

  return (
    <div className={styles.edit_post}>
     {post && <>
      <h2>Editando Post : {post.title}</h2>
      <p>Altere os dados do post como quiser!</p>
      <form onSubmit={handlePostSubmit}>

        <label htmlFor="title">
          <span>Título:</span>

          <input type="text" name='title' placeholder='Pense num bom titulo...' required value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>

        <label htmlFor="image">
          <span>Imagem:</span>

          <input type="text" name='image' placeholder='Insira uma imagem que representa o seu post' required value={image} onChange={(e) => setImage(e.target.value)} />
        </label>

        <p className={styles.preview_title}>Preview da imagem atual:</p>
        <img className={styles.image_preview} src={post.image} alt={post.title} />

        <label htmlFor="body">
          <span>Conteúdo:</span>

          <textarea type="text" name='body' placeholder='Insira o conteúdo do post' required value={body} onChange={(e) => setBody(e.target.value)} />
        </label>

        <label htmlFor="tags">
          <span>Tags:</span>

          <input type="text" name='tags' placeholder='Insira as tags separadas por vírgula' required value={tags} onChange={(e) => setTags(e.target.value)} />
        </label>


        

         {!response.loading &&  <button className="btn" type='submit'>Editar</button> }
            {response.loading &&<button disabled className="btn" type='submit'>Aguarde...</button> }
            {(response.error || formError) && <p className="error">{response.error || formError}</p>} 
      </form>
     </>}
    </div>
  )
}
