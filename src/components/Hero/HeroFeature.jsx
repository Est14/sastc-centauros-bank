import React from "react";
import './HeroFeature.css';

function Hero () {
    return (
        <section className="hero">
      <div className="hero-content">
        <h2>Bienvenido al SASTC</h2>
        <p>Sistema Automatico Solicitud Tarjeta de Credito</p>
        <a href="/solicitar_tarjeta" className="btn">Solicitar Tarjeta</a>
      </div>
    </section>
    );
}

function Feature() {
  return (
    <section className="features">
      <h2>Características Principales</h2>
      <div className="feature">
        <h3 className="feature-title">Captura de Solicitud</h3>
        <p className="feature-description">Completa y envía tu solicitud de tarjeta de crédito de manera rápida y sencilla.</p>
      </div>
      <div className="feature">
        <h3 className="feature-title">Verificación Crediticia Automatizada</h3>
        <p className="feature-description">Realizamos verificaciones automáticas para evaluar tu historial crediticio de manera eficiente.</p>
      </div>
      <div className="feature">
        <h3 className="feature-title">Procesamiento de Documentos</h3>
        <p className="feature-description">Procesamos digitalmente la documentación requerida para agilizar el proceso.</p>
      </div>
    </section>
  );
}

export {Hero, Feature};