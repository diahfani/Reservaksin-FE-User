import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container" style={{ maxWidth: "480px" }}>
        <a className="navbar-brand" href="/">
          Reservaksin
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div
          className="offcanvas offcanvas-end"
          tabIndex={-1}
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">
              Offcanvas
            </h5>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <li className="nav-item">
                <Link to="/profile">
                  <h5 className="nav-link active">Profile</h5>
                </Link>
                {/* <a className="nav-link active" aria-current="page" href="#">Login</a> */}
              </li>

              <li className="nav-item">
                <Link to="/my-reservation">
                  <h5 className="nav-link active">Jadwal Reservasi Saya</h5>
                </Link>
                {/* <a className="nav-link" href="#">Register</a> */}
              </li>

              <li className="nav-item">
                <Link to="/reservasi-vaksin">
                  <h5 className="nav-link active">Reservasi Vaksin</h5>
                </Link>
                {/* <a className="nav-link" href="#">Register</a> */}
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
