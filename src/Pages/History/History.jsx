import React, { useState, useEffect } from "react";
import BackButton from "Components/BackButton/BackButton";
import CardBookings from "Components/CardBookings/CardBookings";
import Illustration6 from "Assets/Images/illustration-6.svg";
import Illustration5 from "Assets/Images/illustration-5.svg";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import CustomToast from "Components/CustomToast/CustomToast";

export default function History() {
  // declare new state or new variables below ...
  const noKK = "3603445678980002";
  const [dataBookings, setDataBookings] = useState(null);
  const [serverError, setServerError] = useState(null);
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    show: true,
    body: (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Mohon tunggu sebentar :))
        </p>
      </div>
    ),
    delay: 10000,
    headIcon: (
      <span className="material-icons-outlined text-secondary">
        hourglass_top
      </span>
    ),
  });

  // code your handle functions below ...
  const getDataBookings = async () => {
    await axios
      .get(`${process.env.REACT_APP_RESERVAKSIN_API_URL}/booking/nokk/${noKK}`)
      .then(function (response) {
        setDataBookings(
          response?.data?.data?.filter((item) => item?.status !== "booked")
        );
        setToast({
          show: false,
          body: <></>,
          delay: 0,
          headIcon: <></>,
        });
      })
      .catch(function (error) {
        console.log(error);
        setServerError(true);
        setToast({
          show: false,
          body: <></>,
          delay: 0,
          headIcon: <></>,
        });
      });
  };

  const toReservasiVaksin = () => {
    navigate("/my-reservation");
  };

  // execute useEffect below ...
  useEffect(() => {
    getDataBookings();
  }, []);

  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Riwayat Reservasi" />
      {serverError ? (
        <div className="text-center" style={{ marginTop: "6rem" }}>
          <img
            src={Illustration5}
            style={{ position: "relative", right: "1.2rem" }}
            className="img-fluid"
            alt=""
          />
          <p className="mt-3" style={{ color: "#0A508D" }}>
            Mohon maaf, server sedang dalam perbaikan. Mohon kembali lagi nanti
            :))
          </p>
        </div>
      ) : dataBookings?.length !== 0 ? (
        dataBookings?.map((item, idx) => <CardBookings data={item} key={idx} />)
      ) : (
        <div className="text-center" style={{ marginTop: "6rem" }}>
          <img src={Illustration6} className="img-fluid" alt="" />
          <p className="mt-4" style={{ color: "#0A508D" }}>
            Riwayat reservasi vaksin anda kosong :)
          </p>
          <button
            className="btn btn-primary w-100 shadow"
            onClick={toReservasiVaksin}
          >
            Cek Jadwal Reservasi Anda
          </button>
        </div>
      )}
      <CustomToast toast={toast} setToast={setToast} />
    </div>
  );
}
