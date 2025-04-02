import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [scrolled]);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${isMenuOpen ? 'mobile-open' : ''}`}>
      <div className="navbar-container">
        <div className="logo-container">
          <img 
            src="/assets/logo.svg" 
            alt="FastQA Logo" 
            className="logo"
          />
          <h1 className="logo-text">FastQA</h1>
        </div>

        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
          <span className={`hamburger-line ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
          <li>
            <a
              href="#about"
              onClick={(e) => handleSmoothScroll(e, '#about')}
              className="nav-link"
            >
              Nosotros
            </a>
          </li>
          <li>
            <a
              href="#services"
              onClick={(e) => handleSmoothScroll(e, '#services')}
              className="nav-link"
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#testimonials"
              onClick={(e) => handleSmoothScroll(e, '#testimonials')}
              className="nav-link"
            >
              Testimonios
            </a>
          </li>
          <li>
            <a
              href="#faq"
              onClick={(e) => handleSmoothScroll(e, '#faq')}
              className="nav-link"
            >
              FAQ
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="nav-link"
            >
              Contacto
            </a>
          </li>
          <li className="nav-cta">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
              className="button nav-button"
            >
              Solicitar Demo
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
