import styles from './EditPost.module.css'
import { useEffect, useState } from 'react'
import { useNavigate,useParams } from 'react-router-dom'
import { useAuthValue } from '../../context/authContext'
import{useFetchDocument} from '../../hooks/useFetchDocument'
import { useUpdateDocument } from '../../hooks/useUpdateDocument'


const EditPost = () => {
  const{id}=useParams()

  const {document:post}=useFetchDocument("posts",id)

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [body, setBody] = useState("")
  const [tags, setTags] = useState([])
  const [formError, setFormError] = useState("")

  useEffect(() => {
    if (post) {
      const textTags = post.tagsArray.join(", ");
      setTitle(post.title);
      setBody(post.body);
      setImage(post.image);
      setTags(textTags);
    }
  }, [post]);
  


  const { user } = useAuthValue()

  const { updateDocument, response } = useUpdateDocument("posts")

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

    const data = {

      title,
      image,
      body,
      tagsArray,
      uid: user.uid,
      createdBy: user.displayName,
    }
    updateDocument(id,data)


    //redirect home page

    navigate("/dashboard")
    
  };


  return (
    <div className={styles.editPost}>
      {post &&(
        <>
        <h1>Editar Post: {post.title}</h1>
      <p>Altere os dados do post como quiser</p>

      <form onSubmit={handleSubmit}>
        <label >
          <span>Titulo:</span>
          <input
            type="text"
            name='title'
            required
            placeholder='Pense em um bom título'
            onChange={(e) => setTitle(e.target.value)}value={title}></input>
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
        <p className={styles.preview_title}>Preview da Imagem Atual</p>
        <img className={styles.image_preview} src={post.image} alt={post.tile}/>
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

        {!response.loading && <button className='btn'>Editar</button>}
        {response.loading && <button className='btn' disabled>Aguarde</button>}
        {response.error && <p className="error">{response.error}</p>}
        {formError && <p className="error">{formError}</p>}
      </form></>
      )}
    </div>
  )

}

export default EditPost