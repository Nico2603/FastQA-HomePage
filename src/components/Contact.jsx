export default function Contact() {
  return (
    <section className="section" id="contact">
      <h2>Hablemos sobre tu proyecto</h2>
      <p>
        En FastQA ofrecemos servicios especializados en pruebas automatizadas,
        asegurando la calidad y estabilidad de tus aplicaciones. Nuestro equipo
        se adapta a las necesidades de tu software para optimizar tiempos y
        recursos.
      </p>
      <ul className="contact-list">
        <li>Planes de asesoría personalizados</li>
        <li>Soporte integral para tu equipo de QA</li>
        <li>Migración y configuración de herramientas de testing</li>
      </ul>
      <a href="mailto:contacto@fastqa.com" className="button">
        Enviar Mensaje
      </a>
    </section>
  );
}