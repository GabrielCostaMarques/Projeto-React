import styles from './Home.module.css'



import { useNavigate, Link } from 'react-router-dom';
import { useState } from 'react';
import { useFetchDocuments } from '../../hooks/useFetchDocuments';

//components


const Home = () => {

  const [query, setQuery] = useState("")
  const {documents:posts,loading}=useFetchDocuments("post")

  const handleSubmit = (e) => {
    e.preventDefault()
  }
  
  return (
    <div className={styles.home}>
      <h1>Veja os nossos Posts mais recentes</h1>


      <form className={styles.search_form}>
        <input type="text" placeholder='Ou busque por tags...'
          onChange={(e) => setQuery(e.target.value)}
          value={query}
        />
        <button className="btn btn-dark">Pesquisar</button>
      </form>
      <div>
        {loading && <p>Carregando...</p>}
       { posts && posts.map((post)=> <h3>{post.title}</h3>)}
        {posts && posts.length === 0 && (
          <div className={styles.noposts}>
            <p>Não foram encontrados posts</p>
            <Link to="/posts/create" className='btn'>Criar Primeiro post</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default Home
