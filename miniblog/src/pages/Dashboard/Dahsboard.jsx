import styles from './Dashboard.module.css';

import { Link } from 'react-router-dom'

import { useAuthValue } from '../../context/authContext'
import { useFetchDocuments } from '../../hooks/useFetchDocuments'
import { useDeleteDocument } from '../../hooks/useDeleteDocument';

const Dahsboard = () => {
  const { user } = useAuthValue()

  const uid = user.id

  const { documents: posts,loading } = useFetchDocuments("posts", null, uid)
  const {deleteDocument}=useDeleteDocument("posts")


      if(loading){
        return <p>Carregando</p>
      }

  return (
    <div className={styles.dashboard}>
      <h2>Dahsboard</h2>
      <p>Gerencie seus posts</p>
      {posts && posts.length === 0 ? (
        <div className={styles.noposts}>
          <p>Nao foram encontrado posts</p>
          <Link to={"/posts/create"}><button>Crie seu primeiro Post</button></Link>
        </div>
      ) : (
        <>
          <div className={styles.post_header}>
            <span>Title</span>
            <span>Ações</span>
            
            </div>
          {posts && posts.map((post) => (

            <div key={post.id} className={styles.post_row}>
              <p>{post.title}</p>
              <div className="">
                <Link to={`/posts/${post.id}`} className="btn btn-outline">Ver</Link>
                <Link to={`/posts/edit/${post.id}`} className="btn btn-outline">Editar</Link>
              <button onClick={()=>{deleteDocument(post.id)}} className='btn btn-outline btn-danger'>Excluir</button>
              </div>
            </div>

          ))}</>

      )}


    </div>
  )
}

export default Dahsboard