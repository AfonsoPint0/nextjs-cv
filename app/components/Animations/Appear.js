import React, { useState, useEffect, useRef } from 'react';

export default function Appear({ duration = 75, delay = 75, children }) {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } 
        });
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return (
    <div ref={elementRef} 
      className={`transition-all duration-${duration} delay-${delay} 
        ${isVisible ? 
          'opacity-100 blur-none' : 
          'opacity-0 blur-sm'
        }`
    }>
      {children} 
    </div>
  );
}