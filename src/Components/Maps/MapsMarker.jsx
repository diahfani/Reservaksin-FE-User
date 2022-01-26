import React, { useMemo, useRef } from "react";
import markerIconPng from "leaflet/dist/images/marker-icon.png";
import { Marker, Popup, useMapEvents } from "react-leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/leaflet.css";

export default function MapsMarker({ position, setPosition }) {
  const markerRef = useRef(null);
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current;
        if (marker != null) {
          setPosition(marker.getLatLng());
        }
      },
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    []
  );

  useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
  });

  return position !== null ? (
    <Marker
      draggable={true}
      eventHandlers={eventHandlers}
      position={position}
      ref={markerRef}
      icon={
        new Icon({
          iconUrl: markerIconPng,
          iconSize: [25, 41],
        })
      }
    >
      <Popup minWidth={90}>
        <span>
          lat: {position?.lat}, lng: {position?.lng}
        </span>
      </Popup>
    </Marker>
  ) : null;
}
