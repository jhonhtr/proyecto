import React, { useEffect } from 'react';
import './muebles.css';
import fondo from './imagen/fondo.png';
import mue1 from './muebles/mue1.png';
import mue2 from './muebles/mue2.png';
import mue3 from './muebles/mue3.png';
import mue4 from './muebles/mue4.png';
import mue5 from './muebles/mue5.png';
import mue6 from './muebles/mue6.png';
import mue7 from './muebles/mue7.png';
import mue8 from './muebles/mue8.png';
import mue9 from './muebles/mue9.png';
import mue10 from './muebles/mue10.png';
import mue11 from './muebles/mue11.png';
import mue12 from './muebles/mue12.png';
import mue13 from './muebles/mue13.png';
import mue14 from './muebles/mue14.png';
import mue15 from './muebles/mue15.png';
import mue16 from './muebles/mue16.png';
import mue17 from './muebles/mue17.png';
import mue18 from './muebles/mue18.png';
import mue19 from './muebles/mue19.png';
import mue20 from './muebles/mue20.png';
import mue21 from './muebles/mue21.png';
import mue22 from './muebles/mue22.png';
import mue23 from './muebles/mue23.png';
import mue24 from './muebles/mue24.png';
import mue25 from './muebles/mue25.png';
import mue26 from './muebles/mue26.png';
import mue27 from './muebles/mue27.png';
import mue28 from './muebles/mue28.png';
import mue29 from './muebles/mue29.png';
import mue30 from './muebles/mue30.png';
import mue31 from './muebles/mue31.png';

const Muebles = () => {
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
                <li><a href="/Escritorios">Escritorios</a></li>
                <li><a href="">Muebles</a></li>
                <li><a href="/Ventanas">Ventanas</a></li>

                <div className='encabezado'>
                    <div className='titulo'>
                        <div className='titulo1'>                                    
                            <h3>Muebles Imac - Todo en Madera</h3>                    
                        </div>                    
                    </div>
                </div>
            </ul>

            <div className='contenedormuebles'>
                
                <div className='contmue1'>
                    <div className="ref-text">ref019</div>
                    <div className='contmue2'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue1} alt="mue1" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref019`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue5'>
                    <div className="ref-text">ref020</div>
                    <div className='contmue6'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue2} alt="mue2" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref020`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue7'>
                    <div className="ref-text">ref021</div>
                    <div className='contmue8'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue3} alt="mue3" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref021`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue9'>
                    <div className="ref-text">ref022</div>
                    <div className='contmue10'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue4} alt="mue4" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref022`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles1'>
                
                <div className='contmue11'>
                    <div className="ref-text">ref023</div>
                    <div className='contmue12'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue5} alt="mue5" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref023`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue13'>
                    <div className="ref-text">ref024</div>
                    <div className='contmue14'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue6} alt="mue6" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref024`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue15'>
                    <div className="ref-text">ref025</div>
                    <div className='contmue16'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue7} alt="mue7" width={200} height={210}/>
                        <div className='contescri3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref025`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue17'>
                    <div className="ref-text">ref026</div>
                    <div className='contmue18'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue8} alt="mue8" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref026`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles2'>
                
                <div className='contmue19'>
                    <div className="ref-text">ref027</div>
                    <div className='contmue20'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue9} alt="mue9" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref027`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue21'>
                    <div className="ref-text">ref028</div>
                    <div className='contmue22'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue10} alt="mue10" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref028`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue23'>
                    <div className="ref-text">ref029</div>
                    <div className='contmue24'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue11} alt="mue11" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref029`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue25'>
                    <div className="ref-text">ref030</div>
                    <div className='contmue26'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue12} alt="mue12" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref030`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles3'>
                
                <div className='contmue27'>
                    <div className="ref-text">ref031</div>
                    <div className='contmue28'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue13} alt="mue13" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref031`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue29'>
                    <div className="ref-text">ref032</div>
                    <div className='contmue30'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue14} alt="mue14" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref032`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue31'>
                    <div className="ref-text">ref033</div>
                    <div className='contmue32'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue15} alt="mue15" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref033`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue33'>
                    <div className="ref-text">ref034</div>
                    <div className='contmue34'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue16} alt="mue16" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref034`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles4'>
                
                <div className='contmue35'>
                    <div className="ref-text">ref035</div>
                    <div className='contmue36'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue17} alt="mue17" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref035`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue37'>
                    <div className="ref-text">ref036</div>
                    <div className='contmue38'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue18} alt="mue18" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref036`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue39'>
                    <div className="ref-text">ref037</div>
                    <div className='contmue40'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue19} alt="mue19" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref037`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue41'>
                    <div className="ref-text">ref038</div>
                    <div className='contmue42'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue20} alt="mue20" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref038`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles5'>
                
                <div className='contmue43'>
                    <div className="ref-text">ref039</div>
                    <div className='contmue44'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue21} alt="mue21" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref039`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue45'>
                    <div className="ref-text">ref040</div>
                    <div className='contmue46'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue22} alt="mue22" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref040`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue47'>
                    <div className="ref-text">ref041</div>
                    <div className='contmue48'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue23} alt="mue23" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref041`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue49'>
                    <div className="ref-text">ref042</div>
                    <div className='contmue50'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue24} alt="mue24" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref042`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles6'>
                
                <div className='contmue51'>
                    <div className="ref-text">ref043</div>
                    <div className='contmue52'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue25} alt="mue25" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref043`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue53'>
                    <div className="ref-text">ref044</div>
                    <div className='contmue54'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue26} alt="mue26" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref044`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue55'>
                    <div className="ref-text">ref045</div>
                    <div className='contmue56'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue27} alt="mue27" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref045`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

                <div className='contmue57'>
                    <div className="ref-text">ref046</div>
                    <div className='contmue58'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue28} alt="mue28" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref046`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div>

            </div>

            <div className='contenedormuebles7'>
                
                <div className='contmue59'>
                    <div className="ref-text">ref047</div>
                    <div className='contmue60'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue29} alt="mue29" width={200} height={210}/>                        
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref047`}>Solicitar información aquí</a>
                        </div> 
                    </div>                                       
                </div>
                
                <div className='contmue61'>
                    <div className="ref-text">ref048</div>
                    <div className='contmue62'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue30} alt="mue30" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref048`}>Solicitar información aquí</a>
                        </div>
                    </div>                    
                </div> 

                <div className='contmue63'>
                    <div className="ref-text">ref049</div>
                    <div className='contmue64'>
                        <h4>Mueble 100% en Madera</h4>
                        <img src={mue31} alt="mue31" width={200} height={210}/>
                        <div className='contmue3'>
                            <a className='contd4' target="_blank" rel="noopener noreferrer" href={`https://wa.me/56949165634?text=Solicito%20información%20sobre%20el%20producto:%20Mueble%20100%25%20en%20Madera.%20con%20ref049`}>Solicitar información aquí</a>
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

export default Muebles;
