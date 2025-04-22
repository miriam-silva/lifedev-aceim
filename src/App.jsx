import { BrowserRouter, Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home' //Se não for trocar o segundo "H" por maiusculo 
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import './App.css'

function App() {
  
  return (
    <>
    <div>
      <BrowserRouter>
      <Navbar/>
        <div className="container">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<Login />}></Route>
            <Route path="/register" element={<Register />}></Route>
          </Routes>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
    </>
  )
}

export default App
