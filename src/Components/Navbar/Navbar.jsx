import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.scss";
import LogoApp from "Assets/Images/logo.svg";
import PropTypes from "prop-types";

export default function Navbar({ isLoggedIn }) {
  return (
    <nav className="navbar navbar-light bg-light fixed-top">
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={LogoApp} alt="" />
          <p className="mb-0 ms-2">Reservaksin</p>
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
          <div className="offcanvas-header border-bottom">
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={LogoApp} alt="" />
              <p className="mb-0 ms-2">Reservaksin</p>
            </a>
            <button
              type="button"
              className="btn-close text-reset"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            />
          </div>
          <div className="offcanvas-body d-flex flex-column justify-content-between">
            <div>
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                {isLoggedIn ? (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/profile">
                        Profile
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/my-reservation">
                        Jadwal Reservasi Saya
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/reservasi-vaksin">
                        Reservasi Vaksin
                      </Link>
                    </li>
                  </>
                ) : (
                  <>
                    <li className="nav-item">
                      <Link className="nav-link" to="/login">
                        Login
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/register">
                        Register
                      </Link>
                    </li>
                    <li className="nav-item">
                      <Link className="nav-link" to="/news">
                        News
                      </Link>
                    </li>
                  </>
                )}
              </ul>
            </div>
            <div className="py-4 d-flex flex-column justify-content-center">
              <small>LAYANAN GAWAT DARURAT COVID-19</small>
              <Link className="btn btn-primary mt-3" to="/">
                911
              </Link>
              <Link className="btn btn-primary mt-1" to="/">
                081 534 920 200
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
