import BackButton from "Components/BackButton/BackButton";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./ReservationDetails.scss";
import { useLocation } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";
import axios from "axios";
import CustomToast from "Components/CustomToast/CustomToast";
import { CustomUTC } from "Utilities/utils";

export default function ReservationDetails() {
  // declare new state or new variables below ...
  const { state } = useLocation();
  const { dataBooking } = state;
  const [toast, setToast] = useState({
    show: false,
    body: <></>,
    delay: 0,
    headIcon: <></>,
  });
  const navigate = useNavigate();

  // code your handle functions below ...
  const cancelToAPI = async () => {
    await axios
      .patch(
        `${process.env.REACT_APP_RESERVAKSIN_API_URL}/booking/status/${dataBooking?.booking_id}`,
        {
          status: "canceled",
        }
      )
      .then(function () {
        navigate(-1);
      })
      .catch(function (error) {
        console.log(error);
        setToast({
          show: true,
          body: (
            <div className="text-center">
              <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
                Gagal cancel booking vaksinasi
              </p>
            </div>
          ),
          delay: 1000,
          headIcon: (
            <span className="material-icons-outlined text-danger">error</span>
          ),
        });
      });
  };

  const handleCancel = async () => {
    setToast({
      show: true,
      body: (
        <div className="text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
          <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
            Proses cancel booking vaksinasi
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
    await cancelToAPI();
  };

  return (
    <div className="detail-booking container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Tiket Vaksinasi" />
        <br />
        <div
          className="vaccine-ticket text-center shadow"
          style={{ backgroundColor: "#ECF2FA" }}
        >
          <div className="details-ticket">
            <h5>
              <b>{dataBooking?.citizen?.fullname}</b>
            </h5>
            <p>
              <span>NIK. </span>
              {dataBooking?.citizen?.nik}
            </p>
          </div>
          <div className="details-ticket">
            <p>Kode Reservasi</p>
            <h2>{dataBooking?.booking_id?.toUpperCase()}</h2>
            <small>
              {dayjs(CustomUTC(dataBooking?.created_at))
                .locale("id")
                .format("dddd, DD MMMM YYYY, HH:mm")}
            </small>
            <p className="pt-2">Informasi Booking</p>
            <h6>No. antrian: {dataBooking?.nomor_antrian}</h6>
            <small>{dataBooking?.session?.name_session}</small>
            <h5>{dataBooking?.session?.vaccine?.nama_vaksin}</h5>
          </div>
          <div className="details-ticket">
            <p>Jadwal & Lokasi Vaksinasi</p>
            <h6 className="mt-2">
              {dataBooking?.session?.health_facilities?.name_facilities}
            </h6>
            <small>
              {`${dayjs(CustomUTC(dataBooking?.date))
                .locale("id")
                .format("dddd, DD MMMM YYYY")}, 
                ${dayjs(CustomUTC(dataBooking?.session?.start_session))
                  .locale("id")
                  .format("HH:mm")} -
                  ${dayjs(CustomUTC(dataBooking?.session?.end_session))
                    .locale("id")
                    .format("HH:mm")}`}
            </small>
            <p className="pt-1" style={{ fontSize: "0.85rem" }}>{`
            ${dataBooking?.session?.health_facilities?.current_Address?.alamat}, 
            ${dataBooking?.session?.health_facilities?.current_Address?.kelurahan}, 
            ${dataBooking?.session?.health_facilities?.current_Address?.kecamatan}, 
            ${dataBooking?.session?.health_facilities?.current_Address?.kota}, 
            ${dataBooking?.session?.health_facilities?.current_Address?.provinsi}
            `}</p>
            <small>{dataBooking?.session?.health_facilities?.no_telp}</small>
          </div>
        </div>
      </div>
      <button
        className={`btn btn-danger w-100 shadow ${
          dataBooking?.status === "canceled" ? "disabled" : null
        }`}
        onClick={() => handleCancel()}
      >
        Batalkan Reservasi
      </button>
      <CustomToast toast={toast} setToast={setToast}></CustomToast>
    </div>
  );
}
