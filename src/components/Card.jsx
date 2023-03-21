import React, { useState, useEffect } from 'react'

export default function Card(props) {
    /*
    estamos pasando las props que provienen del estado de personajes
    del componente List.jsx
    */

    //Estado en donde guardar información de un personaje
    const [personaje, setPersonaje] = useState({});

    //Obteniendo por medio de fetch cada URL de cada personaje
    const obtenerPersonajeByUrl = async (url) => {
        let respuesta = await fetch(url);
        let data = await respuesta.json();
        setPersonaje(data); // actualizando el estado con la información de la API
    }

    //montando metodo "obtenerPersonajeByUrl"
    useEffect(()=> {
        obtenerPersonajeByUrl(props.url)
    }, []);
    
    console.log(personaje);  //comprobando si funciona
    
    const idModal = `#${personaje.id}`; // idModal hace referencia al id de cada personaje para que cada uno tenga un modal propio
    
    return (
        <div>
            <div className='card'>
                <div className="card-body">
                    <h5 className="card-title">{personaje.name}</h5>
                    <img src={personaje.image} alt="" />
                    <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                        Watch more
                    </button>
                </div>
            </div> <br />
            
            {/*apartado del modal*/}

            <div className="modal fade" id={personaje.id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{personaje.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <img src={personaje.image} alt= {personaje.name} />
                        <p><b>Id: {personaje.id} </b></p>
                        <p><b>Estado: {personaje.status} </b></p>
                        <p><b>Especie: {personaje.species} </b></p>
                        <p><b>Género: {personaje.gender} </b></p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" className="btn btn-primary">Save changes</button>
                    </div>
                    </div>
                </div>
            </div>

        </div>
    )
}
