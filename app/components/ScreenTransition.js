import React, { useState, useEffect, useRef } from 'react';

export default function ScreenTransition({ ScrollY, delay, arrow = 0,  children }) {
  const [isVisible, setIsVisible] = useState(false);
  const targetRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const target = targetRef.current;
      if (target) {
        const targetTop = target.getBoundingClientRect().top;
        const targetBottom = target.getBoundingClientRect().bottom;
        const windowHeight = window.innerHeight;
        const margin = -100;

        if (targetTop - margin < windowHeight && targetBottom + margin >= 0) {
          setIsVisible(true);
        } 
      }
    };

    if (window.scrollY > ScrollY) {
      setIsVisible(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ScrollY]);

  return (
    <div>
      <div className={"md:pt-40 flex justify-center transition-opacity ease-in-out delay-350 " + (!isVisible && arrow ? 'opacity-100 block' : 'opacity-0 hidden')}>
          <div className="animate-bounce text-xl">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="25" height="35">
            <path d="M12 20l-8-16h16z" fill="#ffffff"/>
          </svg>

          </div>
      </div>
      <div ref={targetRef} className={"transition-opacity ease-in-out delay-" + delay + " " + (isVisible ? "opacity-100" : "opacity-0")}>
        {children}
      </div>      
    </div>
  );
}