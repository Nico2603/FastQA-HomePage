import { useState } from 'react';

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const faqs = [
    {
      id: 1,
      question: "¿Qué ventajas ofrece la automatización de pruebas frente al testing manual?",
      answer: "La automatización de pruebas permite ejecutar casos de prueba repetitivos de forma rápida y consistente, reduciendo errores humanos y liberando a los testers para tareas más estratégicas. También facilita la ejecución de pruebas de regresión, mejora la cobertura y proporciona resultados más rápidos y confiables, especialmente en proyectos ágiles con ciclos de desarrollo cortos."
    },
    {
      id: 2,
      question: "¿Cuánto tiempo se requiere para implementar pruebas automatizadas en mi proyecto?",
      answer: "El tiempo de implementación varía según la complejidad y tamaño de tu aplicación. Por lo general, un proyecto pequeño puede requerir de 2 a 4 semanas para configurar la infraestructura básica y automatizar los casos de prueba prioritarios. Proyectos más grandes pueden necesitar entre 1 y 3 meses. En FastQA priorizamos un enfoque gradual, comenzando con los flujos más críticos para obtener beneficios inmediatos mientras continuamos expandiendo la cobertura."
    },
    {
      id: 3,
      question: "¿Qué herramientas y frameworks utilizan para la automatización de pruebas?",
      answer: "Utilizamos diversas herramientas según las necesidades específicas del proyecto. Para pruebas de interfaz web, implementamos Cypress, Selenium y Playwright. En aplicaciones móviles, trabajamos con Appium y Detox. Para API REST, utilizamos Postman, RestAssured o supertest. Nuestros frameworks de pruebas unitarias incluyen Jest, JUnit, PyTest, entre otros. Adaptamos nuestra selección tecnológica a tu stack y requerimientos particulares."
    },
    {
      id: 4,
      question: "¿Cómo se integra FastQA con nuestro equipo de desarrollo actual?",
      answer: "FastQA se integra de manera flexible según tus necesidades. Podemos trabajar como consultores externos, capacitar a tu equipo actual, implementar soluciones llave en mano, o formar un equipo mixto. Nos adaptamos a tus metodologías de trabajo (Scrum, Kanban, etc.) y herramientas de gestión de proyectos. Nuestro objetivo es complementar tu equipo existente, transferir conocimiento y mejorar gradualmente los procesos de QA."
    },
    {
      id: 5,
      question: "¿Qué tipo de reportes y métricas proporcionan sobre las pruebas?",
      answer: "Ofrecemos reportes detallados que incluyen tasas de paso/fallo, cobertura de código, tiempos de ejecución, análisis de tendencias y métricas de calidad. Utilizamos herramientas como Allure, ExtentReports o soluciones personalizadas según tus necesidades. Todos nuestros informes son visuales e intuitivos, permitiéndote identificar rápidamente áreas problemáticas y tomar decisiones basadas en datos."
    },
    {
      id: 6,
      question: "¿Ofrecen soporte continuo después de implementar las soluciones de QA?",
      answer: "Sí, proporcionamos soporte continuo adaptado a tus necesidades. Ofrecemos planes de mantenimiento que incluyen actualizaciones de scripts, resolución de falsos positivos, optimización continua y soporte técnico. También disponemos de programas de capacitación periódica para mantener a tu equipo actualizado con las últimas prácticas y tecnologías en testing automatizado."
    }
  ];

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className="faq-section" id="faq">
      <h2>Preguntas Frecuentes</h2>
      <p className="faq-intro">
        Resolvemos tus dudas sobre nuestros servicios de testing automatizado y cómo 
        podemos ayudarte a mejorar la calidad de tu software.
      </p>
      
      <div className="faq-container">
        {faqs.map((faq, index) => (
          <div 
            key={faq.id} 
            className={`faq-item ${activeIndex === index ? 'active' : ''}`}
          >
            <button 
              className="faq-question"
              onClick={() => toggleAccordion(index)}
              aria-expanded={activeIndex === index}
            >
              {faq.question}
              <span className="faq-icon">
                {activeIndex === index ? '−' : '+'}
              </span>
            </button>
            
            <div 
              className={`faq-answer ${activeIndex === index ? 'open' : ''}`}
            >
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
      
      <div className="faq-cta">
        <p>¿No encuentras respuesta a tu pregunta?</p>
        <a href="#contact" className="button">Contáctanos</a>
      </div>
    </section>
  );
} 