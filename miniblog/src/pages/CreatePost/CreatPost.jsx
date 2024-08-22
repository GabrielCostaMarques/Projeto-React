import styles from './CreatePost.module.css'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthValue } from '../../context/authContext'
import { useInsertDocument } from '../../hooks/useInsertDocument'




const CreatPost = () => {

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState("")
  const [formError, setFormError] = useState("")


  const { user } = useAuthValue()

  const { insertDocument, response } = useInsertDocument("posts")

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormError("")

    //validade image URL

    try {
      new URL(image)
    } catch (error) {
      setFormError("A Imagem precisa ser uma URL")
    }

    //create tags array
    const tagsArray=tags.split(',').map((tag)=>tag.trim().toLowerCase())
    //checar todos os valores
    if(!title||!image||!tags||!body){
      setFormError("Por favor Preencher todos os campos")
    }
    if(formError) return;

    console.log(tagsArray);
    insertDocument(
      {
        title,
        image,
        body,
        tagsArray,
        uid: user.uid,
        createdBy: user.displayName,
      }
    )


    //redirect home page

    navigate("/")
    
  };


  return (
    <div className={styles.createPost}>
      <h1>Criar Post</h1>
      <p>Escreva sobre o que quiser e compartilhe o seu conhecimento</p>

      <form onSubmit={handleSubmit}>
        <label >
          <span>Titulo:</span>
          <input
            type="text"
            name='title'
            required
            placeholder='Pense em um bom título'
            onChange={(e) => setTitle(e.target.value)}></input>
        </label>
        <label >
          <span>URL:</span>
          <input
            type="text"
            name='image'
            required
            placeholder='Insira a URL de mídia'
            onChange={(e) => setImage(e.target.value)}
            value={image}>

          </input>
        </label>
        <label >
          <span>Conteúdo:</span>
          <textarea
            type="text"
            name='body'
            required
            placeholder='insira o conteúdo do post'
            onChange={(e) => setBody(e.target.value)}
            value={body}>

          </textarea>
        </label>
        <label >
          <span>TAGS:</span>
          <input
            type="text"
            name='image'
            required
            placeholder='insira as tags separadas por vírgula'
            onChange={(e) => setTags(e.target.value)}
            value={tags}>

          </input>
        </label>

        {!response.loading && <button className='btn'>Cadastrar</button>}
        {response.loading && <button className='btn' disabled>Aguarde</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form>
    </div>
  )

}

export default CreatPost