import React from 'react';
import { Link } from 'react-router-dom';
import './Red.css';

export default function Red() {
  return (
    <div className="red-container" style={{ background: `rgb(255, 100, 100)` }}>
      <h1>Red</h1>
      <Link to="/">Back to Main</Link>
    </div>
  );
}
