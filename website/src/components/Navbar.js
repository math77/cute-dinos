import { useState } from 'react';

import { Link } from 'react-router-dom';

import './Navbar.css';


function Navbar() {
  const [isActive, setisActive] = useState(false);

  return (
    <nav className="navbar" role="navigation" aria-label="main navigation">
      <div className="navbar-brand">
        <Link to="/" className="navbar-item" id="logo">
          Modern Dinos
        </Link>

        <Link
          onClick={() => {
            setisActive(!isActive)
          }}
          role="button"
          className={`navbar-burger burger ${isActive ? 'is-active' : ''}`}
          aria-label="menu"
          aria-expanded="false"
          data-target="navbarTown"
        >
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
          <span aria-hidden="true"></span>
        </Link>

      </div>
      <div className={`navbar-menu ${isActive ? 'is-active' : ''}`}>
        <div className="navbar-start" id="navbar-items">
          <Link className="navbar-item" to="/someideas">Some ideas</Link>
          <Link className="navbar-item" to="/faq">FAQ</Link>
        </div>        
      </div>
    </nav>
  );
}

export default Navbar;
