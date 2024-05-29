// import { Link } from "react-router-dom"
import { Link } from "react-router-dom"
import { useFetch } from "../hooks/useFetch"
import "./Home.css"

export default function Home() {
    const url = "http://localhost:3000/products"
    const { data: items, loading } = useFetch(url)
    
    return (
        <div>
            <h1>Produtos</h1>
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
