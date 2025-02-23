import { useState } from "react";

export default function Hero() {
  const [formVisible, setFormVisible] = useState(false);

  return (
    <section className="hero">
      <div className="hero-content">
        <h2>Pruebas Automatizadas para Software de Alta Calidad</h2>
        <p>
          En FastQA, ofrecemos soluciones avanzadas de testing automatizado 
          para garantizar la estabilidad, seguridad y eficiencia de tus 
          aplicaciones. Simplifica tu proceso de QA, ahorra tiempo y reduce 
          costos con nuestras herramientas y experiencia.
        </p>
        <ul className="hero-list">
          <li>Automatización de pruebas con Cypress y Selenium</li>
          <li>Reportes detallados con Mocha y Cypress-Mochawesome</li>
          <li>Integración con CI/CD para despliegues eficientes</li>
          <li>Soporte experto y continuo</li>
        </ul>
        <button className="button" onClick={() => setFormVisible(!formVisible)}>
          Contáctanos
        </button>
      </div>

      {formVisible && (
        <div className="contact-form hero-contact-form">
          <h3>Déjanos tu mensaje</h3>
          <form>
            <input type="text" placeholder="Nombre" required />
            <input type="email" placeholder="Correo Electrónico" required />
            <textarea placeholder="Mensaje" required></textarea>
            <button type="submit">Enviar</button>
          </form>
        </div>
      )}
    </section>
  );
}