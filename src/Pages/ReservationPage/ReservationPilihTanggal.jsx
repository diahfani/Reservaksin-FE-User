import BackButton from "Components/BackButton/BackButton";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";

export default function ReservasitionPilihTanggal() {
  const { sessionID } = useParams();
  const [sessionData, setSessionData] = useState({});

  const getSessionDetails = async () => {
    fetch(`${process.env.REACT_APP_LOCAL_API}/session/${sessionID}`, {
      method: "GET",
    })
      .then((response) => response.text())
      .then((result) => setSessionData(JSON.parse(result).data))
      .catch((error) => console.log("error", error));
  };

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
            <div className="my-3">
              <label className="form-label">Tanggal Vaksin</label>
              <input
                required
                className="form-control"
                type="date"
                name="tangalVaksin"
                id=""
                min={dayjs(sessionData?.start_session)
                  .locale("id")
                  .format("YYYY-MM-DD")}
                max={dayjs(sessionData?.start_session)
                  .locale("id")
                  .format("YYYY-MM-DD")}
              />
            </div>
            <div className="my-3">
              <label className="form-label">Jam Vaksin</label>
              <input
                className="form-control"
                type="time"
                name="jamVaksin"
                id=""
              />
            </div>
          </form>
        </div>
      </div>
      <Link to="/reservasi-berhasil">
        <button className="btn btn-primary w-100 mt-5">Simpan</button>
      </Link>
    </div>
  );
}

function CardFaskes({ sessionData }) {
  return (
    <div
      className="border rounded px-3 py-4"
      style={{ background: "#E0EAF6", color: "#160D9A" }}
    >
      <h3 className="mb-3">
        {sessionData?.health_facilities?.name_facilities}
      </h3>
      <p style={{ fontSize: "0.9rem" }}>
        {sessionData?.health_facilities?.current_Address?.alamat}{" "}
        {sessionData?.health_facilities?.current_Address?.kelurahan}{" "}
        {sessionData?.health_facilities?.current_Address?.kecamatan}{" "}
        {sessionData?.health_facilities?.current_Address?.kota}{" "}
        {sessionData?.health_facilities?.current_Address?.provinsi}{" "}
      </p>
      <p>No. Telp {sessionData?.health_facilities?.no_telp}</p>
      <hr
        style={{
          borderTop: "1.6px dashed",
          opacity: 1,
          backgroundColor: "ActiveBorder",
          height: 0,
        }}
      />
      <small>Nama Program</small>
      <h5>{sessionData?.name_session}</h5>
      <small>Tanggal Pelaksanaan</small>
      <p className="m-0">
        <b>
          {dayjs(sessionData?.start_session).locale("id").format("D MMMM")}
          {dayjs(sessionData?.start_session)
            .locale("id")
            .format("D MMMM YYYY") ===
          dayjs(sessionData?.end_session).locale("id").format("D MMMM YYYY")
            ? null
            : " - " +
              dayjs(sessionData?.end_session).locale("id").format("D MMMM")}
          {" " + dayjs(sessionData?.start_session).locale("id").format("YYYY")}
        </b>
      </p>
      <p>
        <b>
          Jam
          {" " +
            dayjs(sessionData?.start_session).locale("id").format("HH:mm") +
            " - " +
            dayjs(sessionData?.end_session).locale("id").format("HH:mm")}
        </b>
      </p>
      <small>Vaksin yang tersedia</small>
      <p className="m-0">
        <b>{sessionData?.vaccine?.nama_vaksin}</b>
      </p>
      <small>Kapasitas</small>
      <p className="m-0">
        <b>{sessionData?.capacity}</b>
      </p>
    </div>
  );
}
