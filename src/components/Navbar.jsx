import { useState, useEffect } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    const element = document.querySelector(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        
        {/* Logo + Título */}
        <div className="logo-title">
          <img 
            src="./src/assets/logo.png" 
            alt="FastQA Logo" 
            className="logo"
          />
          <h1>FastQA</h1>
        </div>

        {/* Botón de menú hamburguesa para móvil */}
        <button
          className="mobile-menu-button"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}></span>
        </button>

        <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
          <li>
            <a
              href="#features"
              onClick={(e) => handleSmoothScroll(e, '#features')}
            >
              Servicios
            </a>
          </li>
          <li>
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, '#contact')}
            >
              Contacto
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
