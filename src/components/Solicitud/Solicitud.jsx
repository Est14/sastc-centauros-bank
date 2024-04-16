import React, { useEffect, useState } from 'react';
import './Solicitud.css';

const Solicitud = () => {
  const [solicitudData, setSolicitudData] = useState(null);

  useEffect(() => {
    // Obtener los datos de la URL
    const searchParams = new URLSearchParams(window.location.search);
    const dataString = searchParams.get('data');
    if (dataString) {
      // Convertir la cadena de datos JSON en un objeto
      const data = JSON.parse(decodeURIComponent(dataString));
      setSolicitudData(data);
    }
  }, []);

  const formatCurrency = (amount) => {
    return new Intl.NumberFormat('es-ES', {
      style: 'currency',
      currency: 'USD'
    }).format(amount);
  };

  const handleCancelarSolicitud = async () => {
    if (!solicitudData) return;
    try {
      const response = await fetch(`http://localhost:8080/centauros-bank-api/v1/solicitudes/${solicitudData.id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al cancelar la solicitud.');
      }
      alert('Solicitud cancelada.');
      // Redirigir a la página de inicio
      window.location.href = '/';
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al cancelar la solicitud.');
    }
  };

  if (!solicitudData) {
    return <div className="solicitud-info">No hay solicitudes pendientes.</div>;
  }

  return (
    <div className="solicitud-info">
      <h2>Datos de la Solicitud</h2>
      <p>ID: {solicitudData.id}</p>
      <p>Nombre: {solicitudData.nombre}</p>
      <p>Apellido: {solicitudData.apellido}</p>
      <p>Score Crediticio: {solicitudData.scoreCrediticio.toFixed(2)}</p>
      <p>Aprobado: {solicitudData.aprobado ? 'Sí' : 'No'}</p>
      <p>Activa: {solicitudData.activa ? 'Sí' : 'No'}</p>
      {solicitudData.aprobado && (
        <>
          <p>Monto Aprobado: {formatCurrency(solicitudData.montoAprobado)}</p>
          <button onClick={handleCancelarSolicitud}>Cancelar</button>
        </>
      )}
    </div>
  );
};

export default Solicitud;
