import './App.css'
import ConditionalRender from './components/ConditionalRender'
import ListRender from './components/ListRender'
import ManageData from './components/Managedata'

function App() {


  return (
    <>
      <h1>Avançado no React</h1>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
    </>
  )
}

export default App
