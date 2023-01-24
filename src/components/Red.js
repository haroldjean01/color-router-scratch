import React from 'react';
import { Link } from 'react-router-dom';
import './Red.css';

export default function Red() {
  return (
    <div className="red-container">
      <h1>Red</h1>
      <Link to="/">Back to Main</Link>
    </div>
  );
}
