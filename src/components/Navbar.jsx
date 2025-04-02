import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
      
      // Detectar la sección activa durante el scroll
      const sections = ['about', 'services', 'testimonials', 'faq', 'contact'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection !== activeLink) {
        setActiveLink(currentSection);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled, activeLink]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
      setActiveLink(targetId.substring(1));
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container animate-fadeInLeft">
          <img 
            src="/assets/logo.svg" 
            alt="FastQA Logo" 
            className="logo animate-pulse"
          />
          <h1 className="logo-text">FastQA</h1>
        </div>

        <button
          className={`mobile-menu-button ${isMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li className="animate-fadeInDown delay-100">
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className={`nav-link ${activeLink === 'about' ? 'active' : ''}`}
            >
              Nosotros
            </a>
          </li>
          <li className="animate-fadeInDown delay-200">
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className={`nav-link ${activeLink === 'services' ? 'active' : ''}`}
            >
              Servicios
            </a>
          </li>
          <li className="animate-fadeInDown delay-300">
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, '#testimonials')}
              className={`nav-link ${activeLink === 'testimonials' ? 'active' : ''}`}
            >
              Testimonios
            </a>
          </li>
          <li className="animate-fadeInDown delay-400">
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, '#faq')}
              className={`nav-link ${activeLink === 'faq' ? 'active' : ''}`}
            >
              FAQ
            </a>
          </li>
          <li className="animate-fadeInDown delay-500">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className={`nav-link ${activeLink === 'contact' ? 'active' : ''}`}
            >
              Contacto
            </a>
          </li>
          <li className="nav-cta animate-fadeInRight delay-700">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="button primary-button"
            >
              <span>Solicitar Demo</span>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
