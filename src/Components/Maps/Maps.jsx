import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import markerIconPng from "Assets/hospital-marker.png";
import { Icon } from "leaflet";

import MapsMarker from "./MapsMarker";
import LeafletControlGeocoder from "./LeafletControlGeocode";

function ZoomTracker({ setZoom }) {
  const map = useMapEvents({
    zoom() {
      setZoom(map.getZoom());
    },
  });
  return null;
}

export default function Maps({ position, setPosition, placeMarkData }) {
  const [zoom, setZoom] = useState(15);
  const [map, setMap] = useState(null);

  const getCurrentCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });
    setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    map.flyTo({ lat: pos.coords.latitude, lng: pos.coords.longitude });
  };

  return position?.lat ? (
    <>
      <MapContainer
        center={{ lat: -6.1753942, lng: 106.827183 }}
        zoom={15}
        style={{ height: "40rem", width: "100wh" }}
        whenCreated={setMap}
      >
        <ZoomTracker setZoom={setZoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        ></TileLayer>
        <MapsMarker position={position} setPosition={setPosition}></MapsMarker>
        {placeMarkData?.map((data, idx) => (
          <StaticMarker
            key={idx}
            position={{ lat: data?.lat, lng: data?.lng }}
            placeName={data?.name_facilities}
            zoom={zoom}
          />
        ))}
        <LeafletControlGeocoder></LeafletControlGeocoder>
      </MapContainer>
      <button className="btn btn-primary w-100 mt-3" onClick={getCurrentCoords}>
        Cek Lokasi Kamu
      </button>
    </>
  ) : (
    <div className="d-flex flex-column align-items-center">
      <div className="spinner-border text-primary" role="status"></div>
      <p className="mt-3">Generate maps ... </p>
    </div>
  );
}

function StaticMarker({ position, placeName, zoom }) {
  return zoom > 10 ? (
    <Marker
      draggable={false}
      position={position}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [34, 49],
        })
      }
    >
      {zoom > 12 ? (
        <Tooltip
          interactive={true}
          permanent={true}
          direction="top"
          offset={[0, -20]}
          opacity={1}
        >
          <a
            href={`https://www.google.com/maps/search/?api=1&query=${position?.lat},${position?.lng}`}
            target={"_blank"}
            rel="noopener noreferrer"
          >
            {placeName}
          </a>
        </Tooltip>
      ) : null}
    </Marker>
  ) : null;
}
