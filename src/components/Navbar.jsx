import React from 'react'
import { BrowserRouter, Route, Routes, Link} from 'react-router-dom'
import List from './List'
import List2 from './List2'


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
                            <li className="nav-item">
                                <Link to='/Lista1' className="nav-link">Lista 1</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Lista2' className="nav-link">Lista 2</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <Routes>
                <Route path='/' element={<List/>}/>
                <Route path='/Lista1' element={<List/>}/>
                <Route path='/Lista2' element={<List2/>}/>
            </Routes>
        </BrowserRouter>
    )
}
