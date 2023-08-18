import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {CartWidget} from "../Cartwidget/CartWidget";
import { NavLink, Outlet } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css";

export const NavBar = () => {
  return (
    <>
      <Navbar>
        <Container>
          <NavLink to="/"><img src="https://cdn-icons-png.flaticon.com/512/4120/4120941.png" alt="" /></NavLink>
          <Nav className="me-auto">
          <NavLink to={"/category/citrico"}>Citrico</NavLink>
            <NavLink to={"/category/floral"}>Floral</NavLink>
            <NavLink to={"/category/amaderado"}>Amaderado</NavLink>
          </Nav>
          <div className="navbar-nav nav-link">
          <NavLink href="#Carrito"><CartWidget/></NavLink>
          </div>
        </Container>
      </Navbar>

      <Outlet />

    </>
  );
}

export default NavBar;