import { useState } from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && email.includes('@')) {
      setSubscribed(true);
      setEmail('');
      // Aquí iría la lógica para enviar el email a una API/backend
      setTimeout(() => setSubscribed(false), 3000);
    }
  };
  
  return (
    <footer className="footer">
      <div className="footer-wave">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="var(--primary-orange)" fillOpacity="1" d="M0,128L48,144C96,160,192,192,288,192C384,192,480,160,576,149.3C672,139,768,149,864,165.3C960,181,1056,203,1152,197.3C1248,192,1344,160,1392,144L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path>
        </svg>
      </div>
      
      <div className="footer-content">
        <div className="footer-container">
          <div className="footer-top">
            <div className="footer-logo animate-fadeInUp">
              <div className="logo-container">
                <img src="/assets/logo-white.svg" alt="FastQA Logo" />
                <h3>FastQA</h3>
              </div>
              <p className="tagline">
                Mejoramos la calidad de tu software con soluciones avanzadas de testing automatizado.
              </p>
            </div>
            
            <div className="footer-links-grid">
              <div className="footer-links-column animate-fadeInUp delay-100">
                <h4>Empresa</h4>
                <ul>
                  <li><a href="#about">Sobre nosotros</a></li>
                  <li><a href="#services">Servicios</a></li>
                  <li><a href="#testimonials">Testimonios</a></li>
                  <li><a href="#contact">Contacto</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column animate-fadeInUp delay-200">
                <h4>Servicios</h4>
                <ul>
                  <li><a href="#services">Automatización de pruebas</a></li>
                  <li><a href="#services">Testing de rendimiento</a></li>
                  <li><a href="#services">Integración CI/CD</a></li>
                  <li><a href="#services">Consultoría en QA</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column animate-fadeInUp delay-300">
                <h4>Recursos</h4>
                <ul>
                  <li><a href="#blog">Blog</a></li>
                  <li><a href="#resources">Documentación</a></li>
                  <li><a href="#faq">Preguntas frecuentes</a></li>
                  <li><a href="#support">Soporte técnico</a></li>
                </ul>
              </div>
              
              <div className="footer-links-column animate-fadeInUp delay-400">
                <h4>Contacto</h4>
                <ul className="contact-info">
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                      <path d="M10.5 18.75a.75.75 0 000 1.5h3a.75.75 0 000-1.5h-3z" />
                      <path fillRule="evenodd" d="M8.625 1.5H15.375a.75.75 0 01.75.75v17.25a.75.75 0 01-.75.75H8.625a.75.75 0 01-.75-.75V2.25a.75.75 0 01.75-.75zm1.5 1.5v15h5.25v-15h-5.25z" clipRule="evenodd" />
                    </svg>
                    <a href="tel:+525512345678">+52 (55) 1234-5678</a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                      <path d="M1.5 8.67v8.58a3 3 0 003 3h15a3 3 0 003-3V8.67l-8.928 5.493a3 3 0 01-3.144 0L1.5 8.67z" />
                      <path d="M22.5 6.908V6.75a3 3 0 00-3-3h-15a3 3 0 00-3 3v.158l9.714 5.978a1.5 1.5 0 001.572 0L22.5 6.908z" />
                    </svg>
                    <a href="mailto:contacto@fastqa.com">contacto@fastqa.com</a>
                  </li>
                  <li>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="icon">
                      <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                    </svg>
                    <address>
                      Av. Reforma 222, Piso 15<br />
                      Ciudad de México, 06600
                    </address>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          
          <div className="footer-middle">
            <div className="newsletter animate-fadeInUp delay-500">
              <h4>Suscríbete a nuestro newsletter</h4>
              <p>Recibe las últimas noticias y actualizaciones sobre testing automatizado.</p>
              <form className="newsletter-form" onSubmit={handleSubmit}>
                <div className="form-input-container">
                  <input 
                    type="email" 
                    placeholder="Tu correo electrónico" 
                    required 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <button type="submit" className="submit-button">
                    {subscribed ? (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="check-icon">
                        <path fillRule="evenodd" d="M19.916 4.626a.75.75 0 01.208 1.04l-9 13.5a.75.75 0 01-1.154.114l-6-6a.75.75 0 011.06-1.06l5.353 5.353 8.493-12.739a.75.75 0 011.04-.208z" clipRule="evenodd" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M3.478 2.405a.75.75 0 00-.926.94l2.432 7.905H13.5a.75.75 0 010 1.5H4.984l-2.432 7.905a.75.75 0 00.926.94 60.519 60.519 0 0018.445-8.986.75.75 0 000-1.218A60.517 60.517 0 003.478 2.405z" />
                      </svg>
                    )}
                  </button>
                </div>
                {subscribed && <p className="success-message">¡Gracias por suscribirte!</p>}
              </form>
            </div>
            
            <div className="social-media animate-fadeInUp delay-600">
              <h4>Síguenos</h4>
              <div className="social-icons">
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/>
                  </svg>
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" aria-label="GitHub" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                  </svg>
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="social-icon">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom animate-fadeInUp delay-700">
            <div className="copyright">
              <p>&copy; {currentYear} <strong>FastQA</strong>. Todos los derechos reservados.</p>
            </div>
            
            <div className="legal-links">
              <a href="/privacy">Política de privacidad</a>
              <a href="/terms">Términos y condiciones</a>
              <a href="/cookies">Política de cookies</a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
