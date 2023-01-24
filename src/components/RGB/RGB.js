import React from 'react';
import { NavLink, Router } from 'react-router-dom';
import useParams from '../hook/useParams.js';

export default function RGB() {
  const { r, g, b } = useParams();
  const color = `rgb(${r}, ${g}, ${b})`;

  return <div style={{ backgroundColor: color }}></div>;
}
