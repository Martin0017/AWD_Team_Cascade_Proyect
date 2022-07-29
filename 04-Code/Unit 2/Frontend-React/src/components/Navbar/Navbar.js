import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <a href="/" className="logo">CHOCÓ ANDINO</a>
      <ul className="nav-links">
        <Link to="/" className="home">
          <li>Inicio</li>
        </Link>
        <Link to="/repository" className="repository">
          <li>Repositorio</li>
        </Link>
        <Link to="/know_us" className="know_us">
          <li>Conocenos</li>
        </Link>
        <Link to="/about" className="about">
          <li>Acerca de Nosotros</li>
        </Link>
      </ul>
    </nav>
  );
};

export default Navbar;
