
import './App.css'

import  HookuseContext  from './components/HookuseContext'


import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import About from './Pages/About'

function App() {

  return (

      <HookuseContext>
        <h1>React |Hooks</h1>
        <BrowserRouter>
        
          <ul>
            <li>
              <Link to ="/">Home</Link>
            </li>
            <li>
              <Link to="/about">Sobre</Link>
            </li>
          </ul>
          <Routes>
            <Route path="/" element={<Home/>}></Route>
            <Route path="/about" element={<About/>}></Route>
          </Routes>
        </BrowserRouter>
      </HookuseContext>




  )
}

export default App
