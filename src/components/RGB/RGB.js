import React from 'react';
import { NavLink, Router } from 'react-router-dom';

export default function RGB() {
  return (
    <Router>
      <nav className="nav-wrapper yellow">
        <div className="container">
          <a className="rgb">RGB</a>
          <ul>
            <li>
              <NavLink href="/">Home</NavLink>
            </li>
            <li>
              <NavLink href="/red">Red</NavLink>
            </li>
            <li>
              <NavLink href="/blue">Blue</NavLink>
            </li>
            <li>
              <NavLink href="/green">Green</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </Router>
  );
}
