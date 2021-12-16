import NoteCard from "Components/NoteCard/NoteCard";
import React, { useState } from "react";
import data from "./static.json";
import "./KriteriaVaksinSection.scss";

export default function KriteriaVaksinSection() {
  const [vaksin, setVaksin] = useState("sinovac");
  const { dataVaksin, noteKriteriaVaksin } = data;

  return (
    <section className="kriteria-vaksin container py-5">
      <div className="d-flex flex-column justify-content-center">
        <h1>
          Syarat dan Kriteria <br /> Sesuai Jenis Vaksin
        </h1>
        <p>
          Setiap jenis vaksin memilki tingkat efikasi dan keamanan tersendiri.
          berikut adalah kriteria sasaran utama penerima vaksinasi COVID-19
          berdasarkan jenis vaksin
        </p>
        <div>
          <label className="text-light mt-4 mb-2">Jenis Vaksin</label>
          <select
            className="form-select"
            value={vaksin}
            onChange={(e) => setVaksin(e.target.value)}
          >
            <option value="sinovac">Sinovac</option>
            <option value="astraZeneca">AstraZeneca</option>
            <option value="moderna">Moderna</option>
            <option value="pfizer">Pfizer</option>
          </select>
          <div className="mt-3">
            <table className={`${vaksin}`} style={{ fontSize: "14px" }}>
              <tbody>
                {Object.entries(dataVaksin[vaksin]).map(
                  ([key, value], idx) =>
                    !Array.isArray(value) && (
                      <tr key={idx}>
                        <th>{key}</th>
                        <td>{value}</td>
                      </tr>
                    )
                )}
                {dataVaksin[vaksin].dosis.map((item) =>
                  Object.entries(item).map(([key, value], idx) => (
                    <tr key={idx}>
                      <th>{key}</th>
                      <td>{value}</td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
        <NoteCard
          data={noteKriteriaVaksin}
          borderColor="white"
          textColor="white"
        />
      </div>
    </section>
  );
}
