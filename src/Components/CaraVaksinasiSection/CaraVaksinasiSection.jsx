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
          className="d-flex flex-wrap w-100 mt-5"
          style={{ columnGap: "4%", rowGap: "1rem" }}
        >
          {tataCara.map((item, key) => (
            <div
              key={key}
              className="d-flex flex-column justify-content-between"
              style={{
                border: "1px solid #4986CB",
                borderRadius: "5px",
                width: "48%",
                padding: "10px",
                color: "#0A3E66",
              }}
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
