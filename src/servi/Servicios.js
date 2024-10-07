import React, { useEffect } from 'react';
import juvenilImage from './imagen/juvenil.png';
import './Servicios.css';
import gg from './imagen/gg.jpg';
import logo1 from './imagen/logo1.png';

const Servicio = () => {
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
                <li><a href="">Servicios</a></li>
                <li><a href="/Predicas">Prédicas</a></li>
                <li><a href="/Videos">Canciones</a></li>
                <li><a href="/Contactanos">Contactanos</a></li>
            </ul>

            <div className='encabezado'>
                    <div className="logo">                        
                        <div className='titulojofra'>
                        <img className='logojofra' src={logo1} alt="logo1" width={118} height={130}/> <br />                   
                            <h3>JOFRA BOGOTA D.C.<br />
                            IGLESIA EVANGELICA<br />
                            JESUCRISTO OLOR FRAGANTE
                            </h3>
                        </div>
                    </div>            

                    <div className='titulo'>
                        <div className='img'>
                            <img src={gg} alt="gg" width={118} height={130}/>
                        </div>
                        <div className='titulo1'>                                    
                            <h1>Ministerio Juvenil Generación de Gracia</h1>                    
                        </div>                    
                    </div>
            </div>

            <div className='servicios'>
                <div className='servicios1'>
                    <p className='p1'>Domingo<br/>
                    Culto Congregacional<br/>
                    09:00 am - 12:30 pm</p>
                </div>
                <div className='servicios2'>
                    <p className='p2'>Martes<br/>
                    Culto de Liderazgo<br/>
                    07:00 pm - 08:30 pm</p>
                </div>
                <div className='servicios3'>
                    <p className='p3'>Miércoles<br/>
                    Culto de Damas<br/>
                    07:00 pm - 08:30 pm</p>
                </div>
            </div>
            <div className='servi'>
                <div className='servicios4'>
                    <p className='p4'>Jueves<br/>
                    Culto de Damas<br/>
                    07:00 pm - 08:30 pm</p>
                </div>
                <div className='servicios5'>
                    <p className='p5'>Viernes<br/>
                    Culto de Oración<br/>
                    07:00 pm - 08:30 pm</p>
                </div>
                <div className='servicios6'>
                    <p className='p6'>
                    Sábado<br/>
                    Culto de Niños<br/>
                    04:00 pm - 06:00 pm<br/>
                    Culto de Jóvenes<br/>
                    07:00 pm - 08:30 pm</p>
                </div>
            </div>

            <div className='invitacion'>
                <div className='inv1'>
                    <h4 className='invp'>¿Tienes una petición<br/>
                    en especial?
                    </h4>
                    <div className='inv2'>
                        <a className='contacto' target="_blank" rel="noopener noreferrer" 
                        href="https://wa.me/+573235458554"> Escribenos aquí</a>
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

export default Servicio;