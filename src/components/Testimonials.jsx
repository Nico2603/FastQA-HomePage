import { useState, useEffect } from 'react';

export default function Testimonials() {
  const [activeIndex, setActiveIndex] = useState(0);
  const testimonials = [
    {
      id: 1,
      name: "Carlos Méndez",
      company: "TechSolutions S.A.",
      position: "CTO",
      quote: "FastQA transformó nuestro proceso de testing. Redujimos errores en producción en un 78% y aceleramos nuestros ciclos de desarrollo.",
      avatar: "/assets/avatar-1.jpg"
    },
    {
      id: 2,
      name: "Ana Martínez",
      company: "InnovateMX",
      position: "QA Manager",
      quote: "La automatización implementada por FastQA nos permitió identificar problemas críticos antes de que afectaran a nuestros usuarios. Un socio indispensable.",
      avatar: "/assets/avatar-2.jpg"
    },
    {
      id: 3,
      name: "Roberto Sánchez",
      company: "FinTech Global",
      position: "Director de Desarrollo",
      quote: "Gracias a FastQA pudimos certificar nuestra plataforma de pagos en tiempo récord, cumpliendo con todos los estándares de seguridad requeridos.",
      avatar: "/assets/avatar-3.jpg"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <section className="testimonials-section" id="testimonials">
      <h2>Lo que dicen nuestros clientes</h2>
      <div className="testimonials-container">
        {testimonials.map((testimonial, index) => (
          <div
            key={testimonial.id}
            className={`testimonial-card ${index === activeIndex ? 'active' : ''}`}
          >
            <div className="testimonial-avatar">
              <img 
                src={testimonial.avatar} 
                alt={`Avatar de ${testimonial.name}`} 
                onError={(e) => {
                  e.target.src = '/assets/default-avatar.jpg';
                }}
              />
            </div>
            <blockquote>"{testimonial.quote}"</blockquote>
            <div className="testimonial-author">
              <h4>{testimonial.name}</h4>
              <p>{testimonial.position}, {testimonial.company}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="testimonial-dots">
        {testimonials.map((_, index) => (
          <button
            key={index}
            className={`dot ${index === activeIndex ? 'active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Ver testimonio ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
} 