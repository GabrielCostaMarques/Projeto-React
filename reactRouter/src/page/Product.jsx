
import {Link, useParams} from 'react-router-dom'
import { useFetch } from './../hooks/useFetch';

const Product = () => {
        //rota dinâmica
        const {id} =useParams()

        const url="http://localhost:3000/products/"+id
        //carregamento do dado individual
        const {data:product,loading}=useFetch(url)

  return (
    <>
        <p>ID DO PRODUTO :{id}</p>
        {loading&& <p>Carregando...</p>}
        {product && (
            <div>
                <h1>{product.name}</h1>
                <p>{product.price}</p>
                {/* Nested Route */}
                <Link to={`/products/${product.id}/info`}>Mais informações</Link>
            </div>
        )}
    </>
  )
}

export default Product
