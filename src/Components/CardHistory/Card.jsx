import React from "react";
import "./Card.css";

function Card({ data }) {
  let classStatus = "";
  switch (data.status) {
    case "Menunggu":
      classStatus = "st-waiting";
      break;
    case "Batal":
      classStatus = "st-cancel";
      break;
    default:
      classStatus = "st-done";
  }
  return (
    <div className="card mb-3 mt-4 card-hist-wrapper">
      <div className="card-body">
        <span className={`text-status ${classStatus}`}>{data.status}</span>
        <p className="text-reservasi">Reservasi Vaksin</p>
        <h4 className="card-title text-hist-name">{data.nama}</h4>
        <h5 className="text-hist-loc">{data.lokasi}</h5>
        <table className="table table-borderless">
          <tbody className="text-hist-detail">
            <tr>
              <td>{data.tanggal}</td>
              <td>Jam {data.waktu}</td>
            </tr>
            <tr>
              <td>Vaksin: {data.vaksin}</td>
              <td>Dosis: {data.dosis}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Card;
