import React from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Button.css";
import {useSelector} from 'react-redux'
// import PropTypes from "prop-types";

function DataPribadiComponent({
  formData,
  handleInputData,
  errMsgNoKK,
  errMsgNIK,
  errMsgNama,
  errMsgJeniKelamin,
  errMsgStatusHubungan,
  errMsgTglLahir,
  errMsgStatusPerkawinan,
  handleValidation,
  isLoggedIn
}) {
  const noKK = useSelector((state) => state.user.nokk)
  const nik = useSelector((state) => state.user.nik)
  const fullname = useSelector((state) => state.user.fullname)
  const gender = useSelector((state) => state.user.gender)
  const dob = useSelector((state) => state.user.dob)
  const relationship = useSelector((state) => state.user.relationship)
  const status = useSelector((state) => state.user.status)
  return (
    <div className="form">
      <div className="mb-3">
        <label className="form-label">No. KK *</label>
          <input
          placeholder={isLoggedIn? noKK : "Masukkan no. KK"}
          // defaultValue={noKK}
          name="no_kk"
          type="number"
          value={formData?.nokk}
          onChange={handleInputData}
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger mb-0">{errMsgNoKK}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">NIK *</label>
        <input
          placeholder={isLoggedIn? nik : "Masukkan NIK"}
          name="nik"
          value={formData?.nik}
          onChange={handleInputData}
          type="number"
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger mb-0">{errMsgNIK}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Nama Lengkap *</label>
        <input
          placeholder={isLoggedIn? fullname : "Masukkan nama lengkap"}
          type="text"
          value={formData?.fullname}
          onChange={handleInputData}
          name="fullname"
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger mb-0">{errMsgNama}</p>
      </div>
      <div className="mb-3">
        <label className="col-form-label">Jenis Kelamin *</label>
        <div className="d-flex">
          <div className="form-check form-check-inline me-5">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Pria"
              checked={formData?.gender === "Pria"}
              onBlur={handleValidation}
              onChange={handleInputData}
            />
            <label className="form-check-label">Pria</label>
          </div>
          <div className="form-check form-check-inline ms-5">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              value="Wanita"
              checked={formData?.gender === "Wanita"}
              onBlur={handleValidation}
              onChange={handleInputData}
            />
            <label className="form-check-label">Wanita</label>
          </div>
        </div>
        <p className="form-text text-danger mb-0">{errMsgJeniKelamin}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Tanggal Lahir *</label>
        <input
        type="date"
        placeholder={isLoggedIn? dob : "mm/dd/yyyy"}
          className="form-control"
          name="dateof_birth"
          selected={formData?.dateof_birth}
          onChange={handleInputData}
          onBlur={handleValidation}
        />
        <p className="form-text text-danger mb-0 p-date">{errMsgTglLahir}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">
          Status Hubungan dalam Kartu Keluarga *
        </label>
        <select
          className="form-select"
          name="family_relationship"
          defaultValue={formData?.family_relationship}
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option value="" disabled>
            Hubungan keluarga
          </option>
          <option value="anak">Anak</option>
          <option value="suami">Suami</option>
          <option value="istri">Istri</option>
          <option value="mertua">Mertua</option>
        </select>
        <p className="form-text text-danger">{errMsgStatusHubungan}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Status Perkawinan *</label>
        <select
          className="form-select"
          name="marriage_status"
          defaultValue={formData?.marriage_status}
          onChange={handleInputData}
          onBlur={handleValidation}
        >
          <option value="" disabled>
            Status perkawinan
          </option>
          <option value="belumKawin">Belum Kawin</option>
          <option value="kawin">Kawin</option>
          <option value="cerai">Cerai</option>
          <option value="ceraiMati">Cerai Mati</option>
        </select>
        <p className="form-text text-danger">{errMsgStatusPerkawinan}</p>
      </div>
    </div>
  );
}

export default DataPribadiComponent;
