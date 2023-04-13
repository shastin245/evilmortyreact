import React from 'react'
import './Home.css'
export default function Home() {
  return (
    <>
      <div className='legend'>
        <h1>
          Encuentra <br></br>
          tu personaje<br></br>
          favorito </h1>
      </div>

      <div class="vid-contenedor">
        <video loop autoPlay muted>
          <source src='src\assets\videoBg.mp4' type='video/mp4'/>
        </video>
      </div>
    </>
  )
}
