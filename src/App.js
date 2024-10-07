import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Inicio from './paginas/inicio';
import Servicios from './servi/Servicios';
import Contactanos from './contac/Contactanos';
import Predicas from './gale/Predicas';
import Canciones from './vide/Canciones';

function App () {
  return (
    <Router>
      <Routes>      
        {/* Cambiamos la ruta a "/inicio" y corregimos el uso del componente Inicio */}
        < Route path="/" element={<Inicio />} />
        <Route path="Servicios" element={<Servicios />} />
        <Route path="Predicas" element={<Predicas />} />
        <Route path="Canciones" element={<Canciones />} />
        <Route path="Contactanos" element={<Contactanos />} />
      </Routes>
    </Router> 
  );
} 

export default App; 

