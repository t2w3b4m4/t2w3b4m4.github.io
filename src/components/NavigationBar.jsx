import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import routes from '../routes';
import '../styles/NavigationBar.css';

const HIDDEN_ROUTES = new Set(['/__tools__', '/__colors__']);

function NavigationBar() {
  // TODO: look at current path and set default
  const [nameOfCurrentPath, setNameOfCurrentPath] = useState('home');
  const handlePathClick = (nameOfPath) => () => {
    setNameOfCurrentPath(nameOfPath);
  };

  return (
    <div className="nav-bar">
      <ul className="nav-items">
        {Object.values(routes).map((r) => (
          <li className="nav-item" key={`nav-item__${r.name}`}>
            <Link
              to={r.path}
              className={`anchor-hover-black-background-white-text ${r.name === nameOfCurrentPath ? 'current-focused-path' : ''}`}
              onClick={handlePathClick(r.name)}
              hidden={HIDDEN_ROUTES.has(r.path)}
            >
              <span>
                {r.name}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default NavigationBar;
