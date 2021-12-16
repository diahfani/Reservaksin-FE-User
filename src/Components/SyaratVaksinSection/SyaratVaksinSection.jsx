import React from "react";
import Illustrations2 from "../../Assets/Images/illustration-2.svg";
import "./SyaratVaksinSection.scss";
import data from "./static.json";
import NoteCard from "Components/NoteCard/NoteCard";

export default function SyaratVaksinSection() {
  return (
    <section className="syarat-vaksin container py-5">
      <div className="d-flex flex-column justify-content-center">
        <h1>
          Syarat Penerima <br /> Vaksin COVID-19
        </h1>
        <p>
          Berdasarkan peraturan menteri kesehatan republik indonesia nomor 10
          tahun 2021 tentang pelaksanaan vaksinasi dalam rangka penanggulangan
          pandemi corona virus disease 2019 (COVID-19)
        </p>
        <img className="mx-auto mt-3" src={Illustrations2} alt="" />
        <div className="my-3 mx-auto">
          {data.syaratVaksin.map((item, idx) => (
            <p className="d-flex my-2" key={idx}>
              <span
                className="material-icons pe-2"
                style={{ color: "#0FC522" }}
              >
                check_circle
              </span>
              <span style={{ color: "#0A3E66" }}>{item}</span>
            </p>
          ))}
        </div>
        <NoteCard data={data.noteSyaratVaksin} />
      </div>
    </section>
  );
}
