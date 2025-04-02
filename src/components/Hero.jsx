import { useState, useEffect } from "react";

export default function Hero() {
  const [formVisible, setFormVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);

  // Efecto para animación de entrada
  useEffect(() => {
    const heroElement = document.querySelector('.hero');
    setTimeout(() => {
      heroElement.classList.add('animated');
    }, 300);
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulación de envío
    setTimeout(() => {
      setIsLoading(false);
      setFormSuccess(true);
      
      // Resetear después de 3 segundos
      setTimeout(() => {
        setFormVisible(false);
        setFormSuccess(false);
        setFormData({
          name: "",
          email: "",
          company: "",
          message: ""
        });
      }, 3000);
    }, 1500);
  };

  return (
    <section className="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content">
        <h1 className="hero-title">
          <span className="gradient-text">Automatiza</span> tus pruebas,
          <span className="highlight-text"> potencia tu software</span>
        </h1>
        
        <p className="hero-description">
          En FastQA desarrollamos soluciones avanzadas de testing automatizado 
          que garantizan la estabilidad, seguridad y eficiencia de tus aplicaciones.
          Simplifica tu proceso de QA, ahorra tiempo y reduce costos con nuestra
          tecnología y experiencia.
        </p>
        
        <div className="hero-features">
          <div className="feature-tag">
            <span className="feature-icon">✓</span>
            Pruebas E2E con Cypress y Selenium
          </div>
          <div className="feature-tag">
            <span className="feature-icon">✓</span>
            Reportes detallados y métricas
          </div>
          <div className="feature-tag">
            <span className="feature-icon">✓</span>
            Integración con CI/CD
          </div>
          <div className="feature-tag">
            <span className="feature-icon">✓</span>
            Soporte técnico especializado
          </div>
        </div>
        
        <div className="hero-cta">
          <button 
            className="button primary-button"
            onClick={() => setFormVisible(true)}
          >
            Solicitar Demo Gratuita
          </button>
          <a href="#services" className="button secondary-button">
            Conocer Servicios
          </a>
        </div>
        
        <div className="trusted-by">
          <p>Confían en nosotros:</p>
          <div className="client-logos">
            <img src="/assets/client-logo-1.png" alt="Cliente 1" />
            <img src="/assets/client-logo-2.png" alt="Cliente 2" />
            <img src="/assets/client-logo-3.png" alt="Cliente 3" />
          </div>
        </div>
      </div>

      {/* Overlay con Formulario Mejorado */}
      {formVisible && (
        <div className="modal-overlay" onClick={() => setFormVisible(false)}>
          <div
            className="contact-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="close-modal" onClick={() => setFormVisible(false)}>×</button>
            
            {formSuccess ? (
              <div className="success-message">
                <div className="success-icon">✓</div>
                <h3>¡Mensaje enviado con éxito!</h3>
                <p>Nos pondremos en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <>
                <h3>Solicita tu demo personalizada</h3>
                <p>Completa el formulario y un experto se pondrá en contacto contigo.</p>
                
                <form onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Nombre</label>
                    <input 
                      type="text" 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="email">Correo Electrónico</label>
                    <input 
                      type="email" 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required 
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="company">Empresa</label>
                    <input 
                      type="text" 
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                    />
                  </div>
                  
                  <div className="form-group">
                    <label htmlFor="message">¿Cómo podemos ayudarte?</label>
                    <textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className={`submit-button ${isLoading ? 'loading' : ''}`}
                    disabled={isLoading}
                  >
                    {isLoading ? 'Enviando...' : 'Solicitar Demo'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </section>
  );
}