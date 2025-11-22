import React, { useState } from 'react';

const Proveedores = () => {
  const [titulo, setTitulo] = useState('Lista de Proveedores');

  const cambiarTitulo = () => {
    setTitulo(titulo === 'Lista de Proveedores' ? 'Gestion de Proveedores' : 'Lista de Proveedores');
  };

  return (
    <div className="container mt-4">
      <h2>{titulo}</h2>
      <button className="btn btn-primary mt-3" onClick={cambiarTitulo}>
        Cambiar Titulo
      </button>
      <div className="mt-4">
        <ul className="list-group">
          <li className="list-group-item">Proveedor A</li>
          <li className="list-group-item">Proveedor B</li>
          <li className="list-group-item">Proveedor C</li>
        </ul>
      </div>
    </div>
  );
};

export default Proveedores;
