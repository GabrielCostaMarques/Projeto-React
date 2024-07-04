import './App.css'
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import Home from './pages/Home/Home'
import About from './pages/About/About'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'

import { useState,useEffect } from 'react'
import { useAuthentication } from './hooks/useAuthentication'

//função que mapeia a autenticação do usuário
import { onAuthStateChanged } from 'firebase/auth'

import { AuthProvider } from './context/authContext'
import Dahsboard from './pages/Dashboard/Dahsboard'
import CreatPost from './pages/CreatePost/CreatPost'


function App() {

  const [user,setUser]=useState(undefined)
  const {auth}=useAuthentication()


  //segmentação para que quando o usuário estiver carregando, nada do blog carregue antes de o user receber alguma info
  const loadingUser=user===undefined

  useEffect(()=>{
    onAuthStateChanged(auth,(user)=>{
      setUser(user)
    })
  },[auth])

  if (loadingUser) {
    return <p>Carregando...</p>
  }



  

  return (
    <div className='App'>
      <AuthProvider value={user}>
        <BrowserRouter>
          <Navbar />
          <div className='container'>
            <Routes>
              <Route path="/" element={<Home />}></Route>
              <Route path="/about" element={<About />}></Route>
              <Route path="/login" element={!user?<Login />:<Navigate to="/"/>}></Route>
              <Route path="/register" element={<Register />}></Route>
              <Route path="/dashboard" element={<Dahsboard />}></Route>
              <Route path="/posts/create" element={<CreatPost />}></Route>
            </Routes>
          </div>
          <Footer />
        </BrowserRouter>
      </AuthProvider>

    </div>
  )
}

export default App
