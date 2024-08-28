import { useEffect,useState } from "react"
const HookuseEffect = () => {
    // hook sem rray de dependencias
    const [number,setNumber]=useState(1)
    const changeSomething=()=>{
      setNumber(number+1)
    }
    
    //sem array de dependecia ele executa sempre que o componente é alterado
    useEffect(()=>{
      console.log("estou sendo executado");
      
    })
    
    //com array de dependencia ele executa quando o componente é carregado
    useEffect(()=>{
      console.log("estou sendo executado com array de dependencias");
      
    },[])
    //com array de dependencia + item ele executa quando o item é carregado
    const changeSomethingAnother=()=>{
      setAnotherNumber(anotherNumber+1)
    }
    const [anotherNumber,setAnotherNumber]=useState(0)
        useEffect(()=>{
          if(anotherNumber >0){console.log("estou sendo executado apenas o anotherNumber muda ");}
        
        
    },[anotherNumber])
    
    
    
    //cleanup Useffect
    
    
    useEffect(()=>{
      const timer=setTimeout(() => {
        console.log("helloword");
        setAnotherNumber(anotherNumber+1)
      }, 2000);
    
      return()=>clearTimeout(timer)
      
    
},[anotherNumber])

  return (
    <div>
        <p>Usando UseEffect</p>
        <p>Number: {number}</p>
        <button onClick={changeSomething}>Somar</button>
        <hr />
        <hr />
        <p>Another: {anotherNumber}</p>
        <button onClick={changeSomethingAnother}>Somar</button>

        <hr />
        <hr />
        <hr />
    </div>
  )
}

export default HookuseEffect
