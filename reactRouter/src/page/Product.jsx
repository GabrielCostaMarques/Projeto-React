
import {useParams} from 'react-router-dom'

const Product = () => {

    const {id} =useParams()
  return (
    <>
        <p>ID DO PRODUTO :{id}</p>
    </>
  )
}

export default Product
