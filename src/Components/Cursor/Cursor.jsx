import React, { useEffect, useState } from 'react';
import './Cursor.css';

const Cursor = () => {
  const [position, setPosition] = useState({ x: -100, y: -100 }); // start offscreen
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHover = () => setIsHovering(true);
    const removeHover = () => setIsHovering(false);

    document.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button, .project-card').forEach(el => {
      el.addEventListener('mouseenter', addHover);
      el.addEventListener('mouseleave', removeHover);
    });

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button, .project-card').forEach(el => {
        el.removeEventListener('mouseenter', addHover);
        el.removeEventListener('mouseleave', removeHover);
      });
    };
  }, []);

  return (
    <>
      <div
        className="cursor-outer"
        style={{
          left: position.x,
          top: position.y,
          transform: isHovering
            ? 'translate(-50%, -50%) scale(1.5)'
            : 'translate(-50%, -50%) scale(1)',
          borderColor: isHovering ? '#6f00ff' : '#00e0ff',
          opacity: isHovering ? 1 : 0.8,
        }}
      ></div>
      <div
        className="cursor-inner"
        style={{
          left: position.x,
          top: position.y,
          transform: isHovering
            ? 'translate(-50%, -50%) scale(0.8)'
            : 'translate(-50%, -50%) scale(1)',
          backgroundColor: isHovering ? '#00e0ff' : '#6f00ff',
          boxShadow: isHovering
            ? '0 0 12px 4px #00e0ff'
            : '0 0 8px 2px #6f00ff',
        }}
      ></div>
    </>
  );
};

export default Cursor;
