import React from "react";
import BackButton from "Components/BackButton/BackButton";
import Card from "Components/CardHistory/Card";
import { DataHistory } from "./StaticData";

export default function MyReservation() {
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Reservasi" />
      {DataHistory.map((item, idx) => (
        <Card data={item} key={idx} />
      ))}
    </div>
  );
}
