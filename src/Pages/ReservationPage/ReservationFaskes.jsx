import BackButton from "Components/BackButton/BackButton";
import React, { useEffect, useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import Illustration5 from "Assets/Images/illustration-5.svg";
import Illustration6 from "Assets/Images/illustration-6.svg";

export default function ReservationFaskes() {
  const [searchParams] = useSearchParams();
  const [dataFaskes, setDataFaskes] = useState(null);
  const [serverError, setServerError] = useState(null);
  const curLoc = Object.fromEntries([...searchParams]);

  const getHealthFacilitiesByLatLng = async () => {
    await fetch(
      `${process.env.REACT_APP_LOCAL_API}/session/nearest-facilities?lat=${curLoc?.lat}&lng=${curLoc?.lng}`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => setDataFaskes(JSON.parse(result).data))
      .catch((error) => setServerError(true));
  };

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
                nanti :))
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
  return (
    <Link
      className="text-decoration-none"
      to={"/reservasi/faskes/" + props?.id}
    >
      <div className="w-100 mb-3 rounded border p-3">
        <div className="d-flex justify-content-between align-items-center">
          <div>
            <h6 style={{ fontSize: "1.2rem" }}>{props?.title}</h6>
            <p className="m-0" style={{ fontSize: "0.9rem" }}>
              Jarak Lokasi {(props?.distance).toFixed(2)} Km
            </p>
          </div>
          <div>
            <span
              className="material-icons-outlined"
              style={{ fontSize: "35px" }}
            >
              navigate_next
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
