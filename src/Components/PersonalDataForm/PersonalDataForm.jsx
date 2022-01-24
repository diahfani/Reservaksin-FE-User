import React, { useState } from "react";
// import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./Form.css";
// import { useSelector } from 'react-redux'

function PersonalDataForm({
  formData,
  errMsgNoKK,
  errMsgNIK,
  errMsgNama,
  errMsgJeniKelamin,
  errMsgStatusHubungan,
  errMsgTglLahir,
  errMsgStatusPerkawinan,
  errMsgAddress,
  errMsgKelurahan,
  errMsgKecamatan,
  errMsgKabupaten,
  errMsgProvinsi,
  handleInputData,
  handleValidation,
  errMsgNoTelp
}) {
  // console.log(formData.no_kk)
  return (
    <div className="px-3 mt-3">
      {/* <form className="form" onSubmit={handleSubmit}> */}
        <div className="mb-2 ctr-input ">
          <label className="form-label">No. KK *</label>
          <input
            placeholder="Masukkan nomor kk"
            name="no_kk"
            type="number"
            value={formData.no_kk}
            // value={no_kk}
            onChange={handleInputData}
            onBlur={handleValidation}
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsgNoKK}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">NIK *</label>
          <input
            placeholder="Masukkan nomor kk"
            name="nik"
            value={formData?.nik}
            onChange={handleInputData}
            onBlur={handleValidation}
            type="number"
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsgNIK}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">Nama Lengkap *</label>
          <input
            placeholder="Masukkan nama lengkap"
            type="text"
            value={formData?.fullname}
            onChange={handleInputData}
            onBlur={handleValidation}
            name="fullname"
            className="form-control"
          />
          <p className="form-text text-danger mb-0">{errMsgNama}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">No. Telepon</label>
          <input
            placeholder="Masukkan nomor telepon"
            name="nohp"
            value={formData.nohp}
            onChange={handleInputData}
            onBlur={handleValidation}
            type="number"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgNoTelp}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="col-form-label">Jenis Kelamin *</label>
          <div className="d-flex">
            <div className="form-check form-check-inline me-5">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Pria"
                onBlur={handleValidation}
                checked={formData?.gender === "Pria"}
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
                onBlur={handleValidation}
                checked={formData?.gender === "Wanita"}
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
            className="form-control"
            name="dateof_birth"
            value={formData?.dateof_birth}
            selected={formData?.dateof_birth}
            onChange={handleInputData}
            onBlur={handleValidation}
          />
          <p className="form-text text-danger mb-0 p-date">{errMsgTglLahir}</p>
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">
            Status Hubungan dalam Kartu Keluarga *
          </label>
          <select
            className="form-select ctr-input"
            name="family_relationship"
            defaultValue={formData?.family_relationship}
            onBlur={handleValidation}
            onChange={handleInputData}
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
        <div className="mb-2 ctr-input">
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
        <div className="mb-3">
          <label className="form-label">Alamat KTP *</label>
          <input
            placeholder={formData.alamat}
            name="address"
            type="text"
            value={formData.address}
            onChange={handleInputData}
            onBlur={handleValidation}
            // onBlur={handleValidation}
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgAddress}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Kelurahan/Desa *</label>
          <input
            placeholder="Masukkan nomor kk"
            name="kelurahan"
            value={formData.kelurahan}
            onChange={handleInputData}
            onBlur={handleValidation}
            type="text"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgKelurahan}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Kecamatan *</label>
          <input
            placeholder="Masukkan nomor kk"
            type="text"
            value={formData.kecamatan}
            onChange={handleInputData}
            onBlur={handleValidation}
            name="kecamatan"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgKecamatan}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Kabupaten/Kota *</label>
          <input
            placeholder="Masukkan nomor kk"
            type="text"
            value={formData.kabupaten}
            onChange={handleInputData}
            onBlur={handleValidation}
            name="kabupaten"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgKabupaten}</p>
        </div>
        <div className="mb-3">
          <label className="form-label">Provinsi *</label>
          <input
            placeholder="Masukkan nomor kk"
            type="text"
            value={formData.provinsi}
            onChange={handleInputData}
            // onBlur={handleValidation}
            name="provinsi"
            className="form-control"
          />
          <p className="form-text text-danger">{errMsgProvinsi}</p>
        </div>
        {/* <button className="btn btn-primary w-100 my-3" type="submit">
          Simpan
        </button> */}
      {/* </form> */}
    </div>
  );
}

export default PersonalDataForm;
