import { useSearchParams,Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

const Search = () => {
    //nao precisa de set porque queremos apenas pegar o valor
    const [searchParams]=useSearchParams()

    const url="http://localhost:3000/products?"+searchParams

    const{data:items,loading}=useFetch(url)


  return (
    <div>
        <h1>Resultados disponíveis</h1>
        {loading && <p>carregando...</p>}
            <ul className="products">
                {items && items.map(item => (
                    <li key={item.id}>
                        <h2>{item.name}</h2>
                        <p>{item.price}</p>
                        {/* Rota dinâmica */}
                        <Link to={`/products/${item.id}`}>Detalhes</Link>
                    </li>
                ))}
            </ul>
    </div>
  )
}

export default Search