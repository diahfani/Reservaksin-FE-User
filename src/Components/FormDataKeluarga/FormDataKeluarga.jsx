import React from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "../Button.css";

function FormDataKeluarga({
  formdataAnggota,
  id,
  handleInputDataAnggota,
  handleInputTglLahirAnggota,
  formDataNoKK,
  setFormData
}) {
  return (
    <div className="container">
      <div className="form overflow-auto">
        <div className="mb-2 ctr-input ">
          <label className="form-label">No. KK *</label>
          <input
          disabled
            placeholder="Masukkan no. KK"
            name="no_kk"
            type="number"
            value={formDataNoKK}
            onChange={(e) => {
              handleInputDataAnggota(id, e);
            }}
            className="form-control"
          />
        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">NIK *</label>
          <input
            placeholder="Masukkan NIK"
            name="nik"
            value={formdataAnggota.nik}
            onChange={(e) => {
              handleInputDataAnggota(id, e);
            }}
            type="number"
            className="form-control"
          />

        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">Nama Lengkap *</label>
          <input
            placeholder="Masukkan nama lengkap"
            type="text"
            value={formdataAnggota.fullname}
            onChange={(e) => {
              handleInputDataAnggota(id, e);
            }}
            name="fullname"
            className="form-control"
          />

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
                checked={formdataAnggota.gender === "Pria"}
                onChange={(e) => {
                  handleInputDataAnggota(id, e);
                }}
              />
              <label className="form-check-label">Pria</label>
            </div>
            <div className="form-check form-check-inline ms-5">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                value="Wanita"
                checked={formdataAnggota.gender === "Wanita"}
                onChange={(e) => {
                  handleInputDataAnggota(id, e);
                }}
              />
              <label className="form-check-label">Wanita</label>
            </div>
          </div>

        </div>
        <div className="mb-2 ctr-input date-input">
          <label className="form-label">Tanggal Lahir *</label>
          <input
            type="date"
            className="form-control"
            name="dateof_birth"
            selected={formdataAnggota.dateof_birth}
            onChange={(e) => {handleInputDataAnggota(id, e)}}
          // onChange={(date) => {
          //   handleInputTglLahirAnggota(id, date);
          // }}
          />

        </div>
        <div className="mb-2 ctr-input">
          <label className="form-label">
            Status Hubungan dalam Kartu Keluarga *
          </label>
          <select
            className="form-select"
            value={formdataAnggota.family_relationship}
            name="family_relationship"
            onChange={(e) => {
              handleInputDataAnggota(id, e);
            }}
          >
            <option value="" disabled>
              Hubungan keluarga
            </option>
            <option value="anak">Anak</option>
            <option value="suami">Suami</option>
            <option value="istri">Istri</option>
            <option value="mertua">Mertua</option>
          </select>

        </div>
        <div className="mb-4 ctr-input">
          <label className="form-label">Status Perkawinan *</label>
          <select
            className="form-select"
            value={formdataAnggota.marriage_status}
            name="marriage_status"
            onChange={(e) => {
              handleInputDataAnggota(id, e);
            }}
          >
            <option value="" disabled>
              Status perkawinan
            </option>
            <option value="belumKawin">Belum Kawin</option>
            <option value="kawin">Kawin</option>
            <option value="cerai">Cerai</option>
            <option value="ceraiMati">Cerai Mati</option>
          </select>
        </div>
      </div>
    </div>
  );
}

export default FormDataKeluarga;
