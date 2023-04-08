import React,  { useState, useEffect}  from 'react'
import Card2 from './Card2';

export default function List2() {
    //creando estado para guardar el listado de personajes
    const [personajes, setPersonajes] = useState([]);
        
    /*creando metodo para obtener la API de Rick and Morty
    función asíncrona porque nos estamos conectando a una API de otro servidor*/
    const obtenerPersonajes2 = async () => {
        let respuesta = await fetch('https://rickandmortyapi.com/api/character?page=2');
        let data = await respuesta.json();
        setPersonajes(data.results); // actualizando el estado con la información de la API
    }

    /*
    Hook useEffect(): tiene 2 parámetros
    primer parámetro = hacer efecto a un estado o método
    segundo parámetro = es el proceso del renderizado /[]/ vacío
    */
    useEffect(() => {
        obtenerPersonajes2();
    },[]);

    console.log(personajes);//llamando al estado para verificar si tiene a los personajes

    return (
        <div className='container'>
            <h1>Lista de Personajes  - Parte 2</h1>
            <div className='row'>
                {
                    personajes.map((psjs, indice) => {
                        //Enviando la información del estado otro componente mediante props
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3'>
                                <Card2 key={indice} {...psjs}></Card2>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}
