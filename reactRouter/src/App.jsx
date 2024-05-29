import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import NavBar from './components/NavBar'
import Product from './page/Product'

function App() {

  return (
    <>
      <h1>react Router</h1>

      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<About/>}/>
          {/* rota dinâmica */}
          <Route path="/products/:id" element={<Product/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
