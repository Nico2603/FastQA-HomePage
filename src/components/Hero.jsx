import { useState, useEffect } from "react";
import ScrollReveal from "../utils/ScrollReveal";
import ClientLogos from "./ClientLogos";

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
  const [isAnimated, setIsAnimated] = useState(false);

  // Efecto para animación de entrada
  useEffect(() => {
    setTimeout(() => {
      setIsAnimated(true);
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
    <section className={`hero ${isAnimated ? 'animated' : ''}`} id="hero">
      <div className="hero-bg">
        <div className="hero-overlay"></div>
      </div>
      
      <div className="hero-content container">
        <ScrollReveal animation="fadeInUp">
          <h1 className="hero-title">
            <span className="gradient-text">Automatiza</span> tus pruebas,
            <br />
            <span className="highlight-text">potencia tu software</span>
          </h1>
        </ScrollReveal>
        
        <ScrollReveal animation="fadeInUp" delay={200}>
          <p className="hero-description">
            En FastQA desarrollamos soluciones avanzadas de testing automatizado 
            que garantizan la estabilidad, seguridad y eficiencia de tus aplicaciones.
            Simplifica tu proceso de QA, ahorra tiempo y reduce costos con nuestra
            tecnología y experiencia.
          </p>
        </ScrollReveal>
        
        <ScrollReveal animation="fadeInUp" delay={400}>
          <div className="hero-features">
            <div className="feature-tag animate-pulse">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Pruebas E2E con Cypress y Selenium</span>
            </div>
            <div className="feature-tag animate-pulse">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Reportes detallados y métricas</span>
            </div>
            <div className="feature-tag animate-pulse">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Integración con CI/CD</span>
            </div>
            <div className="feature-tag animate-pulse">
              <div className="feature-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                </svg>
              </div>
              <span>Soporte técnico especializado</span>
            </div>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fadeInUp" delay={600}>
          <div className="hero-cta">
            <button 
              className="button primary-button"
              onClick={() => setFormVisible(true)}
            >
              <span>Solicitar Demo Gratuita</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M16.72 7.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 010 1.06l-3.75 3.75a.75.75 0 11-1.06-1.06l2.47-2.47H3a.75.75 0 010-1.5h16.19l-2.47-2.47a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            <a href="#services" className="button secondary-button">
              <span>Conocer Servicios</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clipRule="evenodd" />
              </svg>
            </a>
          </div>
        </ScrollReveal>
        
        <ScrollReveal animation="fadeInUp" delay={800}>
          <ClientLogos />
        </ScrollReveal>
      </div>

      {/* Overlay con Formulario Mejorado */}
      {formVisible && (
        <div 
          className="modal-overlay animate-fadeIn" 
          onClick={() => setFormVisible(false)}
        >
          <div
            className="contact-modal animate-scaleIn"
            onClick={(e) => e.stopPropagation()}
          >
            <button 
              className="close-modal" 
              onClick={() => setFormVisible(false)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 011.06 0L12 10.94l5.47-5.47a.75.75 0 111.06 1.06L13.06 12l5.47 5.47a.75.75 0 11-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 01-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 010-1.06z" clipRule="evenodd" />
              </svg>
            </button>
            
            {formSuccess ? (
              <div className="success-message animate-pulse">
                <div className="success-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zm13.36-1.814a.75.75 0 10-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 00-1.06 1.06l2.25 2.25a.75.75 0 001.14-.094l3.75-5.25z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3>¡Mensaje enviado con éxito!</h3>
                <p>Nos pondremos en contacto contigo a la brevedad.</p>
              </div>
            ) : (
              <>
                <h3>Solicita tu demo personalizada</h3>
                <p>Completa el formulario y un experto se pondrá en contacto contigo.</p>
                
                <form onSubmit={handleSubmit} className="modal-form">
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
                    {isLoading ? (
                      <>
                        <span className="loading-spinner animate-spin"></span>
                        <span>Enviando...</span>
                      </>
                    ) : (
                      <>
                        <span>Solicitar Demo</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                        </svg>
                      </>
                    )}
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