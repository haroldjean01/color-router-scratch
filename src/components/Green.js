import React from 'react';
import { Link } from 'react-router-dom';
import './Green.css';

export default function Green() {
  return (
    <div className="green-container" style={{ background: `rgb(100, 255, 100)` }}>
      <h1>Green</h1>
      <Link to="/">Back to Main</Link>
    </div>
  );
}
