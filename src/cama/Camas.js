import React, { useEffect } from 'react';
import './camas.css';
import fondo from './imagen-inicio/fondo.png';
import cama1 from './camas/cama1.png';
import cama2 from './camas/cama2.png';
import cama3 from './camas/cama3.png';
import QR from './pago/QR.jpg';


const Camas = () => {
    useEffect(() => {
        document.body.style.backgroundImage = `url(${fondo})`; // Usa la variable renombrada        
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
                <li><a href="">Camas</a></li>
                <li><a href="/Comedores">Comedores</a></li>
                <li><a href="/Escritorios">Escritorios</a></li>
                <li><a href="/Muebles">Muebles</a></li>
                <li><a href="/Ventanas">Ventanas</a></li>

                <div className='encabezado'>
                    <div className='titulo'>
                        <div className='titulo1'>                                    
                            <h3>Muebles Imac - Todo en Madera</h3>                    
                        </div>                    
                    </div>
                </div>
            </ul>  

            <div className='contened'>
                
                <div className='contd1'>
                    <div className='contd2'>
                        <h4>Cama dorado 100% en Madera</h4>
                        <img src={cama1} alt="cama1" width={200} height={210}/>                        
                        <div className='contd3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contd5'>
                    <div className='contd6'>
                        <h4>Cama dorado 100% en Madera</h4>
                        <img src={cama2} alt="cama2" width={200} height={210}/>
                        <div className='contd3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>
            </div>

            <div className='contened1'>                
                <div className='contd7'>
                    <div className='contd8'>
                        <h4>Cama dorado 100% en Madera</h4>
                        <img src={cama3} alt="cama3" width={200} height={210}/>                        
                        <div className='contd3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
            </div>

            <div className='pago'>                
                <div className='pago1'>
                    <div className='pago2'>
                        <h4>Realiza tu pago a través de Banco Estado <br/>
                        Al número de cuenta: 28116469-4 <br/><br/>
                        A nombre de: Michael Amín Tierradentro R.<br/>
                        Pago QR Banco Estado</h4>
                        <img src={QR} alt="QR" width={200} height={210}/>
                        <div className='botones'>
                            <div className='botonbancoestado'>
                                <a className='textobancoestado' target="_blank" rel="noopener noreferrer" href="https://play.google.com/store/apps/details?id=net.veritran.becl.prod">Banco Estado</a>
                            </div>
                            <div className='botonenvio'>
                                <a className='textoenviar' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Enviar Comprobante</a>
                            </div>
                        </div> 
                    </div>                                       
                </div>
            </div>

            <div className='lema'>
                <h3>"Somos Fabricantes"</h3>
            </div>

            <footer>
                <section className='pie'>
                    <p>Desarrollador: Harris Tierradentro</p>               
                    <a target="_blank" rel="noopener noreferrer" 
                    href="https://wa.me/+573205119854">+573205119854</a>
                     / <a target="_blank" rel="noopener noreferrer" 
                     href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a>                    
                </section>
                <p>CEO: Michael Amín Tierradentro<br/>
                Contacto: <a target="_blank" rel="noopener noreferrer" 
                    href="https://wa.me/+573205119854">+56949165634</a><br/>
                Derechos Reservados- Copyright 2024</p>
            </footer>
        </div>
    );
};

export default Camas; 


