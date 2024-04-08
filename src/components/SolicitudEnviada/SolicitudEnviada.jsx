import './SolicitudEnviada.css';
import React, { useEffect, useState } from 'react';

const SolicitudEnviada = () => {

    const [id, setId] = useState('');

    useEffect(() => {
        // Función para extraer el ID de los parámetros de la URL
        const getIdFromUrl = () => {
          const params = new URLSearchParams(window.location.search);
          const idParam = params.get('id');
          setId(idParam);
        };
    
        getIdFromUrl(); // Llamar a la función una vez que el componente se haya montado
    
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, []);

    return (
        <div id="page-container">
            <h2>Solicitud Registrada Exitosamente</h2>
            <div id="response-details">
                <div className="codigo-solicitud">
                    <p>Código de Solicitud: <strong>{id}</strong></p>
                </div>
            </div>
        </div>
    );
};

export default SolicitudEnviada;
