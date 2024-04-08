import React from 'react';
import './Contacto.css';

const Contacto = () => {
  return (
    <div className="main-section">
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contáctanos</h2>
          <p>¡Estamos aquí para ayudarte! Si tienes alguna pregunta o necesitas asistencia, no dudes en contactarnos a través del formulario a continuación.</p>
          <div className="bank-info">
            <h3>Banco Centauros Bank</h3>
            <p>Somos un banco comprometido con brindar soluciones financieras innovadoras y accesibles para nuestros clientes. Con más de 50 años de experiencia en el mercado, nos enorgullece ofrecer productos y servicios de calidad que satisfacen las necesidades financieras de individuos y empresas.</p>
          </div>
        </div>
        <div className="contact-form">
          <form action="#" method="post">
            <div className="form-group">
              <label htmlFor="nombre">Nombre:</label>
              <input type="text" id="nombre" name="nombre" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="mensaje">Mensaje:</label>
              <textarea id="mensaje" name="mensaje" rows="4" required></textarea>
            </div>
            <button type="submit">Enviar</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contacto;
