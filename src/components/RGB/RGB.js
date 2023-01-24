import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import useParams from '../hook/useParams.js';

export default function RGB() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b})`;

  return (
    <div className="rgb-container" style={{ backgroundColor: `rbg(${r}, ${g}, ${b})` }}>
      <div className="color-container">
        <NavLink to={'/rgb/100/100/255'}></NavLink>
      </div>
      <h2>{color}</h2>
    </div>
  );
}
