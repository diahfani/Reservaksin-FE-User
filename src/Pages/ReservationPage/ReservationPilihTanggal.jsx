import BackButton from "Components/BackButton/BackButton";
import CardFaskes from "Components/CardFaskes/CardFaskes";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { clearValidation } from "../../Config/Redux/ReservationSlice";
import dayjs from "dayjs";
import "dayjs/locale/id";
import axios from "axios";
import CustomToast from "Components/CustomToast/CustomToast";

export default function ReservasitionPilihTanggal() {
  // declare new state or new variables below ...
  const reservationCheck = useSelector((state) => state.reservation);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { sessionID } = useParams();
  const [sessionData, setSessionData] = useState({});
  const [formBooking, setFormBooking] = useState({
    SessionID: sessionID,
    citizenID: reservationCheck.userID,
    tanggalVaksin: "",
    jamVaksin: "",
  });
  const [errMsg, setErrMsg] = useState({
    tanggalVaksin: false,
    jamVaksin: false,
  });
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const [disableButton, setDisableButton] = useState(false);

  // code your handle functions below ...
  const validate = (e) => {
    if (e.target.value === "") {
      setErrMsg({ ...errMsg, [e.target.name]: true });
    } else {
      setErrMsg({ ...errMsg, [e.target.name]: false });
    }
  };

  const getSessionDetails = async () => {
    fetch(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/session/${sessionID}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((result) => setSessionData(JSON.parse(result).data))
      .catch((error) => console.log("error", error));
  };

  const handleChange = (e) => {
    setFormBooking({ ...formBooking, [e.target.name]: e.target.value });
  };

  const submitBookingAPI = async () => {
    await axios
      .post(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/booking`, {
        citizen_id: formBooking.citizenID,
        session_id: formBooking.SessionID,
        date: formBooking.tanggalVaksin,
        session_time: `${formBooking.tanggalVaksin} ${formBooking.jamVaksin}`,
      })
      .then(function (response) {
        dispatch(clearValidation());
        navigate("/reservasi-berhasil", {
          state: { dataBooking: response.data.data },
        });
      })
      .catch(function (error) {
        console.log(error);
        setToast({
          show: true,
          body: (
            <div className="text-center">
              <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
                Gagal proses booking vaksinasi
              </p>
            </div>
          ),
          delay: 30000,
          headIcon: (
            <span className="material-icons-outlined text-danger">error</span>
          ),
        });
        setDisableButton(false);
      });
  };

  const handleSubmit = async () => {
    if (formBooking.jamVaksin === "" || formBooking.tanggalVaksin === "") {
      setToast({
        show: true,
        body: (
          <p className="text-danger" style={{ fontSize: "1rem" }}>
            Mohon masukan tanggal dan jam booking vaksinasi
          </p>
        ),
        delay: 3000,
        headIcon: (
          <span className="material-icons-outlined text-warning">warning</span>
        ),
      });
    } else {
      setDisableButton(true);
      setToast({
        show: true,
        body: (
          <div className="text-center">
            <div className="spinner-border text-primary" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
            <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
              Proses booking vaksinasi
            </p>
          </div>
        ),
        delay: 30000,
        headIcon: (
          <span className="material-icons-outlined text-secondary">
            hourglass_top
          </span>
        ),
      });
      await submitBookingAPI();
    }
  };

  // execute useEffect below ...
  useEffect(() => {
    getSessionDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Pilih Tanggal Vaksin"></BackButton>
        <div className="pt-4">
          <CardFaskes sessionData={sessionData}></CardFaskes>
          <form className="mt-4">
            <div className="mb-3">
              <label className="form-label">Tanggal Vaksin*</label>
              <input
                className="form-control"
                type="date"
                name="tanggalVaksin"
                value={formBooking.tanggalVaksin}
                onChange={handleChange}
                onBlur={validate}
                min={dayjs(sessionData?.start_session)
                  .locale("id")
                  .format("YYYY-MM-DD")}
                max={dayjs(sessionData?.end_session)
                  .locale("id")
                  .format("YYYY-MM-DD")}
              />
              <span
                className={`error-msg ${
                  !errMsg?.tanggalVaksin ? "d-none" : null
                }`}
              >
                Masukan tanggal booking Vaksinasi
              </span>
            </div>
            <div className="mb-3">
              <label className="form-label">Jam Vaksin*</label>
              <input
                className="form-control"
                type="time"
                name="jamVaksin"
                value={formBooking.jamVaksin}
                onChange={handleChange}
                onBlur={validate}
              />
              <span
                className={`error-msg ${!errMsg?.jamVaksin ? "d-none" : null}`}
              >
                Masukan jam booking vaksinasi
              </span>
            </div>
          </form>
        </div>
      </div>
      <button
        className={`btn btn-primary w-100 mt-5 ${
          disableButton ? "disabled" : null
        }`}
        onClick={handleSubmit}
      >
        Booking
      </button>
      <CustomToast toast={toast} setToast={setToast} />
    </div>
  );
}
