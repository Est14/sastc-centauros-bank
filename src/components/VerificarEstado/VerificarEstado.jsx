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
      mostrarEstadoSolicitud(data);
    } catch (error) {
      console.error('Error:', error);
      alert('Hubo un error al verificar el estado de la solicitud.');
    }
  };

  const mostrarEstadoSolicitud = (data) => {
    let mensaje = '';
    if (data.socreCrediticio === null) {
      mensaje = 'Solicitud en trámite, intente nuevamente en 5 min.';
    } else if (data.aprobado && data.socreCrediticio !== null) {
      mensaje = `¡Felicitaciones su solicitud ha sido aprobada! Monto aprobado: ${data.montoAprobado}
      Su tarjeta Visa llegara en 3 dias habiles a la direccion registrada para su activacion
      `;
    } else {
      mensaje = 'Lo sentimos no te podemos aprobar una TC en este momento, intentalo nuevamente en 3 meses';
    }
    setEstadoSolicitud(mensaje);
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
        <div id="estado-solicitud" style={{ paddingTop: '30px' }}>{estadoSolicitud}</div>
      </div>
    </div>
  );
};

export default VerificarEstado;
