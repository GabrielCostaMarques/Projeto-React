//esse hook serve para redirecionar o usuário
import {useNavigate} from 'react-router-dom'

import { useState } from 'react'


const SearchForms = () => {

    //atribuindo uma varivel para a função
    const navigate=useNavigate()
    const [query,setQuery]=useState()


    const handleSubmit=(e)=>{
        
        e.preventDefault();
        //definindo o redirecionamento da busca
        navigate("/search?q="+query)
    }

  return (
    <form onSubmit={handleSubmit}>
        <label>
            <input type="text" onChange={(e)=>{setQuery(e.target.value)}} value={query}/>
        </label>
        <label>
            <input type="submit" value="Buscar"/>
        </label>
    </form>
  )
}

export default SearchForms