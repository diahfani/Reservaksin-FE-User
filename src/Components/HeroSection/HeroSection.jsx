import React from "react";
import Illustrations1 from "../../Assets/Images/illustration-1.svg";
import { Link } from "react-router-dom";
import "./HeroSection.scss";
import PropTypes from "prop-types";

export default function HeroSection({ isLoggedIn }) {
  return (
    <section className="hero-section container gradient-blue py-5 mt-5">
      <div className="d-flex flex-column justify-content-center">
        <img src={Illustrations1} alt="" />
        <h1 className="text-center mt-5">
          Layanan Informasi Terpadu & Reservasi Vaksinasi COVID-19
        </h1>
        <p className="text-center px-2">
          Cek syarat, tata cara, pendaftaran, jadwal vaksinasi dan reservasi
          vaksinasi anda disini
        </p>
        {isLoggedIn ? (
          <>
            <Link className="btn btn-outline-light mt-3" to="/reservasi">
              Reservasi
            </Link>
            <Link className="btn btn-outline-light mt-3" to="/profile">
              Profile
            </Link>
          </>
        ) : (
          <>
            <Link className="btn btn-outline-light mt-3" to="/login">
              Masuk
            </Link>
            <Link className="btn btn-outline-light mt-3" to="/register">
              Daftar
            </Link>
          </>
        )}
      </div>
    </section>
  );
}

HeroSection.propTypes = {
  isLoggedIn: PropTypes.bool.isRequired,
};
