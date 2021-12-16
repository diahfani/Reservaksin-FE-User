import NoteCard from "Components/NoteCard/NoteCard";
import React from "react";
import Illustrations3 from "../../Assets/Images/illustration-3.svg";
import "./EfekVaksinSection.scss";
import data from "./static.json";

export default function EfekVaksinSection() {
  const { noteEfekVaskin } = data;

  return (
    <section className="efek-vaksin container py-5">
      <div className="d-flex flex-column justify-content-center">
        <h1>
          Efek Samping <br /> Vaksin COVID-19
        </h1>
        <img
          className="mx-auto mt-5"
          src={Illustrations3}
          alt=""
        />
        <p className="mt-5">
          Efek samping vaksin COVID-19 bermacam-macam dan tidak selalu muncul
          pada setiap orang. Jika muncul, biasanya hanya bersifat ringan dan
          sementara sebagai tanda antibodi dalam tubuh sedang bekerja
          <br />
          <br />
          Manfaat vaksin dalam melindungi tubuh pun leboh besar daripada efek
          samping yang diberikan.
        </p>

        <NoteCard borderColor="white" data={noteEfekVaskin} textColor="white"></NoteCard>
      </div>
    </section>
  );
}
