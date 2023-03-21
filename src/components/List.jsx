import React,  { useState, useEffect}  from 'react'
import Card from './Card';

export default function List() {

     /*
    creando estado para guardar el listado de personajes
    */
    const [personajes, setPersonajes] = useState([]);
    
    /*creando metodo para obtener la API de Rick and Morty
    trabajando con una función asíncrona porque nos estamos conectando a una API de otro servidor*/
    const obtenerPersonajes = async () => {
        let respuesta = await fetch('https://rickandmortyapi.com/api/character');
        let data = await respuesta.json();
        setPersonajes(data.results); // actualizando el estado con la información de la API
    }

    /*
    Hook useEffect(), el estado tendrá 2 parametros
    primer parametro = hacer efecto a  un estado, método
    segundo parametro = es el proceso del renderizado /[]/ vacío
    */
    useEffect(() => {
        obtenerPersonajes();
    },[]);

    console.log(personajes);//llamando al estado para verificar si tiene a los pokemones

    return (
        <div className='container'>
            <h1>Lista de Personajes</h1>
            <div className='row'>
                {
                    personajes.map((psj, indice) => {
                        //Enviando la información del estado otro componente mediante props
                        return (
                            <div className='col-md-4'>
                                <Card key={indice} {...psj}></Card>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
