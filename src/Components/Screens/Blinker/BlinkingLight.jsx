import React, { useState, useEffect } from 'react';

const BlinkingLight = () => {
  const [isBlinking, setIsBlinking] = useState(true);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsBlinking((prevIsBlinking) => !prevIsBlinking);
    }, 500); 

    return () => clearInterval(intervalId); 

  }, []);

  return (
    <div>
      <div
        style={{
          width: '35rem',
          height: '1.8rem',
          borderRadius:"10px",
          backgroundColor: isBlinking ? 'red' : 'transparent',
          border: '2px solid white',
          display:"flex",
          justifyContent:"center",
          alignItems:"center",
          boxShadow:"2"
        }}
      >Get 20% off on the clearance sale. Just type "GET20" on the cuppon</div>
    </div>
  );
};

export default BlinkingLight;
