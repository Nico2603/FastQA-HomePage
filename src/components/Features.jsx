import { useEffect, useRef, useState } from "react";

export default function Features() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();  // Desconecta el observador después de ver la sección
        }
      },
      { threshold: 0.2 }  // El 20% de la sección debe estar visible
    );
    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();  // Limpieza
  }, []);

  return (
    <section
      className={`section ${isVisible ? 'visible' : ''}`}
      id="features"
      ref={ref}
    >
      <h2>¿Por qué elegir FastQA?</h2>
      <p>
        Nuestra experiencia en testing automatizado nos permite ofrecer una 
        plataforma estable y eficiente para cualquier proyecto de software, 
        abarcando pruebas unitarias, de integración y end-to-end.
      </p>
      <h2>Nuestros Servicios</h2>
      <ul className="feature-list">
        <li>Pruebas unitarias y de integración completas</li>
        <li>Automatización E2E con Cypress, Selenium y Appium</li>
        <li>Análisis de desempeño y seguridad</li>
        <li>Integración continua (CI/CD) para despliegues rápidos</li>
      </ul>
    </section>
  );
}