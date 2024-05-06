import React, { useState, useEffect, useRef } from 'react';

export default function AppearFromRight({ invert = 0, children }) {
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
      className={`transition delay-350 duration-1000
        ${isVisible ? 
          ' translate-x-0 blur-none' : 
          ` ${invert ? '-' : ''}translate-x-full blur-sm`
        }`
    }>
      {children} 
    </div>
  );
}