
import { Link } from 'react-router-dom'
import SearchBar from '../SearchBar/Search'
import './TopBar.css'

import React from 'react';
import { useLocation } from 'react-router-dom';

export const TopBar = () => {
  const location = useLocation();

  return (
    <nav className="navigation container">
      <ul className="list-non-bullet nav-pills">
        <li className={`list-item-inline  ${location.pathname === '/' ? 'bold' : ''}`}>
          <Link className="link" to="/">Home</Link>
        </li>
        <li className={`list-item-inline ${location.pathname === '/components' ? 'bold' : ''}`}>
          <Link className="link" to="/components">Components</Link>
        </li>
      </ul>
    </nav>
  );
}


