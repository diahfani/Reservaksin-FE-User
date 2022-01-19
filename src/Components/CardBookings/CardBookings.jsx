import React from "react";
import "./Card.css";
import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import "dayjs/locale/id";

export default function CardBookings({ data }) {
  const navigate = useNavigate();
  let classStatus = "";
  switch (data.status.toLowerCase()) {
    case "booked":
      classStatus = "st-waiting";
      break;
    case "canceled":
      classStatus = "st-cancel";
      break;
    default:
      classStatus = "st-done";
  }

  const navigateToBookingDetails = () => {
    navigate(`/reservation-details/${data?.booking_id}`, {
      state: { dataBooking: data },
    });
  };

  return (
    <div
      className="card-bookings card mb-3 mt-4 card-hist-wrapper shadow-sm"
      onClick={() => navigateToBookingDetails()}
    >
      <div className="card-body">
        <span className={`text-status ${classStatus}`}>
          {data?.status?.toUpperCase()}
        </span>
        <p className="text-reservasi">Reservasi Vaksin</p>
        <h4 className="card-title text-hist-name">{data?.citizen?.fullname}</h4>
        <h5 className="text-hist-loc">
          {data?.session?.health_facilities?.name_facilities}
        </h5>
        <table className="table table-borderless">
          <tbody className="text-hist-detail">
            <tr>
              <td>
                {dayjs(data?.session?.date)
                  .locale("id")
                  .format("dddd, DD MMMM YYYY")}
              </td>
              <td>
                Jam {dayjs(data?.session_time).locale("id").format("HH:mm")}
              </td>
            </tr>
            <tr>
              <td>Vaksin: {data?.session?.vaccine?.nama_vaksin}</td>
              <td>Dosis: {data?.session?.tahap}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
