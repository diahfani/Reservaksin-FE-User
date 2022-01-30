import React from "react";
import dayjs from "dayjs";
import "dayjs/locale/id";
import { CustomUTC } from "Utilities/utils";

export default function CardFaskes({ sessionData }) {
  return (
    <div
      className="border rounded-3 px-3 py-4 shadow-sm"
      style={{ background: "#E0EAF6", color: "#160D9A" }}
    >
      <h3 className="mb-3">
        {sessionData?.health_facilities?.name_facilities}
      </h3>
      <p className="m-0" style={{ fontSize: "0.9rem" }}>
        {sessionData?.health_facilities?.current_Address?.alamat}{" "}
        {sessionData?.health_facilities?.current_Address?.kelurahan}{" "}
        {sessionData?.health_facilities?.current_Address?.kecamatan}{" "}
        {sessionData?.health_facilities?.current_Address?.kota}{" "}
        {sessionData?.health_facilities?.current_Address?.provinsi}{" "}
      </p>
      <small>
        No. Telp <b>{sessionData?.health_facilities?.no_telp}</b>
      </small>
      <a
        className="nav-link p-0 mt-2"
        href={`
        https://www.google.com/maps/search/?api=1&query=${sessionData?.health_facilities?.current_Address?.lat},${sessionData?.health_facilities?.current_Address?.lng}`}
        target={"_blank"}
      >
        Cek Lokasi di Google Maps
      </a>
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
          {dayjs(CustomUTC(sessionData?.start_session))
            .locale("id")
            .format("D MMMM")}
          {dayjs(CustomUTC(sessionData?.start_session))
            .locale("id")
            .format("D MMMM YYYY") ===
          dayjs(CustomUTC(sessionData?.end_session))
            .locale("id")
            .format("D MMMM YYYY")
            ? null
            : " - " +
              dayjs(CustomUTC(sessionData?.end_session))
                .locale("id")
                .format("D MMMM")}
          {" " +
            dayjs(CustomUTC(sessionData?.start_session))
              .locale("id")
              .format("YYYY")}
        </b>
      </p>
      <p>
        <b>
          Jam
          {" " +
            dayjs(CustomUTC(sessionData?.start_session))
              .locale("id")
              .format("HH:mm") +
            " - " +
            dayjs(CustomUTC(sessionData?.end_session))
              .locale("id")
              .format("HH:mm")}
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
