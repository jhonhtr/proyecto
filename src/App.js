import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Camas from './cama/Camas';
import Comedores from './comedor/Comedores';
import Ventanas from './ventana/Ventanas';
import Escritorios from './escritorio/Escritorios';
import Muebles from './mueble/Muebles';

function App () {
  return (
    <Router>
      <Routes>      
        {/* Cambiamos la ruta a "/inicio" y corregimos el uso del componente Inicio */}
        < Route path="/" element={<Camas />} />
        <Route path="Comedores" element={<Comedores />} />
        <Route path="Escritorios" element={<Escritorios />} />
        <Route path="Muebles" element={<Muebles />} />
        <Route path="Ventanas" element={<Ventanas />} />
      </Routes>
    </Router> 
  );
} 

export default App; 