import React from "react";
import LogoApp from "Assets/Images/logo.svg";
import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer py-4">
      <div className="d-flex justify-content-between container">
        <div className="me-3">
          <img className="img-fluid" src={LogoApp} alt="" />
        </div>
        <div>
          <ul className="nav flex-column">
            <Link to="/" className="text-decoration-none">
              Home
            </Link>
            <Link to="/" className="text-decoration-none">
              Lokasi Faskes
            </Link>
            <Link to="/" className="text-decoration-none">
              News
            </Link>
          </ul>
        </div>
        <div>
          <ul className="nav flex-column">
            <Link to="/" className="text-decoration-none">
              Syarat & Ketentuan
            </Link>
            <Link to="/" className="text-decoration-none">
              Darurat
            </Link>
            <Link to="/" className="text-decoration-none">
              News
            </Link>
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
