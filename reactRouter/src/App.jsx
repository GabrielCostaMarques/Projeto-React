import './App.css'

import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from './page/Home'
import About from './page/About'
import NavBar from './components/NavBar'
import Product from './page/Product'
import Info from './page/Info'
import NotFound from './page/NotFound'

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
          {/* Nested Route */}
          <Route path="/products/:id/info" element={<Info/>}/>
          {/* set no match route */}
          <Route path="*" element={<NotFound/>}/>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
