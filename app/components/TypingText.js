import React, { useState, useEffect } from 'react';

export default function TypingText({text, delay}) {
  const [typedText, setTypedText] = useState('');
  const [bg, setBg] = useState(false);

  useEffect(() => {
    let currentIndex = 0;
    let currentTextIndex = 0;
    
    const intervalId = setInterval(() => {
      if (currentIndex <= text[currentTextIndex].length) {
        setTypedText(text[currentTextIndex].substring(0, currentIndex));
        currentIndex++;
        setBg(false);
      } else if (currentTextIndex < text.length - 1) {
        currentTextIndex++;
        currentIndex = 0;
        setBg(true);    
      } else {
        clearInterval(intervalId);
      }
    }, delay);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <span className={bg ? "bg-zinc-400 text-white" : ""}>
      {typedText}
    </span>
  );
}
