import './App.css'

import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home/Home' //Se não for trocar o segundo "H" por maiusculo 
import Login from './pages/Login/Login'


function App() {
  
  return (
    <>
      <Navbar />
      <Home />
      <Login/>
      <Footer />
    </>
  )
}

export default App
