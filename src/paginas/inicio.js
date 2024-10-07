
import React, { useEffect } from 'react';
import './inicio.css';
import juvenilImage from './imagen-inicio/juvenil.png';
import gg from './imagen-inicio/gg.jpg';
import pastores from './imagen-inicio/pastores.png';
import comitejovenes from './imagen-inicio/comitejovenes.jpg';
import comitejovenes1 from './imagen-inicio/comitejovenes1.png';
import pastoresycomite from './imagen-inicio/pastoresycomite.jpg';
import pastores1 from './imagen-inicio/pastores1.jpg';
import Slider from 'react-slick'; // Importamos Slider de react-slick
import generacion from './imagen-inicio/generacion.jpg';
import campaña from './imagen-inicio/campaña.png';
import logo1 from './imagen-inicio/logo1.png';

// Configuración del slider
const sliderSettings = {
    dots: true, // Muestra puntos de navegación
    infinite: true, // Hace que el slider sea infinito
    speed: 500, // Velocidad de la transición
    slidesToShow: 1, // Cantidad de diapositivas visibles
    slidesToScroll: 1, // Cuántas diapositivas se desplazan a la vez
    autoplay: true, // Autoplay activado
    autoplaySpeed: 3000, // Intervalo del autoplay (3 segundos)
  };

const Inicio = () => {
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
                <li><a href="">Inicio</a></li>
                <li><a href="/Servicios">Servicios</a></li>
                <li><a href="/Predicas">Prédicas</a></li>
                <li><a href="/Canciones">Canciones</a></li>
                <li><a href="/contactanos">Contactanos</a></li>
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
            
            {/* Slider de imágenes */}
            <Slider {...sliderSettings} className="slider-container">
                    <div className='slider'>
                        <img src={juvenilImage} alt="Juvenil" className="slider-image" width='800px' height='500' />
                    </div>
                    <div>
                        <img src={gg} alt="Generación de Gracia" className="slider-image" width='800px' height='500'/>
                    </div>
                    <div>
                        <img src={generacion} alt="generacion" className="slider-image" width='800px' height='500'/>
                    </div>
                    <div>
                        <img src={campaña} alt="campaña" className="slider-image" width='800px' height='700'/>
                    </div>
                    <div>
                        <img src={comitejovenes} alt="comitejovenes" className="slider-image" width='800px' height='650'/>
                    </div>
                    <div>
                        <img src={pastores1} alt="pastores1" className="slider-image" width='800px' height='650'/>
                    </div>
                    <div>
                        <img src={pastoresycomite} alt="pastoresycomite" className="slider-image" width='800px' height='650'/>
                    </div>
            </Slider>                       

            <div className='mision_vision'>
                <div className="mision">
                        <h2>MISION<br />
                        Existimos por la voluntad de Dios<br />
                        como luz en medio del caos y la<br />
                        oscuridad, para retomar los<br />
                        principios y la moral de un pueblo<br />
                        que ha perdido su esencia ante una<br />
                        sociedad que ha perdido a su Dios.<br />
                        Romanos 9:25
                        </h2>
                        <h2>VISION<br />
                        Hacer que permanezca la sana<br />
                        doctrina y la sana enseñanza<br />
                        extendiendo la obra de Dios a<br />
                        todos los rincones del país y<br />
                        del mundo.<br />
                        Judas 3
                        </h2>            
                </div><br />
            </div>

            <div className='quienes_somos'>
                <div className='somos'>                                    
                    <h1>Quienes Somos</h1>                    
                </div>
            </div>

            <div className='pastoress'>
                <div className='pastoress1'>
                    <img src={pastores} alt="pastores" width={170} height={160}/>                
                    <h4>Pastores:<br />
                        Juan David Castillo<br />
                        Eva Sandrit Aleman <br />                        
                        Sede: Bogotá D.C.                       
                    </h4>                    
                </div>                
                <div className='comite'>
                    <div className='comite2'>
                        <img src={comitejovenes1} alt="comitejovenes1" width={170} height={160}/>
                    </div>
                    <div className='comite3'>
                        <h4>Líder y Comité de Jóvenes:<br />                            
                            Sede: Bogotá D.C.
                            <div className='botoncomite'>
                                <a className='botoncomite1' target="_blank" rel="noopener noreferrer" 
                                href="https://wa.me/+573007427747">Contactanos</a>
                            </div>                     
                        </h4>
                    </div>
                </div>
            </div>

            <div className='donacion'>
                <div className='dona1'>
                    <h4 className='donatext'>Si deseas bendecir este Ministerio Juvenil<br/>
                    Dona aquí:
                    </h4>
                    <div className='dona2'>
                        <a>Nequi: 3205119854 <br/><br/>
                        Por cuenta bancaria: <br/>
                        Cuenta de ahorros Bancolombia: <br/>
                        912-623931-57 <br/>
                        A nombre de: Jhon Tierradentro <br/><br/>
                        Donaciones en nuestra sede en: <br/>
                        Dirección: Cra 101 # 56f sur - 93 Brr Santa Fe, Bogotá D.C. <br/><br/>
                        Al finalizar su transacción, recuerde enviarnos el <br/>
                        comprobante de pago para trámites.

                        </a>
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
                     / <a target="_blank" rel="noopener noreferrer" 
                     href="mailto:jhonhtr@gmail.com">jhonhtr@gmail.com </a>
                    <a href="#titulojofra">- ir al comienzo</a>
                </section>
                <p>Lider Juvenil: Yairis González Villadiego<br/>                
                Derechos Reservados- Copyright 2024</p>
            </footer>
        </div>
    );
};

export default Inicio; 


