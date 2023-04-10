import './App.css'
import Navbar from './Navbar/Navbar'

function App() {
  return (
    <>
      <div className="App">
        <Navbar />
      </div>

      <div class="legend">
        <h1>Encuentra <br></br>
          tu personaje<br></br>
          favorito </h1>
      </div>

      <div className="button">
        <button>BUSCAR</button>
      </div>
    </>
  )
}

export default App