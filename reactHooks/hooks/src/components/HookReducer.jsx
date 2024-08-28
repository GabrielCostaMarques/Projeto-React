import React from 'react'

import { useReducer } from 'react'

const hookReducer = () => {
    // O useReducer ele funciona como o useState porém ele ja pode atribuir uma função dentro
    //o number é igual o "state" e o dispatch é igual o "action"
    const [number,dispatch]=useReducer((state,action)=>{
        return Math.random(state)
        
    })
    
  return (
    <div>
        {/* Puxando os estados do number e o dispatch é o retorno */}
        <p>Número: {number}</p>
        <button onClick={dispatch}>Alterar Valor</button>

      <p>Usando o Reducer</p>
    </div>
  )
}

export default hookReducer
