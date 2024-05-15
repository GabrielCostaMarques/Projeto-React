import './App.css'
import MyForm from './components/MyForm'

function App() {
  
  return (
    <>
  <h2>Forms</h2>
  {/* Usando props no Myform simulando a situação de edição */}
  <MyForm user={{name:"Gabriel", email:"gabriel@gmail.com", descricao:"Nao sei oq dizer", role:"admin"}}/>
    </>
  )
}

export default App
