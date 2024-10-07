import React, { useEffect } from 'react';
import juvenilImage from './imagen/juvenil.png';
import './canciones.css';
import gg from './imagen/gg.jpg';

const Contactanos = () => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${juvenilImage})`; // Usa la variable renombrada        
        document.body.style.backgroundSize = "cover";
        document.body.style.backgroundAttachment = "fixed";

    // Limpieza al desmontar el componente
        return () => {
        document.body.style.backgroundImage = ""; // Restablece el fondo
        };
        }, 
    []); // El segundo argumento vacío asegura que esto se ejecute solo una vez al montar

    return (
        <div>        
            <ul className="menu">
                <li><a href="/">Inicio</a></li>
                <li><a href="/Servicios">Servicios</a></li>
                <li><a href="/Predicas">Prédicas</a></li>
                <li><a href="">Canciones</a></li>
                <li><a href="/Contactanos">Contactanos</a></li>
            </ul>

            <table className="logo">
                <tr><h3>
                    <th id="titulojofra"> 
                    <img src={gg} alt="gg" width={118} height={130}/> <br/>                   
                    Generación de Gracia<br />
                    Iglesia Evangélica
                    Jesucristo Olor Fragante</th>
                    </h3>
                </tr>
            </table>

            
            <div className='lema'>
                <h3>"Jóvenes Conforme al Corazón de Dios"</h3>
            </div>            
        </div>
    );
};

export default Contactanos;