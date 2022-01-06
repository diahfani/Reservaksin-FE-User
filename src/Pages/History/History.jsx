import React from "react";
import Card from "../../Components/CardHistory/Card";
import { DataHistory } from "./StaticData";
import BackButton from "../../Components/BackButton/BackButton";

function History(props) {
  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Reservastion History" />
      {DataHistory.map((item, idx) => (
        <Card data={item} key={idx} />
      ))}
    </div>
  );
}

export default History;
