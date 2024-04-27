import React from 'react';
import Car from './Car'; // Import the Car component
import './index.css'
function Garage() {
  return (
    <div class="form">
      <h1>React</h1>
      <Car /> {/* Render the Car component */}
    </div>
  );
}

export default Garage;