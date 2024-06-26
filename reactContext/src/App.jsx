
import './App.css'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Data from './pages/Data'
import NavBar from './components/NavBar'

function App() {

  return (
    <>
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/about'element={<About/>}/>
          <Route path='/data'element={<Data/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
