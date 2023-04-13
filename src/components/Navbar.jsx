import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import List from './List'
import List2 from './List2'
import List3 from './List3'
import Search from './Search'
import AboutUs from './AboutUs'
import Logout from './Logout'
import Perfil from './Perfil'
import Home from './Home'


export default function Navbar(props) {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark"  data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rick and Morty - Welcome {props.name}</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Integrantes' className="nav-link active">Integrantes</Link>
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
                            <li className="nav-item">
                                <Link to='/Perfil' className="nav-link active">Perfil</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Logout' className="nav-link active">Logout</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<Home/>}/>
                <Route path='/Lista1' element={<List/>}/>
                <Route path='/Lista2' element={<List2/>}/>                   
                <Route path='/Lista3' element={<List3/>}/>              
                <Route path='/Integrantes' element={<AboutUs/>}/>               
                <Route path='/Buscador' element={<Search/>}/>               
                <Route path='/Logout' element={<Logout/>}/>              
                <Route path='/Perfil' element={<Perfil/>}/>
            </Routes>
        </BrowserRouter>
    )
}
