import React, { useState, useEffect } from "react";
import CardFamily from "../../Components/CardFamily/CardFamily";
import BackButton from "../../Components/BackButton/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function FamilyMemberPage() {
  // declare new state or new variable below ...
  const noKK = "3603222340870003";
  const [listAnggota, setListAnggota] = useState([]);
  const navigate = useNavigate();

  // code your handle functions below ...
  const fetchListAnggota = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/family?nokk=${noKK}`
      )
      .then((response) =>
        setListAnggota(
          response?.data?.data?.filter((item) => item.role === "anggota")
        )
      )
      .catch((error) => console.log(error));
  };

  // execute useEffect below ...
  useEffect(() => {
    fetchListAnggota();
  }, []);

  return (
    <div className="container py-4 page-wrapper d-flex flex-column justify-content-between">
      <div>
        <BackButton title="Anggota Keluarga" />
        <section className="d-flex flex-column h-100 justify-content-between py-3 fam-content">
          {listAnggota?.map((item) => (
            <CardFamily key={item.id} data={item} />
          ))}
        </section>
      </div>
      <button
        className="btn btn-primary w-100"
        onClick={() => navigate("/family-member/add")}
      >
        Tambah Anggota
      </button>
    </div>
  );
}
