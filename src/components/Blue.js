import React from 'react';
import { Link } from 'react-router-dom';
import './Blue.css';
export default function Blue() {
  return (
    <div className="blue-container" style={{ background: `rgb(100, 100, 255)` }}>
      <h1>Blue</h1>
      <Link to="/">Back to Main</Link>
    </div>
  );
}
