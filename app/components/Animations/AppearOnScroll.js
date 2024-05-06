import React, { useState, useEffect} from 'react';

export default function AppearOnScroll({ duration = 75, delay = 75, children }) {
    const [isVisible, setisVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setisVisible(true);
      } 
    };
    if (window.scrollY > 0){
        setisVisible(true);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

    return (
        <div>            
            <div className={`transition-all flex justify-center 
                ${isVisible ? 
                'hidden' : 
                ''
                }`
            }>
                <div className="absolute bottom-20 animate-bounce">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M12 5v14M5 12l7 7 7-7" />
                    </svg>
                </div>
            </div>
            <div
                className={`transition-all duration-${duration} delay-${delay} 
                    ${isVisible ? 
                    'opacity-100 blur-none' : 
                    'opacity-0 blur-sm'
                    }`
            }>
                {children}
            </div>   
        </div>
    );
}