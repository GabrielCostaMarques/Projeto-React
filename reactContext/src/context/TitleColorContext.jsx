import { createContext,useReducer } from "react";

export const TitleColorContext=createContext()

export const TitleColorContextProvider = ({children}) => {


  const titleColorReducer = (state,action)=>{

    //switch para aplicar função

    switch (action.type) {
      case "RED":
        return{...state,color:"red"};
      case "BLUE":
        return{...state,color:"blue"};
      case "GREEN":
        return{...state,color:"green"};
      default:
        return state
     
    }

  }
  //usando o useReducer
  // temos como o "state" pegando o estado das constantes e o "dispatch" sendo a função que troca o contexto
  //dentro do useReducer() vamos colocar os valores padrões que queremos o "titleColorReducer" vai ser o alterador do estado e dentro de chaves é o valor default
  const [state,dispatch]=useReducer(titleColorReducer,{color:"purple"})

    console.log("Situação do state",state );
  return (
    //Colocando o value no provider para que os componentes que estiverem dentro do provider poder acessar td do value
    <TitleColorContext.Provider value={{...state,dispatch}}>
        {children}
    </TitleColorContext.Provider>
  )
}

export default TitleColorContextProvider
