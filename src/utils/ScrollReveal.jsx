import { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ 
  children, 
  animation = 'fadeInUp', 
  delay = 0, 
  threshold = 0.1, 
  once = true 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);
  
  useEffect(() => {
    const currentRef = ref.current;
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          if (once) {
            observer.unobserve(currentRef);
          }
        } else if (!once) {
          setIsVisible(false);
        }
      },
      {
        threshold,
        rootMargin: '0px 0px -100px 0px' // Ajustar según necesidades
      }
    );
    
    if (currentRef) {
      observer.observe(currentRef);
    }
    
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);
  
  const delayClass = delay ? `delay-${delay}` : '';
  
  return (
    <div 
      ref={ref}
      className={`${isVisible ? `animate-${animation} ${delayClass}` : 'opacity-0'}`}
      style={{ 
        opacity: isVisible ? 1 : 0, 
        transition: 'opacity 0.1s ease'
      }}
    >
      {children}
    </div>
  );
};

export default ScrollReveal; 