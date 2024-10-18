import React, { useEffect } from 'react';
import './camas.css';
import fondo from './imagen-inicio/fondo.png';
import cama1 from './camas/cama1.png';
import cama2 from './camas/cama2.png';
import cama3 from './camas/cama3.png';


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
                    <div className="ref-text">ref001</div> {/* Texto en la esquina superior derecha */}
                    <div className='contd2'>
                        <h4>Cama dorado 100% en Madera</h4>
                        <img src={cama1} alt="cama1" width={200} height={210}/>                        
                        <div className='contd3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contd5'>
                    <div className="ref-text">ref002</div> {/* Texto en la esquina superior derecha */}
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
                    <div className="ref-text">ref003</div> {/* Texto en la esquina superior derecha */}
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
                        <h4>Para realizar tu pedido <br/><br/>
                        Contactar al: <a className='contacto' target="_blank" rel="noopener noreferrer" 
                        href="https://wa.me/+573205119854">+56 949165634</a><br/> <br/><br/>
                        Fabricante: Michael Amín Tierradentro R.<br/></h4>                        
                        <div className='botones'>                            
                            <div className='botonenvio'>
                                <a className='textoenviar' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Whatsapp</a>
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
                    <p>CEO: Michael Amín Tierradentro</p>               
                    Contacto: <a target="_blank" rel="noopener noreferrer" 
                    href="https://wa.me/+573205119854">+56949165634</a><br/>                        
                </section>
                <p>Desarrollador: Harris Tierradentro<br/>
                <a target="_blank" rel="noopener noreferrer" 
                    href="https://wa.me/+573205119854">+573205119854</a>
                     / <a target="_blank" rel="noopener noreferrer" 
                     href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a><br/>                
                Derechos Reservados- Copyright 2024</p>
            </footer>
        </div>
    );
};

export default Camas; 


