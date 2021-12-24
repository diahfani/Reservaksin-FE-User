import BackButton from "Components/BackButton/BackButton";
import React from "react";
import Maps from "Components/Maps/Maps";
import { Link } from "react-router-dom";

export default function ReservationCekLokasi() {
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Input Lokasi" />
      <div className="row mt-3">
        <div className="">
          <label htmlFor="search" className="form-label">
            Cari Lokasi
          </label>
          <div className="input-group">
            <input
              className="form-control border-end-0 border"
              type="search"
              placeholder="search"
              id="example-search-input"
            />
            <span className="input-group-append">
              <button
                className="btn btn-outline-secondary border-start-0 border ms-n5"
                type="button"
              >
                <span className="material-icons-outlined">search</span>
              </button>
            </span>
          </div>
        </div>
      </div>
      <div className="mt-2">
        <Maps />
      </div>
      <Link to="/reservasi/pilih-faskes">
        <button className="mt-5 btn btn-primary w-100">Simpan</button>
      </Link>
    </div>
  );
}
