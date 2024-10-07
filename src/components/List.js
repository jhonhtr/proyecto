//componente que muestra una lista de elementos:

import React from 'react';

const List = () => {
  const items = ['Elemento 1', 'Elemento 2', 'Elemento 3'];

  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
};

export default List;