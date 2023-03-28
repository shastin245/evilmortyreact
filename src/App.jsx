import React from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Char from './components/Char'
import About from './components/About'
import Login from './components/Login'
import videoBg from './assets/videoBg.mp4'
import { Route, Routes } from "react-router-dom"


// Esta función está relacionada con la mencionada en Navbar.jsx
// Había dejado las rutas según lo importado, pero me generaba conflicto y no se renderizaba el contenido
function App() {
  return (
    <>
      <Navbar />
      <div className='container'>
        <Routes>
          <Route path='/home' />
          <Route path='/char' />
          <Route path='/about' />
          <Route path='/login' />
        </Routes>
      </div>

      <div className='videobg'>

        <div className="warning">
          <h1>Encuentra <br></br>
            tu personaje <br></br>
            favorito <br></br>
          </h1>
          <a className='button' href='/char'>BUSCAR</a>
        </div>
  
        <video src={videoBg} autoPlay loop muted />
      </div>



    </>


  )
}

export default App