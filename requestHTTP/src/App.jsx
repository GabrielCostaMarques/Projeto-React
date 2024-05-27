import { useState, useEffect } from 'react'

import './App.css'

const URL = "http://localhost:3000/products"
function App() {


  const [products, setProducts] = useState([])

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data)
    }
    console.log(products);
  
    fetchData();
  }, []);
  
  console.log(products);
  return (
    <>
      <p>Lista de Produto</p>
      <ul>
        {products.map((product)=>(

          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>

        ))}
      </ul>
    </>
  )
}

export default App
