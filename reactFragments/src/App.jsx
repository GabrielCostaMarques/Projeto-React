
import Fragment from "./components/Fragments";


import './App.css'
import Container from "./components/Container";
import ExecuteFunction from "./components/ExecuteFunction";
import { useState } from "react";
import Message from "./components/Message";
import ChangeMessageState from "./components/ChangeMessageState";

function App() {

  function showMassage() {
    console.log("Evento do componente pai");
  }

  const [message, setMessage]=useState("")

  const handleMessage=(msg)=>{
    setMessage(msg)
  }

  return (
    <>
    {/* fragement é quando o bloco do código está entre <> </> ele fica fora da div pai, é um componente independente */}
  <Fragment propFragment="Testando"/>

  {/* children serve para mostrar o que tem dentro de um componente, quanod estamos querendo envolver nossso código dentro de um container */}
  <Container myValue="Teste">
    <h3>Esse é o conteúdo</h3>
  </Container>


  {/* passando função com prop */}

  <ExecuteFunction myFunctionShow={showMassage}/>

  {/* elevação de state, passando o state de filho para componente pai */}
    <Message msg={message}/>

    {/* dentro da linha de raciocío de elevação de estado, criamos um componente para poder fazer a troca da mensagem */}
    <ChangeMessageState handleMessage={handleMessage}/>  
    </>
  )
}

export default App
