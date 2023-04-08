import React, { useState, useEffect }  from 'react'

export default function Card2(props) {
    /*
    estamos pasando las props que provienen del estado de personajes
    del componente List.jsx
    */

    //Estado en donde guardar información de un personaje
    const [personajes, setPersonajes] = useState({});
    
    //Estado para el manejo de la locación del personaje
    const [location, setLocation] = useState({});

    //Obteniendo por medio de fetch cada URL de cada personaje
    const obtenerPersonajeByUrl2 = async (url) => {
        let respuesta = await fetch(url);
        let data = await respuesta.json();
        setPersonajes(data); // actualizando el estado con la información de la API
        setLocation(data.location);
    }

    //montando metodo "obtenerPersonajeByUrl2"
    useEffect(()=> {
        obtenerPersonajeByUrl2(props.url)
    }, []);
    
    console.log(personajes);  //comprobando si funciona
    
    const idModal = `#${personajes.id}`; // idModal hace referencia al id de cada personajes para que cada uno tenga un modal propio
    
    return (
        <div>
            <div className="card">
                <img src={personajes.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{personajes.name}</h5>
                    <p>{personajes.name} es un personajes con estado "{personajes.status}" de especie "{personajes.species}"
                    y localizado en {location.name}</p>
                    <div className='text-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                            Read more
                        </button>
                    </div>
                </div>
            </div><br />
            
            {/*apartado del modal*/}

            <div className="modal fade" id={personajes.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{personajes.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='text-center'>
                            <img src={personajes.image} alt= {personajes.name} />
                        </div>
                        <p><b>Id: {personajes.id} </b></p>
                        <p>Estado: {personajes.status} </p>
                        <p>Especie: {personajes.species} </p>
                        <p>Género: {personajes.gender} </p>
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
