import React from "react";
import { Link } from "react-router-dom";
import { NavbarWrapper } from "../../styles/navbarStyles"
import "./navBarNuevo.css"

function Navbar({ open, handleClick }) {
  return (
    <NavbarWrapper open={open}>
      <h1 className="navBar">
      <a href="#">
      <Link onClick={handleClick} class="a" title="Ir a..." to="/modalCitas">Cita previa</Link>
      </a>
      <a href="#">
      <Link onClick={handleClick} className="a" title="Ir a..." to="/">Página principal</Link> 
      </a>
      <a href="#"> 
      <Link onClick={handleClick} className="a" title="Ir a..." 
      target="_blank" 
      to="https://www.policia.es/_es/denuncias.php">Policía N.</Link>
      </a>
      </h1>
    </NavbarWrapper>
  );
}
export default Navbar;
