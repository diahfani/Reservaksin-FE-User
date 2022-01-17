import React from "react";

function Alamat({
  handleInputData,
  formData,
  errMsgAlamat,
  errMsgKelurahan,
  errMsgKecamatan,
  errMsgKabupaten,
  errMsgProvinsi,
  handleValidation,
}) {
  console.log(formData);
  return (
    <div className="form">
      <div className="mb-3">
        <label className="form-label">Alamat KTP *</label>
        <input
          placeholder="Masukkan Alamat KTP"
          name="address"
          type="text"
          value={formData.address}
          onChange={handleInputData}
          onBlur={handleValidation}
          className="form-control"
        />
        <p className="form-text text-danger">{errMsgAlamat}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Kelurahan/Desa *</label>
        <input
          placeholder="Masukkan Kelurahan/Desa"
          name="desa"
          value={formData.desa}
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
          placeholder="Masukkan Kecamatan"
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
          placeholder="Masukkan Kabupaten/Kota"
          type="text"
          value={formData.kota}
          onChange={handleInputData}
          onBlur={handleValidation}
          name="kota"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsgKabupaten}</p>
      </div>
      <div className="mb-3">
        <label className="form-label">Provinsi *</label>
        <input
          placeholder="Masukkan Kabupaten/Kota"
          type="text"
          value={formData.provinsi}
          onChange={handleInputData}
          onBlur={handleValidation}
          name="provinsi"
          className="form-control"
        />
        <p className="form-text text-danger">{errMsgProvinsi}</p>
      </div>
    </div>
  );
}

export default Alamat;
