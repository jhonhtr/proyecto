import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

//<BreadCrumb model={items} home={home} /> este es el comando de react para crear un menu

const Menu = ({ items, home }) => {
    return (
      <div>
        <BreadCrumb model={items} home={home} />
      </div>
    );
  };

export default Menu;    

/*
La razón por la que se utiliza la sintaxis de función en Menu.js 
es para definir un componente funcional de React. Vamos a desglosar esto:

1. Componente Funcional
En React, un componente funcional es una función que devuelve JSX. Este 
tipo de componente permite recibir props (propiedades) y renderizar 
contenido basado en esas props. Aquí está la estructura básica:

const Menu = ({ items, home }) => {
  return (
    <div>
      <BreadCrumb model={items} home={home} />
    </div>
  );
};

const Menu = ({ items, home }) => { ... }: Aquí defines un componente llamado Menu que toma items y home como propiedades.
return (...): Dentro del cuerpo de la función, devuelves el JSX que deseas renderizar.

2. Uso de Props
Cuando usas <BreadCrumb model={items} home={home} />, estás pasando las propiedades items y home al 
componente BreadCrumb. Esto permite que BreadCrumb use esos valores para renderizarse correctamente.

3. Estructura del Componente
Si simplemente escribieras <BreadCrumb model={items} home={home} /> sin encapsularlo en un 
componente, no sería válido por sí solo en React. Necesitas un componente que lo contenga y 
que pueda recibir y manejar las props.

4. Ejemplo Completo
Aquí tienes un ejemplo completo de cómo se organiza todo:

src/components/Menu.js

import React from 'react';
import { BreadCrumb } from 'primereact/breadcrumb';

const Menu = ({ items, home }) => {
  return (
    <div>
      <BreadCrumb model={items} home={home} />
    </div>
  );
};

export default Menu;

App.js

import React from 'react';
import Menu from './components/Menu';

const items = [
  { label: 'Inicio', url: '/' },
  { label: 'Quienes Somos', url: '/quienes-somos' },
];

const home = { icon: 'pi pi-home', url: '/' };

function App() {
  return (
    <>
      <Menu items={items} home={home} />
      {/* Otras rutas y componentes *///}
     // </>
    //);
  //}
  
  //export default App;

  /*
  Resumen
  Componente Funcional: Permite definir un componente que puede recibir props y renderizar contenido.
  Uso de Props: Las props permiten pasar datos al componente y son esenciales para la reutilización 
  y la modularidad en React.
  Estructura: La encapsulación en un componente es necesaria para que React pueda gestionar el ciclo 
  de vida y la renderización del componente.
  */