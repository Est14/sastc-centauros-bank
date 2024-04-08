import React, { useState } from 'react';
import './Formulario.css'; 

const Formulario = () => {
  // Estado para cada campo del formulario
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [tipoDocumento, setTipoDocumento] = useState('');
  const [documento, setDocumento] = useState('');
  const [ciudad, setCiudad] = useState('');
  const [direccion, setDireccion] = useState('');
  const [telefono, setTelefono] = useState('');
  const [nivelEducativo, setNivelEducativo] = useState('');
  const [ocupacion, setOcupacion] = useState('');
  const [ingresosMensuales, setIngresosMensuales] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar campos (opcional)

    try {
      const response = await fetch('http://localhost:8080/centauros-bank-api/v1/solicitudes/solicitud-tarjeta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          nombre,
          apellido,
          tipoDocumento,
          documento,
          ciudad,
          direccion,
          telefono,
          nivelEducativo,
          ocupacion,
          ingresosMensuales,
        })
      });

      if (response.ok) {
        const data = await response.json();
        console.log('Respuesta de la API:', data);

        // Redirige a la ruta /solicitud_enviada
        window.location.href = `/solicitud_enviada?id=${data.id}`
      } else {
        console.error('Error al enviar la solicitud:', response.status);
        // Manejar otros códigos de estado aquí si es necesario
      }
    } catch (error) {
      console.error('Error al enviar la solicitud:', error);
    }
  };
  
   
  return (
    <form className="formulario" onSubmit={handleSubmit}>
      <h2>Formulario de Solicitud TC</h2>

      <label htmlFor="nombre">Nombre:</label>
      <input
        type="text"
        id="nombre"
        name="nombre"
        minLength="3"
        required
        value={nombre}
        onChange={(e) => setNombre(e.target.value)}
      />

      <label htmlFor="apellido">Apellido:</label>
      <input
        type="text"
        id="apellido"
        name="apellido"
        minLength="3"
        required
        value={apellido}
        onChange={(e) => setApellido(e.target.value)}
      />

      <label htmlFor="tipoDocumento">Tipo de Documento:</label>
      <select
        id="tipoDocumento"
        name="tipoDocumento"
        required
        value={tipoDocumento}
        onChange={(e) => setTipoDocumento(e.target.value)}
      >
        <option value="">Seleccione...</option>
        <option value="CC">Cédula de Ciudadanía</option>
        <option value="TI">Tarjeta de Identidad</option>
        <option value="TE">Tarjeta de Extranjería</option>
        <option value="PASAPORTE">Pasaporte</option>
      </select>

      <label htmlFor="documento">Documento:</label>
      <input
        type="text"
        id="documento"
        name="documento"
        minLength="6"
        required
        value={documento}
        onChange={(e) => setDocumento(e.target.value)}
      />

      <label htmlFor="ciudad">Ciudad:</label>
      <select
        id="ciudad"
        name="ciudad"
        required
        value={ciudad}
        onChange={(e) => setCiudad(e.target.value)}
      >
        <option value="">Seleccione...</option>
        {ciudadesColombia.map((ciudad) => (
          <option key={ciudad} value={ciudad}>
            {ciudad}
          </option>
        ))}
      </select>

      <label htmlFor="direccion">Dirección:</label>
      <input
        type="text"
        id="direccion"
        name="direccion"
        minLength="4"
        required
        value={direccion}
        onChange={(e) => setDireccion(e.target.value)}
      />

      <label htmlFor="telefono">Teléfono:</label>
      <input
        type="number"
        id="telefono"
        name="telefono"
        minLength="10"
        required
        value={telefono}
        onChange={(e) => setTelefono(e.target.value)}
      />

      <label htmlFor="nivelEducativo">Nivel Educativo:</label>
      <select
        id="nivelEducativo"
        name="nivelEducativo"
        required
        value={nivelEducativo}
        onChange={(e) => setNivelEducativo(e.target.value)}
      >
        <option value="">Seleccione...</option>
        <option value="TECNICO">Técnico</option>
        <option value="TECNOLOGO">Tecnólogo</option>
        <option value="PROFESIONAL">Profesional</option>
      </select>

      <label htmlFor="ocupacion">Ocupación:</label>
      <select
        id="ocupacion"
        name="ocupacion"
        required
        value={ocupacion}
        onChange={(e) => setOcupacion(e.target.value)}
      >
        <option value="">Seleccione...</option>
        <option value="EMPLEADO">Empleado</option>
        <option value="PENSIONADO">Pensionado</option>
      </select>

      <label htmlFor="ingresosMensuales">Ingresos Mensuales:</label>
      <input
        type="number"
        id="ingresosMensuales"
        name="ingresosMensuales"
        required
        value={ingresosMensuales}
        onChange={(e) => setIngresosMensuales(e.target.value)}
      />

      <button type="submit">Enviar</button>
    </form>
  );
};

export default Formulario;


const ciudadesColombia = [
  'Bogotá',
  'Medellín',
  'Cali',
  'Barranquilla',
  'Cartagena',
  'Otra'
];
        
