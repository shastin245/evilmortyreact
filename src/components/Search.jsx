import React, { useState } from 'react'

export default function Search() {
    //estado para obtener información del personaje en base a su nombre
    const [buscar, setBuscar] = useState([]) // [] porque es arreglo
    //estado para obtener el nombre del personaje
    const [nombre, setNombre] = useState("") // "" porque es cadena
    //estado para obtener el nombre del personaje
    const [estado, setEstado] = useState("") // "" porque es cadena
 
    //estado para obtener el nombre del personaje
    const obtenerPersonajeByName = async() => {
        //hacemos referencia al nombre que manejamos en el estado para obtener información de dicho personaje
        const respuesta = await fetch(`https://rickandmortyapi.com/api/character/?name=${nombre}&status=${estado}`);
        const data  = await respuesta.json();
        setBuscar(data.results);
    }
 
    //capturando el nombre del personaje por medio de un input 
    const handleName = (e) => {
        console.log(e.target.value); //comprobando si captura el value de input
        setNombre(e.target.value);//llamando al estado nombre para guardar el value del input
    }
 
    //asignando el método del formulario
    const handleSubmit = (e) => {
        e.preventDefault(); //cancelando el boton submit
        obtenerPersonajeByName();
    }
 
    //capturando el nombre del personaje por medio de un input 
    const handleStatus = (e) => {
        //console.log(e.target.value); //comprobando si captura el value de input
        setEstado(e.target.value);//llamando al estado nombre para guardar el value del input
    }
 
    console.log(buscar);
    return (
        <div className='container'>
            <div className='row'>
                <form className='row g-3'>
                    <div className="col-md-6">
                        <label htmlFor=""><h4>Ingrese el nombre del personaje</h4></label>
                        <input type="text" placeholder='Ingrese personaje' className='form-control' onChange={handleName}/> <br/>
                    
                    </div>
                    
                    <div className='col-md-6'>
                        <label htmlFor=""><h4>Ingrese el estado del personaje</h4></label>
                        <input type="text" placeholder='Alive, Dead o Unknown' className='form-control' onChange={handleStatus}/> <br/>
                        
                    </div>
                    <button className='btn btn-dark' onClick={handleSubmit}>Buscar personaje</button><br />
                </form><br />
            </div>
 
             
            <div className='row'>
            {                 
                buscar == undefined ? <h1>No hay datos</h1>:
                (
                buscar.filter((psj) => {
                    //Enviando la información del estado otro componente mediante props
                    return (
                        psj.status.toLowerCase().includes(estado) || psj.name.includes(estado)
                    )
                }).filter((psj) => {
                    //Enviando la información del estado otro componente mediante props
                    return (
                        psj.name.toLowerCase().includes(nombre) || psj.name.includes(nombre)
                    )
                }).map((psj, indice) => {
                    //Enviando la información del estado otro componente mediante props
                    return (                         
                        <div className='col-sm-6 col-md-4 col-lg-3'>
                            <div className="card" key={indice}>
                                <img src={psj.image} className="card-img-top" alt="..."/>
                                <div className="card-body">
                                    <h5 className="card-title">{psj.name}</h5>
                                    <p>{psj.name} es un personaje con estado "{psj.status}" de especie "{psj.species}" 
                                    y de género "{psj.gender}"</p>
                                </div>
                            </div> <br />                           
                        </div>                             
                    )
                })
                ) 
            }
            </div>
        </div>
    )
}
