import React, { useState } from 'react';
const Colorchanger = () => {
  const [color, setColor] = useState('white');                                  
  const handleClick = () => {
    const newColor = color === 'white' ? 'yellow' : 'white';
    setColor(newColor);
  };
  return (
    <div style={{ backgroundColor: color, height: '100vh' }}>
      <button onClick={handleClick}>Change Color</button>
    </div>
  );
};

export default Colorchanger;
