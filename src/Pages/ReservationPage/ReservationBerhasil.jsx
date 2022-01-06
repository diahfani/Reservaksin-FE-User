import React from "react";
import Illustration4 from "Assets/Images/illustration-4.svg";
import { Link } from "react-router-dom";
import LogoApp from "Assets/Images/logo.svg";

export default function ReservationBerhasil() {
  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <a className="navbar-brand d-flex align-items-center justify-content-center" href="/">
        <img src={LogoApp} style={{ height: "35px" }} alt="" />
        <p className="mb-0 ms-2" style={{ fontWeight: 500, color: "#0A508D" }}>
          Reservaksin
        </p>
      </a>
      <div className="d-flex flex-column align-items-center">
        <img src={Illustration4} className="img-fluid" alt="" />
        <h2 className="text-center mt-4">Reservasi Vaksin Berhasil!</h2>
      </div>
      <Link to="/">
        <button className="btn btn-primary w-100 mt-5">Home</button>
      </Link>
    </div>
  );
}
