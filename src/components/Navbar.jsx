import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import List from './List'
import List2 from './List2'
import List3 from './List3'
import Search from './Search'
import Search2 from './Search2'


export default function Navbar(props) {
    return (
        <BrowserRouter>
            <nav className="navbar navbar-expand-lg navbar bg-dark" data-bs-theme="dark">
                <div className="container-fluid">
                    <a className="navbar-brand" href="#">Rick and Morty</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link to='/' className="nav-link active">Home</Link>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Integrantes
                                </a>
                                <ul className="dropdown-menu">
                                    <li className="nav-item"><Link to='/Fatima' className="nav-link">Fátima</Link></li>
                                    <li className="nav-item"><Link to='/Sofia' className="nav-link">Sofía</Link></li>
                                    <li className="nav-item"><Link to='/Nuria' className="nav-link">Nuria</Link></li>
                                    <li className="nav-item"><Link to='/Rocio' className="nav-link">Rocío</Link></li>
                                    <li className="nav-item"><Link to='/Justin' className="nav-link">Justin</Link></li>
                                    <li className="nav-item"><Link to='/Johnatan' className="nav-link">Johnatan</Link></li>
                                </ul>
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
                <Route path='/Fatima' element={<List/>}/>
                <Route path='/Sofia' element={<List/>}/>
                <Route path='/Nuria' element={<List/>}/>
                <Route path='/Rocio' element={<List/>}/>
                <Route path='/Justin' element={<List/>}/>
                <Route path='/Johnatan' element={<List/>}/>                
                <Route path='/Buscador' element={<Search/>}/>
            </Routes>
        </BrowserRouter>
    )
}
