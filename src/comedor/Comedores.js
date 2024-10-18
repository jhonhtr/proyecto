import React, { useEffect } from 'react';
import './Comedores.css';
import fondo from './imagen/fondo.png';
import come1 from './comedores/come1.png';
import come2 from './comedores/come2.png';
import come3 from './comedores/come3.png';
import come4 from './comedores/come4.png';
import come5 from './comedores/come5.png';
import come6 from './comedores/come6.png';
import come7 from './comedores/come7.png';

const Comedores = () => {
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
                <li><a href="">Comedores</a></li>
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

            <div className='contenedcomedor'>
                
                <div className='contcom1'>
                    <div className='contcom2'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come1} alt="come1" width={200} height={210}/>                        
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contcom5'>
                    <div className='contcom6'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come2} alt="come2" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contcom7'>
                    <div className='contcom8'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come3} alt="come3" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contcom9'>
                    <div className='contcom10'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come4} alt="come4" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedcomedor1'>

            <div className='contcom11'>
                    <div className='contcom12'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come5} alt="come5" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contcom13'>
                    <div className='contcom14'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come6} alt="come6" width={200} height={210}/>
                        <div className='contcom3'>
                            <a className='contcom4' target="_blank" rel="noopener noreferrer" href="https://wa.me/+56949165634">Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contcom15'>
                    <div className='contcom16'>
                        <h4>Comedor 100% en Madera</h4>
                        <img src={come7} alt="come7" width={200} height={210}/>
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

export default Comedores;
