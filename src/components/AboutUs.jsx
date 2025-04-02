import { useEffect, useRef, useState } from "react";

export default function AboutUs() {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section 
      className={`about-section ${isVisible ? 'animate-in' : ''}`} 
      id="about"
      ref={ref}
    >
      <div className="about-container">
        <div className="about-text">
          <h2>Sobre FastQA</h2>
          <h3>Asegurando calidad en cada línea de código</h3>
          
          <p>
            Fundada en 2018 por un equipo de expertos en desarrollo y testing, FastQA nació con la misión de 
            transformar la forma en que las empresas abordan la calidad del software.
          </p>
          
          <p>
            Nos especializamos en crear soluciones personalizadas de automatización de pruebas que se adaptan 
            perfectamente a los flujos de trabajo y necesidades específicas de cada cliente.
          </p>
          
          <div className="stats-container">
            <div className="stat-item">
              <span className="stat-number">98%</span>
              <span className="stat-label">Satisfacción de clientes</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">+200</span>
              <span className="stat-label">Proyectos completados</span>
            </div>
            <div className="stat-item">
              <span className="stat-number">5+</span>
              <span className="stat-label">Años de experiencia</span>
            </div>
          </div>
          
          <button className="about-cta">Conoce a nuestro equipo</button>
        </div>
        
        <div className="about-image">
          <div className="image-container">
            <img src="/assets/about-image.jpg" alt="Equipo de FastQA trabajando" />
          </div>
        </div>
      </div>
      
      <div className="values-container">
        <h3>Nuestros valores</h3>
        <div className="values-grid">
          <div className="value-card">
            <div className="value-icon">🔍</div>
            <h4>Calidad sin compromiso</h4>
            <p>Nos comprometemos a mantener los más altos estándares en cada proyecto.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🚀</div>
            <h4>Innovación constante</h4>
            <p>Siempre a la vanguardia de las tendencias y tecnologías en QA.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">🤝</div>
            <h4>Colaboración</h4>
            <p>Trabajamos como una extensión de tu equipo, no como un proveedor externo.</p>
          </div>
          <div className="value-card">
            <div className="value-icon">📊</div>
            <h4>Enfoque basado en datos</h4>
            <p>Todas nuestras decisiones se fundamentan en métricas y análisis precisos.</p>
          </div>
        </div>
      </div>
    </section>
  );
} 