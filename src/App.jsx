import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MenuNavegacion from './componentes/MenuNavegacion';
import Proveedores from './componentes/Proveedores';
import Articulos from './componentes/Articulos';
import Clientes from './componentes/Clientes';
import Ventas from './componentes/Ventas';

function App() {
  return (
    <BrowserRouter>
      <MenuNavegacion />
      <Routes>
        <Route path="/" element={<div className="container mt-4"><h2>Bienvenido al Sistema de Ventas</h2></div>} />
        <Route path="/proveedores" element={<Proveedores />} />
        <Route path="/articulos" element={<Articulos />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/ventas" element={<Ventas />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
