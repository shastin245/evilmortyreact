import React, {useState} from 'react'
import './Home.css'


const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false)
    return(
        <>
        <div className= "navbar">
            <div className="nav_logo">
            <img src="src\assets\logorym.png"></img>
             </div>
             
            <div className={`nav_menu ${isOpen && "open"}`}>
                <a href='#home'>INICIO</a>
                <a href='#char'>PERSONAJES</a>
                <a href='#about'>NOSOTROS</a>
                <a href='#login'>INICIAR SESIÓN</a>
            </div>

            <div className= {`nav_toggle ${isOpen && "open"}`} 
                            onClick={ () => setIsOpen(!isOpen)} >
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>


        
        </>  
    )
    
}
export default Home