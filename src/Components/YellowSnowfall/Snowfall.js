// Snowfall.js
import React, { useEffect } from 'react';
import './Snowfall.css'; // Keep the CSS file as it is

const Snowfall = () => {
  useEffect(() => {
    // Create Snowflakes (now yellow dots)
    const createSnowfall = () => {
      const snowfallContainer = document.querySelector('.snowfall');
      const numberOfSnowflakes = 100;

      for (let i = 0; i < numberOfSnowflakes; i++) {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake'); // Keeps the styling for each snowflake (dot)
        
        // Set random positions and animations
        snowflake.style.left = `${Math.random() * 100}vw`; // Random horizontal position
        snowflake.style.animationDuration = `${Math.random() * 5 + 5}s`; // Random animation duration between 5-10s
        snowflake.style.fontSize = `${Math.random() * 1.5 + 0.5}em`; // Random size

        snowfallContainer.appendChild(snowflake);
      }
    };

    createSnowfall(); // Initialize snowfall when component is mounted

    // Cleanup function to remove snowflakes on component unmount
    return () => {
      const snowfallContainer = document.querySelector('.snowfall');
      snowfallContainer.innerHTML = ''; // Clear snowflakes when the component unmounts
    };
  }, []);

  return <div className="snowfall"></div>; // This div holds the snowflakes
};

export default Snowfall;
