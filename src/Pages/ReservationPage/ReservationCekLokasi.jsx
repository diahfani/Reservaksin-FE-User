import React, { useState, useEffect } from "react";
import { useNavigate, createSearchParams } from "react-router-dom";
// import Geocode from "react-geocode";

import Maps from "Components/Maps/Maps";
import BackButton from "Components/BackButton/BackButton";
// import axios from "axios";

export default function ReservationCekLokasi() {
  // declare new state or new variable below ...
  // Geocode.setApiKey(process.env.REACT_APP_GMAPS_GEOCODE_API_KEY);
  const [curLoc, setCurLoc] = useState({ lat: -6.1753942, lng: 106.827183 });
  // const [curLoc, setCurLoc] = useState(null);
  // const [address, setAddress] = useState("");
  const [dataFaskes, setdataFaskes] = useState([]);
  const navigate = useNavigate();

  // code your handle functions below ...
  const goToPilihFaskes = () =>
    navigate({
      pathname: "/reservasi/pilih-faskes",
      search: `?${createSearchParams(curLoc)}`,
    });

  const getHealthFacilitiesLoc = async () => {
    await fetch(
      `${process.env.REACT_APP_RESERVAKSIN_API_URL}/health-facilities/maps-place`,
      { method: "GET" }
    )
      .then((response) => response.text())
      .then((result) => setdataFaskes(JSON.parse(result).data))
      .catch((error) => console.log(error));
  };

  const geocodeReverseLatLng = async () => {
    // /* googleMaps geocode API, with package geocode */
    //     Geocode.fromLatLng(curLoc?.lat, curLoc?.lng).then(
    //       (response) => {
    //         const address = response.results[0].formatted_address;
    //         setAddress(address);
    //       },
    //       (error) => {
    //         console.log(error);
    //       }
    //     );
    // /* nominatim API */
    // await axios
    //   .get(
    //     `https://nominatim.openstreetmap.org/reverse?format=json&lat=${curLoc.lat}&lon=${curLoc.lng}&zoom=20&addressdetails=1`
    //   )
    //   .then((response) => setAddress(response.data))
    //   .catch((error) => console.log(error));
  };

  // execute useEffect below ...
  /* useEffect geocoding, convert lat lng to address */
  useEffect(() => {
    if (curLoc != null) {
      geocodeReverseLatLng();
    }
  }, [curLoc]);

  /* useEffect get healt facilities data from Rest-API, for render marker to the map */
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
        {/* <div
          className="border mt-2 px-3 py-2"
          style={{ height: "5rem", padding: "1rem", overflow: "auto" }}
        >
          {address}
        </div> */}
      </div>
      <button
        className={`mt-5 btn btn-primary w-100 ${curLoc ? null : "disabled"}`}
        onClick={goToPilihFaskes}
      >
        Lanjut
      </button>
    </div>
  );
}
