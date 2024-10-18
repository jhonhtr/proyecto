import React, { useEffect } from 'react';
import './Escritorios.css';
import fondo from './imagen/fondo.png';
import QR from './pago/QR.jpg';
import esc1 from './escritorios/esc1.png';
import esc2 from './escritorios/esc2.png';
import esc3 from './escritorios/esc3.png';
import esc4 from './escritorios/esc4.png';
import esc5 from './escritorios/esc5.png';
import esc6 from './escritorios/esc6.png';
import esc7 from './escritorios/esc7.png';
import esc8 from './escritorios/esc8.png';

const Escritorios = () => {
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
                <li><a href="/">Camas</a></li>
                <li><a href="/Comedores">Comedores</a></li>
                <li><a href="">Escritorios</a></li>
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

            <div className='contenedorescritorio'>
                
                <div className='contescri1'>
                    <div className='contescri2'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc1} alt="esc1" width={200} height={210}/>                        
                        <div className='contescri3'>
                            <a className='contescri4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contescri5'>
                    <div className='contescri6'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc2} alt="esc2" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contescri7'>
                    <div className='contescri8'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc3} alt="esc3" width={200} height={210}/>
                        <div className='contescri3'>
                            <a className='contescri4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contescri9'>
                    <div className='contescri10'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc4} alt="esc4" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedorescritorio1'>
                
                <div className='contescri11'>
                    <div className='contescri12'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc5} alt="esc5" width={200} height={210}/>                        
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contescri13'>
                    <div className='contescri14'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc6} alt="esc6" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contescri15'>
                    <div className='contescri16'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc7} alt="esc7" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contescri17'>
                    <div className='contescri18'>
                        <h4>Escritorio 100% en Madera</h4>
                        <img src={esc8} alt="esc8" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

                        <div className='pago'>                
                <div className='pago1'>
                    <div className='pago2'>
                        <h4>Para realizar tu pedido <br/><br/>
                        Contactar al: <a target="_blank" rel="noopener noreferrer" 
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

export default Escritorios;