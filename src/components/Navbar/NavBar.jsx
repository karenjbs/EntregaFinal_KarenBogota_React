import Container from 'react-bootstrap/Container';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../Cartwidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
   
    <Navbar expand="lg" className="bg-body">
      <Container>
      <NavLink to="/"><img src="https://cdn-icons-png.flaticon.com/512/4120/4120941.png" alt="" /></NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Nav className="me-auto">

          <Nav.Link href="#nosotros">Nosotros</Nav.Link>
            <Nav.Link href="#productos">Productos</Nav.Link>
            <Nav.Link href="#contacto">Contacto</Nav.Link>

            <NavDropdown title="Categorias" id="basic-nav-dropdown">
              <NavLink className="titulo" to={"/category/citrico"}>Citrico</NavLink>
              <NavLink className="titulo" to={"/category/floral"}>Floral</NavLink>
              <NavLink className="titulo" to={"/category/amaderado"}>Amaderado</NavLink>
            </NavDropdown>
        
          </Nav>
          <CartWidget />
        </Container>
      </Navbar>

      <Outlet />

    </>
  );
}

export default NavBar;