import React, { useState, useEffect } from 'react';

const Timer = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

 
    const intervalId = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);


 

  return <div>The current time is: {time}</div>;
};

export default Timer;
