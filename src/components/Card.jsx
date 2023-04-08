import React, { useState, useEffect } from 'react'

export default function Card(props) {
    /*
    estamos pasando las props que provienen del estado de personajes
    del componente List.jsx
    */

    //Estado en donde guardar información de un personaje
    const [personaje, setPersonaje] = useState({});
    
    //Estado para el manejo de la locación del personaje
    const [location, setLocation] = useState({});

    //Obteniendo por medio de fetch cada URL de cada personaje
    const obtenerPersonajeByUrl = async (url) => {
        let respuesta = await fetch(url);
        let data = await respuesta.json();
        setPersonaje(data); // actualizando el estado con la información de la API
        setLocation(data.location);
    }

    //montando metodo "obtenerPersonajeByUrl"
    useEffect(()=> {
        obtenerPersonajeByUrl(props.url)
    }, []);
    
    console.log(personaje);  //comprobando si funciona
    
    const idModal = `#${personaje.id}`; // idModal hace referencia al id de cada personaje para que cada uno tenga un modal propio
    
    return (
        <div>
            <div className="card">
                <img src={personaje.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <p>{personaje.name} es un personaje con estado "{personaje.status}" de especie "{personaje.species}"
                    y localizado en {location.name}</p>
                    <div className='text-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                            Read more
                        </button>
                    </div>
                </div>
            </div><br />
            
            {/*apartado del modal*/}

            <div className="modal fade" id={personaje.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{personaje.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='text-center'>
                            <img src={personaje.image} alt= {personaje.name} />
                        </div>
                        <p><b>Id: {personaje.id} </b></p>
                        <p>Estado: {personaje.status} </p>
                        <p>Especie: {personaje.species} </p>
                        <p>Género: {personaje.gender} </p>
                        <p>Locación: {location.name}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal">Close</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
