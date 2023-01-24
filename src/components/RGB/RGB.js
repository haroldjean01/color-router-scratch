import React from 'react';

export default function RGB() {
  return (
    <nav className="nav-wrapper yellow">
      <div className="container">
        <a className="rgb">RGB</a>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/red">Red</a>
          </li>
          <li>
            <a href="/blue">Blue</a>
          </li>
          <li>
            <a href="/green">Green</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
