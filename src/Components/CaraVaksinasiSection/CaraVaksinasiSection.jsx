import React from "react";
import "./CaraVaksinasiSection.scss";
import data from "./static.json";

export default function CaraVaksinasiSection() {
  const { tataCara } = data;
  return (
    <section className="cara-vaksinasi container py-5">
      <div className="d-flex flex-column justify-content-center">
        <h1>
          Tata Cara Reservasi <br /> Vaksinasi COVID-19
        </h1>
        <div
          className="list-syarat d-flex flex-wrap w-100 mt-5"
        >
          {tataCara.map((item, key) => (
            <div
              key={key}
              className="list-syarat-card d-flex flex-column justify-content-between"
            >
              <div>
                <h4>{item.no}</h4>
                <p>{item.desc}</p>
              </div>
              <p className="m-0">
                <span className="material-icons-outlined">{item.icon}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
