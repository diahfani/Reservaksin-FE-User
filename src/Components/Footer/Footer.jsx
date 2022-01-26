import React from "react";
import LogoApp from "Assets/Images/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css"

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="d-flex justify-content-between container">
        <div>
          <img className="img-fluid" src={LogoApp} alt="" />
        </div>
        <div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Bantuan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Darurat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                News
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <ul className="nav flex-column">
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Bantuan
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                Darurat
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/" className="nav-link py-0">
                News
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="container copyright text-center mt-4">
        <hr />
        <p>
          Hak Cipta © 2022 Reservaksin. Seluruh Hak Cipta Dilindungi
          Undang-Undang.
        </p>
      </div>
    </footer>
  );
}
