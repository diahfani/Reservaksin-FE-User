import BackButton from "Components/BackButton/BackButton";
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Illustration5 from "Assets/Images/illustration-5.svg";
import Illustration6 from "Assets/Images/illustration-6.svg";
import dayjs from "dayjs";
import { CustomUTC } from "Utilities/utils";
import { KuotaProgressBar } from "Components/KuotaProgressBar/KuotaProgressBar";

export default function ReservationFaskes() {
  // declare new state or new variable below ...
  const [searchParams] = useSearchParams();
  const [dataFaskes, setDataFaskes] = useState(null);
  const [serverError, setServerError] = useState(null);
  const curLoc = Object.fromEntries([...searchParams]);

  // code your handle functions below ...
  const getHealthFacilitiesByLatLng = async () => {
    await fetch(
      `${process.env.REACT_APP_RESERVAKSIN_API_URL}/session/nearest-facilities?lat=${curLoc?.lat}&lng=${curLoc?.lng}`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => setDataFaskes(JSON.parse(result).data))
      .catch((error) => setServerError(true));
  };

  // execute useEffect below ...
  useEffect(() => {
    getHealthFacilitiesByLatLng();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Faskes Terdekat" />
      <div className="pt-4">
        <p className="text-center">
          Silahkan pilih fasilitas kesehatan terdekat yang sedang mengadakan
          program vaksinasi
        </p>
        <div>
          {serverError ? (
            <div className="text-center" style={{ marginTop: "6rem" }}>
              <img
                src={Illustration5}
                style={{ position: "relative", right: "1.2rem" }}
                className="img-fluid"
                alt=""
              />
              <p className="mt-3" style={{ color: "#0A508D" }}>
                Mohon maaf, server sedang dalam perbaikan. Mohon kembali lagi
                nanti 
              </p>
            </div>
          ) : dataFaskes ? (
            dataFaskes.length !== 0 ? (
              dataFaskes.map((item, idx) => (
                <FaskesItem
                  key={idx}
                  id={item?.session?.id}
                  title={item?.session?.health_facilities?.name_facilities}
                  distance={item?.distance}
                  data={item}
                ></FaskesItem>
              ))
            ) : (
              <div className="text-center" style={{ marginTop: "6rem" }}>
                <img src={Illustration6} className="img-fluid" alt="" />
                <p className="mt-4" style={{ color: "#0A508D" }}>
                  Maaf, belum tersedia program vaksinasi di dekat wilayah anda
                </p>
              </div>
            )
          ) : (
            <div
              className="d-flex flex-column align-items-center"
              style={{ marginTop: "15rem" }}
            >
              <div className="spinner-border text-primary" role="status"></div>
              <p className="mt-3">Sedang mencari program vaksinasi terdekat</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

function FaskesItem(props) {
  const navigate = useNavigate();
  const toDetailSession = () => {
    navigate(`/reservasi/faskes/${props?.id}`, {
      state: { dataSession: props?.data?.session },
    });
  };

  return (
    <div
      className={`faskes-item w-100 mb-3 rounded border p-3 shadow-sm ${
        props?.data?.session?.capacity -
          props?.data?.session?.capacity_fulfilled ===
        0
          ? "disabled-item"
          : null
      }`}
      onClick={
        props?.data?.session?.capacity -
          props?.data?.session?.capacity_fulfilled ===
        0
          ? null
          : toDetailSession
      }
    >
      <h6 style={{ fontSize: "1.2rem" }}>{props?.title}</h6>
      <p className="m-0" style={{ fontSize: "0.9rem" }}>
        Jarak Lokasi {(props?.distance).toFixed(2)} Km
      </p>
      <table className="table table-borderless mt-2" style={{ padding: 0 }}>
        <tbody>
          <tr>
            <td>
              <small className="p-0 m-0">Tanggal Pelaksanaan</small>
            </td>
            <td>
              <small className="p-0 m-0">Jenis Vaksin</small>
            </td>
          </tr>
          <tr>
            <td>
              <small className="m-0 p-0">
                <b>
                  {dayjs(CustomUTC(props?.data?.session?.date))
                    .locale("id")
                    .format("DD MMMM YYYY")}
                </b>
              </small>
            </td>
            <td>
              <small className="p-0 m-0">
                <b>{props?.data?.session?.vaccine?.nama_vaksin}</b>
              </small>
            </td>
          </tr>
        </tbody>
      </table>
      <small>
        <b>
          Sisa Kuota{" "}
          {props?.data?.session?.capacity -
            props?.data?.session?.capacity_fulfilled}
          /{props?.data?.session?.capacity}
        </b>
      </small>
      <KuotaProgressBar
        capacity={props?.data?.session?.capacity}
        fulfilled={props?.data?.session?.capacity_fulfilled}
      ></KuotaProgressBar>
    </div>
  );
}
