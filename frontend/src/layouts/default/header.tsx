import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <nav className="header navbar">
      <div className="container">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            S
          </Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <Link to="/" className="navbar-item">
              Home
            </Link>
            <Link to="/golang" className="navbar-item">
              Golang
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
