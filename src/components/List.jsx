import React,  { useState, useEffect}  from 'react'
import Card from './Card';

export default function List() {

    //creando estado para guardar el listado de personajes
    
    const [personajes, setPersonajes] = useState([]);
    
    /*creando metodo para obtener la API de Rick and Morty
    función asíncrona porque nos estamos conectando a una API de otro servidor*/
    const obtenerPersonajes = async () => {
        let respuesta = await fetch('https://rickandmortyapi.com/api/character');
        let data = await respuesta.json();
        setPersonajes(data.results); // actualizando el estado con la información de la API
    }

    /*
    Hook useEffect(): tiene 2 parámetros
    primer parámetro = hacer efecto a un estado o método
    segundo parámetro = es el proceso del renderizado /[]/ vacío
    */
    useEffect(() => {
        obtenerPersonajes();
    },[]);

    console.log(personajes);//llamando al estado para verificar si tiene a los personajes

    return (
        <div className='container'>
            <h1>Lista de Personajes  - Parte 1</h1>
            <div className='row'>
                {
                    personajes.map((psj, indice) => {
                        //Enviando la información del estado otro componente mediante props
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3'>
                                <Card key={indice} {...psj}></Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
