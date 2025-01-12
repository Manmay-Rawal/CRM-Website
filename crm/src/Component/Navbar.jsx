import React from 'react';
import logo from '../image/crm.png'
import {Link} from 'react-router-dom'

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <a className="navbar-brand mt-2 mt-lg-0" href="#">
            <img
              src={logo}
              alt="CRM Logo"
              loading="lazy"
              style={{ height: '40px' }}
            />
          </a>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="#">CRM Plus</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Desk</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">All Projects</a>
            </li>
          </ul>
        </div>
        <div className="d-flex align-items-center">
          <div className="SignIn navbar-nav nav-item">
            <Link
              className="auth-modal-toggle btn btn-primary ms-2 me-1"
              id="dynamicLink"
              to="/login"
              role="button"
            >
              Sign In
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
