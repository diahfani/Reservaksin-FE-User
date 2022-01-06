import BackButton from "Components/BackButton/BackButton";
import React from "react";
import Maps from "Components/Maps/Maps";
import { Link } from "react-router-dom";

export default function ReservationCekLokasi() {
  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Input Lokasi" />
        <div className="row mt-3">
        </div>
        <div className="mt-2">
          <Maps />
        </div>
      </div>
      <Link to="/reservasi/pilih-faskes">
        <button className="mt-5 btn btn-primary w-100">Simpan</button>
      </Link>
    </div>
  );
}
