import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';

const MenuNavegacion = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/">Sistema de Ventas</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/proveedores">Proveedores</Nav.Link>
            <Nav.Link as={Link} to="/articulos">Articulos</Nav.Link>
            <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
            <Nav.Link as={Link} to="/ventas">Ventas</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MenuNavegacion;
