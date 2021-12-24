import BackButton from "Components/BackButton/BackButton";
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function Reservation() {
  const [nik, setNik] = useState([
    "3603222505970002",
    "3603222505970002",
    "3603222505970002",
    "3603222505970002",
  ]);

  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Reservasi Vaksin" />
      <div className="pt-4">
        <p className="text-center">
          Mohon isi data di bawah untuk melakukan validasi
        </p>
        <form className="form">
          <div className="mb-4">
            <label className="form-label">NIK</label>
            <select
              className="form-select"
              name="statusHubungan"
              defaultValue={""}
              // onChange={}
              // onBlur={handleValidation}
            >
              {nik?.map((item, idx) => (
                <option key={idx} value={item}>{item}</option>
              ))}
            </select>
            {/* <p className="form-text text-danger">{errMsgStatusHubungan}</p> */}
          </div>
          <div className="mb-4">
            <label className="form-label">Nama Lengkap</label>
            <input
              className="form-control"
              type="text"
              name="namaLengkap"
              placeholder="Nama Lengkap"
              aria-label="namaLengkap"
            />
            {/* <p className="form-text text-danger">{errMsgStatusHubungan}</p> */}
          </div>
          <div className="pt-5">
            <button className="btn btn-primary w-100 mb-3">Check</button>
            <Link to="/reservasi/cek-lokasi">
              <button className="btn btn-primary w-100 mb-3">Next</button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
