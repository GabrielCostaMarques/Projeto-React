import { useParams } from 'react-router-dom'
import styles from './Post.module.css'

import { useFetchDocument } from '../../hooks/useFetchDocument'

const Post = () => {
    const { id } = useParams()

    const { document: post } = useFetchDocument("posts", id)

    return (
        <div className={styles.post_container}>

            {post && (
                <>
                    <h1>{post.title}</h1>
                    <img src={post.image} alt={post.title}></img>
                    <p>{post.body}</p>
                    <h3>Esse post trata sobre:</h3>

                    <div className={styles.tags}>
                        {post.tagsArray.map((tag, index) => (
                            <p key={index}>
                                <span>#</span>
                                {tag}
                            </p>
                        ))}
                    </div>

                        
                </>
            )}
        </div>
    )
}

export default Post
