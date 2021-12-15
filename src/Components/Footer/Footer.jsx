import React from "react";
import LogoApp from "../../Assets/Images/Logo.png";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="py-4" style={{ background: "white" }}>
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
      <div className="container text-center mt-4" style={{ fontSize: "14px" }}>
        <hr />
        <p>
          Hak Cipta © 2022 Reservaksin. Seluruh Hak Cipta Dilindungi
          Undang-Undang.
        </p>
      </div>
    </footer>
  );
}
