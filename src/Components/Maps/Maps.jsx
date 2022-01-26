import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Tooltip,
  useMapEvents,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Toaster } from "react-hot-toast";
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

  const getCoords = async () => {
    const pos = await new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(resolve, reject);
    });

    setPosition({ lat: pos.coords.latitude, lng: pos.coords.longitude });
    return {
      long: pos.coords.longitude,
      lat: pos.coords.latitude,
    };
  };

  useEffect(() => {
    getCoords();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return position?.lat ? (
    <MapContainer
      center={{ lat: position?.lat, lng: position?.lng }}
      zoom={15}
      style={{ height: "40rem", width: "100wh" }}
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
  ) : (
    <>
      <Toaster />
      <div className="d-flex flex-column align-items-center">
        <div className="spinner-border text-primary" role="status"></div>
        <p className="mt-3">Generate maps ... </p>
        <p>Mohon Nyalakan GPS Kemudian Refresh</p>
      </div>
    </>
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
      {zoom > 13 ? (
        <Tooltip permanent={true} direction="top" offset={[0, -20]} opacity={1}>
          {placeName}
        </Tooltip>
      ) : null}
    </Marker>
  ) : null;
}
