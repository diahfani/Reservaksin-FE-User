import BackButton from "Components/BackButton/BackButton";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addValidation } from "../../Config/Redux/ReservationSlice";
import CustomToast from "Components/CustomToast/CustomToast";

export default function Reservation() {
  // declare new state or new variable below ...
  const [listAnggota, setListAnggota] = useState([]);
  const [formValidate, setFormValidate] = useState({
    citizenID: "",
    citizenName: "",
  });
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const reservationCheck = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // code your handle functions below ...
  const fetchListAnggota = async () => {
    await fetch(
      `${
        process.env.REACT_APP_RESERVAKSIN_API_URL
      }/citizen/family?nokk=${3603222340870003}`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => setListAnggota(JSON.parse(result).data))
      .catch((error) => console.log(error));
  };

  const handleChangeNIK = (e) => {
    const { fullname } = listAnggota.find((item) => item.id === e.target.value);
    setFormValidate({ citizenID: e.target.value, citizenName: fullname });
  };

  const handleValidate = () => {
    if (formValidate.citizenID === "") {
      setToast({
        show: true,
        body: (
          <p className="text-danger" style={{ fontSize: "1rem" }}>
            Pilih no. NIK yang ingin divalidasi
          </p>
        ),
        delay: 3000,
        headIcon: (
          <span className="material-icons-outlined text-warning">warning</span>
        ),
      });
    } else {
      dispatch(
        addValidation({
          userID: formValidate.citizenID,
          isValid: true,
        })
      );
      setToast({
        show: true,
        body: (
          <p className="text-success" style={{ fontSize: "1rem" }}>
            Validasi Berhasil{" "}
          </p>
        ),
        delay: 3000,
        headIcon: (
          <span className="material-icons-outlined text-primary">verified</span>
        ),
      });
    }
  };

  // execute useEffect below ...
  useEffect(() => {
    fetchListAnggota();
  }, []);

  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Reservasi Vaksin" />
        <p className="text-center pt-4">
          Mohon isi data di bawah untuk melakukan validasi
        </p>
        <div className="mb-4">
          <label className="form-label">NIK</label>
          <select
            className="form-select"
            name="statusHubungan"
            value={formValidate.citizenID}
            onChange={handleChangeNIK}
          >
            <option value="" disabled>
              Pilih NIK Anggota Keluarga
            </option>
            {listAnggota?.map((item, idx) => (
              <option key={idx} value={item?.id}>
                {item?.nik}
              </option>
            ))}
          </select>
          <span className="error-msg"></span>
        </div>
        <div className="mb-4">
          <label className="form-label">Nama Lengkap</label>
          <input
            className="form-control"
            type="text"
            name="namaLengkap"
            placeholder="Nama Lengkap"
            value={formValidate.citizenName}
            disabled
          />
        </div>
      </div>
      <div className="pt-5">
        <button className="btn btn-primary w-100 mb-3" onClick={handleValidate}>
          Check
        </button>
        <button
          className={`btn btn-primary w-100 mb-3 ${
            !reservationCheck.isValid ? "disabled" : null
          }`}
          onClick={() => navigate("/reservasi/cek-lokasi")}
        >
          Next
        </button>
      </div>
      <CustomToast toast={toast} setToast={setToast} />
    </div>
  );
}
