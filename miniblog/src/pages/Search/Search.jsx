import styles from './Search.module.css'

import PostDetails from "../../components/PostDetails"
import { useFetchDocuments } from "../../hooks/useFetchDocuments"
import { useQuery } from "../../hooks/useQuery"


import { Link } from "react-router-dom"

const Search = () => {
    const query=useQuery()
    const search = query.get("q")

    const {documents:posts}=useFetchDocuments("posts",search)
  return (
    <div className={styles.search_container}>
        <h1>Search</h1>
        <div >
            {posts &&posts.length===0 &&(
                <div className={styles.result_not_found}>     
                <p>Não foram encontrado post a partir da sua busca</p>
                <Link to={'/'}><button className="btn btn-dark">Volte para Home</button></Link>
                </div>
           
            )}
            {posts && posts.map((post)=>(
                <PostDetails key={post.id} post={post}/>
                
            )
            )}
        </div>
    </div>
  )
}

export default Search
