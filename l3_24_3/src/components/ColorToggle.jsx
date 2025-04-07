// ColorToggle.jsx
import React, { useState, useEffect } from 'react';

export default function ColorToggle() {
  const [bgColor, setBgColor] = useState(localStorage.getItem('bgColor') || 'white');

  const toggleColor = () => {
    const newColor = bgColor === 'white' ? 'lightblue' : 'white';
    setBgColor(newColor);
    localStorage.setItem('bgColor', newColor);
  };

  return (
    <div style={{ backgroundColor: bgColor, padding: '20px' }}>
      <p>هذا النص يتغير لونه بالخلفية حسب الزر</p>
      <button onClick={toggleColor}>تغيير اللون</button>
    </div>
  );
}