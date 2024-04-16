import React from 'react';
import { Link } from 'react-router-dom';
import Solicitud from './Solicitud';
import './TransicionPagina.css'; // Agrega estilos de transición si lo deseas

const TransicionPagina = ({ solicitudData }) => {
  return (
    <div className="transicion-page">
      <Link to="/">Volver a la página anterior</Link>
      <Solicitud solicitudData={solicitudData} />
    </div>
  );
};

export default TransicionPagina;
