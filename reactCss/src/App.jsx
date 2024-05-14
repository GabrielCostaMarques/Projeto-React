import './App.css'
import Component from './components/Component'
import Title from './components/Title'

function App() {
    const n =10
  
    const redTitle=true

  return (
    <>
      <h1>React com Css</h1>

      {/* CSS de componente */}
      <Component/>
      <p>Esse parágrafo é do App.js</p>
      
      {/* css inline dinâmico */}
      <h2 style={n<10?(
        {color:'black'}
      ):({color:'red'})}>css dinâmico</h2>

      {/* Classe dinâmica */}

      <h2 className={redTitle ?"red-title":"title"}>Esse titulo tem classe dinâmica</h2>
      
      {/* css module */}
      <Title/>
    </>
  )
}

export default App
