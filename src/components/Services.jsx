import { useState } from 'react';

export default function Services() {
  const [activeService, setActiveService] = useState(null);
  
  const services = [
    {
      id: 1,
      title: "Automatización de Pruebas",
      icon: "🔄",
      description: "Implementamos frameworks de automatización para pruebas unitarias, de integración y E2E, reduciendo el tiempo de ejecución y mejorando la cobertura.",
      benefits: [
        "Detección temprana de errores",
        "Cobertura de pruebas ampliada",
        "Reducción de tiempo en ciclos de QA",
        "Informes detallados y métricas"
      ]
    },
    {
      id: 2,
      title: "Testing de Rendimiento",
      icon: "⚡",
      description: "Evaluamos la capacidad de tu aplicación para manejar cargas de trabajo específicas, identificando cuellos de botella y optimizando la experiencia del usuario.",
      benefits: [
        "Simulación de miles de usuarios simultáneos",
        "Identificación de puntos críticos",
        "Optimización de tiempos de respuesta",
        "Planificación de capacidad"
      ]
    },
    {
      id: 3,
      title: "Integración con CI/CD",
      icon: "🔄",
      description: "Incorporamos pruebas automatizadas en tu pipeline de integración continua, asegurando que cada cambio sea validado antes de llegar a producción.",
      benefits: [
        "Despliegues más seguros y rápidos",
        "Retroalimentación inmediata",
        "Reducción de regresiones",
        "Reportes automáticos de calidad"
      ]
    },
    {
      id: 4,
      title: "Consultoría en QA",
      icon: "🧠",
      description: "Asesoramos a tu equipo en la implementación de mejores prácticas de QA, herramientas y metodologías adaptadas a tu proyecto.",
      benefits: [
        "Estrategias personalizadas de testing",
        "Formación especializada para tu equipo",
        "Mejora continua de procesos",
        "Auditoría de calidad de software"
      ]
    }
  ];

  const handleServiceClick = (id) => {
    setActiveService(activeService === id ? null : id);
  };

  return (
    <section className="services-section" id="services">
      <h2>Nuestros Servicios</h2>
      <p className="services-intro">
        En FastQA ofrecemos soluciones integrales para garantizar la calidad de tu software 
        a través de metodologías avanzadas y herramientas de última generación.
      </p>
      
      <div className="services-grid">
        {services.map(service => (
          <div 
            key={service.id} 
            className={`service-card ${activeService === service.id ? 'active' : ''}`}
            onClick={() => handleServiceClick(service.id)}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
            
            <div className="service-details">
              <h4>Beneficios:</h4>
              <ul>
                {service.benefits.map((benefit, index) => (
                  <li key={index}>{benefit}</li>
                ))}
              </ul>
              <button className="learn-more-btn">Más información</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
} 