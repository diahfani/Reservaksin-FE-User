import BackButton from "Components/BackButton/BackButton";
import React from "react";
import { Link } from "react-router-dom";

export default function ReservasitionPilihTanggal() {
  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Pilih Tanggal Vaksin"></BackButton>
        <div className="pt-4">
          <CardFaskes></CardFaskes>
          <form className="mt-4">
            <div className="my-3">
              <label className="form-label">Tanggal Vaksin</label>
              <input
                className="form-control"
                type="date"
                name="tangalVaksin"
                id=""
              />
            </div>
            <div className="my-3">
              <label className="form-label">Jam Vaksin</label>
              <input
                className="form-control"
                type="time"
                name="jamVaksin"
                id=""
              />
            </div>
          </form>
        </div>
      </div>
      <Link to="/reservasi-berhasil">
        <button className="btn btn-primary w-100 mt-5">Simpan</button>
      </Link>
    </div>
  );
}

function CardFaskes() {
  return (
    <div className="border rounded px-3 py-2" style={{ background: "#E0EAF6" }}>
      <h4 className="mb-3">RS. Karya Medika</h4>
      <p>Jl. Merdeka Barat no.9, Rawa lumbu, Bekasi, Jawa Barat </p>
      <small>
        <b>Vaksin yang tersedia: {"Astra Zeneca"}</b>
      </small>
      <br />
      <small>
        <b>Kapasitas: {0}</b>
      </small>
    </div>
  );
}
