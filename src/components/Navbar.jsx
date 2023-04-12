import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import List from './List'
import List2 from './List2'
import List3 from './List3'
import Search from './Search'
import AboutUs from './AboutUs'
import './Navbar.css'


export default function Navbar() {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  data-bs-theme="dark">
                <div className="container-fluid">
                <a className="navbar-brand" href="#"><img src='src\assets\logorym.png'></img></a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Integrantes' className="nav-link">Integrantes</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Listas
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><Link to='/Lista1' className="nav-link">Lista 1</Link></li>
                                    <li className="nav-item"><Link to='/Lista2' className="nav-link">Lista 2</Link></li>
                                    <li className="nav-item"><Link to='/Lista3' className="nav-link">Lista 3</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <Link to='/Buscador' className="nav-link active">Buscador</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/Lista1' element={<List/>}/>
                <Route path='/Lista2' element={<List2/>}/>                   
                <Route path='/Lista3' element={<List3/>}/>              
                <Route path='/Integrantes' element={<AboutUs/>}/>               
                <Route path='/Buscador' element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}
