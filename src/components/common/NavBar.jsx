import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import './NavBar.css'

function NavBar() {
  return (
    <header>
      <h1>Centauros Bank</h1>
      <nav>
        <ul>
          <li><Link to="/">Inicio</Link></li>
          <li><Link to="/solicitar_tarjeta">Solicitar Tarjeta</Link></li>
          <li><Link to="/verificar_estado">Verificar Estado</Link></li>
          <li><Link to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar;