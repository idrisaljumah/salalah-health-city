
import React, { useEffect, useRef, useContext } from 'react';
import { AppContext } from '../App';

const CustomCursor: React.FC = () => {
  const dotRef = useRef<HTMLDivElement>(null);
  const outlineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (dotRef.current) {
        dotRef.current.style.left = `${clientX}px`;
        dotRef.current.style.top = `${clientY}px`;
      }
      if (outlineRef.current) {
        outlineRef.current.animate({
          left: `${clientX}px`,
          top: `${clientY}px`
        }, { duration: 500, fill: "forwards" });
      }
    };
    
    const addHoverEffect = (e: MouseEvent) => {
        if ((e.target as HTMLElement).closest('a, button, input, [role="button"]')) {
            document.body.classList.add('custom-cursor--hovered');
        }
    };

    const removeHoverEffect = (e: MouseEvent) => {
        document.body.classList.remove('custom-cursor--hovered');
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseover', addHoverEffect);
    document.addEventListener('mouseout', removeHoverEffect);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseover', addHoverEffect);
      document.removeEventListener('mouseout', removeHoverEffect);
    };
  }, []);
  
  return (
    <div className="custom-cursor">
      <div ref={dotRef} className="cursor-dot"></div>
      <div ref={outlineRef} className="cursor-outline"></div>
    </div>
  );
};

export default CustomCursor;
