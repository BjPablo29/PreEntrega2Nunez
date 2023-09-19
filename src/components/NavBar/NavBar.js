import React from 'react';
import { Link } from 'react-router-dom'; 
import CartWidget from '../CartWidget/CartWidget';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <Link className="navbar-brand" to="/">By Gio Haircare</Link> 
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Productos con Formol">Con Formol</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/category/Productos sin Formol">Sin Formol</Link> 
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/contact">Contacto</Link> 
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default NavBar;
