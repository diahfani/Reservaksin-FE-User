import BackButton from "Components/BackButton/BackButton";
import React from "react";
import { Link, useParams } from "react-router-dom";
// import { useParams } from 'react-router-dom'

export default function ReservationFaskes() {
  const { id } = useParams()
  const faskes = [
    {
      id: 1,
      namaFaskes: "RS. Karya Medika",
    },
    {
      id: 2,
      namaFaskes: "Siloam Hospital",
    },
    {
      id: 3,
      namaFaskes: "Omni International Hospital",
    },
    {
      id: 4,
      namaFaskes: "RS. Bethesda",
    },
    {
      id: 5,
      namaFaskes: "RS. Mentari",
    },
    {
      id: 6,
      namaFaskes: "Puskesmas Bojong Gede",
    },
  ];

  return (
    <div className="container py-4 page-wrapper">
      <BackButton title="Faskes Terdekat" />
      <div className="pt-4">
        <p className="text-center">
          Silahkan pilih fasilitas kesehatan yang terdekat
        </p>
        <div>
          {faskes.map((item, idx) => (
            <FaskesItem
              key={idx}
              id={item.id}
              title={item.namaFaskes}
            ></FaskesItem>
          ))}
        </div>
      </div>
    </div>
  );
}

function FaskesItem(props) {
  return (
    <Link className="text-decoration-none" to={"/reservasi/faskes/" + props.id}>
      <div className="w-100 mb-3 rounded border p-3 d-flex justify-content-between align-items-center">
        <h6 className="m-0">{props.title}</h6>
        <div>
          <span className="material-icons-outlined">navigate_next</span>
        </div>
      </div>
    </Link>
  );
}
