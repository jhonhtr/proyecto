import React, { useEffect } from 'react';
import juvenilImage from './imagen/juvenil.png';
import './contactanos.css';
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
                <li><a href="/galeria">Prédicas</a></li>
                <li><a href="/inicio1">Canciones</a></li>
                <li><a href="">Contactanos</a></li>
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

            <div className='cont'>
                <div className='cont1'>
                    <h4 className='context'>Si tienes entre 15 y 26 años llámanos o escribenos <br/>
                        al siguiente Número:
                    </h4>
                    <div className='cont2'>
                        <a className='context1' target="_blank" rel="noopener noreferrer" 
                        href="https://wa.me/+573007427747">300 742 7747</a>
                    </div>
                </div>
            </div>

            <div className='canales'>

                <div className='canal'>
                    <div className='canal1'>
                        <h4 className='canaltext'>Sigue nuestros canales oficiales en<br/>
                            Facebook y Whatsapp:
                        </h4>
                    </div>
                    <div className='botones'>
                        <div className='canal2'>
                            <a className='canal2text' target="_blank" href="https://www.facebook.com/profile.php?id=100064413352968">Facebook</a>
                        </div>
                        <div className='canal3'>
                            <a className='canal3text' target="_blank" href="https://whatsapp.com/channel/0029VaMnYusK5cDGi9D9OY0q">Whatsapp</a>
                        </div>
                    </div>
                </div>
                
                <div className='map'>
                    <div className='map1'>
                        <h4 className='maptext'>Ubicanos en Google<br/>
                        maps:</h4>
                        <div className='map2'>
                            <a className='botonmaptext' target="_blank" href="https://www.google.com/maps/place/Iglesia+Jesucristo+Olor+Fragante/@4.6401906,-74.1958572,18z/data=!4m6!3m5!1s0x8e3f9d03ea37450d:0xa42d2cfaeb03d594!8m2!3d4.6404992!4d-74.1954905!16s%2Fg%2F11tt6vngxy?entry=ttu">Ubicación</a>
                        </div>
                    </div>                    
                </div>
            </div>                                          

            <div className='lema'>
                <h3>"Jóvenes Conforme al Corazón de Dios"</h3>
            </div>

            <footer>
                <section className='pie'>
                    <p>Desarrollador: Jhon Harris Tierradentro</p>               
                    <a target="_blank" rel="noopener noreferrer" 
                    href="https://wa.me/+573205119854">+573205119854</a>
                    /<a target="_blank" rel="noopener noreferrer" href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a>
                    <a href="#titulojofra">- ir al comienzo</a>
                </section>
                <p>Lider Juvenil: Yairis González Villadiego<br/>                
                Derechos Reservados- Copyright 2024</p>
            </footer>
        </div>
    );
};

export default Contactanos;