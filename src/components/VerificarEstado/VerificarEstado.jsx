import React, { useState } from 'react';
import './VerificarEstado.css';

const VerificarEstado = () => {
  const [codigo, setCodigo] = useState('');
  const [estadoSolicitud, setEstadoSolicitud] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `http://localhost:8080/centauros-bank-api/v1/solicitudes/${codigo}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error('Error al verificar el estado de la solicitud.');
      }
      const data = await response.json();
      setEstadoSolicitud(data);
      // Redireccionar a la página de solicitud con los datos en la URL
      window.location.href = `/solicitud?data=${encodeURIComponent(JSON.stringify(data))}`;
    } catch (error) {
      console.error('Error:', error);
      alert(`La solicitud ${codigo} no existe`);
    }
  };

  return (
    <div className="main-section">
      <div className="verification-form">
        <h2>Verificar Estado de Solicitud</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="codigo">Código de Solicitud:</label>
            <input
              type="text"
              id="codigo"
              name="codigo"
              value={codigo}
              onChange={(e) => setCodigo(e.target.value)}
              required
            />
          </div>
          <button type="submit">Verificar</button>
        </form>
        {/* No mostramos el estado aquí ya que lo pasaremos a través de la URL */}
      </div>
    </div>
  );
};

export default VerificarEstado;
