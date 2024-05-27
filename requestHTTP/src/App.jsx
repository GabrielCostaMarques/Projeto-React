import { useState, useEffect } from 'react'

import './App.css'

const URL = "http://localhost:3000/products"
function App() {


  const [products, setProducts] = useState([])

  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  useEffect(() => {
    async function fetchData() {
      const res = await fetch(URL);
      const data = await res.json();
      setProducts(data)
    }

    fetchData();
  }, []);

  //add procuts

  const handleSubmit = async (e) => {
    e.preventDefault();

    const product={
      name,
      price,
    }

    //fazendo um post 
    const res=await fetch(URL,{
      //temos de escolher nosso método
      method:"POST",
      //cabeçalho da requisição, qual tipo de conteúdo que estamos enviando
      headers:{
        "Content-Type":"application/json"
      },

      //definindo o corpo da requisição, transformando ele em JSON
      body:JSON.stringify(product)
    })


    
    // const addProduct

  }
  return (
    <>
      <p>Lista de Produto</p>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            {product.name} - R$: {product.price}
          </li>
        ))}

        <div className="add-product">
          <form onSubmit={handleSubmit}>
              <label>
                Nome:
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>

                Price:
                <input type="number" name='price' value={price} onChange={(e)=>setPrice(e.target.value)}/>
              </label>

              <input type="submit" name="Criar" value="Criar"/>
          </form>
        </div>
      </ul>
    </>
  )
}

export default App
