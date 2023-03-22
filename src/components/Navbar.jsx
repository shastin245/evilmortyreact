import React from 'react'

export default function Navbar(props) {
    return (
       /* Menú de navegacion para la homepage y las demás páginas del sitio */
       <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                {/*pasando la prop "namae" en el menú */}
                <a className="navbar-brand" href="#">Bienvenido, {props.namae}</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <a className="nav-link active" aria-current="page" href="#">INICIO</a>
                        <a className="nav-link" href="#">PERSONAJES</a>
                        <a className="nav-link" href="#">NOSOTROS</a>
                        <a className="nav-link" href="#">INICIAR SESION</a>

                    </div>
                </div>
            </div>
        </nav>
    )
}
