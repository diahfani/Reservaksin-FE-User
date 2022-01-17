import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
import Geocode from "react-geocode";

import Maps from "Components/Maps/Maps";
import BackButton from "Components/BackButton/BackButton";

export default function ReservationCekLokasi() {
  Geocode.setApiKey(process.env.REACT_APP_GMAPS_GEOCODE_API_KEY);
  // const [curLoc, setCurLoc] = useState({ lat: -6.1753942, lng: 106.827183 });
  const [curLoc, setCurLoc] = useState(null);
  const [address, setAddress] = useState("");
  const [dataFaskes, setdataFaskes] = useState([]);
  const navigate = useNavigate();

  const goToPilihFaskes = () =>
    navigate({
      pathname: "/reservasi/pilih-faskes",
      search: `?${createSearchParams(curLoc)}`,
    });

  const getHealthFacilitiesLoc = async () => {
    await fetch(
      `${process.env.REACT_APP_LOCAL_API}/health-facilities/maps-place`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => setdataFaskes(JSON.parse(result).data))
      .catch((error) =>
        console.log("error, gagal fetching data lokasi faskes")
      );
  };

  useEffect(() => {
    if (curLoc != null) {
      Geocode.fromLatLng(curLoc?.lat, curLoc?.lng).then(
        (response) => {
          const address = response.results[0].formatted_address;
          setAddress(address);
        },
        (error) => {}
      );
    }
  }, [curLoc]);

  useEffect(() => {
    getHealthFacilitiesLoc();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Cek Lokasi Faskes" />
        <div className="row mt-3"></div>
        <div className="mt-2">
          <Maps
            position={curLoc}
            setPosition={setCurLoc}
            placeMarkData={dataFaskes}
          />
        </div>
        <div
          className="border mt-2 px-3 py-2"
          style={{ height: "5rem", padding: "1rem", overflow: "auto" }}
        >
          {address}
        </div>
      </div>
      <button className="mt-5 btn btn-primary w-100" onClick={goToPilihFaskes}>
        Simpan
      </button>
    </div>
  );
}
