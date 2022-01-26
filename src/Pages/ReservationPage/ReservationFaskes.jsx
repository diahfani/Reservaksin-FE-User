import BackButton from "Components/BackButton/BackButton";
// import React from "react";
// import { Link, useParams } from "react-router-dom";
// // import { useParams } from 'react-router-dom'

// export default function ReservationFaskes() {
//   const { id } = useParams()
//   const faskes = [
//     {
//       id: 1,
//       namaFaskes: "RS. Karya Medika",
//     },
//     {
//       id: 2,
//       namaFaskes: "Siloam Hospital",
//     },
//     {
//       id: 3,
//       namaFaskes: "Omni International Hospital",
//     },
//     {
//       id: 4,
//       namaFaskes: "RS. Bethesda",
//     },
//     {
//       id: 5,
//       namaFaskes: "RS. Mentari",
//     },
//     {
//       id: 6,
//       namaFaskes: "Puskesmas Bojong Gede",
//     },
//   ];
import React, { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import Illustration5 from "Assets/Images/illustration-5.svg";
import Illustration6 from "Assets/Images/illustration-6.svg";
import dayjs from "dayjs";
import { CustomUTC } from "Utilities/utils";

export default function ReservationFaskes() {
  // declare new state or new variable below ...
  const [searchParams] = useSearchParams();
  const [dataFaskes, setDataFaskes] = useState(null);
  const [serverError, setServerError] = useState(null);
  const curLoc = Object.fromEntries([...searchParams]);

  // code your handle functions below ...
  const getHealthFacilitiesByLatLng = async () => {
    await fetch(
      `https://reservaksin-be.herokuapp.com/session/nearest-facilities?lat=${curLoc?.lat}&lng=${curLoc?.lng}`,
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
      className="w-100 mb-3 rounded border p-3 shadow-sm"
      onClick={toDetailSession}
    >
      <div className="d-flex justify-content-between align-items-center">
        <div>
          <h6 style={{ fontSize: "1.2rem" }}>{props?.title}</h6>
          <p className="m-0">
            {dayjs(CustomUTC(props?.data?.session?.date))
              .locale("id")
              .format("DD MMMM YYYY")}
          </p>
          <p>{props?.data?.session?.vaccine?.nama_vaksin}</p>
          <p className="m-0" style={{ fontSize: "0.9rem" }}>
            Jarak Lokasi {(props?.distance).toFixed(2)} Km
          </p>
        </div>
      </div>
    </div>
  );
}
