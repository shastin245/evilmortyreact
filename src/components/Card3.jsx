import React from 'react'
import { useState, useEffect} from 'react'
import axios from 'axios'


export default function Card3({psj}) {
    //estado para cada caracter
    const [caracteres, setCaracteres] = useState({});   
    //Estado para el manejo de la locación del personaje
    const [location, setLocation] = useState({}); 

    const obtenerCaracteresByUrl3 = (url) => {
        axios.get(url).then((response) =>{
            setCaracteres(response.data);
            setLocation(response.data.location);
        })
    }
  
    useEffect(()=>{
          obtenerCaracteresByUrl3(psj.url);
    },[])
  
    const idModal = `#${caracteres.id}`; // idModal hace referencia al id de cada personaje para que cada uno tenga un modal propio

    return (
        <div>
            <div className="card">
                <img src={caracteres.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title">{caracteres.name}</h5>
                    <p>{caracteres.name} es un personajes con estado "{caracteres.status}" de especie "{caracteres.species}"
                    y localizado en {location.name}</p>
                    <div className='text-center'>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target={idModal}>
                            Read more
                        </button>
                    </div>
                </div>
            </div><br />
            
            {/*apartado del modal*/}

            <div className="modal fade" id={caracteres.id} tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">{caracteres.name}</h1>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body">
                        <div className='text-center'>
                            <img src={caracteres.image} alt= {caracteres.name} />
                        </div>
                        <p><b>Id: {caracteres.id} </b></p>
                        <p>Estado: {caracteres.status} </p>
                        <p>Especie: {caracteres.species} </p>
                        <p>Género: {caracteres.gender} </p>
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
