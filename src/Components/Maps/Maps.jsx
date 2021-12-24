import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import useGeolocation from "react-hook-geolocation";
import MapsMarker from "./MapsMarker";

export default function Maps() {
  const geolocation = useGeolocation({
    enableHighAccuracy: true,
    timeout: 0,
    maximumAge: 0,
  });

  const [curLoc, setCurLoc] = useState(null);

  useEffect(() => {
    if (geolocation) {
      setCurLoc({ lat: geolocation.latitude, lng: geolocation.longitude });
    }
  }, [geolocation]);

  return curLoc?.lat ? (
    <MapContainer
      center={{ lat: curLoc?.lat, lng: curLoc?.lng }}
      zoom={15}
      style={{ height: "500px", width: "100wh" }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      ></TileLayer>
      <MapsMarker position={curLoc}></MapsMarker>
    </MapContainer>
  ) : null;
}
