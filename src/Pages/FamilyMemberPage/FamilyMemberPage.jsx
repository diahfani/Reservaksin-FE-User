import React, { useState, useEffect } from "react";
import CardFamily from "../../Components/CardFamily/CardFamily";
import BackButton from "../../Components/BackButton/BackButton";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import CustomToast from "Components/CustomToast/CustomToast";
import { useSelector } from "react-redux";

export default function FamilyMemberPage() {
  // declare new state or new variable below ...
  const { data: dataUser } = useSelector((state) => state.user);
  const [listAnggota, setListAnggota] = useState([]);
  const navigate = useNavigate();
  const [toast, setToast] = useState({
    show: true,
    body: (
      <div className="text-center">
        <div className="spinner-border text-primary" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
        <p style={{ fontSize: "1rem", marginTop: "1rem" }}>
          Mohon tunggu sebentar 
        </p>
      </div>
    ),
    delay: 10000,
    headIcon: (
      <span className="material-icons-outlined text-secondary">
        hourglass_top
      </span>
    ),
  });

  // code your handle functions below ...
  const fetchListAnggota = async () => {
    await axios
      .get(
        `${process.env.REACT_APP_RESERVAKSIN_API_URL}/citizen/family?nokk=${dataUser?.nokk}`
      )
      .then((response) => {
        setToast({
          show: false,
          body: <></>,
          delay: 0,
          headIcon: <></>,
        });
        setListAnggota(
          response?.data?.data?.filter((item) => item.role === "anggota")
        );
      })
      .catch((error) => console.log(error));
  };

  // execute useEffect below ...
  useEffect(() => {
    fetchListAnggota();
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
      <CustomToast toast={toast} setToast={setToast} />
    </div>
  );
}
