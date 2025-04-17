import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Usuarios from './pages/Usuarios'
import './App.css'
import Register from './pages/Register/Register'

function App() {

  return (
    <>
      <div>
        <BrowserRouter>
        <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/usuarios" element={<Usuarios/>} />
            <Route path="/criar-usuario" element={<Register />} />
          </Routes>
        </div>
        <Footer/>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App
