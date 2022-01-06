import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import LogoApp from "Assets/Images/logo.svg";
import PropTypes from "prop-types";
import { Offcanvas, Navbar as NavbarBts } from "react-bootstrap";

export default function Navbar({ isLoggedIn }) {
  return (
    <NavbarBts fixed="top" bg="light" expand={false}>
      <div className="container">
        <a className="navbar-brand d-flex align-items-center" href="/">
          <img src={LogoApp} alt="" />
          <p
            className="mb-0 ms-2"
            style={{ fontWeight: 500, color: "#0A508D" }}
          >
            Reservaksin
          </p>
        </a>
        <NavbarBts.Toggle />
        <NavbarBts.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header
            className="border-bottom"
            style={{ padding: "0.5rem 1.25rem" }}
            closeButton
          >
            <a className="navbar-brand d-flex align-items-center" href="/">
              <img src={LogoApp} style={{ width: "2.4rem" }} alt="" />
              <p
                className="mb-0 ms-2"
                style={{ fontWeight: 500, color: "#0A508D" }}
              >
                Reservaksin
              </p>
            </a>
          </Offcanvas.Header>
          <Offcanvas.Body className="d-flex flex-column justify-content-between">
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
                      <Link className="nav-link" to="/reservasi/cek-validasi">
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
          </Offcanvas.Body>
        </NavbarBts.Offcanvas>
      </div>
    </NavbarBts>
  );
}

Navbar.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
