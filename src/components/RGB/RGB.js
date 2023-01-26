import React from 'react';
import { useParams } from 'react-router-dom';
import './RGB.css';
export default function RGB() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="rgb-container" style={{ backgroundColor: `rgb(${r}, ${g}, ${b})` }}>
      <h1>Colors</h1>
      <div className="color-container">
        {/* <NavLink to={'/rgb/255/100/100'}>Red</NavLink>
        <NavLink to={'/rgb/100/255/100'}>Green</NavLink>
        <NavLink to={'/rgb/100/100/255'}>Blue</NavLink> */}
      </div>
      <h2>{color}</h2>
    </div>
  );
}
