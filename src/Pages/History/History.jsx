import React from "react";
import Card from "../../Components/CardHistory/Card";
import { DataHistory } from "./StaticData";
import BackButton from "../../Components/BackButton/BackButton";

function History(props) {
  return (
    <div className="container page-wrapper">
      <br />
      <BackButton title="Reservastion History" />
      {DataHistory.map((item, idx) => (
        <Card data={item} key={idx} />
      ))}
    </div>
  );
}

export default History;
