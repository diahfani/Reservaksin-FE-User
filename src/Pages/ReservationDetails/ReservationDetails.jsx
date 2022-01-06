import BackButton from "Components/BackButton/BackButton";
import React from "react";
import "./ReservationDetails.scss";

export default function ReservationDetails() {
  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Detail Reservasi" />
        <br />
        <div
          className="vaccine-ticket text-center py-3"
          style={{ backgroundColor: "#ECF2FA" }}
        >
          <div className="details-ticket">
            <p>Reservasi Pada</p>
            <h2>21 Desember 2021</h2>
          </div>
          <div className="details-ticket">
            <p>Sesi</p>
            <h2>09.00 - 12.00</h2>
          </div>
          <div className="details-ticket">
            <p>No. Reservasi</p>
            <h2>123AB3E28A</h2>
          </div>
          <div className="details-ticket">
            <p>Di</p>
            <h2>RS. Karya Medika</h2>
            <p>Jl. Bosih raya ...</p>
          </div>
        </div>
        <h2 className="mt-4">Penerima Vaksin</h2>
        <div>
          <div className="d-flex justify-content-between">
            <p>Nama</p>
            <p>Rudy Tabuty</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>NIK</p>
            <p>3603220987904567</p>
          </div>
          <div className="d-flex justify-content-between">
            <p>No. Telepon</p>
            <p>081234572268</p>
          </div>
        </div>
      </div>
      <button className="btn btn-danger w-100">BATALKAN RESERVASI</button>
    </div>
  );
}
