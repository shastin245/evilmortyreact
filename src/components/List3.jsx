import React, { useEffect } from 'react'
import { useState } from 'react'
import axios from 'axios';
import Card3 from './Card3';

export default function List3() {
    //declarando estado
    const [personajeList, setPersonajeList] = useState([]);

    //metodo para obtener todos los personajes con axios
    const obtenerPersonajes3 = () =>{
        //axios.get() = peticion para obtener la información de caracteres
        axios.get("https://rickandmortyapi.com/api/character?page=3")
        .then((response)=>{
            console.log(response.data.results); //siempre response.data, results es opcional depende de la API
            setPersonajeList(response.data.results); 
        }).catch((error)=>{
            console.log(error);
        })
    }

    //montando el método obtenerPersonajes3
    useEffect(()=>{
      obtenerPersonajes3();
    },[]);

    return (
        <div className='container'>
            <h1>Lista de Personajes - Parte 3</h1>
            <div className='row'>
                {
                    personajeList.map((personajes, indice) => {
                        return (
                            <div className='col-sm-6 col-md-4 col-lg-3'>
                                <Card3 key={indice} psj={personajes}></Card3>
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

