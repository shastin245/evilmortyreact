import { Children } from "react"
//Función para movimiento/interacción en el menú de navegación
export default function Navbar() {
    return (
        <nav className="nav">
            <a href="/" className="rymsite">
         <img src="src\assets\Logorym.png"></img>
            </a>
            <ul>
                <CustomLink href="/home">Home</CustomLink>
                <CustomLink href="/char">Personajes</CustomLink>
                <CustomLink href="/about">Nosotros</CustomLink>
                <CustomLink href="/login">Iniciar sesión</CustomLink>
            </ul>
        </nav>
    )
}

// Función para sombrear en cuál de las opciones del menú está ubicado, a través de "active"

function CustomLink({ href, children, ...props }) {
    const path = window.location.pathname
    return (
        <li className={path === href ? "active" : ""}>
            <a href={href} {...props}>
                {children}
            </a>
        </li>
    )
}