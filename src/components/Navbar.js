import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.jpeg';


function Navbar({ cartCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow-sm">
      <div className="container">
          <img  className="navbar-brand" src={logo} alt="not found" style={{ width: "60px", marginRight: "10px" }} />
        <Link className="navbar-brand" to="/">CatReads</Link>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li><Link className="nav-link" to="/">Home</Link></li>
            <li><Link className="nav-link" to="/about">About</Link></li>
            <li><Link className="nav-link" to="/features">Features</Link></li>
            <li><Link className="nav-link" to="/contact">Contact</Link></li>
            <li><Link className="nav-link" to="/cart">Cart ({cartCount})</Link></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;